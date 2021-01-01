/*

PART 4 [Problem Solving]:
Solve the question below:

Write a isABalancedString function that takes a string as an input, 
return 'YES' if the parentheses in the input string are balanced,
return 'NO' if the parentheses in the input string are not balanced,. 

*/

console.log("PART 4");

const isABalancedString = (str) => {
  const array = str.split("");
  for (let i = 0; i < array.length; i++) {
    if (arr[i] == "(") {
      arr.splice(indexOf(arr[i]), 1);
      for (let j = 0; j < array.length; j++) {
        if (arr[j] == "(") {
          return "NO";
        }
      }
    } else if (arr[i] == ")") {
      return "NO";
    }
  }
  return "YES";
};

/*

Examples:

isABalancedString( '[]' )
=> YES

isABalancedString( '[{()}]' )
=> YES

isABalancedString( '[()]{}{()()}' )
=> YES

isABalancedString( '[{()}])' )
=> NO

isABalancedString( '({()}])' )
=> NO

isABalancedString( '[{)]({()(})' )
=> NO

isABalancedString( '[(){([])[}]()]' )
=> NO

isABalancedString( '[(){([])}({){}}]' )
=> NO

isABalancedString( '[(){([])})' )
=> NO

*/
