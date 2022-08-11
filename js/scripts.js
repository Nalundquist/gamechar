function charactersubmit(event) {
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


window.addEventListener("load", function() {
  let form = document.querySelector("form");
  form.addEventListener("submit", charactersubmit(event))
  event.preventDefault 
}