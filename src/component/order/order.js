import './order.css';

function Order(props) {
  return (
    <div className="order">
      <h2>Your Order</h2>
      <p>Meat: {props.meat}</p>
      <p>Cheese: {props.cheese}</p>
      <p>Salad: {props.salad}</p>
      <p>Tomato: {props.tomato}</p>
      <p>Total Price: ${props.totalPrice}</p>
      <button onClick={props.onOrder} className="confirm-button">Place Order</button>
    </div>
  );
}

export default Order;
