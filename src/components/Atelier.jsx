import { useEffect, useRef } from 'react'

function useCountUp() {
  const refs = useRef([])

  useEffect(() => {
    const els = refs.current.filter(Boolean)
    if (!els.length) return
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    // cubic bezier .19,1,.22,1
    function bezier(x1, y1, x2, y2) {
      const A = (a, b) => 1 - 3 * b + 3 * a
      const B = (a, b) => 3 * b - 6 * a
      const C = (a) => 3 * a
      const calc = (t, a, b) => ((A(a, b) * t + B(a, b)) * t + C(a)) * t
      const slope = (t, a, b) => 3 * A(a, b) * t * t + 2 * B(a, b) * t + C(a)
      return (x) => {
        if (x <= 0) return 0
        if (x >= 1) return 1
        let t = x
        for (let i = 0; i < 8; i++) {
          const s = slope(t, x1, x2)
          if (!s) break
          const e = calc(t, x1, x2) - x
          if (Math.abs(e) < 1e-5) break
          t -= e / s
        }
        return calc(t, y1, y2)
      }
    }
    const ease = bezier(0.19, 1, 0.22, 1)

    const run = (el) => {
      const target = parseFloat(el.getAttribute('data-count')) || 0
      const dec = parseInt(el.getAttribute('data-dec'), 10) || 0
      const fmt = (v) => (dec ? v.toFixed(dec) : String(Math.round(v)))
      if (mq.matches) {
        el.textContent = fmt(target)
        el.setAttribute('data-done', '1')
        return
      }
      if (el.getAttribute('data-done')) return
      el.setAttribute('data-done', '1')
      const dur = 1500
      let t0 = 0
      const step = (ts) => {
        if (!t0) t0 = ts
        const p = Math.min((ts - t0) / dur, 1)
        el.textContent = fmt(target * ease(p))
        if (p < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }

    if (mq.matches) {
      els.forEach(run)
      return
    }

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (!en.isIntersecting) return
            io.unobserve(en.target)
            run(en.target)
          })
        },
        { threshold: 0.35 }
      )
      els.forEach((el) => io.observe(el))
      return () => io.disconnect()
    } else {
      els.forEach(run)
    }
  }, [])

  return refs
}

export default function Atelier() {
  const countRefs = useCountUp()
  return (
    <section id="atelier" className="atelier on-ink" aria-labelledby="at-h">
      <div className="wrap at-grid">
        <figure className="art" data-speed="0.03">
          <img className="gw-7" src="https://cdn.jsdelivr.net/gh/VanhDc/aura-assets@sable-v2/sable/img/atelier.webp" alt="Hands closing a seam at a studio table" width={1000} height={1250} loading="lazy" style={{ '--sc': '1.12' }} />
        </figure>
        <div className="at-txt">
          <p className="lbl mut rv">The shop</p>
          <h2 id="at-h" className="dsp-2 rv">Five star<br />on Google,<br />six reviews in.</h2>
          <p className="copy rv">One room behind Ambedkar Tirha, a counter, a cutting table and a tailor who takes things in the same afternoon. Nothing ships from a warehouse; you try it on, then you wear it.</p>
          <div className="stats num tabular-nums">
            <div className="s rv"><span className="v" data-count="5" data-dec="1" ref={(el) => (countRefs.current[0] = el)}>0</span><span className="k lbl">Google rating</span></div>
            <div className="s rv"><span className="v" data-count="6" ref={(el) => (countRefs.current[1] = el)}>0</span><span className="k lbl">Reviews, all five star</span></div>
            <div className="s rv"><span className="v" data-count="1" ref={(el) => (countRefs.current[2] = el)}>0</span><span className="k lbl">Shop, Pharenda</span></div>
          </div>
          <div className="rv" style={{ paddingTop: 8 }}>
            <a className="btn btn--ghost" href="#shop">Visit the shop <span className="ar" aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
    </section>
  )
}
