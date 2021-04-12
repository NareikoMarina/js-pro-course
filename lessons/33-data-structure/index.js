const quickSort = array => {
  const arr = [...array];
  if (arr.length < 2) {
    return arr
  }

  let pivot = Math.floor(arr.length / 2);

  let left = [];
  let right = [];
  let equal = arr[pivot];

  for (let i = 0; i < arr.length; i++) {
    if ( i === pivot) {
      continue
    }
    if (arr[i].order < equal.order) {
      left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

  return [
    ...quickSort(left),
    equal,
    ...quickSort(right)
  ];
};

const toFlat = array => {
  for(let i = 0; i < array.length;) {
    const value = array[i];
    if(Array.isArray(value)) {
        array.splice(i, 1, ...value);
    } else {
        i ++;
    }
}
  return array
}

const binarySearch = (array, searchValue) => {
  let low = 0;
	let high = array.length - 1;
 
  while(low <= high) {
  	let middle = parseInt((high + low) / 2);
	  let value = array[middle];
 
  	if (value.amount === searchValue) {
		return value;
    }
 
    if (value.amount > searchValue) {
    	high = middle - 1;
    } else {
    	low = middle + 1;
    }
  }
  return 0
}

class HashTable {
  static getKeyByName (name) {
    return name.charCodeAt(0)
  };

  constructor () {
    this.map = new Map();
  }
  add (value) {
    const key = HashTable.getKeyByName(value.name);
    if (!this.map.has(key)) {
      this.map.set(key, new Map())
    }
  
  this.map.get(key).set(key, value)
    return key
  }

  removeByName(name) {
    const key = HashTable.getKeyByName(name);
    const employees = Array.from(this.map.get(key));
    if (!employees) {
      return
    }

    let employeesArray = employees.filter(item => item.name !== name);
    this.map.set(key, employeesArray);
  };

  find (name) {
    const key = HashTable.getKeyByName(name);
    const employeesMap = this.map.get(key);
    if (!employeesMap) {
      return
    }
    return Array.from(employeesMap.values())
      .find((item) => item.name === name)
  }
}

module.exports = {
  quickSort,
  toFlat,
  binarySearch,
  HashTable,
}
