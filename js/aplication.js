$('#input01').filestyle()

$('#input02').filestyle({
	buttonText: 'My button'
});

$('#input03').filestyle({
	buttonText: 'No text field',
	textField: false
});

$('#input04').filestyle({
	buttonText: 'Custom',
	textField: true,
	classButton: 'btn-success',
	classText: 'input-small'
});

$('#input05').filestyle({
	buttonText: 'Open file',
	classButton: 'btn-primary',
	icon: true,
	classIcon: 'icon-arrow-up icon-white'
});
