import './ordered.css';
import { useLocation, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase/config';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

function OrderedPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [saving, setSaving] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const orderData = location.state?.orderData || {};

  // Check if user is logged in when component mounts
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      
      if (!currentUser) {
        alert('Энэ хуудсыг үзэхийн тулд нэвтэрч орно уу.');
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const placeOrder = async () => {
    if (!user) {
      alert('Захиалга өгөхийн тулд нэвтэрч орно уу.');
      navigate('/login');
      return;
    }

    if (!orderData || Object.keys(orderData).length === 0) {
      alert('Захиалгын мэдээлэл олдсонгүй.');
      navigate('/');
      return;
    }

    try {
      setSaving(true);

      const payload = {
        userId: user.uid,
        userEmail: user.email,
        items: {
          meat: Number(orderData.meat) || 0,
          cheese: Number(orderData.cheese) || 0,
          salad: Number(orderData.salad) || 0,
          tomato: Number(orderData.tomato) || 0,
        },
        totalPrice: Number(orderData.totalPrice) || 0,
        createdAt: serverTimestamp(),
      };

      console.log('Order payload:', payload);

      const docRef = await addDoc(
        collection(db, 'orders'),
        payload
      );

      console.log('Order saved with ID:', docRef.id);
      alert('Захиалга амжилттай өгөгдлөө!');
      
      navigate('/delivery', {
        replace: true,
        state: { orderData, orderId: docRef.id },
      });
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Захиалга өгөхөд алдаа гарлаа: ' + error.message);
    } finally {
      setSaving(false);
    }
  };

  const handleDelivery = () => {
    navigate('/delivery', {
      state: { orderData },
    });
  };

  if (loading) {
    return <div className="ordered-page">Ачааллаж байна...</div>;
  }

  if (!orderData || Object.keys(orderData).length === 0) {
    return (
      <div className="ordered-page">
        <h2>Захиалга олдсонгүй</h2>
        <button onClick={() => navigate('/')} className="back-button">
          Бургер бүтээгч рүү буцах
        </button>
      </div>
    );
  }

  return (
    <div className="ordered-page">
      <h2>Таны захиалгын хураангуй</h2>
      <div className="order-details">
        <p>🥩 Мах: {orderData.meat || 0}</p>
        <p>🧀 Бяслаг: {orderData.cheese || 0}</p>
        <p>🥬 Салат: {orderData.salad || 0}</p>
        <p>🍅 Улаан лооль: {orderData.tomato || 0}</p>
        <h3>Нийт үнэ: ${orderData.totalPrice || '0.00'}</h3>
      </div>
      
      <div className="order-actions">
        <button
          onClick={() => navigate('/')}
          className="back-button"
        >
          Бургер бүтээгч рүү буцах
        </button>

        <button 
          onClick={placeOrder} 
          className="place-order-button"
          disabled={saving}
        >
          {saving ? 'Захиалга өгч байна...' : 'Захиалга өгөх'}
        </button>

        <button 
          onClick={handleDelivery} 
          className="delivery-button"
        >
          Хүргэлт рүү үргэлжлүүлэх
        </button>
      </div>
    </div>
  );
}

export default OrderedPage;