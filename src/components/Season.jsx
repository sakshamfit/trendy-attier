export default function Season() {
  return (
    <section id="season" className="season" aria-labelledby="season-h">
      <div className="split">
        <div className="txt">
          <p className="lbl mut rv">The autumn drop</p>
          <h2 id="season-h" className="dsp rv" style={{ fontSize: 'clamp(44px,8vw,122px)' }}>
            <span className="stack"><span>New</span><span>Vibes</span></span>
          </h2>
          <p className="copy rv">Eleven patterns, sixty-one pieces, one colour story. It is mostly black, partly bone, and built to be worn until it needs repairing.</p>
          <p className="rv"><a className="btn" href="#shop">Shop autumn <span className="ar" aria-hidden="true">→</span></a></p>
          <p className="lbl mut rv">New stock lands Fridays. What sells out stays sold out.</p>
        </div>
        <figure className="art" data-speed="0.04">
          <img className="gw-5" src="https://cdn.jsdelivr.net/gh/VanhDc/aura-assets@sable-v2/sable/img/season.webp" alt="Coat and trousers photographed against a studio wall" width={1200} height={1500} loading="lazy" style={{ '--sc': '1.14' }} />
        </figure>
      </div>
    </section>
  )
}
