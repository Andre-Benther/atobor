import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const PitchDeck = ({ openInvestorModal }) => {
  return (
    <div style={{ position: 'relative', zIndex: 10 }}>
      {/* The Problem */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
      >
        <div className="container">
          <h2 className="text-orange mono" style={{ fontSize: '1.5rem', marginBottom: '1rem', letterSpacing: '2px' }}>01. O PROBLEMA</h2>
          <h3 style={{ fontSize: '4rem', maxWidth: '900px', margin: '0 auto', color: '#fff', lineHeight: '1.2' }}>
            A IA atual está presa na nuvem.<br/> Lenta, custosa e <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)' }}>vigiando você.</span>
          </h3>
        </div>
      </motion.section>

      {/* The Solution */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="glass-panel"
        style={{ margin: '0 auto', maxWidth: '1000px', padding: '6rem 4rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'var(--accent-orange)', boxShadow: '0 0 20px var(--accent-orange)' }}></div>
        
        <h2 className="text-orange mono" style={{ fontSize: '1.5rem', marginBottom: '2rem', letterSpacing: '2px' }}>02. A SOLUÇÃO: EDGE AI FÍSICA</h2>
        
        <h3 style={{ fontSize: '3.5rem', color: '#fff', marginBottom: '2rem', lineHeight: '1.1' }}>
          O Atobor processa tudo na sua mesa. <br/><span className="text-orange">Zero latência. Zero nuvem.</span>
        </h3>
        
        <p style={{ fontSize: '1.3rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
          Rodando modelos locais pesados direto no hardware. Integrado a um chassi robótico modular que enxerga, ouve, fala e age no mundo real. O que acontece na sua casa, fica na sua casa.
        </p>
      </motion.section>

      {/* 02.5 About the Startup */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', background: 'radial-gradient(circle at 100% 50%, rgba(255,87,34,0.08) 0%, transparent 50%)' }}
      >
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <h2 className="text-orange mono" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', letterSpacing: '2px' }}>&gt; QUEM SOMOS</h2>
            <h3 style={{ fontSize: '4rem', color: '#fff', marginBottom: '2rem', lineHeight: '1.1' }}>
              A Rebelião contra a IA Centralizada.
            </h3>
            <p style={{ fontSize: '1.3rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Nós somos a <strong style={{color: '#fff'}}>Atobor Robotics</strong>. Acreditamos que o hardware é o único caminho para a verdadeira privacidade. A era dos chatbots de navegador vai acabar. O futuro pertence a agentes autônomos e tangíveis que vivem no nosso mundo físico, enxergando e tocando a mesma realidade que nós.
            </p>
            <p style={{ fontSize: '1.3rem', color: 'var(--text-muted)' }}>
              Nossa missão? Democratizar o Edge AI por meio de uma plataforma de robótica modular, open-source e acessível. Nós construímos a casca, o usuário é dono da inteligência.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Product Showcase */}
      <section style={{ minHeight: '100vh', padding: '10rem 0', display: 'flex', alignItems: 'center' }}>
         <div className="container">
           <motion.h2 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="text-orange mono" 
             style={{ fontSize: '1.5rem', marginBottom: '4rem', textAlign: 'center', letterSpacing: '2px' }}
           >
             03. O PRODUTO E MODELO DE NEGÓCIO
           </motion.h2>
           
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
              
              <motion.div 
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }} 
                className="glass-panel"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                 <h3 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#fff' }}>Atobor Core</h3>
                 <p className="mono text-orange" style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>ESTIMATIVA: $299 // ENTRY LEVEL</p>
                 <ul style={{ listStyle: 'none', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                    <li style={{ marginBottom: '1rem', display: 'flex', gap: '10px' }}><span className="text-orange">&gt;</span> Alto-falante Embutido (Voz/SFX)</li>
                    <li style={{ marginBottom: '1rem', display: 'flex', gap: '10px' }}><span className="text-orange">&gt;</span> Modelos Otimizados (Phi-3/Qwen)</li>
                    <li style={{ marginBottom: '1rem', display: 'flex', gap: '10px' }}><span className="text-orange">&gt;</span> NPU de baixo consumo</li>
                    <li style={{ marginBottom: '1rem', display: 'flex', gap: '10px' }}><span className="text-orange">&gt;</span> Resfriamento Passivo Silencioso</li>
                 </ul>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(255, 87, 34, 0.2)' }} 
                className="glass-panel" 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                style={{ borderColor: 'rgba(255, 87, 34, 0.5)', background: 'rgba(255, 87, 34, 0.05)' }}
              >
                 <div style={{ position: 'absolute', top: '-15px', right: '20px', background: 'var(--accent-orange)', color: '#fff', padding: '5px 15px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '1px' }}>
                   HIGH MARGIN
                 </div>
                 <h3 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#fff' }}>Atobor Pro</h3>
                 <p className="mono text-orange" style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>ESTIMATIVA: $599 // HEAVY-USERS</p>
                 <ul style={{ listStyle: 'none', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                    <li style={{ marginBottom: '1rem', display: 'flex', gap: '10px' }}><span className="text-orange">&gt;</span> Sistema de Áudio Premium (Voz Dinâmica)</li>
                    <li style={{ marginBottom: '1rem', display: 'flex', gap: '10px' }}><span className="text-orange">&gt;</span> Llama 3 Local</li>
                    <li style={{ marginBottom: '1rem', display: 'flex', gap: '10px' }}><span className="text-orange">&gt;</span> Kit Visão Espacial (3 Câmeras)</li>
                    <li style={{ marginBottom: '1rem', display: 'flex', gap: '10px' }}><span className="text-orange">&gt;</span> Resfriamento Ativo RGB</li>
                 </ul>
              </motion.div>

              <motion.div 
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 150, 255, 0.2)' }} 
                className="glass-panel" 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                style={{ borderColor: 'rgba(0, 150, 255, 0.5)', background: 'rgba(0, 150, 255, 0.05)' }}
              >
                 <div style={{ position: 'absolute', top: '-15px', right: '20px', background: '#0096FF', color: '#fff', padding: '5px 15px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '1px' }}>
                   B2B FOCUS
                 </div>
                 <h3 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#fff' }}>Atobor Business</h3>
                 <p className="mono" style={{ marginBottom: '2rem', fontSize: '1.1rem', color: '#0096FF' }}>ESTIMATIVA: $999 // ENTERPRISE</p>
                 <ul style={{ listStyle: 'none', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                    <li style={{ marginBottom: '1rem', display: 'flex', gap: '10px' }}><span style={{color: '#0096FF'}}>&gt;</span> Tela Dupla p/ Clientes</li>
                    <li style={{ marginBottom: '1rem', display: 'flex', gap: '10px' }}><span style={{color: '#0096FF'}}>&gt;</span> Integração PDV & Pagamentos</li>
                    <li style={{ marginBottom: '1rem', display: 'flex', gap: '10px' }}><span style={{color: '#0096FF'}}>&gt;</span> Chassi Anti-derramamento</li>
                    <li style={{ marginBottom: '1rem', display: 'flex', gap: '10px' }}><span style={{color: '#0096FF'}}>&gt;</span> Modo Garçom / Concierge</li>
                 </ul>
              </motion.div>

           </div>
         </div>
      </section>

      {/* 04. Ecosystem & Modules */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ padding: '8rem 0', background: 'rgba(255,255,255,0.02)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}
      >
        <div className="container">
           <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
             <h2 className="text-orange mono" style={{ fontSize: '1.5rem', marginBottom: '1rem', letterSpacing: '2px' }}>04. O ECOSSISTEMA MODULAR</h2>
             <h3 style={{ fontSize: '3.5rem', color: '#fff', marginBottom: '1.5rem' }}>Quatro faces da mesma IA.</h3>
             <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto' }}>
                O Atobor Core é apenas o cérebro. A verdadeira disrupção está na nossa plataforma de expansão física. Venda de Hardware recorrente através de upgrades de casca.
             </p>
           </div>
           
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              <motion.div whileHover={{ y: -10 }} className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center' }}>
                <img src="/unit_a.png" alt="Unit A Tabletop" style={{ width: '100%', borderRadius: '1rem', marginBottom: '1.5rem', objectFit: 'cover', aspectRatio: '1/1' }} />
                <h4 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem' }}>UNIT A: MESA</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>A base padrão. Perfeita para early-adopters operando em desktops.</p>
              </motion.div>
              <motion.div whileHover={{ y: -10 }} className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center' }}>
                <img src="/unit_b.png" alt="Unit B Mobility" style={{ width: '100%', borderRadius: '1rem', marginBottom: '1.5rem', objectFit: 'cover', aspectRatio: '1/1' }} />
                <h4 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem' }}>UNIT B: RODAS</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Mobilidade omnidirecional. O Atobor te segue pela casa e patrulha o ambiente.</p>
              </motion.div>
              <motion.div whileHover={{ y: -10 }} className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center' }}>
                <img src="/unit_c.png" alt="Unit C Crawler" style={{ width: '100%', borderRadius: '1rem', marginBottom: '1.5rem', objectFit: 'cover', aspectRatio: '1/1' }} />
                <h4 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem' }}>UNIT C: ARANHA</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>O módulo Crawler. Capaz de transpor obstáculos e subir degraus pequenos.</p>
              </motion.div>
              <motion.div whileHover={{ y: -10 }} className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center', borderColor: 'rgba(0, 150, 255, 0.5)' }}>
                <img src="/unit_d.png" alt="Unit D Waiter" style={{ width: '100%', borderRadius: '1rem', marginBottom: '1.5rem', objectFit: 'cover', aspectRatio: '1/1' }} />
                <h4 style={{ fontSize: '1.5rem', color: '#0096FF', marginBottom: '0.5rem' }}>UNIT D: GARÇOM</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Foco B2B. Chassi elevado com engate magnético para bandejas.</p>
              </motion.div>
           </div>
        </div>
      </motion.section>

      {/* The Ask / Crowdfunding */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{ padding: '12rem 0', textAlign: 'center', position: 'relative' }}
      >
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(255,87,34,0.15) 0%, transparent 60%)', zIndex: -1 }}></div>
        
        <h2 className="text-orange mono" style={{ fontSize: '1.5rem', marginBottom: '1rem', letterSpacing: '2px' }}>05. O MOMENTO</h2>
        <h3 style={{ fontSize: '4.5rem', color: '#fff', marginBottom: '2rem', textShadow: '0 0 40px rgba(255,87,34,0.4)' }}>O futuro já está sendo impresso.</h3>
        
        <p style={{ fontSize: '1.3rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
          Estamos abrindo a primeira rodada de captação e lançando nosso crowdfunding simultaneamente. Seja um dos visionários a trazer a verdadeira IA para o mundo físico.
        </p>
        
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
          <motion.button 
            onClick={openInvestorModal}
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary" 
            style={{ fontSize: '1.2rem', padding: '1.2rem 3rem' }}
          >
            QUERO INVESTIR NA ATOBOR
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="btn btn-outline" 
            style={{ fontSize: '1.2rem', padding: '1.2rem 3rem' }}
          >
            VER PITCH DECK COMPLETO (PDF)
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default PitchDeck;
