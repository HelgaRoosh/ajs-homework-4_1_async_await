import GameSavingLoader from '../class_GameSavingLoader';

test('test GameSavingLoader', async () => {
  const gameSavingLoader = await GameSavingLoader.load();
  const expected = {
    created: 1546300800,
    id: 9,
    userInfo: {
      id: 1,
      level: 10,
      name: 'Hitman',
      points: 2000,
    },
  };

  expect(gameSavingLoader).toEqual(expected);
});
