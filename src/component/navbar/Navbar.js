import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../../firebase/config";
import { signOut, onAuthStateChanged } from "firebase/auth";
import './Navbar.css';


function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            alert("Амжилттай гарлаа");
            navigate("/login");
        } catch (error) {
            console.error("Error logging out:", error);
            alert("Гарахад алдаа гарлаа: " + error.message);
        }
    };

    if (loading) {
        return <div>Ачааллаж байна...</div>; // Show a loading state while checking auth status
    }

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">🍔 Бургер Бүтээгч</Link>

                <div className="navbar-menu">
                    <Link to="/" className="navbar-item">Нүүр</Link>

                    {user ? (
                        <>
                            <Link to="/orders" className="navbar-item">Таны захиалгууд</Link>
                            <button onClick={handleLogout} className="navbar-item">Гарах</button>
                        </>
                    ) : (
                        <div className="navbar-auth">
                            <Link to="/login" className="navbar-item">Нэвтрэх</Link>
                            <Link to="/register" className="navbar-item">Бүртгүүлэх</Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;