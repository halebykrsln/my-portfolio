'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        padding: '2rem 1.5rem',
      }}
    >
      <div
        className="container-main"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono-custom"
          style={{
            color: 'var(--text-muted)',
            fontSize: '0.78rem',
          }}
        >
          © {year} Halenur Büyükarslan
        </motion.span>

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono-custom"
          style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}
        >
          <span style={{ color: 'var(--accent-green)' }}>●</span> çalışmaya hazır
        </motion.span>
      </div>
    </footer>
  );
}
