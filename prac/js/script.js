var c=["new delhi","mumbai","kolkata","jaipur","lucknow","chandigarh","patna","bhopal","chennai"];


function city() {
	var s=document.getElementById("search").value;
	var d="So,you are from " + s;
	// console.log("Done!");
	document.getElementById("jumbo").style.display="none";
	document.getElementById("display").textContent = d;
}