import { Utensils, Heart, Moon, Skull, Sparkles } from 'lucide-react'

const details = {
  days: "Friday to Sunday",
  dates: "April 2-4, 2027",
  location: "McGaheysville, VA",
}

const packing = [
  'Your favorite little black outfit',
  'Cozy PJs, ghostly onesies & campfire vibes',
  'Comfy shoes for the party bus',
  'Wine-night outfit or cozy layers',
  'Swimsuit for the hot tub',
  'A camera-ready smile',
]

const schedule = {
  FRIDAY: [
    {
      detail: 'Drop your bags, claim your crypt, and get cozy with snacks and beverages.',
      icon: Moon,
      time: 'start @ 5:30 PM',
      title: 'Check in, witches',
    },
    {
      detail: 'Pour a glass, settle in, and toast to Courtney.',
      icon: Sparkles,
      time: '6:30 PM',
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
  ],
  SATURDAY: [
    {
      detail: 'Easy going morning with home cooked breakfast.',
      icon: Utensils,
      time: '10:00 AM',
      title: 'Boo-d Morning, Ghouls!',
    },
    {
      detail: 'Round up the coven for a ride full of music and main-character energy.',
      icon: Heart,
      time: '12:00 PM',
      title: 'Party bus, baby',
    },
    {
      detail: 'Cozy fireside chats, stargazing, and a soak under the moon.',
      icon: Skull,
      time: '10:00 PM',
      title: 'Campfire & hot-tub haunt',
    },
  ],
  SUNDAY: [
    {
      detail: 'Brunch out and a farewell',
      icon: Utensils,
      time: '10:00 AM',
      title: 'The Breakfast Séance',
    },
  ],
}

export { details, packing, schedule }
