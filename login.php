<?php

$result = ['login' => false, 'msg' => 'Your username/password is incorrect. Try again!'];

if (!empty($_POST['email'])) {
    if ($_POST['email'] == 'admin@visma.com' && $_POST['password'] == 'admin') {
        $result['login'] = true;
        $result['msg'] = 'Sveiki Admin!';
    }
}
echo json_encode($result);
?>