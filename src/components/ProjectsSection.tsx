'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '@/data/portfolio';
import type { Project, ProjectCategory } from '@/types';

const CATEGORY_LABELS: Record<ProjectCategory | 'all', string> = {
  all: 'Tümü',
  'full-stack': 'Full Stack',
  'computer-vision': 'Bilgisayar Vizyonu',
  backend: 'Backend',
  frontend: 'Frontend',
  mobile: 'Mobil',
};

const CATEGORY_COLORS: Record<ProjectCategory, string> = {
  'full-stack': 'var(--accent-cyan)',
  'computer-vision': 'var(--accent-green)',
  backend: 'var(--accent-violet)',
  frontend: 'var(--accent-pink)',
  mobile: 'var(--accent-cyan)',
};

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.929.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const accentColor = CATEGORY_COLORS[project.category];

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20, scale: 0.96 }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="project-card"
      aria-label={project.title}
      style={{ height: '100%' }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 10,
            background: `${accentColor}15`,
            border: `1px solid ${accentColor}30`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        </div>

        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          {project.featured && (
            <span
              style={{
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: accentColor,
                background: `${accentColor}12`,
                border: `1px solid ${accentColor}25`,
                borderRadius: 999,
                padding: '2px 8px',
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              Öne Çıkan
            </span>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} GitHub repository`}
            style={{
              color: 'var(--text-muted)',
              transition: 'color 0.2s ease',
              display: 'flex',
              alignItems: 'center',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = accentColor)}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)')}
          >
            <GitHubIcon />
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              style={{
                color: 'var(--text-muted)',
                transition: 'color 0.2s ease',
                display: 'flex',
                alignItems: 'center',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = accentColor)}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)')}
            >
              <ExternalIcon />
            </a>
          )}
        </div>
      </div>

      {/* Title */}
      <div>
        <h3
          style={{
            fontSize: '1.05rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: 6,
            letterSpacing: '-0.01em',
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontSize: '0.875rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
          }}
        >
          {project.description}
        </p>
      </div>

      {/* Tech tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 'auto' }}>
        {project.technologies.map((tech) => (
          <span key={tech} className="tag-pill">
            {tech}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '0.75rem',
          borderTop: '1px solid var(--border-subtle)',
        }}
      >
        <span
          style={{
            fontSize: '0.7rem',
            color: accentColor,
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 600,
            letterSpacing: '0.05em',
          }}
        >
          {CATEGORY_LABELS[project.category]}
        </span>
        <span
          style={{
            fontSize: '0.7rem',
            color: 'var(--text-muted)',
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          {project.year}
        </span>
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectCategory | 'all'>('all');

  const categories = ['all', ...new Set(PROJECTS.map((p) => p.category))] as (
    | ProjectCategory
    | 'all'
  )[];

  const filtered =
    filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="section grid-bg"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Ambient */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: 500,
          height: 400,
          background: 'radial-gradient(circle, rgba(0,229,255,0.04) 0%, transparent 70%)',
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
          style={{ marginBottom: '3rem' }}
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
            {'// 03. projeler[]'}
          </p>
          <h2 className="section-title">
            Öne Çıkan <span className="gradient-text">Projeler</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 480, marginTop: 8 }}>
            Gerçek dünya problemlerine ürettiğim yazılım çözümleri.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: 'flex',
            gap: 8,
            marginBottom: '2.5rem',
            flexWrap: 'wrap',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-${cat}`}
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
              style={{
                padding: '7px 18px',
                borderRadius: 999,
                border: `1px solid ${filter === cat ? 'var(--accent-cyan)' : 'var(--border-subtle)'}`,
                background:
                  filter === cat ? 'rgba(0,229,255,0.1)' : 'transparent',
                color:
                  filter === cat ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                fontSize: '0.8rem',
                fontWeight: 600,
                fontFamily: "'JetBrains Mono', monospace",
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                letterSpacing: '0.04em',
              }}
            >
              {CATEGORY_LABELS[cat]}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.25rem',
            alignItems: 'start',
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ textAlign: 'center', marginTop: '3.5rem' }}
        >
          <a
            href="https://github.com/halebykrsln"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            id="github-all-projects"
            style={{ gap: 10 }}
          >
            <GitHubIcon />
            <span>Tüm Projeleri GitHub&apos;da Gör</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
