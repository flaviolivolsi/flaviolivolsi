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
                name: 'Led Zeppelin - Good Times Bad Times.mp3'
              },
              {
                type: 'file',
                name: 'Arctic Monkeys - Cornerstone.mp3'
              },
              {
                type: 'file',
                name: 'Paolo Nutini - Iron Sky.mp3'
              },
              {
                type: 'file',
                name: 'Interpol - Specialist.mp3'
              },
              {
                type: 'file',
                name: 'The Doors - Riders On The Storm.mp3'
              },
              {
                type: 'file',
                name: 'Muse - Hysteria.mp3'
              },
              {
                type: 'file',
                name: 'David Bowie - Station To Station.mp3'
              },
              {
                type: 'file',
                name: 'Nick Cave & The Bad Seeds - O Children.mp3'
              },
              {
                type: 'file',
                name: 'Placebo - Pierrot The Clown.mp3'
              },
              {
                type: 'file',
                name: 'The Strokes - Taken For A Fool.mp3'
              },
              {
                type: 'file',
                name: 'Counting Crows - Colorblind.mp3'
              },
              {
                type: 'file',
                name: 'Mando Diao - Ochrasy.mp3'
              },
              {
                type: 'file',
                name: 'Fabrizio De André - Via del campo.mp3'
              },
              {
                type: 'file',
                name: 'Radiohead - Paranoid Android.mp3'
              },
              {
                type: 'file',
                name: 'Elvis Presley - Heartbreak Hotel.mp3'
              },
              {
                type: 'file',
                name: 'Guns N\' Roses - Civil War.mp3'
              },
              {
                type: 'file',
                name: 'Rage Against The Machine - Bulls On Parade.mp3'
              },
              {
                type: 'file',
                name: 'Iggy Pop - The Passenger.mp3'
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