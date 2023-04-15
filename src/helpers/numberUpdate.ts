export const numberUpdate = number => {
	let formatter = new Intl.NumberFormat('ru', {
		maximumSignificantDigits: 3,
	});

	return '+' + formatter.format(number);
};
