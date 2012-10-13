var fullName = function(firstName, lastName){
	var splitFirstName = firstName.split('');
	splitFirstName[0] = splitFirstName[0].toUpperCase();
	var capFirstName = splitFirstName.join("");

	var splitLastName = lastName.split('');
	splitLastName[0] = splitLastName[0].toUpperCase();
	var capLastName = splitLastName.join("");

	return capFirstName + " " + capLastName;
};


