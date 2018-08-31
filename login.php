<?php

$result = ['succsess' => false, 'msg' => 'klaida'];

if (!empty($_POST['email']) && !empty($_POST['password'])) {
    if ($_POST['email'] == 'admin@admin' && $_POST['password'] == '1234') {
        $result['succsess'] = true;
        $result['msg'] = 'Sveiki Admin!';

    }
}
echo json_encode($result);
?>