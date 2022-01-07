
		var objPeople = [
	{ // Object @ 0 index
		nip0: "sam",
		birthDate0: "codify"
	},
	{ // Object @ 1 index
		username: "matt",
		password: "academy"
	},
	{ // Object @ 2 index
		username: "chris",
		password: "forever"
	}

];

function getInfo() {
	var nip0 = document.getElementById('nip0').value;
	var birthDate0 = document.getElementById('birthDate0').value;
	

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(nip0 == objPeople[i].nip0 && birthDate0 == objPeople[i].birthDate0) {
		     window.open("https://www.google.com");
			// stop the function if this is found to be true
			return;
		}
	}
	console.log("incorrect username or password");
}