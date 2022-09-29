import GameSavingLoader from './class_GameSavingLoader';

GameSavingLoader.load().then(
  (saving) => (saving), // saving объект класса GameSaving
  (error) => (error), // ...
);
