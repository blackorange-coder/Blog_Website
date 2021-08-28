window.addEventListener('load', function() {
    var usernames = document.querySelector('.username');
    var passwords = document.querySelector('.password');
    var btnLogin = document.getElementById('btnLogin');

    //登陆处理函数
    btnLogin.addEventListener('click', function(e) {
        e.preventDefault();

        var username = usernames.value;
        var password = passwords.value;

        // console.log(!!username);
        // console.log(password);
        if (!username || !password) {
            alert('账号或密码不能为空，请输入！')
        } else {
            console.log('success');
            var datas = {
                username,
                password
            }

            // console.log(datas);
            $.ajax({
                method: 'POST',
                url: '/api/login',
                data: datas,
                success: function(res) {
                    console.log(res);
                    if (res.status === 1) {
                        alert('账号或密码错误请重新输入！')
                    } else {
                        alert('欢迎管理员回家！')
                        var token = res.token;
                        localStorage.setItem('token', token);
                        location.href = './admin_index.html';
                    }

                }
            })
        }


        // 提交完毕后清空输入框

        usernames.value = '';
        passwords.value = '';
    })









})