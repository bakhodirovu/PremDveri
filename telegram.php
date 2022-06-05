<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$msg = $_POST['msg'];
$token = "5553811862:AAGxheOswAirDSj0DM45cjqumTrGIAplUng";
$chat_id = "607919525";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Сообщение:' => $msg
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram && $sendToTelegram2) {
  header('Location: thanks.html');
} else {
  echo "Error";
}
?>