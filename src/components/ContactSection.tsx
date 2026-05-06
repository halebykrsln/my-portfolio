'use client';

import { motion } from 'framer-motion';

interface ContactLink {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: React.ReactNode;
  color: string;
}

const CONTACT_LINKS: ContactLink[] = [
  {
    id: 'contact-github',
    label: 'GitHub',
    value: 'github.com/halebykrsln',
    href: 'https://github.com/halebykrsln',
    color: 'var(--text-primary)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.929.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    id: 'contact-linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/halebykrsln',
    href: 'https://linkedin.com/in/halenur-büyükarslan-1121b5296',
    color: '#0077b5',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    id: 'contact-email',
    label: 'E-Posta',
    value: 'halenurbuyukarslan3@gmail.com',
    href: 'mailto:halenurbuyukarslan3@gmail.com',
    color: 'var(--accent-cyan)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="section"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Top divider */}
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
      {/* Ambient */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(124,58,237,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="container-main"
        style={{ position: 'relative', zIndex: 1, maxWidth: 720, textAlign: 'center' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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
            {'// 04. iletisim()'}
          </p>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>
            İletişim <span className="gradient-text">için</span>
          </h2>
          <p
            style={{
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              marginBottom: '3rem',
              fontSize: '1rem',
            }}
          >
            Bir proje fikriniz mi var? İş birliği yapmak ister misiniz? Her türlü fırsata ve
            sohbete açığım — mesajınızı bekliyorum.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            marginBottom: '3rem',
          }}
        >
          {CONTACT_LINKS.map((link) => (
            <motion.a
              key={link.id}
              id={link.id}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.02 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 10,
                padding: '24px 20px',
                borderRadius: 16,
                border: '1px solid var(--border-subtle)',
                background: 'var(--bg-card)',
                textDecoration: 'none',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                color: link.color,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = link.color as string;
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 12px 30px ${link.color as string}20`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border-subtle)';
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
              }}
            >
              {link.icon}
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                  {link.label}
                </div>
                <div
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    fontFamily: "'JetBrains Mono', monospace",
                    marginTop: 2,
                  }}
                >
                  {link.value}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
