function makeFunc() {
  let name = "Mozilla";
  function displayName() {
    alert(name);
  }
  return displayName;
};

let myFunc = makeFunc();
myFunc()
//Mozilla
