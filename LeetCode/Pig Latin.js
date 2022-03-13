function translatePigLatin(str) {
  //一个游戏
  let re = /^[aeiou]/;
  if (re.test(str)) {
    str = str + "way"
  } else {
    let rex = /([^aeiou]+)([aeiou])(.*)/
    str = str.replace(rex, "$2$3$1")+"ay"
  }
  return str
}

console.log(translatePigLatin('rhythm'))