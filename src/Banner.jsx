import { useState } from 'react'
import { ArrowDown, Sparkles } from 'lucide-react'

export default function Banner() {
  return (
    <>
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="tiny-star">✦</span> A SPOOKY LITTLE SEND-OFF{' '}
          <span className="tiny-star">✦</span>
        </div>
        <h1>
          Til <em>death</em>
          <br />
          do us <span className="underline-word">party.</span>
        </h1>
        <p className="hero-text">
          Courtney’s getting hitched. One coven, one haunted weekend, and memories that’ll haunt us
          forever.
        </p>
        <div className="hero-actions">
          <a className="button button-light" href="#details">
            Enter the crypt <ArrowDown size={16} />
          </a>
          <span className="micro-note">
            <Sparkles size={14} /> black attire encouraged
          </span>
        </div>
      </div>
      <div className="ghost-stage" aria-label="Illustration of a ghost in a black veil">
        <div className="moon-halo" />
        <span className="orbit orbit-one">✦</span>
        <span className="orbit orbit-two">✧</span>
        <span className="orbit orbit-three">·</span>
        <div className="ghost-illustration">
          <div className="veil" />
          <div className="ghost-body">
            <div className="ghost-eyes">
              <i />
              <i />
            </div>
            <div className="ghost-mouth" />
          </div>
          <div className="ghost-bow">♡</div>
        </div>
        <div className="stage-caption">THE BRIDE-TO-BOO</div>
        <span className="floating-note note-left">boo!</span>
        <span className="floating-note note-right">♥</span>
      </div>
      <div className="hero-bottom">
        <span>VOL. I — THE FINAL HAUNT</span>
        <span>EST. FOREVER & EVER</span>
      </div>
    </>
  )
}
