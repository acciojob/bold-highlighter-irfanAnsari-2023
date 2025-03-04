function highlight() {
    //Write your code here
	let boldWords = document.querySelectorAll("strong");
	boldWords.forEach(word =>{
		word.style.color = "rgb(0, 128, 0)";
	});
	// for (let i = 0; i < boldWords.length; i++) {
 //    boldWords[i].style.color = "rgb(0, 0, 0)";
// }

}

function return_normal() {
    //Write your code here
	let boldWords = document.querySelectorAll("strong");
	boldWords.forEach(word =>{
		word.style.color = "rgb(0, 0, 0)";
	});

    
}
