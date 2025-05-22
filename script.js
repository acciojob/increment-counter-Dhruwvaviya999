//your JS code here. If required.

let count = document.getElementById("counter");
let incrementBtn = document.getElementById("incrementBtn");

incrementBtn.addEventListener("click", ()=>{
	alert(parseInt(count.textContent));
	count.textContent = parseInt(count.textContent) + 1;
})