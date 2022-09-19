// import Character from '../classmam_Character';
import Bowerman from '../class_Bowerman';
import Zombie from '../class_Zombie';

test.each([
  ['Zombie', Zombie, {
    name: 'Zombie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  },
  ],
  ['Bowerman', Bowerman, {
    name: 'Bowerman',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  }],
])(
  ('class calculate for %s'),
  (charName, CharClass, expected) => {
    const result = new CharClass(charName);
    expect(result).toEqual(expected);
  },
);
