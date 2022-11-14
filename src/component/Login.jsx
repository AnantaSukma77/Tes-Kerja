import React from 'react';

export default function Login({ klikLogin }) {
  return (
    <form onSubmit={klikLogin}>
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
