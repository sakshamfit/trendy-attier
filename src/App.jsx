import { useEffect, useRef, useState } from 'react'
import Announcement from './components/Announcement.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Categories from './components/Categories.jsx'
import Season from './components/Season.jsx'
import Services from './components/Services.jsx'
import Shop from './components/Shop.jsx'
import Lookbook from './components/Lookbook.jsx'
import Cloth from './components/Cloth.jsx'
import Atelier from './components/Atelier.jsx'
import Newsletter from './components/Newsletter.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [bag, setBag] = useState([])
  const [toast, setToast] = useState('')
  const [bagOpen, setBagOpen] = useState(false)
  const toastTimer = useRef(null)

  const bagCount = bag.length
  const bagTotal = bag.reduce((s, i) => s + i.price, 0)

  const showToast = (msg) => {
    setToast(msg)
    if (toastTimer.current) clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToast(''), 2200)
  }

  const addToBag = (product) => {
    setBag((prev) => [...prev, { ...product, uid: Date.now() + Math.random() }])
    showToast(`${product.name} added to bag`)
  }

  const removeFromBag = (uid) => {
    setBag((prev) => prev.filter((p) => p.uid !== uid))
  }

  // esc to close bag + lock scroll
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setBagOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])
  useEffect(() => {
    if (bagOpen) document.documentElement.style.overflow = 'hidden'
    else document.documentElement.style.overflow = ''
    return () => { document.documentElement.style.overflow = '' }
  }, [bagOpen])

  // live class for hero sequence
  useEffect(() => {
    const id = requestAnimationFrame(() => document.body.classList.add('live'))
    return () => cancelAnimationFrame(id)
  }, [])

  // global smooth anchor offset
  useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest?.('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute('href')
      if (!id || id === '#' || id.length < 2) return
      const t = document.getElementById(id.slice(1))
      if (!t) return
      e.preventDefault()
      const nav = document.getElementById('nav')
      const top = t.getBoundingClientRect().top + window.pageYOffset - (nav ? nav.offsetHeight : 0) - 8
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      window.scrollTo({ top: Math.max(top, 0), behavior: reduce ? 'auto' : 'smooth' })
      // close drawers by dispatching event?
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  // intercept placeholder href="#"
  useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest?.('a[href="#"]')
      if (!a) return
      // allow bag button which is also href="#" but handled elsewhere
      if (a.id === 'bag') return
      e.preventDefault()
      showToast('That page is not part of this build')
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  // scroll progress + parallax + scrub + reveal sweep — single rAF loop
  useEffect(() => {
    const prog = document.getElementById('prog')
    const px = Array.from(document.querySelectorAll('[data-speed]')).map((el) => ({
      el,
      speed: parseFloat(el.getAttribute('data-speed')) || 0,
      scale: parseFloat(el.getAttribute('data-scale')) || 0,
    }))
    const scrubEls = Array.from(document.querySelectorAll('[data-scrub]'))
    const rvs = Array.from(document.querySelectorAll('.rv'))
    rvs.forEach((el) => {
      const sibs = Array.from(el.parentElement?.querySelectorAll('.rv') || [])
      const idx = sibs.indexOf(el)
      if (idx >= 0) el.style.setProperty('--rd', `${idx * 70}ms`)
    })
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    let reduce = mq.matches
    const onChange = () => {
      reduce = mq.matches
      if (reduce) {
        px.forEach((o) => {
          o.el.style.removeProperty('--ty')
          o.el.style.removeProperty('--sc')
        })
        scrubEls.forEach((s) => s.style.setProperty('--p', '1'))
      }
    }
    mq.addEventListener?.('change', onChange)
    mq.addListener?.(onChange)

    // IntersectionObserver for reveals
    let io = null
    if ('IntersectionObserver' in window && !reduce) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add('in')
              io.unobserve(en.target)
            }
          })
        },
        { rootMargin: '0px 0px -6% 0px', threshold: 0.01 }
      )
      rvs.forEach((el) => {
        if (!reduce) io.observe(el)
        else el.classList.add('in')
      })
    } else {
      rvs.forEach((el) => el.classList.add('in'))
    }

    let ticking = false
    let vh = window.innerHeight

    const frame = () => {
      ticking = false
      const y = window.pageYOffset || document.documentElement.scrollTop || 0
      vh = window.innerHeight || vh

      if (prog) {
        const max = document.documentElement.scrollHeight - vh
        const p = max > 0 ? Math.min(Math.max(y / max, 0), 1) : 0
        prog.style.transform = `scaleX(${p})`
      }
      if (!reduce) {
        for (const o of px) {
          const r = o.el.getBoundingClientRect()
          if (r.bottom < -vh * 0.6 || r.top > vh * 1.6) continue
          const mid = (r.top + r.height / 2) - vh / 2
          const ty = -mid * o.speed
          o.el.style.setProperty('--ty', `${ty.toFixed(2)}px`)
          if (o.scale) {
            o.el.style.setProperty('--sc', (1 + Math.min(Math.abs(y), 1200) * o.scale).toFixed(5))
          }
        }
        for (const s of scrubEls) {
          const sr = s.getBoundingClientRect()
          if (sr.bottom < 0 || sr.top > vh) continue
          const p = (vh * 0.75 - sr.top) / (vh * 0.25)
          s.style.setProperty('--p', Math.min(Math.max(p, 0), 1).toFixed(3))
        }
      }
      // sweep fallback for reveals already above fold
      for (const el of rvs) {
        if (el.classList.contains('in')) continue
        if (el.getBoundingClientRect().top < vh * 0.92) el.classList.add('in')
      }
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(frame)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', () => {
      vh = window.innerHeight
      onScroll()
    })
    // initial
    frame()

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (io) io.disconnect()
      mq.removeEventListener?.('change', onChange)
      mq.removeListener?.(onChange)
    }
  }, [])

  return (
    <>
      <a className="sr-only" href="#shop">Skip to products</a>
      <Announcement />
      <Navbar bagCount={bagCount} onBagClick={() => setBagOpen(true)} />

      <main>
        <Hero />
        <Categories />
        <Season />
        <Services />
        <Shop onAdd={addToBag} />
        <Lookbook />
        <Cloth />
        <Atelier />
        <Newsletter onToast={showToast} />
      </main>

      <Footer />

      {/* bag drawer */}
      <div className={`bag-drawer ${bagOpen ? 'open' : ''}`} aria-hidden={!bagOpen}>
        <div className="backdrop" onClick={() => setBagOpen(false)} />
        <div className="panel" role="dialog" aria-modal="true" aria-label="Shopping bag">
          <div className="bag-head">
            <h2>Bag · <span className="num">{bagCount}</span></h2>
            <button className="bag-close" aria-label="Close bag" onClick={() => setBagOpen(false)}>✕</button>
          </div>
          <div className="bag-body">
            {bag.length === 0 ? (
              <div className="bag-empty">
                <p className="lbl mut">Your bag is empty</p>
                <p style={{ marginTop: 8, fontSize: 13, color: '#555' }}>Add something from the shop. Limited runs, once gone — gone.</p>
                <button className="btn" style={{ marginTop: 18, width: '100%' }} onClick={() => setBagOpen(false)}>Continue shopping</button>
              </div>
            ) : (
              bag.map((item) => (
                <div key={item.uid} className="bag-item">
                  <img src={item.img} alt="" width={64} height={80} loading="lazy" />
                  <div>
                    <h3>{item.name}</h3>
                    <p className="lbl">{item.meta}</p>
                    <p className="num" style={{ fontWeight: 700, marginTop: 4 }}>{item.priceLabel}</p>
                  </div>
                  <button className="icon-btn" aria-label={`Remove ${item.name}`} onClick={() => removeFromBag(item.uid)} style={{ width: 44, height: 44, minWidth: 44, minHeight: 44 }}>✕</button>
                </div>
              ))
            )}
          </div>
          {bag.length > 0 && (
            <div className="bag-foot">
              <div className="row"><span className="lbl">Subtotal</span><span className="num">₹{bagTotal.toLocaleString('en-IN')}</span></div>
              <p className="lbl mut" style={{ fontSize: 10, textTransform: 'none', letterSpacing: '.02em' }}>Delivery and alterations calculated at the counter. Free delivery over ₹1,499 in Pharenda.</p>
              <button className="btn" style={{ width: '100%' }} onClick={() => showToast('Checkout is not part of this build — call the shop')}>Checkout · ₹{bagTotal.toLocaleString('en-IN')}</button>
              <button className="btn btn--ghost" style={{ width: '100%' }} onClick={() => setBagOpen(false)}>Continue shopping</button>
            </div>
          )}
        </div>
      </div>

      <p id="bag-status" className="sr-only" aria-live="polite">{toast}</p>
      <div className={`toaster ${toast ? 'show' : ''}`} role="status" aria-live="polite">{toast}</div>
    </>
  )
}
