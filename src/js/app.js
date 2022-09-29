import GameSavingLoader from './class_GameSavingLoader';

// GameSavingLoader.load().then(
// (saving) => (saving), // saving объект класса GameSaving
// (error) => (error), // ...
// );

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    return (saving);
  } catch (error) {
    return (error);
  }
})();
