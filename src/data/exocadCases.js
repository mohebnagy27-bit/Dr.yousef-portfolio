// Digital Dentistry · Exocad case data. Replace the placeholder entries with real cases.
// Add a case by adding one object to the array; no component changes are needed.
//
// Each case:
//   id           unique string
//   title        case title
//   description  short description
//   details      [{ label, value }]  a few relevant facts about the digital work
//   model        reference to the 3D model:
//                  src    path to the model file (e.g. '/models/case-01.glb'), or null if none yet
//                  label  short name shown in the 3D area

export const exocadCases = [
  {
    id: 'exocad-case-01',
    title: 'Case 01 · Placeholder title',
    description:
      'Placeholder description. Replace with a short summary of the digital dentistry work.',
    details: [
      { label: 'Software', value: 'Exocad' },
      { label: 'Case type', value: 'Placeholder' },
      { label: 'Workflow', value: 'Placeholder' },
    ],
    model: { src: null, label: '3D dental design · Case 01' },
  },
  {
    id: 'exocad-case-02',
    title: 'Case 02 · Placeholder title',
    description:
      'Placeholder description. Replace with a short summary of the digital dentistry work.',
    details: [
      { label: 'Software', value: 'Exocad' },
      { label: 'Case type', value: 'Placeholder' },
      { label: 'Workflow', value: 'Placeholder' },
    ],
    model: { src: null, label: '3D dental design · Case 02' },
  },
  {
    id: 'exocad-case-03',
    title: 'Case 03 · Placeholder title',
    description:
      'Placeholder description. Replace with a short summary of the digital dentistry work.',
    details: [
      { label: 'Software', value: 'Exocad' },
      { label: 'Case type', value: 'Placeholder' },
      { label: 'Workflow', value: 'Placeholder' },
    ],
    model: { src: null, label: '3D dental design · Case 03' },
  },
]