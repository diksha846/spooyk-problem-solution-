# spooyk-problem-solution-
Am I Perfect?

Write a function that tells if a given number is perfect or not. A number is called perfect if the sum of the factors of a number (excluding the number itself) is the number itself.
Output
Return “Perfect” if the number is perfect
if the sum of factors is greater than the input return “Abundant”
if the sum of factors is lesser than the input return “Deficient”.
Example:

1) 6 -> factors(1,2,3) -> sum (1+2+3) = 6 (perfect number)
2) 12 -> factors(1,2,3,4,6) -> sum(1+2+3+4+6) = 16 > 12 (Abundant)
3) 8 -> factors(1,2,4) -> sum(1+2+4) = 7 < 8 (Deficient)
Shorten me!

Implement 2 functions, one that shortens a string of values by replacing consecutive data elements with just one data value and count of the consecutive values.

For Example, we can shorten the characters “AAAAAAAAAAABWWWWWWWWWWWBB” with “11AB11W2B”

The other function should take the shortened string and give back the original value

For example, we take the above-shortened characters “11AB11W2B” and get back “AAAAAAAAAAABWWWWWWWWWWWBB”

For simplicity, you can assume that the unencoded string will only contain the letters A through Z (either lower or upper case) and whitespace. This way data to be encoded will never contain any numbers and numbers inside data to be decoded always represent the count for the following character.

How many trails to 1?

Take a positive integer x. If x is even, divide x by 2 to get x / 2. If x is odd, multiply x by 3 and add 1 to get 3x + 1. Repeat the process indefinitely. No matter which number you start with, you will always reach 1 eventually during the process.
Given a number x, return the number of steps required to reach 1.
Examples

Starting with x = 12, the steps would be as follows:

12 - even (divide by 2)
6 - even (divide by 2)
3 - odd (3(3) + 1)
10 - even (divide by 2)
5 - odd (3(5) + 1)
16 - even (divide by 2)
8 - even (divide by 2)
4 - even (divide by 2)
2 - even (divide by 2)
1 - stop

We got to 1 in 9 steps. So for input x = 12, the return value would be 9.
MEDIUM
Greater than and less than in a matrix

Detect values in a matrix that is greater than or equal to every element in its row and less than or equal to every element in its column.
So say you have a matrix-like so:
    1  2  3
  |---------
1 | 7  8  7
2 | 5  4  2    value at column 1, row 2, with 5 (Ans)
3 | 8  6  7
A matrix may have zero or more values like these which are greater than or equal and less than or equal.
Your code should be able to provide a list of all the values for any given matrix. If no values are found it should return an empty list.
The matrix can have a different number of rows and columns (Non-square matrix).
n-Chai

You like chai very much and you want to drink exactly “n” cups of chai. You would be happy to drink more but you have exactly “n” chai bags, “g” of them are green, and “b” are black.
You would not like to drink the same chai (green or black) more than “k” times in a row.
Your task is to determine the order of making tea so that you will be able to drink “n” cups of tea, without drinking the same chai more than “k” times in a row, or to inform that it is impossible to do that with the given inputs. Each chai bag can be used exactly once.
Note: g + b is always equal to “n”. I.e number of green and black chai bags total is always equal to the number of times you want to drink chai.
Example:

Input -> n: 5, k: 1, g: 3, b: 2 
Output -> [“Green”,”Black”,”Green”,”Black”,”Green”]

Input -> n: 4, k: 3, g: 4, b: 0
Output -> []
