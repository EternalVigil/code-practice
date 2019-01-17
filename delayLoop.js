let counter = 1;
const loopLimit = 10;

function numPrinter() {
	setTimeout( () => {
		console.log(counter);
		counter++;

		if (counter <= loopLimit) {
			numPrinter();
		}
	}, 3000);
}

numPrinter();