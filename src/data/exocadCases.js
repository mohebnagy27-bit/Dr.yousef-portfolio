// Digital Dentistry · Exocad case data. Replace the placeholder entries with real cases.
// Add a case by adding one object to the array; no component changes are needed.
//
// Each case:
//   id           unique string
//   title        case title
//   description  short description
//   details      [{ label, value }]  a few relevant facts about the digital work
//   model        the 3D models of this case. Each one is a complete, self-contained HTML page
//                stored in /public and shown inside the 3D area (PRE / POST buttons):
//                  label  short name of the 3D area
//                  pre    path of the PRE HTML file, relative to /public (or null)
//                  post   path of the POST HTML file, relative to /public (or null)

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
    model: {
      label: '3D dental design · Case 01',
      pre: 'exocad/case-01/pre/tohami.html',
      post: 'exocad/case-01/post/tohami.html',
    },
  },
  // {
  //   id: 'exocad-case-02',
  //   title: 'Case 02 · Placeholder title',
  //   description:
  //     'Placeholder description. Replace with a short summary of the digital dentistry work.',
  //   details: [
  //     { label: 'Software', value: 'Exocad' },
  //     { label: 'Case type', value: 'Placeholder' },
  //     { label: 'Workflow', value: 'Placeholder' },
  //   ],
  //   model: {
  //     label: '3D dental design · Case 02',
  //     pre: 'exocad/case-02/pre/index.html',
  //     post: 'exocad/case-02/post/index.html',
  //   },
  // },
  // {
  //   id: 'exocad-case-03',
  //   title: 'Case 03 · Placeholder title',
  //   description:
  //     'Placeholder description. Replace with a short summary of the digital dentistry work.',
  //   details: [
  //     { label: 'Software', value: 'Exocad' },
  //     { label: 'Case type', value: 'Placeholder' },
  //     { label: 'Workflow', value: 'Placeholder' },
  //   ],
  //   model: {
  //     label: '3D dental design · Case 01',
  //     pre: 'exocad/case-03/pre/index.html',
  //     post: 'exocad/case-03/post/index.html',
  //   },
  // },
]