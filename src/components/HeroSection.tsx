'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ROLES = [
  'Full-Stack Geliştirici',
  'Bilgisayar Vizyonu Geliştiricisi',
  'Görüntü İşleme',
  'Problem Çözücü',
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    } else {
      const speed = isDeleting ? 45 : 75;
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? current.slice(0, displayText.length - 1)
            : current.slice(0, displayText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="hero"
      className="grid-bg"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '5rem',
      }}
    >
      {/* Radial ambient light */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,229,255,0.10) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />
      {/* Bottom gradient fade */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '30%',
          background: 'linear-gradient(to bottom, transparent, var(--bg-primary))',
          pointerEvents: 'none',
        }}
      />

      {/* Decorative floating orbs */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '15%',
          right: '10%',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <motion.div
        animate={{ y: [0, 15, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <motion.div
        className="container-main"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ padding: '0 1.5rem', position: 'relative', zIndex: 1 }}
      >
        {/* Terminal badge */}
        <motion.div variants={itemVariants} style={{ marginBottom: '1.5rem' }}>
          <span
            className="font-mono-custom"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 16px',
              borderRadius: 999,
              border: '1px solid rgba(0,229,255,0.2)',
              background: 'rgba(0,229,255,0.06)',
              color: 'var(--accent-cyan)',
              fontSize: '0.78rem',
              letterSpacing: '0.08em',
            }}
          >
            <span style={{ color: 'var(--accent-green)' }}>▶</span>
            {"./halenur --rol=\"mühendis\" --durum=\"aktif\""}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          style={{
            fontSize: 'clamp(2.8rem, 8vw, 6.5rem)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            lineHeight: 1.0,
            marginBottom: '0.5rem',
          }}
        >
          <span style={{ color: 'var(--text-primary)' }}>Halenur</span>
          <br />
          <span className="gradient-text text-glow">Büyükarslan</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          variants={itemVariants}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            marginBottom: '1.5rem',
            minHeight: '2.5rem',
          }}
        >
          <span
            className="font-mono-custom"
            style={{
              color: 'var(--text-secondary)',
              fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
              fontWeight: 400,
            }}
          >
            <span style={{ color: 'var(--accent-cyan)' }}>~/</span>
            {displayText}
          </span>
          <span
            className="cursor-blink"
            style={{
              display: 'inline-block',
              width: 3,
              height: '1.3em',
              background: 'var(--accent-cyan)',
              borderRadius: 2,
              verticalAlign: 'middle',
            }}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          style={{
            maxWidth: 580,
            color: 'var(--text-secondary)',
            fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
            lineHeight: 1.75,
            marginBottom: '2.5rem',
          }}
        >
          Bilgisayar Mühendisi olarak{' '}
          <strong style={{ color: 'var(--text-primary)' }}>Full-Stack Web Geliştirme</strong>{' '}
          (React &amp; .NET) ve{' '}
          <strong style={{ color: 'var(--text-primary)' }}>Bilgisayar Vizyonu</strong>{' '}
          (OpenCV) alanlarında uzmanlaşıyorum. Performanslı, ölçeklenebilir ve güzel
          yazılımlar inşa etmeye odaklanıyorum.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={itemVariants}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}
        >
          <a href="#projects" className="btn-primary">
            <span>Projelerimi Gör</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#contact" className="btn-outline">
            <span>İletişime Geç</span>
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={itemVariants}
          style={{
            display: 'flex',
            gap: '3rem',
            marginTop: '4rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border-subtle)',
            flexWrap: 'wrap',
          }}
        >
          {[
            { label: 'Projeler', value: '8+' },
            { label: 'Teknoloji', value: '8+' },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'left' }}>
              <div
                style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)',
                  fontWeight: 800,
                  color: 'var(--accent-cyan)',
                  lineHeight: 1,
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: 4, letterSpacing: '0.05em' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6,
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
