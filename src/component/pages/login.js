
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";
import "./auth.css";

export default function Login() {
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Амжилттай нэвтэрлээ");
      navigate("/");
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Нэвтрэхэд алдаа гарлаа: " + error.message);
    }
    };

    return (
        <div className="auth-container">
            <div className="auth-form">
                <h2>Нэвтрэх</h2> 
                <form onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="email">И-мэйл:</label>
                        <input type="email" name="email" id="email" required />
                    </div>
                    <div>
                        <label htmlFor="password">Нууц үг:</label>
                        <input type="password" name="password" id="password" required />
                    </div>
                    <button type="submit">Нэвтрэх</button>
                </form>
                <p>Бүртгэл байхгүй юу? <Link to="/register">Бүртгүүлэх</Link></p>
            </div>
        </div>
    );
}
