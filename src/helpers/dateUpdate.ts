export const dateUpdate = (date: Date) => {
	let formatter = new Intl.DateTimeFormat('ru', {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
	});

	return formatter.format(date);
};
