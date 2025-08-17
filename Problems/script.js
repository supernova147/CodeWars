/*
Code Wars Problem #1

I'll start off with a kata 8 problem.

You ask a small girl,"How old are you?" She always says, "x years old", 
where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. 
For example, the test input may be "1 year old" or "5 years old". 
The first character in the string is always a number.
solution:
*/

function getAge(inputString){
// return the girl's correct age as an integer. Happy coding :) 
  let num = inputString.substring(0, 1); //taking value of first char in the string
  return parseInt(num, 10); //returning the string value as a num type.
}

//Thoughts: I knew parseInt was needed to find the solution, however I had trouble recalling how to initially call the method
// Originally I had num.parseInt(); however that did not clearly work as parseInt() needs the string and/or the radix as its arguments.
// I also incoporated substring to capture only the first character of that string since it always started with age.
// I'll try another kata 8 problem & if it takes me less than 5, then I'll move up to a 7.
console.log(getAge("5 years old"));
console.log("-------------------------");



/* Kata level 8
When it's spring Japanese cherries blossom, it's called "sakura" and it's admired a lot. The petals start to fall in late April.

Suppose that the falling speed of a petal is 5 centimeters per second (5 cm/s), 
and it takes 80 seconds for the petal to reach the ground from a certain branch.

Write a function that receives the speed (in cm/s) of a petal as input, 
and returns the time it takes for that petal to reach the ground from the same branch.

Notes:
The movement of the petal is quite complicated, so in this case we can see the velocity as a constant during its falling.
Pay attention to the data types.
If the initial velocity is non-positive, the return value should be 0
*/

function sakuraFall(v) {
  let fallheight = 80*5; // I'll use this equation to calculate the time based off of 1 second.
//   console.log(fallheight); //so if the a sakura falls it takes 400 seconds for it to land on the ground @ 1cm/s..
    if (v > 0){
        fallSpeed = 400/v; //therefore we input the time based off of one second & create the "easy" calc of 400/v
        return fallSpeed; //then we return it!
    };
    return 0.0; //if the velocity is less than 0, we return 0!
};

// Thoughts: Honestly the hard part was figuring it out mathematically. But once I solved the equation, I just had to utilize a
//conditional statement to check whether the fall speed was a positive num. however, this does not take into account if the number
// was entered as a string; so in that case, I would've used parseInt(v, 10); to convert the string value before checking if its
// above a zero.
console.log(sakuraFall(10));
console.log("-------------------------");


/* Kata level 8
When provided with a number between 0-9, return it in words. Note that the input is guaranteed to be within the range of 0-9.

Input: 1

Output: "One".

If your language supports it, try using a switch statement.
*/

function switchItUp(number){
  if (number === 1){ //Running conditional statements to compare whether the input is equal to a certain #
        return "One"; // Then that output will equal that number's string value. ie: "One"
    }
    else if (number === 2){
        return "Two";
    }
    else if (number === 3){
        return "Three";
    }
    else if (number === 4){
        return "Four";
    }
    else if (number === 5){
        return "Five";
    }
    else if (number === 6){
        return "Six";
    }
    else if (number === 7){
        return "Seven";
    }
    else if (number === 8){
        return "Eight";
    }
    else if (number === 9){
        return "Nine";
    }
    else {
        return "Zero";
    }
}

/*
Thoughts: It was straight forward. Could be refactored for sure. I saw what others inputted after submission & some did it within a line!
The hardest part was typing the conditional statements over and over.
*/

console.log(switchItUp(9));
console.log("-------------------------");

/* kata level 8
Write a function that returns the total surface area and volume of a box.

The given input will be three positive non-zero integers: width, height, and depth.

The output will be language dependant, so please check sample tests for the corresponding data type, (list, tuple, struct, query, etcetera).

*/

function getSize(width, height, depth) {

    let surfaceArea = 0;
    let volume = 0;

  surfaceArea = (2 * height * width) + (2 * depth * height) + (2 * width * depth); //equation for surface area
  volume = width * height * depth; //equation for volume

    return [surfaceArea, volume]; //returning solutions in an array format

}
//I forgot my equations. I had to google them.
//other than that, it was essentially a math problem.
//moving on to harder levels.
console.log(getSize(10, 10, 10));
console.log("-------------------------");

/* Kata lvl 7
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
    let vowelCount = 0; //setting a var for capturing vowel count.
    const vowels = ["a","e","i","o","u"]; //array for checking different values

      for (let i=0; i < str.length; i++){ //looping through the string to check for any vowel chars.
        if (vowels.includes(str[i])) { //using includes() method to check if the vowels exist in the string
          vowelCount = vowelCount + 1; //if they do exist in the string, we add 1 to the vowelcount
            };
    }
  return vowelCount; //by default, vowelCount is 0; so if no vowels are found, 0 will be returned.
}

// Thoughts: had to recall the correct way to index using the array using [i]
// also found it a bit difficult to create the check using the for loop at least for the line including the 
// if statement. This means I need to practice creating for loops more & creating those checks using array vars.
// originally had str[i].includes(vowels)  however, after learning that includes does not check for
// each individual char; I had to change the order in which the check was done. even if it 'logically' seemed fit.
// this problem did take me 15> minutes to solve; however, I learned more about loops & the includes() method.
// will also note that if the str value did contain uppercase letters; I would need to use lowercase() method & then perform the check.
console.log(getCount("one")); //should return 2
console.log("-------------------------");

/*
Kata level 8

Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

Examples:

1: -1
14: -14
-34: 34
*/

function opposite(number) {

    if (number < 0) {
    return number * -1;
    }
    else {
    return number * -1;
    }
}

//Thoughts: I CANNOT BELIEVE I overcomplicated this problem..
// I was attempting to just transfer the numbers to a string.. then either checking if it includes a "-"
// Then splicing the first string char if it did, and if it didn't add the "-" in front of the string value 
// AND THEN turn that string value into a number using parseInt. but no. I literally forgot basic math.
// you just multiple the number with a negative number. & since all we're doing is keep the original value
// we just multiple by -1. Took me more than 15 minutes to figure this all out.. :) 

console.log(opposite(10000));
console.log("-------------------------");

/* Kata level 6
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]
*/
//return the total number of smiling faces in the array
function countSmileys(arr) {
    smileyFaces = [':)', ';)',':D',';D',':-)',':~)',';-)',';~)',':-D',';-D',':~D',';~D'];
  //setting up an array to check the if the smiley faces exist in the array
  let smileyFacesCount = 0; //setting the default value for the count var
    for (let i = 0; i < arr.length; i++) { //creating a for loop to run through every value in the array
      if (smileyFaces.includes(arr[i])) { //checking if the array index includes a smileyface.
        smileyFacesCount = smileyFacesCount + 1; //if it does, add one to the count.
    }
    }
  return smileyFacesCount; // returning the smiley faces count, if there isn't any, 0 is returned by default.
}

//Thoughts: The logic was straight forward, and I've done a similar loop before.
//I learned from my prior mistakes setting up my last loop (though I did forget indexing for a second)
//however, it didnt take me as long to set up the loop and create my check.
//I'm proud of how I solved it. I did it quicker than I thought. Est: 5-10-ish minutes

console.log(countSmileys([";)", ":)",":P"]));
console.log("-------------------------");

/* Kata level 6
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!
*/


function createPhoneNumber(numbers){
  if(numbers.length = 10){ //Making a conditional to change if the array has enough values for a phone #
    numbers = `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
  } //placing the necessary elements to "craft" the string value
  return numbers; //returning the string value.
}

// Thoughts: So, initially I wanted to use the map method & include a for loop; looping through each item and reorganizng into a new string. Which may have worked.
// edit: probably not map as it transforms the array into another one.
// I just realized halfway that I could just create a template literal instead & index the array in their
// retrospective placements. This isn't pretty in the slighest & I know for a fact that this could be refactored.
// It does accomplish the task, however ugly this looks. Did take about 10-15 minutes for me to attempt with a for loop/map method 
// & then attempting this idea.

console.log(createPhoneNumber([5,6,1,2,4,6,1,2,3,0]));
console.log("-------------------------");
