function sym(args) {
  function reducer (a,b) {
    let res = [];
    a.forEach(el => res.indexOf(el) <0 && b.indexOf(el) < 0? res.push(el):-1);
    b.forEach(el => res.indexOf(el) <0 && a.indexOf(el) < 0? res.push(el):-1);
    return res;
  }
  return Array.from(arguments).reduce(reducer);
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));