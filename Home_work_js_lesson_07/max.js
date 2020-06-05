function changeStyle() {
	var element = document.querySelectorAll('li>a');
	for (var i = 0; i < element.length; i++) {
		var curEl = element[i];
		if ((curEl.matches('a[href *="http://"]') || curEl
				.matches('a[href *="ftp://"]'))
				&& !(curEl.matches('a[href *="http://internal.com"]'))) {
			curEl.classList.add('external-red');
		}
	}
}