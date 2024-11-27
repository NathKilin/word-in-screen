const products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Phone', price: 800 },
    { id: 3, name: 'Airpods', price: 200 }
];

import { addItem, removeItem } from "../store/slices/cartSlice.js";
import { useSelector, useDispatch } from "react-redux";

const Products = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    function handleAddItem(item) {
        const itemData = {
            ...item,
            quantity: 1,
            totalPrice: item.price,
        };
        dispatch(addItem(itemData));
    }

    return (
        <div>
            <h2>Products List</h2>
            {products.map((prod) => (
                <div key={prod.id}>
                    <span>
                        {prod.name} - ${prod.price}
                    </span>
                    <button onClick={() => handleAddItem(prod)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default Products;
 