import read from './reader';
import json from './parser';
import GameSaving from './class_GameSaving';

export default class GameSavingLoader {
  static async load() {
    const reader = await read();
    const parser = await json(reader);
    return new GameSaving(JSON.parse(parser));
  }
}
