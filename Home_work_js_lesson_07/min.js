function insertToList() {
	var element = document.querySelectorAll('ul>li');
	for (var i = 0; i < element.length; i++) {
		var currentElement = element[i];
		currentElement.innerHTML = 'Hello!!!';
		console.log('element amount: ' + element.length);
	}
}