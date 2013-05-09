<?php 

$message = '';
$dir_upload = 'upload/';
$max_size = 2000000;

$file = $_FILES['example'];

if ($file['size'] <= $max_size && $file['size'] > 0) {
	$new_name = time() . '-' . $file['name'];
	$copied = copy($file['tmp_name'], $dir_upload . $new_name);

	if ($copied) {
		$message = 'Ok!';
	} else {
		$message = 'Erro!';
	}
} else {
	$message = 'Max file size 2mb!';
}

echo json_encode(array("message" => $message));

?>
