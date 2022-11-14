import Login from './component/Login';
import Home from './component/Home';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const onClictBtn = async (event) => {
    event.preventDefault(event);
    let usernameMasuk = event.target.username1.value;
    let passwordMasuk = event.target.password1.value;
    let cek_login = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: usernameMasuk,
        password: passwordMasuk,
      }),
    })
      .then((res) => res.json())
      .then((hasil) => {
        console.log(hasil);

        return hasil;
      });

    if (cek_login.username === undefined) {
      alert('Login gagal. Password atau Email salah !');
    } else {
      setUser(cek_login);
      window.localStorage.setItem('Token', cek_login.token);
      window.localStorage.setItem('Username', cek_login.username);
      alert('Login Sukses');
      navigate('/home');
    }
  };
  useEffect(() => {
    const tokenItem = window.localStorage.getItem('Token');
    const userItem = window.localStorage.getItem('Username');
    if (tokenItem && userItem) {
      setUser({ token: tokenItem, username: userItem });
      navigate('/home');
    }
  }, []);
  return (
    <Routes>
      {user ? (
        <>
          <Route path="/home" element={<Home />} />;
        </>
      ) : (
        <>
          <Route path="/" element={<Login klikLogin={onClictBtn} />} />
          <Route path="*" element={<Navigate to={'/'} replace />} />
        </>
      )}
    </Routes>
  );
}

export default App;
