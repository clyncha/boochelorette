import { ArrowDown, Ghost } from 'lucide-react'

import Banner from './Banner'
import Details from './Details'
import Itinerary from './Itinerary'
import Packing from './Packing'
import RSVP from './RSVP'
import TickerTrack from "./TickerTrack"

export default function App() {
  return (
    <main>
      <div className="grain" aria-hidden="true" />
      <nav className="nav wrap">
        <a className="brand" href="#top">
          <Ghost size={22} strokeWidth={1.7} /> BOOCHELORETTE
        </a>
        <a className="nav-link" href="#details">
          THE DETAILS <ArrowDown size={14} />
        </a>
      </nav>

      <section className="hero wrap" id="top">
        <Banner />
      </section>

      <section className="ticker" aria-label="Party motto">
        <TickerTrack />
      </section>

      <section className="details-section wrap" id="details">
        <Details />
      </section>

      <section className="itinerary-section">
        <Itinerary />
      </section>

      <section className="packing-section wrap">
        <Packing />
      </section>

      <section className="rsvp-section">
        <RSVP />
      </section>

      <footer className="footer wrap">
        <a className="brand" href="#top">
          <Ghost size={19} /> BOOCHELORETTE
        </a>
        <span>MADE WITH LOVE & A LITTLE ectoplasm</span>
        <span>© 2027 — UNTIL DEATH</span>
      </footer>
    </main>
  )
}
