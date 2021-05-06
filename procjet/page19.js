function makeFunc() {
  let name = "Mozilla";
  function displayName() {
    alert(name);
  }
  return displayName;
};

var myFunc = makeFunc();
myFunc()
