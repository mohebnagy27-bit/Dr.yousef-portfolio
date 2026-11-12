// All replaceable content for the hero lives here.
// Replace the placeholder values; no component changes needed.

export const profile = {
  name: 'Dr. Your Name',
  title: 'Dentist | Digital Dentistry',
  eyebrow: 'Clinical Dentistry · Digital Dentistry · Exocad',

  // Approximately 3–4 sentences. Placeholder: edit freely.
  intro:
    'I practise dentistry where clinical judgement meets digital precision. ' +
    'Alongside chairside care, I use Exocad to plan and design restorations in a fully digital workflow. ' +
    'My aim is simple: treatment that is carefully considered, accurately executed, and built to last. ' +
    'This portfolio brings together my clinical work and my digital dentistry projects.',

  portrait: {
    // Put your photo in /public/images/ and change this path, e.g. '/images/dentist-portrait.jpg'
    src: '/images/portrait-placeholder.svg',
    alt: 'Portrait of Dr. Your Name',
    width: 800, // intrinsic size, helps avoid layout shift
    height: 1000,
  },

  // Optional links shown under the introduction. Leave empty to hide.
  // Example: { label: 'LinkedIn', href: 'https://linkedin.com/in/your-profile' }
  links: [],
}
