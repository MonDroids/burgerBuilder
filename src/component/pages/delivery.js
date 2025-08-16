import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './delivery.css';

function DeliveryPage() {
    const location = useLocation();
    const orderData = location.state.orderData || {};
    const [deliveryTime, setDeliveryTime] = useState(1000 * 60 * 30);

    useEffect(() => {
        const Interval = setInterval(() => {
            setDeliveryTime(prevTime => {
                if(prevTime <= 0) {
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
            const seconds = Math.floor((time % 60000) / 1000).toFixed(0);
            return `${minutes} min : ${seconds < 10 ? '0' : ''}${seconds} sec`;
        };
    return(
        <div className='delivery-page'>
            <h2>Delivery Details</h2>
            <div className='order-summary'>
                <p>Meat: {orderData.meat || 0}</p>
                <p>Cheese: {orderData.cheese || 0}</p>
                <p>Salad: {orderData.salad || 0}</p>
                <p>Tomato: {orderData.tomato || 0}</p>
                <h3>Total Price: ${orderData.totalPrice || '0.00'}</h3>
                <p>Estimated Delivery Time: {formatTime(deliveryTime)}</p>
            </div>
            <button onClick={() => (window.location.href = '/')} className='back-button'>
                Back to Burger Builder
            </button>
        </div>
    );

}

export default DeliveryPage;
