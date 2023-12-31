import React from 'react';
import './login.css';
import { useState } from 'react';
import { useLogin } from '../Hooks/useLogin';
import { UseAuthContext } from "../Hooks/useAuthContext";
import { useValidator } from "../Hooks/useValidator";
function Login() {

  const { verifiy } = useValidator();
  const { user } = UseAuthContext();
  const { isLoading, error, login } = useLogin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const navigate = useNavigate();

  const handle_submit = async (e) => {
    e.preventDefault();
    await login(email, password);
    if (user) {
      verifiy();
    }
  };
  return (
    <React.Fragment>
      <div className="containers_login" onSubmit={handle_submit}>
        <form className="form">
          <p className="title">Login </p>
          <p className="message">Login now and get full access to our app. </p>
          <label>
            <input
              className="input"
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>

          <label>
            <input
              className="input"
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>

          {isLoading &&<button className="submit" type="submit" disabled style={{cursor: "not-allowed"}}>
            loading ...
          </button>}
          {!isLoading &&<button className="submit" type="submit">
            Submit
          </button>}     
          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </React.Fragment>
  );
}

export default Login;
