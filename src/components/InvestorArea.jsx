import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, Terminal as TerminalIcon } from 'lucide-react';

const InvestorArea = ({ isOpen, onClose }) => {
  const [accessCode, setAccessCode] = useState('');
  const [status, setStatus] = useState('idle'); // idle, checking, granted, denied

  const handleAccess = (e) => {
    e.preventDefault();
    if (!accessCode) return;
    
    setStatus('checking');
    setTimeout(() => {
      // Fake logic for demo
      if (accessCode.toLowerCase() === 'openclaw') {
        setStatus('granted');
      } else {
        setStatus('denied');
        setTimeout(() => setStatus('idle'), 2000);
      }
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(10px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem'
          }}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="glass-panel"
            style={{
              width: '100%',
              maxWidth: '500px',
              position: 'relative',
              border: '1px solid var(--accent-orange)',
              boxShadow: '0 0 40px rgba(255, 87, 34, 0.15)'
            }}
          >
            <button 
              onClick={onClose}
              style={{ position: 'absolute', top: '15px', right: '15px', background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
            >
              <X size={24} />
            </button>

            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <Lock size={40} color="var(--accent-orange)" style={{ marginBottom: '1rem' }} />
              <h2 className="mono text-orange" style={{ fontSize: '1.5rem', margin: 0 }}>PORTAL DO INVESTIDOR</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Acesso restrito ao Data Room e projeções financeiras.</p>
            </div>

            {status === 'granted' ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center', padding: '2rem 0' }}>
                <h3 style={{ color: '#4CAF50', marginBottom: '1rem' }}>ACESSO CONCEDIDO</h3>
                <p style={{ color: 'var(--text-muted)' }}>Redirecionando para o ambiente seguro...</p>
              </motion.div>
            ) : (
              <form onSubmit={handleAccess}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label className="mono" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>CÓDIGO DE ACESSO</label>
                  <input 
                    type="password" 
                    value={accessCode}
                    onChange={(e) => setAccessCode(e.target.value)}
                    placeholder="Insira seu token..."
                    className="mono"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      background: 'rgba(0,0,0,0.5)',
                      border: status === 'denied' ? '1px solid #ff3333' : '1px solid var(--border-color)',
                      color: '#fff',
                      borderRadius: '0.5rem',
                      outline: 'none',
                      fontSize: '1rem'
                    }}
                  />
                  {status === 'denied' && <p style={{ color: '#ff3333', fontSize: '0.8rem', marginTop: '0.5rem' }}>Token inválido. Solicite acesso com os fundadores.</p>}
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'checking'}
                  className="btn btn-primary" 
                  style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                >
                  {status === 'checking' ? 'VERIFICANDO CREDENCIAIS...' : 'AUTENTICAR'}
                </button>
              </form>
            )}

            <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Não possui um código?</p>
              <button className="mono" style={{ background: 'transparent', border: 'none', color: 'var(--accent-orange)', cursor: 'pointer', fontSize: '0.8rem', textDecoration: 'underline' }}>
                Solicite uma reunião com os founders
              </button>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InvestorArea;
