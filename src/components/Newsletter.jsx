import { useState } from 'react'

export default function Newsletter({ onToast }) {
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState({ text: '\u00A0', ok: false })
  const [invalid, setInvalid] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    const val = email.trim()
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)
    if (!ok) {
      setInvalid(true)
      setMsg({ text: 'That address does not look right.', ok: false })
      return
    }
    setInvalid(false)
    setMsg({ text: 'You are on the list. We write before new stock lands.', ok: true })
    setEmail('')
    onToast?.('You are on the list')
  }

  return (
    <section id="signup" className="signup wrap" aria-labelledby="nl-h">
      <div className="nl">
        <p className="lbl mut rv">Drop list</p>
        <h2 id="nl-h" className="dsp rv" style={{ fontSize: 'clamp(36px,6vw,88px)' }}>Two emails<br />a season.</h2>
        <p className="copy rv" style={{ maxWidth: '44ch' }}>Sent the day before new stock is put out, so you get the same start as everyone else. No discount codes, no countdown timers, no re-sends.</p>
        <form id="nl" noValidate data-invalid={invalid ? 'true' : undefined} onSubmit={submit} className="rv">
          <div className="field">
            <label className="sr-only" htmlFor="em">Email address</label>
            <input
              id="em"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="Email address"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (invalid) setInvalid(false)
                if (!msg.ok) setMsg({ text: '\u00A0', ok: false })
              }}
            />
            <button className="go" type="submit" aria-label="Join drop list">Join</button>
          </div>
          <p id="nl-msg" className={`lbl nl-msg ${msg.ok ? 'ok' : ''}`} role="status" aria-live="polite">{msg.text}</p>
        </form>
        <p className="lbl mut rv">Rather just ask? <a className="u" href="tel:+917071960434">+91 70719 60434</a> · <a className="u" href="tel:+917428412394">+91 74284 12394</a></p>
      </div>
    </section>
  )
}
