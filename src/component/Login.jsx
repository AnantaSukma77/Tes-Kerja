import React from 'react';
export default function Login() {
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
        return hasil;
      });

    if (cek_login.username === undefined) {
      console.log(cek_login.username);
      alert('Login gagal. Password atau Email salah !');
    } else {
      alert('Login Sukses');
    }
  };
  return (
    <form onSubmit={onClictBtn}>
      <h1>Silahkan Login</h1>
      <div className="usernameControl">
        <label>Username</label>
        <input type="username" name="username1" />
      </div>
      <div className="passwordControl">
        <label>Password</label>
        <input type="password" name="password1" />
      </div>
      <div className="btn">
        <button type="submit">Login</button>
      </div>
    </form>
  );
}
