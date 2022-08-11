function setFormSubmissionEventHandler(event) {
  event.preventDefault();
  characterSubmit();
}

window.addEventListener("load", function() {
  let form = document.getElementById("characterSubmit");
  form.addEventListener("submit", setFormSubmissionEventHandler)
});

function characterSubmit() {
  const nameInput = document.getElementById("nameInput").value;
  const classInput = document.getElementById("classInput").value;
  const strInput = document.getElementById("strInput").value;
  const conInput = document.getElementById("conInput").value;
  const intInput = document.getElementById("intInput").value;
  const wisInput = document.getElementById("wisInput").value;
  const dexInput = document.getElementById("dexInput").value;
  const chrInput = document.getElementById("chrInput").value;
  const sanInput = document.getElementById("sanInput").value;
  
  document.querySelector("span#name1a").innerText = nameInput;
  document.querySelector("span#class1a").innerText = classInput;
  document.querySelector("span#str1a").innerText = strInput;
  document.querySelector("span#con1a").innerText = conInput;
  document.querySelector("span#int1a").innerText = intInput;
  document.querySelector("span#wis1a").innerText = wisInput;
  document.querySelector("span#dex1a").innerText = dexInput;
  document.querySelector("span#chr1a").innerText = chrInput;
  document.querySelectro("span#san1a").innerText = sanInput;
}



//function handleSubmission(event) {
 // event.preventDefault();
 // const number1 = parseInt(document.querySelector("input#input1").value);
 // const number2 = parseInt(document.querySelector("input#input2").value);
 // const operator = document.querySelector("input[name='operator']:checked").value;

  //let result = calculate(number1, number2, operator);

 // document.getElementById("output").innerText = result;
  //}

  //window.addEventListener("load", function() {
  //const form = document.getElementById("calculator");
  //form.addEventListener("submit", handleSubmission);
  //});