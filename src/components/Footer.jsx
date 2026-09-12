export default function Footer() {
  return (
    <footer id="foot" className="foot">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <p className="word-f">Trendy Attire</p>
            <p className="copy" style={{ marginTop: 12, maxWidth: '30ch' }}>Considered essentials in monochrome. Menswear — shirts, knitwear and tailoring, kept in limited runs and fitted at the counter.</p>
            <address className="lbl mut" style={{ fontStyle: 'normal', marginTop: 16, lineHeight: 1.9 }}>
              Behind Ambedkar Tirha<br />Anand Nagar, Pharenda<br />Uttar Pradesh 273155
            </address>
            <p className="lbl" style={{ marginTop: 14, lineHeight: 2 }}>
              <a className="u" href="https://www.google.com/maps/search/?api=1&query=Trendy+Attire%2C+Anand+Nagar%2C+Pharenda%2C+Uttar+Pradesh+273155" target="_blank" rel="noopener">★ 5.0 · 6 Google reviews</a><br />
              <a className="u" href="https://www.google.com/maps/dir/?api=1&destination=Trendy%20Attire%2C%20Anand%20Nagar%2C%20Pharenda%2C%20Uttar%20Pradesh%20273155" target="_blank" rel="noopener">Get directions</a>
            </p>
          </div>
          <nav className="foot-col" aria-label="Shop">
            <p className="lbl">Shop</p>
            <ul className="copy">
              <li><a className="u" href="#cats">Outerwear</a></li>
              <li><a className="u" href="#cats">Knitwear</a></li>
              <li><a className="u" href="#cats">Tailoring</a></li>
              <li><a className="u" href="#look">Archive</a></li>
              <li><a className="u" href="#">Gift card</a></li>
            </ul>
          </nav>
          <nav className="foot-col" aria-label="Help">
            <p className="lbl">Help</p>
            <ul className="copy">
              <li><a className="u" href="#svc">Delivery</a></li>
              <li><a className="u" href="#svc">Exchanges</a></li>
              <li><a className="u" href="#">Size guide</a></li>
              <li><a className="u" href="#svc">Alterations</a></li>
              <li><a className="u" href="#">Care</a></li>
            </ul>
          </nav>
          <nav className="foot-col" aria-label="Visit">
            <p className="lbl">Visit</p>
            <ul className="copy">
              <li><a className="u" href="tel:+917071960434">+91 70719 60434</a></li>
              <li><a className="u" href="tel:+917428412394">+91 74284 12394</a></li>
              <li><a className="u" href="https://www.google.com/maps/search/?api=1&query=Trendy+Attire%2C+Anand+Nagar%2C+Pharenda%2C+Uttar+Pradesh+273155" target="_blank" rel="noopener">Google listing</a></li>
              <li><a className="u" href="https://www.google.com/maps/dir/?api=1&destination=Trendy%20Attire%2C%20Anand%20Nagar%2C%20Pharenda%2C%20Uttar%20Pradesh%20273155" target="_blank" rel="noopener">Directions</a></li>
            </ul>
            <p className="lbl mut" style={{ marginTop: 12, lineHeight: 1.8 }}>Opening hours are not published online, so call before you travel.</p>
            <div style={{ marginTop: 14, display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              <a className="btn btn--sm" href="tel:+917071960434">Call now</a>
              <a className="btn btn--ghost btn--sm" href="https://www.google.com/maps/dir/?api=1&destination=Trendy%20Attire%2C%20Anand%20Nagar%2C%20Pharenda%2C%20Uttar%20Pradesh%20273155" target="_blank" rel="noopener">Directions →</a>
            </div>
          </nav>
        </div>
        <div className="foot-bar lbl">
          <span>© 2026 Trendy Attire · Men&apos;s clothing store, Pharenda, Uttar Pradesh</span>
          <span className="grp"><span>Prices in ₹, inclusive of taxes</span><span>GSTIN on request</span><a className="u" href="#hero">Back to top ↑</a></span>
        </div>
      </div>
    </footer>
  )
}
