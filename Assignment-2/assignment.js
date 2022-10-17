const task3Element = document.getElementById("task-3");

function welcome() {
  alert("Hi, there! Welcome to Assignment #2");
}

function setName(name) {
  alert("Hello, " + name + "!");
}

welcome();
setName("Dany");

task3Element.addEventListener("click", welcome);

function mySentence(stringOne, stringTwo, stringThree) {
  return stringOne + " " + stringTwo + " " + stringThree;
}

alert(
  mySentence(
    "Hello, there!",
    "This function seems to work...",
    "Congratulations!"
  )
);
