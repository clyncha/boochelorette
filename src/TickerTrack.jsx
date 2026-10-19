import { useState } from 'react'

export default function TickerTrack() {
  return (
    <div className="ticker-track">
      { Array.from({ length: 4 }, (_, i) => (
        <span key={i}>
          TILL DEATH DO US PARTY <b>✦</b> GHOULS JUST WANNA HAVE FUN <b>✦</b> LOVE YOU TO THE
          TOMB <b>✦</b>
        </span>
      ))}
    </div>
  )
}
