import { useState } from 'react'
import { Ghost, Heart } from 'lucide-react'

export default function RSVP() {
  const [rsvp, setRsvp] = useState(false)

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

        <button className="button button-light rsvp-button" onClick={() => setRsvp(!rsvp)}>
          {rsvp ? 'You’re on the guest list ✦' : 'Count me in, boo!'}
          <Heart size={16} fill={rsvp ? 'currentColor' : 'none'} />
        </button>

        {rsvp && (
          <p className="rsvp-confirm">
            Consider yourself summoned. Send your RSVP to the party organizer to make it official!
          </p>
        )}
        <span className="rsvp-small">
          RSVP BUTTON IS A DEMO — ADD YOUR ORGANIZER’S CONTACT HERE
        </span>
      </div>
      <div className="rsvp-ghost">
        <Ghost size={100} strokeWidth={0.8} />
      </div>
    </>
  )
}
