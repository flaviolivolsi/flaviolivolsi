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
            name: 'books',
            children: [
              {
                type: 'file',
                name: 'Alexandre Dumas - The Count of Monte Cristo.epub'
              },
              {
                type: 'file',
                name: 'Ken Follett - The Pillars of the Earth.epub'
              },
              {
                type: 'file',
                name: 'Haruki Murakami - Norwegian Wood.epub'
              },
              {
                type: 'file',
                name: 'William Golding - Lord of the Flies.epub'
              },
              {
                type: 'file',
                name: 'J.D. Salinger - Catcher in the Rye.epub'
              },
              {
                type: 'file',
                name: 'Carlos Ruiz Zafón - The Shadow of the Wind.epub'
              },
              {
                type: 'file',
                name: 'Oscar Wilde - The Picture of Dorian Gray.epub'
              }
            ]
          },
          {
            type: 'directory',
            name: 'docs',
            children: [
              {
                type: 'file',
                name: 'Curriculum Vitae.pdf',
                action: 'link',
                target: '/docs/cv_flavio_li_volsi.pdf'
              }
            ]
          },
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