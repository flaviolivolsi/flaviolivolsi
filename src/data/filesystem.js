export default [
  {
    type: 'directory',
    name: 'home',
    children: [
      {
        type: 'directory',
        name: 'flavio',
        children: [
          {
            type: 'directory',
            name: 'music',
            children: [
              {
                type: 'file',
                name: 'Led Zeppelin - Stairway To Heaven.mp3'
              },
              {
                type: 'file',
                name: 'Arctic Monkeys - Cornerstone.mp3'
              },
              {
                type: 'file',
                name: 'Paolo Nutini - Iron Sky.mp3'
              }
            ]
          },
          {
            type: 'directory',
            name: 'docs',
            children: [
              {
                type: 'file',
                name: 'Curriculum Vitae.pdf'
              }
            ]
          }
        ]
      }
    ]
  }
];