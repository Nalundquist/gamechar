const addEventItemObject = (event) => {
  event.preventDefault();
};
// Business Logic
function characterSubmit(event) {
	addEventItemObject(event);
  const nameInput = document.getElementById("nameInput").value;
  const classInput = document.getElementById("classInput").value;
	const alignInput = document.querySelector("input[name='alignment']:checked").value;
  const strInput = document.getElementById("strInput").value;
  const conInput = document.getElementById("conInput").value;
  const intInput = document.getElementById("intInput").value;
  const wisInput = document.getElementById("wisInput").value;
  const dexInput = document.getElementById("dexInput").value;
  const chrInput = document.getElementById("chrInput").value;
  const sanInput = document.getElementById("sanInput").value;
  
  document.querySelector("span#name1a").innerText = nameInput;
  document.querySelector("span#class1a").innerText = classInput;
	document.querySelector("span#morality1a").innerText = alignInput;
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
  addEventItemObject(event);
  characterSubmit();

	const outcome = document.getElementById("outcome");
	const invalid = document.getElementById("invalid");
	function addStats(event) {
		addEventItemObject(event);
		parseInt(strInput);
		parseInt(conInput);
		parseInt(intInput);
		parseInt(wisInput);
		parseInt(dexInput);
		parseInt(chrInput);
		parseInt(sanInput);
		const statSum = strInput + conInput + intInput + wisInput + dexInput + chrInput + sanInput;
		return statSum;
	}


	function checkstats(event){
		addEventItemObject(event);
		addStats();
		
		if (statSum <= 30) {
			outcome.removeAttribute("hidden");
		} else if (statSum > 30) {
			invalid.removeAttribute("hidden");
		}
	}
}

window.addEventListener("load", function(event) {
  addEventItemObject(event);
  let form = document.getElementById("characterSubmit");
  form.addEventListener("submit", setFormSubmissionEventHandler)
});

