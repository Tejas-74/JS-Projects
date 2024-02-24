// *****************BASICS OF JS PART-1*******************

/* DATATYPES and EcmaJS */

  // primitive-datatypes:- 7 types, // use 'typeof' to determine datatype;
     // Number
     // BigInt
     // String
     // Boolean
     // null
     // undefined
     // Symbol
   
   // Non-primitive datatypes(reference):- 3types
     // array[], funtion(), objects{}

  // operations:-
   
    // console.log(2+2);
    // console.log(2-2);
    // console.log(2*2);
    // console.log(2**2);
    // console.log(2/2);
    // console.log(2%2);
    
    // console.log("1"+2); = 12
    // console.log(1+"2"); = 12
    // console.log("1"+"2"); = 12
    // console.log("1"+2+2); = 122
    // console.log(1+2+"2"); = 32

// prefix and operator learn from mdn

//comparison:- >, <, >=, <=, ==, ===,  

//STACK(primitive) AND HEAP MEMORY(non-primitive):- 2types of memory in js 
  
// STRINGS:- study of all methods and funtions in js is strings(from browser console)
  //- detailed on mdn doc
  //const name = "tejas"
  //const repoCount = 50
  //console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// NUMBERS AND MATHS:-

   //NUMBERS- MDN doc

   //MATHS: browser  console, mdn 
     //console.log(Math.abs(4));
     //console.log(Math.round(4.2));

      //console.log(Math.random());
      //console.log(Math.random()*10) +1;
      //console.log(Math.floor(Math.random()*10) +1);
      //const min = 10;
      //const max = 20;
      //console.log(Math.random() * (max-min + 1 )) + mi //
      //Math.random - always give value bet 0-1

// DATE AND TIME:-
  
    //let myDate = new Date()
    //console.log(myDate.toString());
    //console.log(myDate.toDateString());
    //console.log(myDate.toISOString());
    //console.log(myDate.toJSON());
    //console.log(myDate.toLocaleDateString());
    //console.log(myDate.toTimeString());
    //console.log(myDate.toUTCString());
    //console.log(myDate.toLocaleString());
    //console.log(myDate.toUTCString());

    //console.log(typeof myDate);  ==> object

    //let myCreattedDate = new Date(2023, 0, 23)
    //console.log(myCreattedDate.toDateString());

/**************************BASIS OF JS PART-2**************************** */   

//ARRAYS:-

   //const myArr = [0,1,2,3,4,5,6]
   //const MyHeros = ["Shaktiman", "nagraj"]
   //const myArr2 = new Array(1,2,3,4)
   //console.log(myArr2[2]);
  
   //ARRAY METHODS:-
      
   //const myArr = [0,1,2,3,4,5,6]
   //  myArr.push(5) ==> add value atlast in array
   //  myArr.pop() ==> removes last value from array
   //  console.log(myArr);

   //const myArr = [0,1,2,3,4,5,6]
   //myArr.unshift(9);
   //myArr.shift()
   //console.log(myArr);

//OBJECTS:- mdn and console
   
    //SINGLETON:-
      //Object.create

      //const tinderUser = {}
      //tinderUser.id = "123asb"
      //tinderUser.name = "sammy"
      // tinderUser.isLoggedIN = false
      // console.log(tinderUser);

    //object literals:-
      //const JsUser = {
      //    name: "hitesh",
      //    "full name": "hitesh choudhary",
      //      [mySym]: "myKey1",
      //    location: "jaipur",
      //    email: "tejasnjad76@gmail.com",
      //    isLoggeddIn: false,
      //    lastLogginDays: ["Monday", "Saturday"]
      // }
      //console.log(JsUser.email);
      //console.log(JsUser["email"]);
      //console.log(JsUser["full name"]);
      //console.log(JsUser["mySym"]);


//objects destructuring and JSON:-

// functions And parameter:-

       //Syntax;

          //function myName(){
          //  console.log("t");
          //  console.log("e");
          //  console.log("j");
          //  console.log("a");
          //  console.log("s");
          // }
          //myName()

          //function addTwoNumbers(num1, num2){
          //console.log(num1+num2);
          //}
          //addTwoNumbers(5,5)

          // function loginUser(username){
          //   return '${username} just logged in'
          // }
          // console.log(loginUser("tejas"));

//FUNCTIONS WITH OBJECTS:-
        
  //function one(){
  //  const username = "tejas"//
  //  function two(){
  //    const website = "youtube"
  //    console.log(username);
  //  }
  //  //console.log(website); ==>out of scope//
  //  two()
  //}//
  //one()


//this and arrow function:-
    
   //const tj = () =>{
   // let username = "tejas"
   // console.log(this.username);
   //}
   // tj()

//Immediatly invked function expression (IIFE):- used for pollution of global scope

  //syntax: 
  //     (function chai(){
  //     console.log(`DB CONNECTED`);
  //     })();
 
  //  ( () => {
  //    console.log(`db coneected`);
  //  }) ();

  //  ( (name) => {
  //    console.log(`bd connetd ${name}`);
  //  }) (`tejas`);

// JS WORKING and execution BEHIND THE SCENE:- interview perspect

  // JAVASCRIPT EXECUTION CONTEXT:-
      //-GLOBAL EXECUTION CONTEXT
      //-FUNCTION EXECUTION CONTEXT
      //-EVAL EXECUTION CONTEXT  
   
// CONTROL FLOW STATEMENTS:-
    //conditional operators:- <,>,<=,>=,==,!=, ===(to check with datatype), !==, 
    // logical operators:- &&, ||
    // nullish coalescing operaror:- (??) -> null, undefined
          //let val1;
          // //val1 = 5 ?? 10
          // //val1 = null ?? 10
          // //val1 = undefined ?? 10
          //console.log(val1);
          
    //Terniary opertor:- condition: true/false
      //const iceTeaPrice = 100
      //iceTeaPrice >= 88 ? console.log("less then 88") : console.log("more the 88"); 

   //if:-
        // if(condition:){
        //   console.log()
        // }

        // const temp = 41;
        // if (temp<50) {
        //   console.log("less than 50");
        // }
        // console.log("temp is greter the 50"); --> out of syntax

   // if-else:-

   // const temp = 41;
   // if (temp<50) {
   //   console.log("less than 50");
   //  } else{
   //    console.log("temp is greter the 50");         
   //  }
        
  //  const score = 200
  //  if (score>100) {
  //         const power = "fly"
  //         console.log(`user power: ${power}`);
  //  }
  //  console.log(`user power: ${power}`); --> out of scope dosnt execute the code

    // const balance = 1000
    // if (balance<500){
    //   console.log("less than 1000");
    // } else if( balance<750){
    //   console.log("less than 750");
    // }else{
    //   console.log("less then 1200");
    // }

   //&&:-

    // const userLoggedIn = true
    // const debitCard = true 
    // if(userLoggedIn && debitCard && 2==2){
    //   console.log("allow to buy");
    // }

    //switch;

           //    switch (key) {
           //     case value:
           //       
           //       break;
           //    
           //     default:
           //       break;
           //    }

      // const month = 3     
      // switch (month) {
      //   case 1:
      //     console.log("January");
      //     break;
      //   case 2:
      //     console.log("February");
      //     break;
      //   case 3:
      //     console.log("March");
      //     break;
      // 
      //   default:
      //     console.log("no match");
      //     break;
      // }
   
  // *** truthy value: true, "0", 'false', " ",[], {}, function(){}  
  // *** falsy value: false, 0, -0, BigInt, 0n, "", null, undefined, NaN
       
  // const key = "tejas"
  // if(key){       -->condition assumes itself a value
  //   console.log("working without condition");
  // }else{
  //   console.log("didnt work without condition");
  // }

  // LOOPS:-
     
      //FOR:-
        // for (let i = 0; i < 10; i++) {
        //   const element = i;
        //   console.log(element);
        // }

      // for-if-esle:-  
        // for (let i = 0; i < 10; i++) {
        //      const element = i;
        //      if (element==5) {
        //       console.log("5 is best num");
        //      }
        //      console.log(element);
        // }

      // nested for:-
         
        //  for (let i = 0; i <= 10; i++) {
        //    console.log(`Outer loop value ${i}`);
        //    for (let j = 0; j <= 10; j++) {
        //      //console.log(`Inner loop value ${j} and inner loop ${i}`);
        //    console.log(i + `*` + j + `=` + i*j);
        //      }
        //  }

      // break and continue:-
        
        // for (let i = 0; i <= 20; i++) {
        //    if (i==5) {
        //      console.log(`detected 5`);
        //      break
        //    }
        //   console.log(`value of 1 is ${i}`);
        // }
        
        
        // for (let i = 0; i <= 20; i++) {
        //    if (i==5) {
        //      console.log(`detected 5`);
        //      continue
        //    }
        //   console.log(`value of 1 is ${i}`);
        // }
        
  //while loop:-

      //  let i = 0
      //  while (i<=10) {
      //    console.log(`value of i is ${i}`);
      //    i = i+2
      //  }
     
      //  let myArray = ["flash", "batmaan", "superman"]
      //  let arr = 0
      //  while (arr< myArray.length) {
      //    console.log(`value is ${myArray[arr]}`);
      //    arr = arr+1
      //  }

  // do-while:-
     
    // let score = 1
    //  do {
    //    console.log(`score is ${score}`); 
    //    score++  
    //  } while (score<=10);

  // LOOPS ON ARRAY:-

    //for-of:-
      // const arr = [1,2,3,4,5]
      // for( const num of arr){
      //   console.log(num);
      // }
      
    // maps:-
      //  const map = new Map()
      //  map.set('IN',"INDIA")
      //  map.set('USA',"UNITED STATES OF AMERICA")
      //  map.set('FR',"FRANCE")
      //  console.log(map);
     
      // const map = new Map()
      //  map.set('IN',"INDIA")
      //  map.set('USA',"UNITED STATES OF AMERICA")
      //  map.set('FR',"FRANCE")
      //  for(const [key, value] of map){
      //   console.log(key, ':-', value);
      //  }


    //for-in:-
       
        // const myObject = {
        //   js:'javascript',
        //   cpp:'c++',
        //   rb:'ruby',
        //   swift:'swift by appla'
        // }
        // for (const key in myObject) {
        //   console.log(`${key} shortcut is for ${myObject[key]}`);
        // }

        // const programming = ["js", "rb","py","java", "cpp"]
        // for (const key in programming) {
        //   //console.log(key);
        //   //console.log(programming[key]);
        // }

        // const map = new Map()
        // map.set('IN',"INDIA")
        // map.set('USA',"UNITED STATES OF AMERICA")
        // map.set('FR',"FRANCE")
        // for (const key in map) {
        //   console.log(key);
        // } --> map dosnt work with for-in

  //for-each:-
     
  //by function,
      // const coding = ["js", "ruby", "java", "python", "cpp"]
      // coding.forEach(  function (item) {
      //   console.log(item);
      // }  )

  //arrow function,
      // const coding = ["js", "ruby", "java", "python", "cpp"]
      // coding.forEach(  (item) => {
        //   console.log(item);
        // }  )
            
  //by callback function,
        // function printMe(item){
        //   console.log(item);
        // }
        // const coding = ["js", "ruby", "java", "python", "cpp"]
        //  coding.forEach(printMe)
   
  // filters    
       // const myNums = [1,2,3,4,5,6,7,8,9,10]
       // console.log(newNunms); 
       // const newNunms = myNums.filter( (num) => num>4)

/**************************************JS PART 2*********************************** */       

 // DOM MANIPULATION:-study all dom selectors by vid/mdn

  
    