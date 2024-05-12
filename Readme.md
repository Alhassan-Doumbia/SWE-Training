

---

# GOMYCODE CodeWars Problem Solutions

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
---
