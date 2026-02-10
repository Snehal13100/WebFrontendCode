let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// console.log(arr);
// arr.length();
//Push method is used for adding eleent in the array
// arr.push(111);
// arr.pop(); //(pop method used for remove last element)
// arr.unshift(102); (unshift method used for add element at start)
// arr.shift();    (shift method used for remove start element )\
// console.log(arr);
/*Slice decide the start and end index 
(start with that index but print all value before last index )
ex: slice(3)-print all values from 3rd index.
slice(2,9)-print value from 2nd index to 8 index.
slice are return the value and can not change in original array.
*/
//let newArr = arr.slice(2);
//let newArr = arr.slice(1, 5);
//console.log(newArr);

/*splice- it consider start element 
splice(index,count,add).
its changes the original arrays value.



*/

//let newArr = arr.splice(2);
//let newArr = arr.splice(index,count,add);
//let newArr = arr.splice(2, 4);
// let newArr = arr.splice(2, 1, "hii");
// console.log(newArr);
// console.log(arr);
//
//reverse can reverse the array values.
// console.log(arr.reverse());
//joins are convert array into a string and joins with any other values.
// console.log(arr.join("--"));
// console.log(arr[5]);
// console.log(arr.at(-2));
//-----------------------------------------------------------------------------------
//String operation on string: =
// let username = "snehal";
// let age = 23;
//Concatination of string - types: " ",'',``.
// let msg = "my name is: " + username + ", and age is:" + age;
// let msg = "my name is: " + username + ", and age is:" + age;
// let msg = `my name is: ${username} ,and age is: ${age}`;
// console.log(msg);
let str = "Hi Im String From Javasript. ";
//console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
//Split method convert string into array and its split that value which we will pass argument from where we want to split.
// console.log(str.split(" "));
//trim method remove the space of string from starting and ending.

// console.log(str.trim());
// console.log(str.trimStart());
// console.log(str.trimEnd());
//include method check that data present on string or not and return bool value. and its a case sensitive.
// console.log(str.includes("Hi"));
//charAt() method give the value of that index number. and it consider spae also
//console.log(str.charAt(3));
//indexOf()- is opposite to charAt, it gives the index of char,like(if present the index no otherwise return -1).
// console.log(str.indexOf("i"));
// console.log(str.replace("Hi", "😁"));
// console.log(str.replaceAll("a", "8"));
//repeat that string
//console.log(str.repeat(5));

//below code revrse the string
//console.log(str.split(" ").reverse().join(" "));

//=====================================================================================================
//TASKS:-
//1.Given an array of student names, print the total number of students.(Use: length)

let stud = [
  "Snehal",
  "Maythili",
  "Gayatri",
  "Rutuja",
  "Gauri",
  "lata",
  "Kunda",
];
// console.log(stud);
// console.log(stud.sort());
// console.log(stud.length());

//2.Add "Amaan" at the end and "Sohel" at the beginning of an array.Use: push(), unshift()
// stud.push("Amaan");
// stud.unshift("Sohel");
// console.log(stud);
//3.Remove the last and first element from an array.Use: pop(), shift()
// stud.pop();
// stud.shift();
// console.log(stud);
//4.Check whether "Ritesh" and snehal exists in the array or not.Use: includes()

// console.log(stud.includes("Ritesh"));
// console.log(stud.includes("Snehal"));

//5.Task: Merge two arrays of cities into one array.Use: concat() or spread operator (...)
let age = [23, 23, 20, 21, 25, 43, 40];
// console.log(stud + age);
console.log(stud.concat(age));
console.log(...stud, ...age);
//6.Convert an array of colors into a comma-separated string.Use: join()

// let color = ["red", "blue", "pink", "green", "yellow", "black", "white"];
// console.log(color.join(","));

//7.Find the index of "lata" in the array.Use: indexOf()
//console.log(stud.indexOf("lata"));

//8.Extract only the first 3 students from an array.Use: slice()
// let newStud = stud.slice(0, 3);
// console.log(newStud);

//9.Sort student names alphabetically.Use: sort()
let s2 = ["B", "D", "A", "S", "F", "R", "M", "L"];
// console.log(s2.sort());
//10.Find the length of the string "JavaScript Learning".Use: length
let string = "JavaScript Learning";
// console.log(string.length);
//11.Convert a name to uppercase and lowercase.Use: toUpperCase(), toLowerCase()
// console.log(string.toUpperCase());
// console.log(string.toLowerCase());
//12.Get the first and last character of a string.Use: charAt()
// console.log(string.charAt(0));
// console.log(string.at(-1));

//13.Check if "Angular" exists in "I am learning Angular framework".Use: includes()

let s = "I am learning Angular framework";
// console.log(s.includes("Angular"));
//console.log(s.replace("Angular", "JavaScript"));

//15.Remove extra spaces from "   Hello World   ".Use: trim()
let s1 = "    Hello World    ";
// console.log(s1);
// console.log(s1.trim());

//DOM:-
