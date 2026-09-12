export default function Hero() {
  return (
    <section id="hero" className="hero wrap" aria-labelledby="hero-word">
      <p className="kicker lbl mut seq">Considered essentials in monochrome</p>

      <div className="stage" id="stage">
        <h1 className="word" id="hero-word" data-speed="0.14">
          <span className="seq seq--clip"><span className="ln">Trendy</span><span className="ln">Attire</span></span>
        </h1>

        <img
          className="model gw-4"
          data-speed="-0.06"
          data-scale="0.00006"
          src="https://cdn.jsdelivr.net/gh/VanhDc/aura-assets@sable-v2/sable/img/model.png"
          width={900}
          height={1400}
          fetchPriority="high"
          alt="Model walking in an oversized black coat, cut out on transparency"
        />

        <p className="c tl lbl seq">Fashion that moves with you</p>
        <p className="c br lbl seq">Autumn collection 2026</p>
      </div>

      <div className="cta seq">
        <a className="btn" href="#shop">Shop the collection <span className="ar" aria-hidden="true">→</span></a>
        <span className="mid">
          <a className="tlink" href="#cats">Explore new in</a>
          <span className="cue lbl mut" aria-hidden="true"><span className="bar"></span>Scroll</span>
        </span>
      </div>
    </section>
  )
}
