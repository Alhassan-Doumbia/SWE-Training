

---

#  CodeWars Problem Solutions

## Problem 1: Vowel Counter

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lowercase letters and/or spaces.

## Problem 2: Is this a triangle?

Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false otherwise.

(In this case, all triangles must have a surface greater than 0 to be accepted).

### Examples:

Input -> Output
- 1, 2, 2 -> true
- 4, 2, 3 -> true
- 2, 2, 2 -> true
- 1, 2, 3 -> false
- -5, 1, 3 -> false
- 0, 2, 3 -> false
- 1, 2, 9 -> false

In algebra, the sum of the lengths of any two sides of a triangle is always greater than the length of the third side. If this condition is met, we have a valid triangle.

To calculate the area, given that we don't know which side is the height of the triangle, we will use Heron's formula.

![Heron's Formula](image.png)

## Problem 3: Credit Card Mask

Usually when you buy something, you're asked whether your credit card number, phone number, or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function `maskify`, which changes all but the last four characters into '#'.

### Examples (input --> output):
- "4556364607935616" --> "############5616"
- "64607935616" --> "#######5616"
- "1" --> "1"
- "" --> ""

"What was the name of your first pet?"
- "Skippy" --> "##ippy"
- "Nananananananananananananananana Batman!" --> "####################################man!"

**Algorithm:**
- Convert the input argument to an array.
- Split the array at the character in the 4th position from the end of the array and store it in a variable.
- Start a loop that adds "#" to another list according to the number of elements before the 4th letter from the end of the list.
- Join these two arrays and create a single string and run the tests.

## Problem 4: Square Every Digit

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

### Example:
- An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

**Note:** The function accepts an integer and returns an integer.

Happy Coding!


## Problem 5 : 
You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

For example(Input --> Output):

10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 1 --> [1]


 ## Problem 6 : 
  You have to write a function that describe Leo:


if oscar was (integer) 88, you have to return "Leo finally won the oscar! Leo is happy".
if oscar was 86, you have to return "Not even for Wolf of wallstreet?!"
if it was not 88 or 86 (and below 88) you should return "When will you give Leo an Oscar?"
if it was over 88 you should return "Leo got one already!"


### Problem 7 : Bug fixing 
Unfinished Loop - Bug Fixing #1
Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

Solution : we should incremet the counter variable 


### problem 8 : Who likes it 

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

### Problem 9 : Bug Fixing #6 

Switch/Case - Bug Fixing #6
Oh no! Timmy's evalObject function doesn't work. He uses Switch/Cases to evaluate the given properties of an object, can you fix timmy's function?

function evalObject(value){
  var result = 0;
  switch(value.operation){
    case'+': result = value.a + value.b;
    case'-': result = value.a - value.b;
    case'/': result = value.a / value.b;
    case'*': result = value.a * value.b;
    case'%': result = value.a % value.b;
    case'^': result = Math.pow(value.a, value.b);
  }
  return result;
}

Solution : we  got to add the break keyWord to each case statement 

### Problem 10 : List Filtering 
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]


### Problem 11 : firstonRepeatingLetter

Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("");

† Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character.

Solution : 

- Identify repeating letter by putting all of the input into lowercase 
- for each letter we have to cout the exact number of occurences according to their place in the word (considering them like an array then)
- we are going to create an array which wwill be filled with the number of occurences of each letter according to their place
- in the Array with the number of occurence ,we are going to take the lowest index aong those who got one Occurence 
- and this index will represent the index of the first non Repeating letter in the given word 

## Problem 12 : TitleCase 
A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

Arguments (Haskell)
First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
Second argument: the original string to be converted.
Arguments (Other languages)
First argument (required): the original string to be converted.
Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
Example
titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'

Let's code that 
---

