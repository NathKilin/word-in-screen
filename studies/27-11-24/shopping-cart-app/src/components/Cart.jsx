import { useSelector } from "react-redux";

const Cart = () => {
    const cart = useSelector((state) => state.cart);

    console.log(cart);

    return (
        <div>
            <h2>My Cart</h2>
            <p>Total Items: {cart.totalQuantity}</p>
            <p>Total Price: ${cart.totalPrice}</p>
            <ul>
                {cart.items.map((item) => (
                    <li key={item.id} style={{ margin: "10px 0" }}>
                        <span>
                            {item.name}: ${item.price} x {item.quantity} = ${item.price * item.quantity}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
