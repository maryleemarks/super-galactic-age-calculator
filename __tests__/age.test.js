import Age from './../src/age.js';

describe('Age', () => {

  let age;

  beforeEach(() => {
    age = new Age(33, 20);
  });

  test('creates a new constructor with properties age and life expectancy', () => {
    expect(age.earthAge).toEqual(33);
    expect(age.lifeExpectancy).toEqual(20);
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

  test('returns the correct number of earth years remaining according to user input of life expectancy', () => {
    expect(age.earthLifeLeft()).toEqual(13);
  });

  test('returns the number of years lived past life expectancy if life expectancy has been exceeded', () => {
    expect(age.earthLifeLeft()).toEqual(13);
  });

  test('return the number of Mercury years remaining', () => {
    expect(age.mercuryLifeLeft()).toEqual(54) 
  })

  test('return the number of Mercury years lived past life expectancy if life expectancy is exceeded', () => {
    expect(age.mercuryLifeLeft()).toEqual(54)
  })

  test('return the number of Venus years remaining', () => {
    expect(age.venusLifeLeft()).toEqual(20)
  })

  test('return the number of Venus years lived past life expectancy if life expectancy is exceeded', () => {
    expect (age.venusLifeLeft()).toEqual(20)
  })

  test('return the number of Mars years remaining', () => {
    expect(age.marsLifeLeft()).toEqual(6)
  })

  test('return the number of Mars years lived past life expectancy if life expectancy is exceeded', () => {
    expect (age.marsLifeLeft()).toEqual(6)
  })

  test('return the number of Jupiter years remaining', () => {
    expect(age.jupiterLifeLeft()).toEqual(-2)
  })
});