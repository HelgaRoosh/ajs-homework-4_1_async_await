export default class GameSaving {
  constructor(saving) {
    this.id = saving.id; // id сохранения
    this.created = saving.created; // timestamp создания
    this.userInfo = saving.userInfo;
    // { "id": <number>, // user id
    // "name": <string>, // user name
    // "level": <number>, // user level
    // "points": <number> } // user points
  }
}
