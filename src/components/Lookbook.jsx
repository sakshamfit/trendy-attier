export default function Lookbook() {
  return (
    <section id="look" className="look wrap" aria-labelledby="look-h">
      <div className="shead">
        <h2 id="look-h" className="dsp rv" style={{ fontSize: 'clamp(28px,4.2vw,62px)' }}>Lookbook</h2>
        <p className="lbl mut rv">AW26 · Shot outside the shop, Anand Nagar</p>
      </div>
      <div className="look-grid">
        <figure className="lg-a">
          <div className="fr" data-scrub><img className="gw-8" src="https://cdn.jsdelivr.net/gh/VanhDc/aura-assets@sable-v2/sable/img/look1.webp" alt="Long overcoat over a wide trouser" width={1000} height={1250} loading="lazy" /></div>
          <figcaption><span className="ix lbl">01</span><span className="cp lbl">Overcoat, wide trouser</span></figcaption>
        </figure>
        <figure className="lg-b">
          <div className="fr" data-scrub><img className="gw-8" src="https://cdn.jsdelivr.net/gh/VanhDc/aura-assets@sable-v2/sable/img/look2.webp" alt="Knit layered under an overshirt, photographed in a doorway" width={1400} height={900} loading="lazy" /></div>
          <figcaption><span className="ix lbl">02</span><span className="cp lbl">Knit under overshirt</span></figcaption>
        </figure>
        <figure className="lg-c">
          <div className="fr" data-scrub><img className="gw-8" src="https://cdn.jsdelivr.net/gh/VanhDc/aura-assets@sable-v2/sable/img/cat-women.webp" alt="Second fitting of the season's tailoring block" width={900} height={900} loading="lazy" /></div>
          <figcaption><span className="ix lbl">03</span><span className="cp lbl">Second fitting, tailoring block</span></figcaption>
        </figure>
      </div>
    </section>
  )
}
