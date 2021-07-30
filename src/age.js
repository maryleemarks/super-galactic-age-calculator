export default class Age{
  constructor(earthAge,lifeExpectancy){
    this.earthAge = earthAge;
    this.lifeExpectancy = lifeExpectancy;
  }

  mercuryAge(){
    this.earthAge = Math.floor(this.earthAge/0.24);
    return this.earthAge;
  }

  venusAge(){
    this.earthAge = Math.floor(this.earthAge/0.62);
    return this.earthAge;
  }
}  
