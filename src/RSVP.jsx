
import { useState } from 'react'
import { Ghost, Heart } from 'lucide-react'

export default function RSVP() {
  const [name, setName] = useState('')
  const [rsvp, setRsvp] = useState(false)

  const handleRSVP = (e) => {
    e.preventDefault()

    const guestName = name.trim()
    if (!guestName) return

    const subject = encodeURIComponent('New Boochelorette RSVP!')
    const body = encodeURIComponent(
      `${guestName} is RSVPing to the party!\n\nCount them in, boo! 👻`
    )

    window.location.href =
      `mailto:verticalging@gmail.com?subject=${subject}&body=${body}`

    setRsvp(true)
  }

  return (
    <>
      <div className="rsvp-moon">☾</div>

      <div className="rsvp-content">
        <span className="eyebrow">THE COVEN IS CALLING</span>

        <h2>
          Will you be
          <br />
          <em>there, witch?</em>
        </h2>

        <p>Courtney needs her favorite ghouls by her side.</p>

        {!rsvp ? (
          <form className="rsvp-form" onSubmit={handleRSVP}>
            <label htmlFor="guest-name" className="rsvp-label">
              What should we call you, ghoul?
            </label>

            <input
              id="guest-name"
              className="rsvp-input"
              type="text"
              placeholder="Your name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              maxLength={100}
            />

            <button
              className="button button-light rsvp-button"
              type="submit"
            >
              Count me in, boo!
              <Heart size={16} fill="currentColor" />
            </button>
          </form>
        ) : (
          <p className="rsvp-confirm">
            Your summons is ready! Finish sending your RSVP
            in your email app. See you there, ghoul! ✦
          </p>
        )}

        <span className="rsvp-small">
          NO TRICKS, JUST TREATS ✦
        </span>
      </div>

      <div className="rsvp-ghost">
        <Ghost size={100} strokeWidth={0.8} />
      </div>
    </>
  )
}