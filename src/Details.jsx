import { useState } from 'react';
import { details } from './info';
import { CalendarDays, Check, Copy, Ghost, MapPin } from 'lucide-react';

export default function Details() {
  const [copied, setCopied] = useState(false)
  const copyDetails = async () => {
    const details =  `BOOCHELORETTE ✦ ${details.dates} ✦ `
    try {
      await navigator.clipboard.writeText(details)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <>
      <div className="section-intro">
        <span className="eyebrow">YOUR SUMMONING, IN WRITING</span>
        <h2>
          Save your
          <br />
          <em>boo-date.</em>
        </h2>
        <p>Gather your favorite weirdos for wine, wheels, warm fires, and hot-tub after-hours.</p>
        <button className="button button-outline" onClick={copyDetails}>
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied ? 'Details copied!' : 'Copy party details'}
        </button>
      </div>
      <div className="event-card">
        <div className="card-top">
          <span>YOU’RE INVITED</span>
          <Ghost size={20} />
        </div>
        <div className="event-name">Courtney’s Boochelorette</div>
        <div className="event-subtitle">
          A wickedly good weekend for Courtney, our favorite bride-to-boo.
        </div>
        <div className="event-facts">
          <div>
            <CalendarDays />
            <div>
              <small>WHEN</small>
              <strong>{details.dates}</strong>
              <span>{details.days}</span>
            </div>
          </div>
          <div>
            <MapPin />
            <div>
              <small>WHERE</small>
              <strong>{details.location}</strong>
              <span>Join us for a Boo-tiful spa retreat to celebrate Courtney!</span>
            </div>
          </div>
        </div>
        <div className="card-stamp">
          <span>LOVE</span>
          <span>BEYOND</span>
          <span>THE GRAVE</span>
        </div>
        <div className="card-bottom">NO BAD VIBES. ONLY BOO VIBES.</div>
      </div>
    </>
  )
}
