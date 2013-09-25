$('#input01').filestyle()

$('#input02').filestyle({
	classButton: 'btn btn-warning'
});

$('#input03').filestyle({
	classInput: 'form-control'
});

$('#input04').filestyle({
	classIcon: 'glyphicon glyphicon-cloud-upload'
});

$('#input05').filestyle();

$('#clear').click(function () {
	$('#input08').filestyle('clear');
});

$('#input06').filestyle();

$('.teste').filestyle();