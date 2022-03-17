<?php
if(!isset($_POST['submit'])){
    //tiene que enviar el mail
    echo "error tenes que enviar el mail";

}
$backslash ="\n";


$nombre = $_POST['nombre'];
$mail = $_POST['mail'];
$mensaje = $_POST['mensaje'];


$email_form = 'santifonlop@hotmail.com'; //me email
$email_asunto = "LLego nuevo mail we";

$email_cuerpo =" Recibiste un nuevo mensaje del usuario $nombre. $backslash ",
                "Email: $mail $backslash",
                "Mensaje: $mensaje";

$to = "santifonlop@hotmail.com";
$headers = "De: $mail \r\n";

mail(
    $to, 
    $mail_asunto, 
    $email_cuerpo,
    $headers
); 
echo "echo pana";
exit();



?>