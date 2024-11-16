// Your code goes here
// task1

function isEquals(a, b){
    return a === b ;
}
 console.log(isEquals(3, 3));

//  task 2

  function isBigger(a , b){
    return a > b
  }
  console.log(isBigger(5, -1));

//    task 3

function storesNames(...args){
    let arr=[];
    for(let val of args){
        arr.push(val);
    }
    return arr;
    
}
console.log(storesNames('Tommy Shelby', 'Ragnar Lodbrok', 'Tom Hardy'));

// task 4

function getDifference(num1,num2){
    let val=num1-num2;
    if(val<0){
        val=val*-1;
        return val;
    }
    return val;
}
console.log(getDifference(5,3));

// task 5

function negativeCount(arr){
    let count=0;
    for(let key in arr){
        if(arr[key]<0){
        count++;
        }
    }
    return count;
}
console.log(negativeCount([4,3,2,-8]));

// task 6

function letterCount(str,a){
    let count=0;
    for(let key in str){
        if(str[key]===a){
            count++;
        }
    }
    return count;
}
console.log(letterCount("Marry",'r'));

// task 7

function countPoints(games){
    let pt = 0;
    for (let i = 0; i < games.length; i++){
    const matchResult = games[i].split(':');
    const x = Number(matchResult[0]);
    const y = Number(matchResult[1]);
    if (x > y) {
    pt += 3;
    } else if (x === y) {
    pt += 1;
    }
    }
    return pt;
    }

console.log(countPoints(['100:90', '110:98', '100:100', '95:46', '54:90', '99:44', '90:90', '111:100']));
