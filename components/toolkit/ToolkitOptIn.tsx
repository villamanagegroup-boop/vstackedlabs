'use client'

import { useState } from 'react'

type Status =
  | { kind: 'idle' }
  | { kind: 'loading' }
  | { kind: 'created'; message: string }
  | { kind: 'existing'; message: string }
  | { kind: 'error'; message: string }

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function ToolkitOptIn() {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>({ kind: 'idle' })

  const isLoading = status.kind === 'loading'
  const showSuccess = status.kind === 'created' || status.kind === 'existing'
  const isDev = process.env.NODE_ENV !== 'production'

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (isLoading) return

    const trimmedName = firstName.trim()
    const trimmedEmail = email.trim()

    if (!trimmedName) {
      setStatus({ kind: 'error', message: 'Please enter your first name.' })
      return
    }
    if (!EMAIL_RE.test(trimmedEmail)) {
      setStatus({ kind: 'error', message: 'Please enter a valid email address.' })
      return
    }

    setStatus({ kind: 'loading' })

    try {
      const res = await fetch('/api/toolkit/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmedEmail, first_name: trimmedName }),
      })
      const data = await res.json().catch(() => ({}))

      if (!res.ok && res.status !== 202) {
        setStatus({
          kind: 'error',
          message: data?.error ?? 'Something went wrong. Try again.',
        })
        return
      }

      if (data?.status === 'existing') {
        setStatus({
          kind: 'existing',
          message: "You're already in. Check your email for your original access link.",
        })
        return
      }

      setStatus({
        kind: 'created',
        message: 'Check your inbox. Your permanent link is on the way.',
      })
    } catch {
      setStatus({ kind: 'error', message: 'Network error. Try again.' })
    }
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '64px 20px',
      }}
    >
      <div style={{ maxWidth: 720, width: '100%' }}>
        {/* Badge */}
        <div
          style={{
            display: 'inline-block',
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontSize: 12,
            fontWeight: 500,
            color: '#F5C518',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            background: 'rgba(245, 197, 24, 0.08)',
            border: '1px solid rgba(245, 197, 24, 0.25)',
            padding: '6px 12px',
            borderRadius: 999,
            marginBottom: 28,
          }}
        >
          Free Resource · Stackd Studio
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: 'var(--font-syne), sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(40px, 6vw, 72px)',
            lineHeight: 1.02,
            letterSpacing: '-0.02em',
            margin: '0 0 20px',
            color: '#F5F0E8',
          }}
        >
          The small business AI toolkit
        </h1>

        {/* Subhead */}
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.6,
            color: '#F5F0E8',
            opacity: 0.78,
            margin: '0 0 36px',
            maxWidth: 600,
          }}
        >
          50+ free and low-cost AI tools, organized by what you actually need to get done.
          Updated quarterly. Yours forever.
        </p>

        {/* Trust bullets */}
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: '0 0 40px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          {[
            'Organized by use case — not alphabetical noise',
            'Free and low-cost tools only',
            'Permanent access link — updates land automatically',
          ].map((bullet) => (
            <li
              key={bullet}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 12,
                fontSize: 15,
                color: '#F5F0E8',
                lineHeight: 1.5,
              }}
            >
              <CheckIcon />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Form / success */}
        {showSuccess ? (
          <SuccessCard message={status.message} variant={status.kind} />
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            aria-label="AI Toolkit opt-in"
            style={{
              background: '#111111',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: 12,
              padding: 24,
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: 12,
              }}
            >
              <Field
                id="first_name"
                name="first_name"
                label="First name"
                placeholder="Jane"
                value={firstName}
                onChange={setFirstName}
                autoComplete="given-name"
                required
              />
              <Field
                id="email"
                name="email"
                type="email"
                label="Email address"
                placeholder="jane@company.com"
                value={email}
                onChange={setEmail}
                autoComplete="email"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              style={{
                marginTop: 6,
                background: '#F5C518',
                color: '#0A0A0A',
                border: 'none',
                borderRadius: 8,
                padding: '14px 18px',
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: 15,
                fontWeight: 700,
                cursor: isLoading ? 'not-allowed' : 'pointer',
                opacity: isLoading ? 0.7 : 1,
                transition: 'transform 0.15s ease, opacity 0.15s ease',
              }}
              onMouseDown={(e) => {
                if (!isLoading) e.currentTarget.style.transform = 'scale(0.98)'
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              {isLoading ? 'Sending…' : 'Send me the toolkit →'}
            </button>

            {status.kind === 'error' && (
              <p
                role="alert"
                style={{
                  margin: 0,
                  fontSize: 13,
                  color: '#FF8A8A',
                }}
              >
                {status.message}
              </p>
            )}

            <p
              style={{
                margin: '6px 0 0',
                fontSize: 12,
                color: '#888580',
                lineHeight: 1.5,
              }}
            >
              No spam. One welcome email plus quarterly toolkit updates. Unsubscribe anytime.
            </p>
          </form>
        )}

        {isDev && (
          <a
            href="/free/toolkit/access?preview=1"
            style={{
              marginTop: 24,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 12,
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontWeight: 500,
              color: '#F5C518',
              textDecoration: 'none',
              border: '1px dashed rgba(245, 197, 24, 0.4)',
              borderRadius: 6,
              padding: '8px 12px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            <span aria-hidden="true">⚙</span>
            Dev · Preview toolkit (no email)
          </a>
        )}
      </div>
    </main>
  )
}

function Field({
  id,
  name,
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  required,
  autoComplete,
}: {
  id: string
  name: string
  label: string
  placeholder: string
  value: string
  onChange: (v: string) => void
  type?: string
  required?: boolean
  autoComplete?: string
}) {
  const [focused, setFocused] = useState(false)
  return (
    <div>
      <label
        htmlFor={id}
        style={{
          display: 'block',
          fontFamily: 'var(--font-dm-sans), sans-serif',
          fontSize: 12,
          fontWeight: 500,
          color: '#888580',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginBottom: 8,
        }}
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: '100%',
          background: '#1A1A1A',
          color: '#F5F0E8',
          border: focused ? '2px solid #F5C518' : '1px solid rgba(255,255,255,0.08)',
          borderRadius: 8,
          padding: focused ? '11px 13px' : '12px 14px',
          fontFamily: 'var(--font-dm-sans), sans-serif',
          fontSize: 15,
          outline: 'none',
          transition: 'border 0.15s ease',
          boxSizing: 'border-box',
        }}
      />
    </div>
  )
}

function SuccessCard({
  message,
  variant,
}: {
  message: string
  variant: 'created' | 'existing'
}) {
  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        background: '#111111',
        border: '1px solid rgba(245, 197, 24, 0.25)',
        borderRadius: 12,
        padding: 28,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 999,
            background: 'rgba(78, 204, 127, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12.5L10 17.5L19 7.5" stroke="#4ECC7F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2
          style={{
            margin: 0,
            fontFamily: 'var(--font-syne), sans-serif',
            fontSize: 22,
            fontWeight: 700,
            color: '#F5F0E8',
            lineHeight: 1.2,
          }}
        >
          {variant === 'existing' ? 'Welcome back.' : 'You’re in.'}
        </h2>
      </div>
      <p style={{ margin: 0, fontSize: 15, color: '#F5F0E8', opacity: 0.85, lineHeight: 1.6 }}>
        {message}
      </p>
    </div>
  )
}

function CheckIcon() {
  return (
    <span
      aria-hidden="true"
      style={{
        flexShrink: 0,
        width: 20,
        height: 20,
        borderRadius: 999,
        background: 'rgba(245, 197, 24, 0.12)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 2,
      }}
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
        <path
          d="M5 12.5L10 17.5L19 7.5"
          stroke="#F5C518"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}
