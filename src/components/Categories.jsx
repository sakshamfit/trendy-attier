export default function Categories() {
  return (
    <section id="cats" className="cats on-ink" aria-labelledby="cats-h">
      <div className="wrap">
        <div className="head">
          <h2 id="cats-h" className="dsp-2 rv">Three rooms<br />of the same<br />colour</h2>
          <p className="lbl mut rv">Menswear · Pharenda, Uttar Pradesh</p>
        </div>
        <div className="cat-grid">
          <a className="cat rv" href="#shop">
            <span className="th"><img className="gw-6" src="https://cdn.jsdelivr.net/gh/VanhDc/aura-assets@sable-v2/sable/img/cat-men.webp" alt="" width={600} height={600} loading="lazy" /><span className="ix lbl">01</span></span>
            <h3>Outerwear</h3>
            <p>Coats and overshirts, cut long, worn closed.</p>
            <span className="go lbl lbl--700">Shop Outerwear <span className="ar" aria-hidden="true">→</span></span>
          </a>
          <a className="cat rv" href="#shop">
            <span className="th"><img className="gw-6" src="https://cdn.jsdelivr.net/gh/VanhDc/aura-assets@sable-v2/sable/img/cat-women.webp" alt="" width={600} height={600} loading="lazy" /><span className="ix lbl">02</span></span>
            <h3>Knitwear</h3>
            <p>Wool and cotton, knitted heavy on purpose.</p>
            <span className="go lbl lbl--700">Shop Knitwear <span className="ar" aria-hidden="true">→</span></span>
          </a>
          <a className="cat rv" href="#shop">
            <span className="th"><img className="gw-6" src="https://cdn.jsdelivr.net/gh/VanhDc/aura-assets@sable-v2/sable/img/cat-tailoring.webp" alt="" width={600} height={600} loading="lazy" /><span className="ix lbl">03</span></span>
            <h3>Tailoring</h3>
            <p>Unstructured jackets. Working buttonholes.</p>
            <span className="go lbl lbl--700">Shop Tailoring <span className="ar" aria-hidden="true">→</span></span>
          </a>
        </div>
      </div>
    </section>
  )
}
