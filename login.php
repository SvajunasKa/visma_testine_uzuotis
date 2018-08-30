<?php
if (!empty($_POST['email']) && !empty($_POST['password'])) {

    if ($_POST['email'] == 'admin@admin' && $_POST['password'] == '1234') {

        echo 'You have entered valid use name and password';
    } else {
        echo  'Wrong username or password';
    }
}else{
    echo "aaaa";
}
?>