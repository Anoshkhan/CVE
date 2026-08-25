// Illustrative sample content for the Research & Knowledge Hub demo.
// Replace with real publications once the Centre's library is populated.
export const publications = [
  {
    title: 'Youth Radicalisation Pathways in Urban Karachi',
    district: 'Karachi',
    theme: 'Youth',
    year: '2026',
    type: 'Research paper',
    desc: 'A district-level look at push and pull factors among 18–24 year-olds in three union councils.',
  },
  {
    title: 'Digital Extremism & Platform Migration in Sindh',
    district: 'Karachi',
    theme: 'Digital extremism',
    year: '2025',
    type: 'Policy brief',
    desc: 'How recruitment activity shifts across platforms after moderation actions, and what that means for counter-messaging.',
  },
  {
    title: 'Hyderabad District CVE Profile',
    district: 'Hyderabad',
    theme: 'Community cohesion',
    year: '2025',
    type: 'District profile',
    desc: 'Baseline social-cohesion indicators, active peace committees and referral pathways for Hyderabad district.',
  },
  {
    title: 'Reintegration Outcomes: A Sindh Situation Report',
    district: 'Sukkur',
    theme: 'Rehabilitation',
    year: '2024',
    type: 'Situation report',
    desc: 'Early outcomes from vocational-training-linked reintegration support in Sukkur division.',
  },
  {
    title: 'Mapping Vulnerability Indicators — Larkana Division',
    district: 'Larkana',
    theme: 'Community cohesion',
    year: '2025',
    type: 'District profile',
    desc: 'Non-sensitive, aggregated vulnerability and resilience indicators mapped at tehsil level.',
  },
  {
    title: 'Counter-Narrative Effectiveness Among Sindh Youth',
    district: 'Karachi',
    theme: 'Youth',
    year: '2024',
    type: 'Research paper',
    desc: 'A comparative study of three counter-narrative campaign formats and youth engagement rates.',
  },
  {
    title: 'Women-Led Peacebuilding: A Baseline Study',
    district: 'Hyderabad',
    theme: 'Women & family',
    year: '2025',
    type: 'Research paper',
    desc: "Baseline mapping of women's community organisations already active in local peacebuilding roles.",
  },
  {
    title: "Teacher Training for Inclusive Classrooms — Sukkur Pilot",
    district: 'Sukkur',
    theme: 'Education',
    year: '2026',
    type: 'Situation report',
    desc: 'Findings from a pilot teacher-training module on recognising harmful narratives and conflict resolution.',
  },
]

export const districtNames = [...new Set(publications.map((p) => p.district))]
export const themes = [...new Set(publications.map((p) => p.theme))]
export const years = [...new Set(publications.map((p) => p.year))].sort().reverse()
export const types = [...new Set(publications.map((p) => p.type))]
