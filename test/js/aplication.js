$('#input01').filestyle()

$('#input02').filestyle({
	text: 'My filestyle'
});

$('#input03').filestyle({
	input: false,
	classButton: 'btn btn-primary'
});

$('#input04').filestyle({
	icon: false
});

$('#input05').filestyle({
	classButton: 'btn btn-warning'
});

$('#input06').filestyle({
	classInput: 'form-control'
});

$('#input07').filestyle({
	classIcon: 'icon-plus',
	text: 'Add'
});

$('#input08').filestyle({
	text: 'File',
	classButton: 'btn btn-success'
});

$('#clear').click(function () {
	$('#input08').filestyle('clear');
});

$('#input09').filestyle({
	text: 'File',
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
	text: 'File',
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
	text: 'Multiple',
	classButton: 'btn btn-danger'
});

$('#input12').filestyle();
$('#input12').filestyle('buttonText', '');

$('.form-horizontal').eq(1).find(':file').filestyle();