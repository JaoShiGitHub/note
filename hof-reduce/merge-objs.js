const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5, f: 6 };
const mergedObj = [obj1, obj2, obj3].reduce((acc, curr) => {
    return { ...acc, ...curr };
}, {});

console.log(mergedObj); // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }

// round 1: acc = {} , curr = obj1
//          {} and { a: 1, b: 2 }
//          { ...acc, ...curr }
// result:  { a: 1, b: 2 }

// round 2: acc = { a: 1, b: 2 }, curr = obj2
//          { a: 1, b: 2 } and { c: 3, d: 4 }
//          { ...acc, ...curr }
// result:  { a: 1, b: 2, c: 3, d: 4 }

// round 3: acc = { a: 1, b: 2, c: 3, d: 4 }, curr = { e: 5, f: 6 }
//          { a: 1, b: 2, c: 3, d: 4 } and { e: 5, f: 6 }
//          { ...acc, ...curr }
// result:  { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }