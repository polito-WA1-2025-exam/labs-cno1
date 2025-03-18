// Login.js
const response = await axios.post('http://localhost:5000/api/auth/login', {
    username,
    password,
});

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:5000/api/auth/login', {
            username,
            password,
        });
        console.log('Login response:', response.data);
        localStorage.setItem('token', response.data.token);
        navigate('/');
    } catch (err) {
        console.error('Login error:', err.response ? err.response.data : err.message);
        setError('Invalid credentials');
    }
};