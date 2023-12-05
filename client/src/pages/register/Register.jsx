import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./register.scss";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = async (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try {
      await axios.post(process.env.REACT_APP_API_URL+"auth/register", { email, username, password });
      history.push("/login");
    } catch (err) { }
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/neflix-b34c6.appspot.com/o/images%2Fbody-image%2FUOStreamer%20Logo.png?alt=media&token=2944d649-93c7-4664-a83f-fa67be5ce500" alt="UOStreamer" />
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <Link to="/login" className="link">
          <span>Already Registered? <b>Sign In now.</b></span>
        </Link>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="username" placeholder="username" ref={usernameRef} />
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
