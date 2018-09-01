<?php

$result = ['login' => false, 'msg' => 'Klaidingas prisijungimas'];

if (!empty($_POST['email'])) {
    if ($_POST['email'] == 'admin@visma.com' && $_POST['password'] == 'admin') {
        $result['login'] = true;
        $result['msg'] = 'Sveiki Admin!';

    }
}
echo json_encode($result);
?>