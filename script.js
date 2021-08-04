const stringCalc = {}; 

stringCalc.add = function(stringNums) {


  let delimiter = [];
  let stringNumbers;

  if (stringNums.substring(0,3).includes("//")) {
    const customDelCtrlCode = stringNums.substring(0,3)
    const customDel = [...customDelCtrlCode];
    delimiter.push(customDel[2]);
    stringNumbers = stringNums.split(delimiter).slice(1).map(function(arrNums) {
      return parseInt(arrNums)
    })
  } else {
    delimiter.push(",");
    stringNumbers = stringNums.split(delimiter).map(function(arrNums) {
      return parseInt(arrNums)
    })
  }


  let sum = 0;
  let negatives = [];
  let largeNums = [];
  if (stringNums === "") {
    sum = 0;
  } else {
      for (let i = 0; i < stringNumbers.length; i++) {
        if (stringNumbers[i] < 0) {
          negatives.push(stringNumbers[i])
        } else if (stringNumbers[i] > 1000) {
          largeNums.push(stringNumbers[i]);
        } else {
          sum += stringNumbers[i];
        } 
      }
    }
  for (let i = 0; i < negatives.length; i++) {
    throw new Error("Negatives not allowed: " + negatives)
  }
  return sum;
  };


// returns 10
try {
  console.log(stringCalc.add("1,2,3,4"));
} catch (error) {
  console.log(error.message)
}  

// returns 6
try {
  console.log(stringCalc.add("1\n,2,3"))
} catch (error) {
  console.log(error.message)
}  
    
// returns 14
try {
  console.log(stringCalc.add("//$\n2$3$4$5"));
} catch (error) {
  console.log(error.message)
}
    
// returns 30
try {
  console.log(stringCalc.add("//&\n6&7&8&9"));
} catch (error) {
  console.log(error.message)
}

// returns 0
try {
  console.log(stringCalc.add(""));
} catch (error) {
  console.log(error.message)
}

// throws error: negatives not allowed: -1, -2, -3
try {
  console.log(stringCalc.add("-1,-2,-3,4"));
} catch (error) {
  console.log(error.message)
}

// throws error: negatives not allowed: -3, -2, -1
try {
  console.log(stringCalc.add("4,-3,-2,-1"));
} catch (error) {
  console.log(error.message)
}

// returns integer, 21
try {
  console.log(stringCalc.add("4.3,2.5,7.1,8.9"));
} catch (error) {
  console.log(error.message)
}

// returns 2
try {
  console.log(stringCalc.add("1001,2"));
} catch (error) {
  console.log(error.message)
}

// returns 2
try {
  console.log(stringCalc.add("2,1001"));
} catch (error) {
  console.log(error.message)
}

// returns 1003
try {
  console.log(stringCalc.add("//^\n2001^1000^3"));
} catch (error) {
  console.log(error.message)
}

// returns 8
try {
  console.log(stringCalc.add("//%\n1001%1002%1003%8"));
} catch (error) {
  console.log(error.message)
}

// returns 3
try {
console.log(stringCalc.add("3,1001,1002,1003"));
} catch (error) {
  console.log(error.message)
}