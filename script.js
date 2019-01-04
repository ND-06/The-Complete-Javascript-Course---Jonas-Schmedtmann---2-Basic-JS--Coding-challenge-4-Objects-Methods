/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

var mark = {
  firstName: 'Mark',
  lastName: 'Smith',
  mass: 80,
  height: 1.75,
  calcBmi: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
}

var john = {
  firstName: 'John',
  lastName: 'Emerald',
  mass: 70,
  height: 1.74,
  calcBmi: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
}

if (mark.calcBmi() > john.calcBmi()) {
  
  console.log(mark.firstName + ' ' + mark.lastName + ' has a ' + mark.bmi + ' BMI' + 
  ' ' + 'whereas ' + john.firstName + ' ' + john.lastName + ' ' + 'has a ' + john.bmi +
   ' BMI.' + ' So, ' + mark.firstName + ' ' + mark.lastName + ' ' + 'has an higher BMI than '
   + john.firstName + ' ' + john.lastName + '.'); 
  
  } else if (john.calcBmi() > mark.calcBmi()) {
  
  console.log(john.firstName + ' ' + john.lastName + ' has a ' + john.bmi + ' BMI' + 
  ' ' + 'whereas ' + mark.firstName + ' ' + mark.lastName + ' has a ' + mark.bmi + 
  ' BMI.' + ' So, ' + john.firstName + ' ' + john.lastName + ' has an higher BMI than ' 
  + mark.firstName + ' ' + mark.lastName + '.');
  
  } else {
  console.log(mark.firstName + ' ' + mark.lastName + ' and ' + john.firstName + ' ' + 
  john.lastName + ' have the same BMI');

}

