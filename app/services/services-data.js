// ─────────────────────────────────────────────────────────────────────────
// Service catalogue — single source of truth for the /services/[slug] pages
// AND the homepage cards' "Details" links.
//
//   booking.url  → GHL hosted booking page. The "Book Now" button forwards
//                  here in a new tab. We deliberately do NOT iframe this:
//                  payment providers break inside a third-party iframe, so
//                  scheduling AND payment both run on GHL's own domain.
//   payment.url  → OPTIONAL. Only set this if a service needs a checkout link
//                  separate from its booking flow; it renders a secondary
//                  "Pay Separately" button. Leave '' for the normal case
//                  where GHL collects payment during booking.
// ─────────────────────────────────────────────────────────────────────────

export const SERVICES = {
  'discovery-call': {
    slug: 'discovery-call',
    name: 'Free Discovery Call & 7 Day Free Hypno Audios Access',
    kind: 'Free Introduction',
    featured: false,
    isFree: true, // hides the payment step — nothing to pay for
    metaPrimary: '15 minutes',
    price: 'Free',
    format: 'Virtual',
    delivery: 'Online',
    tagline: 'A gentle doorway into your transformation.',
    body: [
      'A 15-minute conversation with either Dr. Travis and Michelle to explore what’s showing up for you, what outcomes you’re seeking, and whether HypnoAlchemy® is the right fit.',
      'Once you book, you will automatically receive your 7 day free trial to our HypnoAlchemy Audio store including some of the following audios and more:',
    ],
    includes: [
      'Quit Smoking',
      'Free From Stress & Worry',
      'Successful Attitude',
      'Increasing Self Confidence & Self Esteem',
      'Pain Management',
      'Improving Your Memory',
      'Getting over Grief',
      'Increasing Intimacy',
      'The Mirror Within',
      'The Dark Room',
      'The Devine',
    ],
    outcome: 'No pressure — just clarity, insight, and your next step.',
    booking: { url: 'https://api.leadconnectorhq.com/widget/booking/5pCc1mvmVrJq1IJEjGl0' },
    payment: { url: '' },
  },

  'awareness-session': {
    slug: 'awareness-session',
    name: 'Awareness Session',
    kind: 'Single Session',
    featured: true,
    metaPrimary: '30 minutes',
    price: '$95',
    format: 'Virtual',
    delivery: 'Online',
    tagline: 'See the pattern clearly — maybe for the first time.',
    body: [
      'A focused, 30-minute session with your choice of Dr. Travis or Michelle.',
      'We identify the Core and Shadow patterns driving your current emotional loop, giving you clarity on what’s happening beneath the surface.',
    ],
    includes: [],
    outcome: 'Perfect for your first step into subconscious awareness.',
    booking: { url: 'https://api.leadconnectorhq.com/widget/booking/PQfmhqaLbEgP9UsLmoFj' },
    payment: { url: '' },
  },

  'dual-guidance': {
    slug: 'dual-guidance',
    name: 'Dual Guidance Session (Duo)',
    kind: 'Single Session',
    featured: false,
    metaPrimary: '60 minutes',
    price: '$195',
    format: 'Virtual',
    delivery: 'Online',
    tagline: 'Two practitioners. One subconscious breakthrough.',
    body: [
      'A full-hour HypnoAlchemy® session with both Dr. Travis and Michelle working with you simultaneously.',
      'We uncover the emotional imprint at the root of the pattern and begin the recoding process.',
    ],
    includes: [],
    outcome: 'This session provides deeper insight, faster clarity, and powerful internal shifts.',
    booking: { url: 'https://api.leadconnectorhq.com/widget/booking/jPtACzLGjlsUisDhLKCu' },
    payment: { url: '' },
  },

  'constellation-code': {
    slug: 'constellation-code',
    name: 'Constellation Code Immersion',
    kind: 'Single Session',
    featured: true,
    metaPrimary: '90 minutes',
    price: '$395',
    format: 'Virtual',
    delivery: 'Online',
    tagline: 'The complete identity recode.',
    body: [
      'Our deepest session — a full HypnoAlchemy® immersion combining subconscious rewiring, somatic release, and persona constellation mapping.',
      'We trace the pattern back to its origin, rewrite the emotional script, and integrate a new identity baseline.',
      'This is the session for profound, lasting transformation.',
    ],
    includes: [
      'Personalized hypnotic audio',
      'Your Constellation Code map',
      'Full integration plan + next-step blueprint',
    ],
    outcome: 'This is the session for profound, lasting transformation.',
    booking: { url: 'https://api.leadconnectorhq.com/widget/booking/pgn0qw5M0a80QJCSSzhL' },
    payment: { url: '' },
  },

  'identity-realignment': {
    slug: 'identity-realignment',
    name: 'Identity Realignment',
    kind: 'Transformational Container',
    featured: true,
    metaPrimary: '4 sessions • 60 mins each',
    price: '$1,200',
    format: 'Virtual',
    delivery: 'Online',
    tagline: 'A focused transformation container designed to stabilize and reorganize your internal identity.',
    body: [
      'This package includes four 60-minute HypnoAlchemy® sessions, each working directly with the subconscious patterns influencing your emotional responses, decisions, and sense of self.',
      'Across the container, we identify the personas running your current patterns, unwind the emotional imprints beneath them, and begin shifting the identity structure holding those loops in place.',
      'Each session includes a personalized Constellation Map, giving you a weekly blueprint of the personas, patterns, and internal shifts emerging as realignment unfolds.',
    ],
    includes: [],
    outcome: 'Clients choose this container when they’re ready to stop managing patterns — and start changing the identity beneath them.',
    booking: { url: 'https://api.leadconnectorhq.com/widget/booking/AYSGeZ6cSOjsl6DZNQWR' },
    payment: { url: '' },
  },

  'identity-reconstruction': {
    slug: 'identity-reconstruction',
    name: 'Identity Reconstruction',
    kind: 'Transformational Container',
    featured: true,
    metaPrimary: '10 sessions • 60 mins each',
    price: '$3,000',
    format: 'Virtual',
    delivery: 'Online',
    tagline: 'A comprehensive identity-level reconstruction for complex or long-standing patterns.',
    body: [
      'This container includes ten 90-minute HypnoAlchemy® sessions designed to fully reorganize the internal architecture that has been shaping your life over time.',
      'Rather than targeting a single pattern, this work supports layered transformation — allowing multiple identity imprints, survival structures, and subconscious narratives to be unwound and rebuilt coherently.',
      'Each session includes a personalized Constellation Map, creating an evolving blueprint that tracks your transformation, integration, and embodiment across the entire arc of work.',
    ],
    includes: [],
    outcome: 'Clients choose this container when they’re ready to rebuild their identity from the inside out — not just shift one pattern, but fundamentally change how they experience themselves and their life.',
    booking: { url: 'https://api.leadconnectorhq.com/widget/booking/PdT9Q6baoPFNRVPLVK88' },
    payment: { url: '' },
  },
};

export const SERVICE_SLUGS = Object.keys(SERVICES);
