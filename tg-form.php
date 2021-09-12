<?php

/* https://api.telegram.org/bot1485573902:AAFEcnQgzq1BsfFZ0DWfnrBieA05xruykxE/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$tg_ID = $_POST['user_tg'];
$token = "1485573902:AAFEcnQgzq1BsfFZ0DWfnrBieA05xruykxE";
$chat_id = "1428292250";
$arr = array(
  'Имя посетителя: ' => $name,
  'Его телефон: ' => $phone,
  'Его Telegram ID' => $tg_ID
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>