function commonEnd(a, b) {
  if (!a || a.length === 0 || !b || b.length === 0) {
    return false;
  }
  if (a.length < 1 || b.length < 1) {

    return false;

  }

  if (a[0] === b[0] || (a.pop() === b.pop())) {

    return true;

  } else {

    return false;

  }

}

function endsMeet(values, n) {
  let newArray = [];

  if (!values || values.length < n || !Number.isInteger(n) || n < 0) {
    return newArray;
  } else {
    if (n === 0) {
      return values;
    } else {
      for (let i = 0; i < n; i++) {
        if (values[i] !== undefined) {
          newArray.push(values[i]);
        }
      }
      for (let i = n; i > 0; i--) {
        if (values[values.length - i] !== undefined) {
          newArray.push(values[values.length - i]);
        }
      }
      return newArray;
    }
  }
}

function difference(numbers) {
  if (!numbers || numbers.length < 1 || numbers.some(isNaN)){
       return undefined;
   } else {
       let maximum = Number(Math.max.apply(null, numbers));
       let minimum = Number(Math.min.apply(null, numbers));
       let difference = maximum - minimum;
       return difference;
   }
}

function max(number) {
  if (!number || number.length < 3 || number.some(isNaN) || number.length % 2 == 0) {
    return undefined;
  }
  else{
    var last = number[number.length - 1];
    var middle = number[(number.length - 1)/2];
    var first = number[0];
    if(last >= middle && last >= first) {
      return last;
    }
    else if(middle >= last && middle >= first) {
      return middle;
    }
    else if(first >= last && first >= middle) {
      return first;
    }
  }
}

function middle(values) {
  let array = [];
    if (values == undefined ||  values.length < 3 || values.length%2 == 0 ){
          return [];
      }

     else {
      let middleElement = values[values.length - (Math.ceil(values.length / 2))]
      let secondMiddleElement = values[(values.length - 1) - (Math.ceil(values.length / 2))]

      array.push(secondMiddleElement, middleElement)

      return array;
    }
}

function increasing(numbers) {
  if (numbers == undefined || numbers == []) {
    return undefined;

} else if (numbers.length < 3 || numbers.some(isNaN)) {
    return undefined;
  } else {

    for (let i = 1; i < numbers.length; i++) {
      if ((numbers[i - 1] + 1) === numbers[i]) {
        i++
        if ((numbers[i - 1] + 1) === numbers[i]) {
          return true;
          break;
        } else {
          continue;
        }
      } else {
        continue;
      }
    }
    return false;
  }
}

function everywhere(values, x) {
  if (values == undefined || x === undefined) {
    return false;
  } else if (values.length < 1) {
    return false;
  } else if (!values.includes(x)) {
    return false;
  } else {

      for (let y = values.indexOf(x); y < values.length; y++) {
        if (values[y] === values[y + 1] && values[y + 1] !== undefined) {
          return true;
          break;
        } else if (x === 0) {
          return false;
          break;
        } else if (values[y] === values[y + 2] && values[y + 2] !== undefined && values[y + 1] !== values[y]) {
          return true;
          break;
        } else if (values[y] === values[y + 3] && values[y + 3] !== undefined && (values[y + 1] && values[y + 2]) !== values[y + 3]) {
          return true;
          break;
        } else {
          return false;
          break;
        }
      }
  }
}

function consecutive(numbers) {
  if (!numbers || numbers.length < 3) {
        return false;
    }
    let test = false;
    for (let i = 0; i < numbers.length - 2; i++ ) {
        let a = numbers[i];
        let b = numbers[i + 1];
        let c = numbers[i + 2];
        if (Number.isInteger(a) == false || Number.isInteger(b) == false || Number.isInteger(c) == false ) {
            return false;
        }
        if (a % 2 == 0 && b % 2 == 0 && c % 2 == 0) {
             test = true;
        } else if (a % 2 == 1 && b % 2 == 1 && c % 2 == 1) {
             test = true;
        }

    }
    return test;
}

function balance(numbers) {
  // write your code here
  console.log("test");
}

function clumps(values) {
  // write your code here
}

/*
 * Exports all functions for use in external grader.js file. Do not modify.
 */

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};
