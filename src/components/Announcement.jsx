export default function Announcement() {
  return (
    <div className="ann" aria-label="Store information">
      <div className="track">
        <div className="grp">
          <p className="it lbl">
            <span>Free delivery over ₹1,499 in Pharenda</span>
            <span className="sl" aria-hidden="true">/</span>
            <span>Limited runs, never restocked</span>
            <span className="sl" aria-hidden="true">/</span>
            <span>7 day exchange in store</span>
            <span className="sl" aria-hidden="true">/</span>
            <span>New stock every Friday, 11:00 IST</span>
          </p>
        </div>
        <div className="grp" aria-hidden="true">
          <p className="it lbl">
            <span>Free delivery over ₹1,499 in Pharenda</span>
            <span className="sl">/</span>
            <span>Limited runs, never restocked</span>
            <span className="sl">/</span>
            <span>7 day exchange in store</span>
            <span className="sl">/</span>
            <span>New stock every Friday, 11:00 IST</span>
          </p>
        </div>
      </div>
    </div>
  )
}
