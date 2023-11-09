import { useContext, useState } from "react";
import { login } from "../../authContext/apiCalls";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import "./login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/neflix-b34c6.appspot.com/o/images%2Fbody-image%2FUOStreamer%20Logo.png?alt=media&token=2944d649-93c7-4664-a83f-fa67be5ce500" alt="UOStreamer" />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email or phone number"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" onClick={handleLogin}>
            Sign In
          </button>
          <Link to="/register" className="link">
            <span>New to Netflix?<b>Sign up now.</b></span>
          </Link>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}
