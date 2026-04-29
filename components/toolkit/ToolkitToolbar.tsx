'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

interface SidebarLink {
  id: string
  name: string
}

export default function ToolkitToolbar({ links }: { links: SidebarLink[] }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  function handlePrint() {
    window.print()
  }

  return (
    <>
      <div
        data-toolkit-bar
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 40,
          background: '#FFD84D',
          borderBottom: '1px solid rgba(12, 12, 12, 0.12)',
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            padding: '12px clamp(12px, 4vw, 20px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 8,
            flexWrap: 'wrap',
          }}
        >
          <button
            type="button"
            aria-label="Open sections menu"
            aria-expanded={open}
            aria-controls="toolkit-sidebar"
            onClick={() => setOpen(true)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: '#0C0C0C',
              color: '#FFD84D',
              border: 'none',
              borderRadius: 8,
              padding: '10px 14px',
              cursor: 'pointer',
              fontFamily: 'var(--font-instrument-sans), sans-serif',
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '0.04em',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
            Sections
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button
              type="button"
              onClick={handlePrint}
              aria-label="Download or print this toolkit as PDF"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: '#FFFFFF',
                color: '#0C0C0C',
                border: '1px solid #0C0C0C',
                borderRadius: 8,
                padding: '10px 14px',
                cursor: 'pointer',
                fontFamily: 'var(--font-instrument-sans), sans-serif',
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: '0.04em',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span data-toolkit-download-label>Download&nbsp;PDF</span>
              <span data-toolkit-download-short style={{ display: 'none' }}>PDF</span>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div
          aria-hidden="true"
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(12, 12, 12, 0.45)',
            zIndex: 50,
          }}
        />
      )}

      <aside
        id="toolkit-sidebar"
        aria-label="Toolkit sections"
        aria-hidden={!open}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100vh',
          width: 'min(320px, 86vw)',
          background: '#0C0C0C',
          color: '#FFD84D',
          zIndex: 60,
          transform: open ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.22s ease',
          padding: '24px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          boxShadow: open ? '4px 0 24px rgba(0, 0, 0, 0.25)' : 'none',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span
            style={{
              fontFamily: 'var(--font-anton), sans-serif',
              fontSize: 22,
              letterSpacing: '0.04em',
              color: '#FFD84D',
              textTransform: 'uppercase',
            }}
          >
            Sections
          </span>
          <button
            type="button"
            aria-label="Close sections menu"
            onClick={() => setOpen(false)}
            style={{
              background: 'transparent',
              border: '1px solid rgba(255, 216, 77, 0.4)',
              color: '#FFD84D',
              borderRadius: 6,
              width: 32,
              height: 32,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>
        </div>

        <nav>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <li>
              <a
                href="#top"
                onClick={() => setOpen(false)}
                style={navLinkStyle()}
              >
                Top of page
              </a>
            </li>
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  style={navLinkStyle()}
                >
                  {l.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#cta"
                onClick={() => setOpen(false)}
                style={navLinkStyle()}
              >
                Done-For-You setup
              </a>
            </li>
            <li>
              <a
                href="#explore"
                onClick={() => setOpen(false)}
                style={navLinkStyle()}
              >
                Explore more
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => setOpen(false)}
                style={navLinkStyle()}
              >
                About Stackd
              </a>
            </li>
          </ul>
        </nav>

        <div style={{ marginTop: 'auto', paddingTop: 20, borderTop: '1px solid rgba(255, 216, 77, 0.15)' }}>
          <Link
            href="/"
            onClick={() => setOpen(false)}
            style={{
              fontSize: 12,
              color: '#888580',
              textDecoration: 'none',
              fontFamily: 'var(--font-instrument-sans), sans-serif',
            }}
          >
            ← Back to stackdstudiosai.com
          </Link>
        </div>
      </aside>
    </>
  )
}

function navLinkStyle(): React.CSSProperties {
  return {
    display: 'block',
    padding: '10px 12px',
    fontFamily: 'var(--font-instrument-sans), sans-serif',
    fontSize: 14,
    fontWeight: 500,
    color: '#F5F0E8',
    textDecoration: 'none',
    borderRadius: 6,
    transition: 'background 0.15s ease',
  }
}
