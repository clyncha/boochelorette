import { useState } from 'react'
import { Check, Sparkles, WandSparkles } from 'lucide-react'

import { packing } from './info'

export default function Packing() {
  const [checked, setChecked] = useState([])
  const togglePack = (item) =>
    setChecked((current) =>
      current.includes(item) ? current.filter((x) => x !== item) : [...current, item],
    )

  return (
    <>
      <div className="packing-heading">
        <span className="eyebrow">DON’T GET CAUGHT UNPREPARED</span>
        <h2>
          Pack your <em>boo-bag.</em>
        </h2>
        <p>Tap each item as it gets summoned into your suitcase.</p>
      </div>

      <div className="packing-card">
        <div className="packing-progress">
          <span>YOUR HAUNTING CHECKLIST</span>
          <span>
            {checked.length} / {packing.length} READY
          </span>
        </div>
        <div className="progress-bar">
          <div style={{ width: `${(checked.length / packing.length) * 100}%` }} />
        </div>
        {packing.map((item) => (
          <label
            className={`packing-item ${checked.includes(item) ? 'is-checked' : ''}`}
            key={item}
          >
            <input
              type="checkbox"
              checked={checked.includes(item)}
              onChange={() => togglePack(item)}
            />
            <span className="custom-check">{checked.includes(item) && <Check size={13} />}</span>
            <span>{item}</span>
            <Sparkles className="item-sparkle" size={15} />
          </label>
        ))}
        {checked.length === packing.length && (
          <div className="all-packed">
            <WandSparkles size={16} />
            You’re ready to raise a little hell. ✦
          </div>
        )}
      </div>
    </>
  )
}
