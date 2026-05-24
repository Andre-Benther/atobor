import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = ({ openInvestorModal }) => {
  return (
    <section className="hero" style={{ padding: '8rem 0', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hero-content"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="badge mono" style={{ 
              display: 'inline-block', 
              padding: '0.5rem 1rem', 
              borderRadius: '2rem', 
              border: '1px solid var(--accent-orange)', 
              color: 'var(--accent-orange)',
              fontSize: '0.85rem',
              marginBottom: '1.5rem',
              boxShadow: '0 0 10px rgba(255, 87, 34, 0.2)'
            }}>
              [STATUS: ONLINE] // EDGE AI ENABLED
            </motion.div>
            
            <h1 className="text-gradient" style={{ fontSize: '4.5rem', lineHeight: '1.1', letterSpacing: '-2px' }}>
              O seu primeiro agente autônomo físico. <br />
              <motion.span 
                initial={{ textShadow: "0px 0px 0px rgba(255,87,34,0)" }}
                animate={{ textShadow: "0px 0px 30px rgba(255,87,34,0.8)" }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                className="text-orange" style={{ WebkitTextFillColor: 'var(--accent-orange)' }}>
                100% Local.
              </motion.span>
            </h1>
            
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '90%', marginTop: '2rem' }}>
              Conheça o Atobor. Um robô de mesa modular, com casca transparente e IA rodando direto no hardware. 
              Impulsionado pelo OpenClaw, ele não apenas conversa: ele executa tarefas e vê o mundo ao seu redor.
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="hero-actions" style={{ display: 'flex', gap: '1rem' }}
            >
              <button onClick={openInvestorModal} className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                Acessar Área do Investidor <ArrowRight size={20} />
              </button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hero-visual" style={{ position: 'relative' }}
          >
            <div className="glass-panel" style={{ 
              aspectRatio: '1/1', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: 'inset 0 0 50px rgba(255, 87, 34, 0.1)'
            }}>
              <div style={{ textAlign: 'center', zIndex: 1 }}>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{ width: '150px', height: '150px', border: '2px dashed var(--accent-orange)', borderRadius: '50%', margin: '0 auto 2rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <p className="mono text-orange" style={{ fontSize: '0.8rem' }}>ESPAÇO PARA<br/>IMAGEM OFICIAL</p>
                </motion.div>
                <p className="mono" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  A sua foto incrível das 3 unidades modulares<br/>vai brilhar exatamente aqui.
                </p>
              </div>
              
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '70%',
                  height: '70%',
                  background: 'var(--accent-orange)',
                  filter: 'blur(80px)',
                  borderRadius: '50%'
              }}></motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
