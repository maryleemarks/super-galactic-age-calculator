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

  marsAge(){
    this.earthAge = Math.floor(this.earthAge/1.88);
    return this.earthAge;
  }

  jupiterAge() {
    this.earthAge = Math.floor(this.earthAge/11.86);
    return this.earthAge;
  }

  earthLifeLeft() {
    if(this.lifeExpectancy >= this.earthAge){
     return this.lifeExpectancy - this.earthAge;
    }else{
      return this.earthAge - this.lifeExpectancy;
    }
  }

  mercuryLifeLeft() { 
    if(this.lifeExpectancy >= this.earthAge){
      return Math.floor((this.lifeExpectancy - this.earthAge) / 0.24);
    }else{
      return Math.floor((this.earthAge - this.lifeExpectancy) / 0.24);
    }
  }

  venusLifeLeft() {
    if(this.lifeExpectancy >= this.earthAge){
      return Math.floor((this.lifeExpectancy-this.earthAge) / 0.62);
    }else{
      return Math.floor((this.earthAge - this.lifeExpectancy) / 0.62);
    }  
  }

  marsLifeLeft() {
    if(this.lifeExpectancy >= this.earthAge){
      return Math.floor((this.lifeExpectancy-this.earthAge) / 1.88);
    }else{
      return Math.floor((this.earthAge - this.lifeExpectancy) / 1.88);
    }  
  }
}    