import React, { useState } from "react";
import Hero from "../../assets/Hero.png";
import "./SignIn.css";
import { login } from "../../services/api.service";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";

type Props = {};

const SignIn = (props: Props) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onSubmitForm = async () => {
    const res = await login(form.email, form.password);
    console.log(res);
    if (res !== null) {
      // secure: true. Cookies will only work for an HTTPS domain.
      Cookies.set("token", res.token, { expires: 7 });

      navigate("/profile");
    } else {
      console.log("Error form");
    }
  };

  return (
    <div>
      <NavBar />
      <div className="signin-container">
        <img className="hero2-img" src={Hero} alt="missing"></img>
        <div className="signin-input-container">
          <h1 style={{ fontWeight: 50 }}>Sign In</h1>
          <div className="signin-input">
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="signin-input-field"
            />
            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="signin-input-field"
            />
            <button className="signin-btn" onClick={onSubmitForm}>
              Sign In
            </button>

            <h1 className="siginin-or">OR</h1>
            <button className="signin-btn-helper">Use a Sign-In Code</button>
            <button className="signin-btn-helper">Forget Password?</button>
            <label className="signin-rememberme">
              <input className="signin-rememberme-checkbox" type="checkbox" />
              Remember Me?
            </label>
            <div className="sigin-text-container">
              <div className="signin-text">New to Netflix?</div>
              <b className="signin-text-signup"> Sign up now.</b>
            </div>
            <div className="signin-text-remark">
              This page is protected by Google reCAPTCHA to ensure you’re not a
              bot.{" "}
              <a href="/signin" className="signin-text-link">
                Learn more.
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
