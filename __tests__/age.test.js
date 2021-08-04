import Age from './../src/age.js';

describe('Age', () => {

  test('creates a new constructor with properties age and life expectancy', () => {
    const age = new Age(33, 75);
    expect(age.earthAge).toEqual(33);
    expect(age.lifeExpectancy).toEqual(75);
  });

  test('returns the correct age for Mercury', () => {
    const age = new Age(33, 75);
    expect(age.mercuryAge()).toEqual(137);
  });

  test('returns the correct age for Venus', () => {
    const age = new Age(33, 75);
    expect(age.venusAge()).toEqual(53);
  });

 test('returns the correct age for Mars', () => {
    const age = new Age(33, 75);
    expect(age.marsAge()).toEqual(17);
  });

  test('return the correct age for Jupiter', () => {
    const age = new Age(33, 75);
    expect(age.jupiterAge()).toEqual(2);
  });

  test('returns the correct number of earth years remaining according to user input of life expectancy', () => {
    const age = new Age(33, 75);
    expect(age.earthLifeLeft()).toEqual(42);
  });

  test('returns the number of years lived past life expectancy if life expectancy has been exceeded', () => {
    const age = new Age(75, 33);
    expect(age.earthLifeLeft()).toEqual(42);
  });

  test('return the number of Mercury years remaining', () => {
    const age = new Age(33, 75);
    expect(age.mercuryLifeLeft()).toEqual(175) 
  });

  test('return the number of Mercury years lived past life expectancy if life expectancy is exceeded', () => {
    const age = new Age(75, 33);
    expect(age.mercuryLifeLeft()).toEqual(175)
  });

  test('return the number of Venus years remaining', () => {
    const age = new Age(33, 75);
    expect(age.venusLifeLeft()).toEqual(67)
  });

  test('return the number of Venus years lived past life expectancy if life expectancy is exceeded', () => {
    const age = new Age(75, 33);
    expect(age.venusLifeLeft()).toEqual(67)
  });

  test('return the number of Mars years remaining', () => {
    const age = new Age(33, 75);
    expect(age.marsLifeLeft()).toEqual(22)
  });

  test('return the number of Mars years lived past life expectancy if life expectancy is exceeded', () => {
    const age = new Age(75, 33);
    expect (age.marsLifeLeft()).toEqual(22)
  });

  test('return the number of Jupiter years remaining', () => {
    const age = new Age(33, 75);
    expect(age.jupiterLifeLeft()).toEqual(3)
  });

  test('return the number of Jupiter years lived past life expectancy if life expectancy is exceeded', () => {
    const age = new Age(75, 33);
    expect(age.jupiterLifeLeft()).toEqual(3)
  });
});