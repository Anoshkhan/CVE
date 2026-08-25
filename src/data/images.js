// Real, freely-licensed photographs from Wikimedia Commons — not the real
// Centre's own photography, but genuine, properly-credited images (not
// generated placeholders). Swap for the Centre's own photos when available,
// keeping the same credit pattern for anything reused under these licenses.

const KARACHI_SKYLINE = {
  src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Karachi_Skyline_1.jpg',
  caption: 'Karachi skyline from the Arabian Sea — Ktownboy103 / Wikimedia Commons (CC0)',
}
const AJRAK = {
  src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ajrak.jpg',
  caption: 'Ajrak, the traditional Sindhi block-print textile — Wikimedia Commons (CC BY-SA 3.0)',
}
const PUNJAB_UNIVERSITY = {
  src: 'https://commons.wikimedia.org/wiki/Special:FilePath/University_of_the_Punjab,_Gujranwala_Campus_2.jpg',
  caption: 'A Pakistani university campus, illustrative — Yahya454 / Wikimedia Commons (CC BY-SA 3.0)',
}
const SUKKUR_BARRAGE = {
  src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sukkur_Barrage_in_daylight.jpg',
  caption: 'Sukkur Barrage on the Indus River, Sindh — Wikimedia Commons (CC BY-SA 4.0)',
}

export const heroImage = KARACHI_SKYLINE
export const aboutImage = KARACHI_SKYLINE

export const homeGallery = [KARACHI_SKYLINE, AJRAK, PUNJAB_UNIVERSITY, SUKKUR_BARRAGE]

export const youthImages = [PUNJAB_UNIVERSITY, AJRAK, KARACHI_SKYLINE]

export const educationImage = PUNJAB_UNIVERSITY

export const digitalImage = KARACHI_SKYLINE

export const communityImages = [AJRAK, SUKKUR_BARRAGE, KARACHI_SKYLINE]

export const rehabImage = SUKKUR_BARRAGE

export const civilSocietyImage = PUNJAB_UNIVERSITY

export const mediaGallery = [KARACHI_SKYLINE, AJRAK, SUKKUR_BARRAGE, PUNJAB_UNIVERSITY]

// Karachi's districts and Sukkur get a real, place-specific photo; every
// other district reuses the Ajrak image as general Sindh imagery (it isn't
// specific to those districts — flagged as such in the UI caption).
export const districtImages = {
  'Karachi South': KARACHI_SKYLINE.src,
  'Karachi Central': KARACHI_SKYLINE.src,
  'Karachi East': KARACHI_SKYLINE.src,
  'Karachi West': KARACHI_SKYLINE.src,
  Korangi: KARACHI_SKYLINE.src,
  Malir: KARACHI_SKYLINE.src,
  Keamari: KARACHI_SKYLINE.src,
  Sukkur: SUKKUR_BARRAGE.src,
  DEFAULT: AJRAK.src,
}
