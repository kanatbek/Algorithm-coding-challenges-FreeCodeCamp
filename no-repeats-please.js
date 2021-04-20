// Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

// For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
function permAlone(str) {
  let arr = str.split("");
  let perms = [[]];
  for (let i of arr) {
    let new_perm = []
    for (let j of perms) {
      for (let k =0; k<j.length+1; k++) {
        new_perm.push(j.slice(0,k)+[i]+ j.slice(k))
      }
    }
    perms = new_perm;
  }
  const regRepChars = /(.)\1+/
  let len = perms.filter(el => !regRepChars.test(el))
  return len.length;
}

permAlone("aab") // a number.

permAlone("aab") // 2.

permAlone("aaa") // 0.

permAlone("aabb") // 8.

permAlone("abcdefa") // 3600.

permAlone("abfdefa") // 2640.

permAlone("zzzzzzzz") // 0.

permAlone("a") // 1.

permAlone("aaab") // 0.

permAlone("aaabb") // 12.