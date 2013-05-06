$('#input01').filestyle()

$('#input02').filestyle({
	buttonText: 'My button'
});

$('#input03').filestyle({
	buttonText: 'No text field',
	input: false
});

$('#input04').filestyle({
	buttonText: 'Custom',
	classButton: 'btn-success',
	classText: 'input-small'
});

$('#input05').filestyle({
	buttonText: '',
	classButton: 'btn-primary',
	classIcon: 'icon-arrow-up'
});
