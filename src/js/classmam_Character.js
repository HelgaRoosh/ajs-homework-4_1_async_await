export default class Character {
  constructor(name, type) {
    this.health = 100;
    this.level = 1;

    this.attack = undefined;
    this.defence = undefined;

    this.controlCondition(name, type);
  }

  controlCondition(name, type) {
    Character.types = ['Bowerman', 'Zombie'];
    if (Character.types.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Недопустимый тип игрока');
    }

    if (name.length < 2 || name.length > 10) {
      throw new Error('Недопустимая длинна имени игрока');
    } else {
      this.name = name;
    }
  }
}
