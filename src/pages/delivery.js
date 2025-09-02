import './delivery.css';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function DeliveryPage() {
  const location = useLocation();
  const orderData = location.state.orderData || {};
  const [deliveryTime, setDeliveryTime] = useState(1000 * 60 * 30);

  useEffect(() => {
    // Simulate a delivery time calculation
    const Interval = setInterval(() => {
      setDeliveryTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(Interval);
          return 0;
        }
        return prevTime - 1000;
      });
    }, 1000);

    return () => clearInterval(Interval);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = ((time % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="delivery-page">
      <h2>Хүргэлтийн дэлгэрэнгүй</h2>

      <div className="order-summary">
        <p>🥩 Мах: {orderData.meat || 0}</p>
        <p>🧀 Бяслаг: {orderData.cheese || 0}</p>
        <p>🥬 Салат: {orderData.salad || 0}</p>
        <p>🍅 Улаан лооль: {orderData.tomato || 0}</p>
        <h3>Нийт үнэ: ${orderData.totalPrice || '0.00'}</h3>
        <p>Хүргэлтийн тооцоолсон хугацаа: {formatTime(deliveryTime)}</p>
      </div>

      <button
        onClick={() => (window.location.href = '/')}
        className="back-button"
      >
        Бургер бүтээгч рүү буцах
      </button>
    </div>
  );
}
export default DeliveryPage;
