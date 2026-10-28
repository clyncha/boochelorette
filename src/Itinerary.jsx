import { schedule } from "./info"

export default function Itinerary() {

  const timeline = Object.entries(schedule).map(([key, value]) => (
    <section key={key}>
      <h2>{key}</h2>
      {value.map(({ detail, icon: Icon, title, time }) => (
        <article className="timeline-item" key={title}>
          <div className="timeline-icon">
            <Icon size={20} />
          </div>

          <div className="timeline-copy">
            <span>{time}</span>
            <h3>{title}</h3>
            <p>{detail}</p>
          </div>

          <span className="timeline-star">✦</span>
        </article>
      ))}
    </section>
  ))

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
          {timeline}
        </div>
      </div>
    </>
  )
}
