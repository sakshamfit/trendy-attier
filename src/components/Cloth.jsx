import { useEffect, useRef } from 'react'

export default function Cloth() {
  const vidRef = useRef(null)

  useEffect(() => {
    const vid = vidRef.current
    if (!vid) return
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            if (!vid.getAttribute('src') && vid.getAttribute('data-src')) {
              vid.setAttribute('src', vid.getAttribute('data-src'))
              vid.load()
            }
            const p = vid.play()
            if (p && p.catch) p.catch(() => {})
          } else if (vid.getAttribute('src')) {
            vid.pause()
          }
        })
      },
      { rootMargin: '10% 0px', threshold: 0.15 }
    )
    io.observe(vid)
    return () => io.disconnect()
  }, [])

  return (
    <section id="cloth" className="cloth" aria-labelledby="cloth-h">
      <div className="wrap cloth-grid">
        <div>
          <p className="lbl mut rv">Cloth</p>
          <h2 id="cloth-h" className="dsp-2 rv">Three cloths,<br />all season.</h2>
          <p className="copy rv">We buy the roll, not the metre. That is the whole reason the sizes are small: a mill will not stop a loom for forty pieces. What does not go becomes the next shape.</p>
          <dl className="rv">
            <div className="r"><dt>Melton wool</dt><dd>620 gsm · Ludhiana</dd></div>
            <div className="r"><dt>Lambswool</dt><dd>340 gsm · Srinagar</dd></div>
            <div className="r"><dt>Combed cotton</dt><dd>320 gsm · Tirupur</dd></div>
          </dl>
          <p className="lbl mut rv" style={{ paddingTop: '14px' }}>If something does not sell we simply do not make it again.</p>
        </div>
        <figure className="media">
          <video
            ref={vidRef}
            className="gw-6"
            muted
            loop
            playsInline
            preload="none"
            poster="https://cdn.jsdelivr.net/gh/VanhDc/aura-assets@sable-v2/sable/img/cloth.webp"
            data-src="https://cdn.jsdelivr.net/gh/VanhDc/aura-assets@sable-v2/sable/img/cloth.mp4"
            aria-label="Cloth moving in a studio draft"
          />
          <figcaption className="tag lbl">Melton, 620gsm · 12s loop</figcaption>
        </figure>
      </div>
    </section>
  )
}
