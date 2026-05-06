'use client';

import { motion, Variants } from 'framer-motion';
import { SKILLS } from '@/data/portfolio';
import type { Skill } from '@/types';

const CATEGORY_LABELS: Record<string, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  language: 'Diller',
  database: 'Veritabanı',
  'ml-cv': 'ML / CV',
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.92 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function SkillCard({ skill }: { skill: Skill }) {
  const isTextIcon = skill.icon.length > 2;

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ scale: 1.05 }}
      className="skill-card"
      aria-label={skill.name}
    >
      {/* Icon */}
      <div
        className="skill-icon"
        style={{ background: skill.bgColor }}
      >
        {isTextIcon ? (
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
              fontSize: '0.85rem',
              color: skill.color,
            }}
          >
            {skill.icon}
          </span>
        ) : (
          <span style={{ fontSize: '1.6rem' }}>{skill.icon}</span>
        )}
      </div>

      {/* Name */}
      <span
        style={{
          fontWeight: 600,
          fontSize: '0.875rem',
          color: 'var(--text-primary)',
          letterSpacing: '-0.01em',
        }}
      >
        {skill.name}
      </span>

      {/* Category tag */}
      <span
        style={{
          fontSize: '0.65rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: skill.color,
          opacity: 0.75,
          fontFamily: "'JetBrains Mono', monospace",
        }}
      >
        {CATEGORY_LABELS[skill.category] ?? skill.category}
      </span>

      {/* Skill level dots */}
      <div style={{ display: 'flex', gap: 4 }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: i < skill.level ? skill.color : 'rgba(255,255,255,0.1)',
              transition: 'background 0.3s ease',
            }}
          />
        ))}
      </div>
    </motion.article>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="section dot-bg"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-main" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '4rem' }}
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
            {'// 02. teknoloji_yigini'}
          </p>
          <h2 className="section-title">
            Teknoloji <span className="gradient-text">Yığını</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 480, marginTop: 8 }}>
            Backend&apos;den bilgisayar vizyonuna uzanan geniş bir araç setiyle çalışıyorum.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
            gap: '1rem',
          }}
        >
          {SKILLS.map((skill: Skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
