// Clinical case data. Replace the placeholder entries with real cases.
//
// Each case:
//   id           unique string
//   title        shown on the carousel card
//   previewImage image shown on the carousel card
//   description  short text shown under the card title
//   images       [{ src, caption }]  one entry per image in the viewer
//
// Real entry example:
//   {
//     id: 'case-anterior-restoration',
//     title: 'Your case title',
//     previewImage: '/images/cases/case-1/preview.jpg',
//     description: 'Short description.',
//     images: [
//       { src: '/images/cases/case-1/1.jpg', caption: 'Caption for image 1' },
//       { src: '/images/cases/case-1/2.jpg', caption: 'Caption for image 2' },
//     ],
//   }

const placeholderImage = (label) =>
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">` +
      `<rect width="1200" height="800" fill="#16221e"/>` +
      `<text x="600" y="410" text-anchor="middle" font-family="Arial, sans-serif" ` +
      `font-size="34" letter-spacing="6" fill="#6f7f79">${label}</text></svg>`,
  )

// Temporary placeholder generator. Delete together with the placeholder cases.
const placeholderCase = (number, imageCount) => {
  const n = String(number).padStart(2, '0')
  return {
    id: `placeholder-case-${n}`,
    title: `Case ${n} · Placeholder title`,
    previewImage: placeholderImage(`CASE ${n} · PREVIEW`),
    description: 'Placeholder description. Replace with a short case summary.',
    images: Array.from({ length: imageCount }, (_, i) => ({
      src: placeholderImage(`CASE ${n} · IMAGE ${i + 1}`),
      caption: `Placeholder caption for case ${n}, image ${i + 1} of ${imageCount}`,
    })),
  }
}

export const clinicalCases = [
  placeholderCase(1, 4),
  placeholderCase(2, 3),
  placeholderCase(3, 2),
  placeholderCase(4, 5),
  placeholderCase(5, 3),
]