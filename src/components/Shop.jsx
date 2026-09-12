import { useState } from 'react'

const products = [
  {
    id: 'overshirt',
    name: 'Boxy Overshirt',
    meta: 'Cotton twill, 340gsm',
    price: 1890,
    priceLabel: '₹1,890',
    img: 'https://cdn.jsdelivr.net/gh/VanhDc/aura-assets@sable-v2/sable/img/p-overshirt.webp',
    alt: 'Boxy overshirt in heavy cotton twill',
  },
  {
    id: 'tee',
    name: 'Heavy Weight Tee',
    meta: 'Loopback jersey, 320gsm',
    price: 690,
    priceLabel: '₹690',
    img: 'https://cdn.jsdelivr.net/gh/VanhDc/aura-assets@sable-v2/sable/img/p-tee.webp',
    alt: 'Heavy weight t-shirt in bone cotton',
  },
  {
    id: 'cardigan',
    name: 'Ribbed Cardigan',
    meta: 'Lambswool, Srinagar',
    price: 2290,
    priceLabel: '₹2,290',
    img: 'https://cdn.jsdelivr.net/gh/VanhDc/aura-assets@sable-v2/sable/img/p-cardigan.webp',
    alt: 'Ribbed lambswool cardigan in charcoal',
  },
  {
    id: 'knit',
    name: 'Fisherman Knit',
    meta: 'Undyed wool, 7 gauge',
    price: 2490,
    priceLabel: '₹2,490',
    img: 'https://cdn.jsdelivr.net/gh/VanhDc/aura-assets@sable-v2/sable/img/p-knit.webp',
    alt: 'Fisherman knit in undyed wool',
  },
]

function Card({ product, onAdd }) {
  const [fav, setFav] = useState(false)
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    onAdd(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1300)
  }

  return (
    <article className="card rv">
      <div className="shot">
        <img className="gw-5" src={product.img} alt={product.alt} width={900} height={1200} loading="lazy" />
        <button
          className="fav"
          type="button"
          aria-pressed={fav}
          aria-label={`${fav ? 'Remove' : 'Save'} ${product.name} ${fav ? 'from' : 'to'} favourites`}
          onClick={() => setFav((v) => !v)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.5 3.8 12.6a5 5 0 0 1 7.1-7l1.1 1.1 1.1-1.1a5 5 0 0 1 7.1 7Z" /></svg>
        </button>
        <button
          className={`add ${added ? 'ok' : ''}`}
          type="button"
          onClick={handleAdd}
          aria-label={`Add ${product.name} to bag`}
        >
          {added ? 'Added ✓' : 'Add to bag'}
        </button>
      </div>
      <div className="meta">
        <div><h3>{product.name}</h3><p className="lbl cat-lbl">{product.meta}</p></div>
        <p className="pr num tabular-nums">{product.priceLabel}</p>
      </div>
    </article>
  )
}

export default function Shop({ onAdd }) {
  return (
    <section id="shop" className="shop wrap" aria-labelledby="shop-h">
      <div className="shead">
        <h2 id="shop-h" className="dsp rv" style={{ fontSize: 'clamp(28px,4.2vw,62px)' }}>Best of Trendy Attire</h2>
        <a className="tlink rv" href="#">View all <span className="ar" aria-hidden="true">→</span></a>
      </div>

      <div className="grid-4">
        {products.map((p) => (
          <Card key={p.id} product={p} onAdd={onAdd} />
        ))}
      </div>

      <p className="lbl mut rv" style={{ paddingTop: 'clamp(18px,2.4vw,30px)', maxWidth: '52ch' }}>
        Four of the season&apos;s pieces. Shirts 38 to 46, knitwear S to XXL, cut one size generous.
      </p>
    </section>
  )
}
