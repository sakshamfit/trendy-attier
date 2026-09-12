import { useEffect, useState } from 'react'

export default function Navbar({ bagCount, onBagClick }) {
  const [open, setOpen] = useState(false)
  const [bump, setBump] = useState(false)

  useEffect(() => {
    if (bagCount === 0) return
    setBump(true)
    const t = setTimeout(() => setBump(false), 380)
    return () => clearTimeout(t)
  }, [bagCount])

  // lock scroll when drawer open
  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = ''
    }
    return () => { document.documentElement.style.overflow = '' }
  }, [open])

  // close on resize to desktop
  useEffect(() => {
    const m = window.matchMedia('(min-width: 901px)')
    const handler = () => { if (m.matches) setOpen(false) }
    m.addEventListener?.('change', handler)
    return () => m.removeEventListener?.('change', handler)
  }, [])

  return (
    <>
      <header id="nav" className="nav">
        <div className="wrap g">
          <nav className="links" aria-label="Collections">
            <a className="u lbl" href="#cats">Outerwear</a>
            <a className="u lbl" href="#cats">Knitwear</a>
            <a className="u lbl" href="#cats">Tailoring</a>
            <a className="u lbl" href="#look">Archive</a>
          </nav>

          <a className="mark" href="#hero" aria-label="Trendy Attire, home">Trendy Attire</a>

          <nav className="util" aria-label="Utilities">
            <a className="u lbl hl" href="#">Search</a>
            <a className="u lbl hl" href="#">Account</a>
            <button
              className={`u lbl bag ${bump ? 'bump' : ''}`}
              id="bag"
              aria-label={`Bag, ${bagCount} items`}
              onClick={(e) => { e.preventDefault(); onBagClick() }}
              type="button"
            >
              <span className="hl">Bag</span> <span className="cnt num">{bagCount}</span>
            </button>
            <button
              className="burger"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-drawer"
              onClick={() => setOpen(v => !v)}
              type="button"
            >
              <span />
              <span />
              <span />
            </button>
          </nav>
        </div>
        <div id="prog" className="prog" aria-hidden="true" />
      </header>

      <div className={`drawer ${open ? 'open' : ''}`} id="mobile-drawer" aria-hidden={!open}>
        <div className="backdrop" onClick={() => setOpen(false)} />
        <div className="panel" role="dialog" aria-modal="true" aria-label="Menu">
          <nav aria-label="Mobile navigation">
            <a href="#cats" onClick={() => setOpen(false)}>Outerwear <span aria-hidden="true">→</span></a>
            <a href="#cats" onClick={() => setOpen(false)}>Knitwear <span aria-hidden="true">→</span></a>
            <a href="#cats" onClick={() => setOpen(false)}>Tailoring <span aria-hidden="true">→</span></a>
            <a href="#look" onClick={() => setOpen(false)}>Archive <span aria-hidden="true">→</span></a>
            <a href="#shop" onClick={() => setOpen(false)}>Shop all <span aria-hidden="true">→</span></a>
            <a href="#" onClick={(e) => e.preventDefault()}>Search <span aria-hidden="true">→</span></a>
            <a href="#" onClick={(e) => e.preventDefault()}>Account <span aria-hidden="true">→</span></a>
          </nav>

          <div className="foot">
            <button className="btn" onClick={() => { setOpen(false); onBagClick() }}>Bag · {bagCount} <span aria-hidden="true">→</span></button>
            <a href="tel:+917071960434" className="btn btn--ghost" style={{ width: '100%', textAlign: 'center' }}>Call +91 70719 60434</a>
            <p className="lbl mut" style={{ fontSize: 10, textTransform: 'none', letterSpacing: '.02em', lineHeight: 1.6, textAlign: 'center' }}>
              Behind Ambedkar Tirha, Anand Nagar, Pharenda · Open hours on call
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
