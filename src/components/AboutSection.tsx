'use client';

import { motion } from 'framer-motion';

const TERMINAL_LINES = [
  { prefix: '$ ', text: 'kimim_ben', color: 'var(--accent-cyan)' },
  { prefix: '> ', text: 'Halenur Büyükarslan', color: 'var(--text-primary)' },
  { prefix: '> ', text: 'Selçuk Üniversitesi, Bilgisayar Mühendisliği', color: 'var(--text-primary)' },
  { prefix: '$ ', text: 'echo $UZMANLIK_ALANLARI', color: 'var(--accent-cyan)' },
  { prefix: '> ', text: 'Full-Stack | Computer Vision | Algoritma Optimizasyonu', color: 'var(--accent-green)' },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Background accent */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(0,229,255,0.2), transparent)',
        }}
      />

      <div
        className="container-main"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Left: Text content */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="font-mono-custom"
            style={{
              color: 'var(--accent-cyan)',
              fontSize: '0.8rem',
              letterSpacing: '0.15em',
              marginBottom: '0.75rem',
              textTransform: 'uppercase',
            }}
          >
            {'// 01. hakkimda'}
          </p>
          <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>
            Hakkımda<span className="gradient-text">.</span>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              Merhaba! Ben <strong style={{ color: 'var(--text-primary)' }}>Halenur</strong> — bir
              Bilgisayar Mühendisi olarak hem backend&apos;in gücünü hem de frontend&apos;in zarafetini
              bir araya getiren çözümler üretiyorum.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              <strong style={{ color: 'var(--text-primary)' }}>React &amp; .NET</strong> ile
              kurumsal full-stack uygulamalar geliştirirken,{' '}
              <strong style={{ color: 'var(--text-primary)' }}>OpenCV &amp; MediaPipe</strong>{' '}
              ile gelişmiş bilgisayar vizyonu çözümleri üretiyorum. Özellikle <strong>Hand Landmark Detection</strong> ve
              <strong> Face Recognition</strong> konularında derinleşiyorum.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              Mühendislik yaklaşımımı <strong>Algoritma Optimizasyonu</strong> ile birleştirerek;
              <em> Smoothing, Deadzone ve Linear Interpolation</em> gibi tekniklerle
              verilerin daha akıcı ve hassas işlenmesini sağlıyorum.
            </p>
          </div>

          {/* Focus areas */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: '1.75rem' }}>
            {['Full-Stack', 'Computer Vision', 'Algorithm Optimization',].map(
              (tag) => (
                <span key={tag} className="tag-pill">
                  {tag}
                </span>
              )
            )}
          </div>
        </motion.div>

        {/* Right: Terminal window */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            style={{
              borderRadius: 16,
              border: '1px solid var(--border-subtle)',
              overflow: 'hidden',
              background: 'var(--bg-card)',
              boxShadow: '0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,229,255,0.05)',
            }}
          >
            {/* Window chrome */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '12px 16px',
                borderBottom: '1px solid var(--border-subtle)',
                background: 'rgba(255,255,255,0.02)',
              }}
            >
              <div style={{ display: 'flex', gap: 6 }}>
                {['#ff5f57', '#ffbd2e', '#28ca41'].map((c) => (
                  <div
                    key={c}
                    style={{ width: 12, height: 12, borderRadius: '50%', background: c }}
                  />
                ))}
              </div>
              <span
                className="font-mono-custom"
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  marginLeft: 8,
                }}
              >
                halenur@portfolyo:~
              </span>
            </div>

            {/* Terminal body */}
            <div style={{ padding: '1.5rem', fontFamily: "'JetBrains Mono', monospace" }}>
              {TERMINAL_LINES.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.4 }}
                  style={{
                    display: 'flex',
                    gap: 0,
                    marginBottom: '0.4rem',
                    fontSize: '0.82rem',
                    lineHeight: 1.8,
                  }}
                >
                  <span style={{ color: 'var(--accent-violet)', userSelect: 'none', minWidth: 20 }}>
                    {line.prefix}
                  </span>
                  <span style={{ color: line.color }}>{line.text}</span>
                </motion.div>
              ))}
              <div style={{ display: 'flex', alignItems: 'center', gap: 2, marginTop: 4 }}>
                <span style={{ color: 'var(--accent-violet)', fontSize: '0.82rem' }}>$ </span>
                <span
                  className="cursor-blink"
                  style={{
                    display: 'inline-block',
                    width: 8,
                    height: '1rem',
                    background: 'var(--accent-cyan)',
                    borderRadius: 1,
                    verticalAlign: 'middle',
                    marginLeft: 2,
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
