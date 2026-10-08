import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { ArrowCounterClockwise, ArrowUpRight, Play, X } from '@/components/slab'

/**
 * The intro video, interactive: a "Watch intro" button opens a player with
 * clickable chapters that jump through the video, and an end screen with
 * the next steps. Chapter times match the scenes in public/video/intro.mp4.
 */
const CHAPTERS = [
  { t: 0, label: 'Hello' },
  { t: 5, label: 'About' },
  { t: 10.6, label: 'Services' },
  { t: 20.6, label: 'Results' },
  { t: 35.6, label: 'AI systems' },
  { t: 41.6, label: 'Testimonial' },
  { t: 48.6, label: 'Tools' },
  { t: 53.8, label: 'Contact' },
]

function Player({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLVideoElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const [now, setNow] = useState(0)
  const [ended, setEnded] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    requestAnimationFrame(() => closeRef.current?.focus())
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const jump = (t: number) => {
    const v = ref.current
    if (!v) return
    v.currentTime = t
    setNow(t)
    setEnded(false)
    v.play().catch(() => {})
  }

  const active = CHAPTERS.reduce((a, c, i) => (now >= c.t ? i : a), 0)

  return createPortal(
    <div
      className="vplayer"
      role="dialog"
      aria-modal="true"
      aria-label="Intro video"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <button ref={closeRef} type="button" className="pmodal__close" onClick={onClose} aria-label="Close video">
        <X size={18} weight="bold" />
      </button>
      <div className="vplayer__box">
        <div className="vplayer__frame">
          <video
            ref={ref}
            src="/video/intro.mp4"
            poster="/video/intro-poster.jpg"
            controls
            autoPlay
            playsInline
            preload="metadata"
            onTimeUpdate={(e) => setNow(e.currentTarget.currentTime)}
            onSeeked={(e) => setNow(e.currentTarget.currentTime)}
            onEnded={() => setEnded(true)}
            onPlay={() => setEnded(false)}
          />
          {ended && (
            <div className="vplayer__end">
              <p className="vplayer__end-title">Let’s build your growth system.</p>
              <div className="vplayer__end-actions">
                <Link to="/contact" className="vplayer__btn vplayer__btn--primary" onClick={onClose}>
                  Get in touch <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
                </Link>
                <Link to="/projects" className="vplayer__btn" onClick={onClose}>
                  See my work
                </Link>
                <button type="button" className="vplayer__btn" onClick={() => jump(0)}>
                  <ArrowCounterClockwise size={16} weight="bold" aria-hidden="true" /> Replay
                </button>
              </div>
            </div>
          )}
        </div>
        <nav className="vplayer__chapters" aria-label="Video chapters">
          {CHAPTERS.map((c, i) => (
            <button
              key={c.label}
              type="button"
              className="vplayer__chapter"
              aria-current={i === active ? 'true' : undefined}
              onClick={() => jump(c.t)}
            >
              <span>{String(i + 1).padStart(2, '0')}</span>
              {c.label}
            </button>
          ))}
        </nav>
      </div>
    </div>,
    document.body,
  )
}

export default function IntroButton() {
  const [open, setOpen] = useState(false)
  const btn = useRef<HTMLButtonElement>(null)
  const close = useCallback(() => {
    setOpen(false)
    requestAnimationFrame(() => btn.current?.focus())
  }, [])
  return (
    <>
      <button ref={btn} type="button" className="intro-btn" onClick={() => setOpen(true)} aria-haspopup="dialog">
        <span className="intro-btn__icon" aria-hidden="true">
          <Play size={14} weight="fill" />
        </span>
        Watch my 60-second intro
      </button>
      {open && <Player onClose={close} />}
    </>
  )
}
