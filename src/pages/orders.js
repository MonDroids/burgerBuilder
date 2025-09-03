import React, { useState, useEffect, useCallback } from "react";
import { auth, db } from "../firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "./orders.css";

function OrdersPage() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const fetchOrders = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);

            const uid = auth.currentUser?.uid;
            console.log("Fetching orders for UID:", uid); // Debug
            
            if (!uid) {
                console.log("No user UID found, redirecting to login");
                navigate("/login");
                return;
            }

            const q = query(
                collection(db, "orders"),
                where("userId", "==", uid)
            );

            console.log("Query created:", q); // Debug
            const snap = await getDocs(q);
            console.log("Query snapshot:", snap); // Debug
            console.log("Documents found:", snap.size); // Document count

            const list = [];
            snap.forEach((doc) => {
                console.log("Order document:", doc.id, doc.data()); // Each document
                list.push({ id: doc.id, ...doc.data() }); 
            });

            list.sort((a, b) => {
                const toDateA = a.createdAt?.toDate ? a.createdAt.toDate() : new Date(a.createdAt);
                const toDateB = b.createdAt?.toDate ? b.createdAt.toDate() : new Date(b.createdAt);
                return toDateB - toDateA; // Sort by createdAt in descending order
            });

            console.log("Final orders list:", list); // Final list
            setOrders(list);
        } catch (e) {
            console.error("Error fetching orders:", e);
            setError("Захиалга татахад алдаа гарлаа. Дараа дахин оролдоно уу.");
        } finally {
            setLoading(false);
        }
    }, [navigate]);

    useEffect(() => {
        console.log("Current user:", auth.currentUser); // Debug
        console.log("User UID:", auth.currentUser?.uid); // Check UID
        
        if (!auth.currentUser) {
            alert("Энэ хуудсыг үзэхийн тулд нэвтэрч орно уу.");
            navigate("/login");
            return;
        }

        fetchOrders();
    }, [navigate, fetchOrders]);

    const formatDate = (timestamp) => {
        if (!timestamp) return "Мэдээлэл алга";
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        return date.toLocaleDateString("mn-MN", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    const getStatusColor = (status) => {
        switch (status) {
            case "pending":
                return "orange";
            case "completed":
                return "green";
            case "cancelled":
                return "red";
            default:
                return "gray";
        }
    };

    const getStatusText = (status) => {
        switch (status) {
            case "pending":
                return "Хүлээгдэж байна";
            case "completed":
                return "Гүйцэтгэгдсэн";
            case "cancelled":
                return "Цуцлагдсан";
            default:
                return "Хүлээгдэж байна";
        }
    };

    if (loading) {
        return (
            <div className="orders-page">
                <div className="loading">
                    <h2>Таны захиалгууд ачааллаж байна...</h2>
                    <p>Таны захиалгын түүхийг татаж байна. Түр хүлээнэ үү.</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="orders-page">
                <div className="error">
                    <h2>Алдаа</h2>
                    <p>{error}</p>
                    <button onClick={fetchOrders} className="retry-button">
                        Дахин оролдох
                    </button>
                    <button onClick={() => navigate("/")} className="back-button">
                        Нүүр хуудас руу буцах
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="orders-page">
            <h2>Таны захиалгууд</h2>
            <p>Нийт захиалга: {orders.length}</p>

            {orders.length === 0 ? (
                <div className="no-orders">
                    <p>Захиалга олдсонгүй.</p>
                    <button onClick={() => navigate("/")} className="back-button">
                        Бургер бүтээгч рүү буцах
                    </button>
                </div>
            ) : (
                <div className="orders-list">
                    {orders.map((order) => (
                        <div key={order.id} className="order-item">
                            <h3>Захиалгын дугаар: {order.id}</h3>
                            <p>Огноо: {formatDate(order.createdAt)}</p>
                            <p>Төлөв: <span style={{ color: getStatusColor(order.status) }}>{getStatusText(order.status || 'pending')}</span></p>
                            <p>🥩 Мах: {order.items?.meat || 0}</p>
                            <p>🧀 Бяслаг: {order.items?.cheese || 0}</p>
                            <p>🥬 Салат: {order.items?.salad || 0}</p>
                            <p>🍅 Улаан лооль: {order.items?.tomato || 0}</p>
                            <p>Нийт үнэ: ${order.totalPrice?.toFixed(2) || '0.00'}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default OrdersPage;