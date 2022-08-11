const addEventItemObject = (event) => {
  event.preventDefault();
};
// Business Logic
function characterName() {
  const nameInput = document.getElementById("nameInput").value;
  document.querySelector("span#name1a").innerText = nameInput;

}

function characterClass() {
  const classInput = document.getElementById("classInput").value;
  document.querySelector("span#class1a").innerText = classInput;
  
}

function characterAlign() {
  const alignInput = document.querySelector("input[name='alignment']:checked").value;
  document.querySelector("span#morality1a").innerText = alignInput;
  
}

function characterStats() {
  const strInput = document.getElementById("strInput").value;
  const conInput = document.getElementById("conInput").value;
  const intInput = document.getElementById("intInput").value;
  const wisInput = document.getElementById("wisInput").value;
  const dexInput = document.getElementById("dexInput").value;
  const chrInput = document.getElementById("chrInput").value;
  const sanInput = document.getElementById("sanInput").value;

  
  document.querySelector("span#str1a").innerText = strInput;
  document.querySelector("span#con1a").innerText = conInput;
  document.querySelector("span#int1a").innerText = intInput;
  document.querySelector("span#wis1a").innerText = wisInput;
  document.querySelector("span#dex1a").innerText = dexInput;
  document.querySelector("span#chr1a").innerText = chrInput;
  document.querySelector("span#san1a").innerText = sanInput;
  
}


//User Interface Logic
function setFormSubmissionEventHandler(event) {
  event.preventDefault();
  characterName();
	characterClass();
	characterAlign();
	characterStats();
  outcome.setAttribute("class", "hidden")
  invalid.setAttribute("class", "hidden")
  const num1 = parseInt(document.getElementById("strInput").value);
  const num2 = parseInt(document.getElementById("conInput").value);
  const num3 = parseInt(document.getElementById("intInput").value);
	const num4 = parseInt(document.getElementById("wisInput").value);
	const num5 = parseInt(document.getElementById("chrInput").value);
	const num6 = parseInt(document.getElementById("dexInput").value);
	const num7 = parseInt(document.getElementById("sanInput").value);
	const statSum = num1 + num2 + num3 + num4 + num5 + num6 + num7;
	function checkStats(){
    const outcome = document.getElementById("outcome");
		const invalid = document.getElementById("invalid");
		// addStats();
		
		if (statSum <= 30) {
			outcome.removeAttribute("class");
		} else if (statSum > 30) {
			invalid.removeAttribute("class");
		}

		console.log(statSum)
		console.log(num1)
		console.log(num2)
		console.log(num3)
		console.log(num4)
		console.log(num5)
		console.log(num6)
	}
  checkStats();

	// function addStats() {
	// 	return statSum;
 

	// function addStats2(){
	//  	parseInt(1)
	//  	parseInt(2)
	//  	parseInt(3)
	//  	parseInt(4)
	// 	parseInt(5)
	//  	parseInt(6)
	//  	const statSum = 1 + 2 + 3 + 4 + 5 + 6 + 7
	//  }
}
// }

window.addEventListener("load", function(event) {
  addEventItemObject(event);
  let form = document.getElementById("characterStats");
  form.addEventListener("submit", setFormSubmissionEventHandler)
});

