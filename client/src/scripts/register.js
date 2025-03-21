document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('errorMessage');

    // 验证密码是否一致
    if (password !== confirmPassword) {
        errorMessage.textContent = '密码不一致';
        return;
    }

    try {
        // 发送注册请求
        const response = await fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (response.ok) {
            alert('注册成功！');
            // window.location.href = '/login.html'; // 跳转到登录页面
        } else {
            errorMessage.textContent = data.error || '注册失败';
        }
    } catch (err) {
        console.error('注册错误:', err);
        errorMessage.textContent = '网络错误，请重试';
    }
});