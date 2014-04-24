$('#input01').filestyle()

$('#input02').filestyle({
	buttonText: 'My filestyle',
	buttonBefore: true
});

$('#input03').filestyle({
	input: false,
	classButton: 'btn btn-primary'
});

$('#input04').filestyle({
	icon: false
});

$('#input05').filestyle({
	classButton: 'btn btn-warning',
	disabled: true
});

$('#input06').filestyle({
	classInput: 'input-small'
});

$('#input07').filestyle({
	classIcon: 'icon-plus',
	buttonText: 'Add'
});

$('#input08').filestyle({
	buttonText: 'File',
	classButton: 'btn btn-success'
});

$('#clear').click(function () {
	$('#input08').filestyle('clear');
});

$('#input09').filestyle({
	buttonText: 'File',
	classButton: 'btn btn-primary'
});

$('#toggleInput').click(function () {
	var fs = $('#input09');
	if (fs.filestyle('input'))
		fs.filestyle('input', false);
	else
	   	fs.filestyle('input', true);
});

$('#input10').filestyle({
	buttonText: 'File',
	classButton: 'btn btn-primary'
});

$('#toggleIcon').click(function () {
	var fs = $('#input10');
	if (fs.filestyle('icon'))
		fs.filestyle('icon', false);
	else
	   	fs.filestyle('icon', true);
});

$('#input11').filestyle({
	buttonText: 'Multiple',
	classButton: 'btn btn-danger'
});

$('#input12').filestyle();
$('#input12').filestyle('buttonText', '');

$('.form-horizontal').eq(1).find(':file').filestyle();