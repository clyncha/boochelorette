import { useState } from 'react'

import { schedule } from './info'

export default function Itinerary() {
  return (
    <>
      <div className="wrap">
        <div className="center-heading">
          <span className="eyebrow">THE AFTER-DARK AGENDA</span>
          <h2>
            Haunt <em>happens.</em>
          </h2>
          <p>Party bus, wine, campfire, hot tub — Courtney’s kind of magic.</p>
        </div>

        <div className="timeline">
          {schedule.map((item, index) => {
            const Icon = item.icon
            return
            ;<article className="timeline-item" key={item.title}>
              <div className="timeline-index">0{index + 1}</div>
              <div className="timeline-icon">
                <Icon size={20} />
              </div>
              <div className="timeline-copy">
                <span>{item.time}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
              <span className="timeline-star">✦</span>
            </article>
          })}
        </div>
        <p className="schedule-note">
          * Times are spooky placeholders. Swap in your real plans before sharing.
        </p>
      </div>
    </>
  )
}
