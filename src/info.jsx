import { useState } from 'react'
import { Heart, Moon, Skull, Sparkles } from 'lucide-react'

const packing = [
  'Your favorite little black outfit',
  'Comfy shoes for the party bus',
  'Wine-night outfit or cozy layers',
  'Swimsuit for the hot tub',
  'A camera-ready smile',
]

const schedule = [
  {
    detail: 'Drop your bags, claim your crypt, and get glam.',
    icon: Moon,
    time: '4:00 PM',
    title: 'Check in, witches',
  },
  {
    detail: 'Pour a glass, settle in, and toast to Courtney.',
    icon: Sparkles,
    time: '6:00 PM',
    title: 'Wine & witchcraft',
  },
  {
    detail: 'Round up the coven for a ride full of music and main-character energy.',
    icon: Heart,
    time: '8:00 PM',
    title: 'Party bus, baby',
  },
  {
    detail: 'Cozy fireside chats, stargazing, and a soak under the moon.',
    icon: Skull,
    time: '10:00 PM',
    title: 'Campfire & hot-tub haunt',
  },
]

export { packing, schedule }
