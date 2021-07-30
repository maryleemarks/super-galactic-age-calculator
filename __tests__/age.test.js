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

  test('returns the correct age for Mercury', () => {
    expect(age.mercuryAge()).toEqual(137);
  });

  test('returns the correct age for Venus', () => {
    expect(age.venusAge()).toEqual(53);
  });

  test('returns the correct age for Mars', () => {
    expect(age.marsAge()).toEqual(17);
  });

  test('return the correct age for Jupiter', () => {
    expect(age.jupiterAge()).toEqual(2);
  });
});