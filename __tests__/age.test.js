import Age from './../src/age.js';

describe('Age', () => {

  let age;

  beforeEach(() => {
    age = new Age(33, 75);
  });

  test('creates a new constructor with properties age and life expectancy', () => {
    expect(age.earthAge).toEqual(33);
    expect(age.lifeExpectancy).toEqual(75);
  });
});