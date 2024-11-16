// task 1
function reverseNumber(num) {
    let a = num < 0;
    if (a) {
      num = Math.abs(num);
    }
    let b = 0;
    while (num > 0) {
      let lastDigit = num % 10;
      b = b * 10 + lastDigit;
      num = Math.floor(num / 10);
    }
    return a ? -b : b;
  
  }
  const num1 = reverseNumber(12345);
  console.log(num1);
   const num2 = reverseNumber(-56789); 
  console.log(num2);
   
  // task 2
  function forEach(arr, func) {
      for (let el of arr) {
        func(el);
      }
    }
    forEach([2, 5, 8], function(el) {
        console.log(el);
      });
  
      // task 3
  function map(arr, func) {
    let a = [];
    arr.forEach(function(el) {
      a.push(func(el));
    });
    return a;
  }
  // Example-1
  const arr1= map([2, 5, 8], function(el) {
    return el + 3; 
  }); 
  console.log(arr1);
  // Example-2
  const arr2 = map([1, 2, 3, 4, 5], function(el) { 
    return el * 2; 
  }); 
  console.log(arr2);
      //  task 4
    function filter(arr, func) {
        let arr1 = [];
        arr.forEach(function(el) {
          if (func(el)) {
            arr1.push(el);
          }
        });
        return arr1;
      }
  const res = filter([2, 5, 1, 3, 8, 6], function(el) {
     return el > 3 
  });
  console.log(res);
  const res1 = filter([1, 4, 6, 7, 8, 10], function(el) {
       return el % 2 === 0 ;
  });
  console.log(res1);
  // task 5
  function getAdultAppleLovers(data) {
      let appleLovs = data.filter(function(person) {
        return person.favoriteFruit === 'apple';
      });
      
      let adultAppleLovers = appleLovs.filter(function(person) {
        return person.age > 18;
      });
      
      let names = adultAppleLovers.map(function(person) {
        return person.name;
      });
      
      return names;
    }
    const data = [
      {
        "_id": "5b5e3168c6bf40f2c1235cd6",
        "index": 0,
        "age": 39,
        "eyeColor": "green",
        "name": "Stein",
        "favoriteFruit": "apple"
      },
      {
        "_id": "5b5e3168e328c0d72e4f27d8",
        "index": 1,
        "age": 38,
        "eyeColor": "blue",
        "name": "Cortez",
        "favoriteFruit": "strawberry"
      },
      {
        "_id": "5b5e3168cc79132b631c666a",
        "index": 2,
        "age": 2,
        "eyeColor": "blue",
        "name": "Suzette",
        "favoriteFruit": "apple"
      },
      {
        "_id": "5b5e31682093adcc6cd0dde5",
        "index": 3,
        "age": 17,
        "eyeColor": "green",
        "name": "Weiss",
        "favoriteFruit": "banana"
      }
    ]; 
    console.log(getAdultAppleLovers(data)); 
  
  // task 6
  function getKeys(obj) {
    let arr2=[];
    for(let keys in obj){
      arr2.push(keys);
    }
    return arr2;
    //return Object.keys(obj);
  }
 console.log(getKeys({keyOne: 1, keyTwo: 2, keyThree: 3}));
  // task 7
  function getValues(obj) {
    let arr2=[];
    for(let val in obj)
    {
      arr2.push(obj[val]);
    }
    return arr2;
  // return Object.values(obj);
  }
 console.log(getValues({keyOne: 1, keyTwo: 2, keyThree: 3}));
  