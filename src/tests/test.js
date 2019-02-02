import getLevel from '../js/app';
import fetchData from '../js/http';

jest.mock('../js/http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('userId == 90', () => {
  fetchData.mockReturnValue({});

  getLevel(90);
  expect(fetchData).toBeCalledWith('https://server/user/90');
});

test('ok response', () => {
  const response = {
    status: 'ok',
    level: 90,
  };
  fetchData.mockReturnValue(response);
  const level = getLevel(1);
  expect(level).toMatch(/: 90/);
});
