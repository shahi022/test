<!DOCTYPE html>
<html>
<head>
	<title>Message Box</title>
</head>
<body>
	<h1>Message Box</h1>
	<form method="post">
		<label for="message">Enter message:</label>
		<input type="text" name="message" id="message">
		<button type="submit" name="save">Save</button>
		<button type="submit" name="load">Load</button>
	</form>

	<?php
		// Check if the form has been submitted
		if(isset($_POST['save'])) {
			// Get the message from the form
			$message = $_POST['message'];
			// Open the file for appending
			$file = fopen('messages.txt', 'a');
			// Write the message to the file
			fwrite($file, $message."\n");
			// Close the file
			fclose($file);
			// Display a message to the user
			echo "<p>Message saved.</p>";
		}
		elseif(isset($_POST['load'])) {
			// Open the file for reading
			$file = fopen('messages.txt', 'r');
			// Read the contents of the file
			$contents = fread($file, filesize('messages.txt'));
			// Close the file
			fclose($file);
			// Display the contents of the file
			echo "<p>Previously saved messages:</p>";
			echo "<pre>".$contents."</pre>";
		}
	?>
</body>
</html>
