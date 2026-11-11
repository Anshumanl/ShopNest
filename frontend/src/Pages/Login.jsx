import {useState, useContext} from "react";
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../Context/AuthContext";
import "../Styles/Register.css";
import axios from "axios"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSubmit = async (e) => { 
        e.preventDefault();
        try {
            const res = await axios.post("/api/auth/login", {
                email,
                password
            });
            login(res.data);
            navigate("/");
        } catch (err) {
            if (err.response?.data?.code === "USER_NOT_FOUND") {
                window.alert("This email is not registered. Please register first.");
            } else if (err.response?.status === 400 || err.response?.status === 401) {
                window.alert("Incorrect email or password. Please try again.");
            } else if (err.response) {
                window.alert("Login failed. Please try again later.");
            } else {
                window.alert("Unable to log in right now. Please try again later.");
            }
        }
    };

    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Email</label>
                <input
                    type="email" 
                    value={email}
                    className="loginInput"
                    placeholder="Enter your email..."   
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    className="loginInput"
                    placeholder="Enter your password..."
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button className="loginButton" type="submit">
                    Login
                </button>
                 <p className="loginRegisterPrompt">
                Don&apos;t have an account? <Link to="/register">Register</Link>
            </p>
            </form>
           
        </div>
    );
};

export default Login;   