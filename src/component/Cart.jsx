import { toast } from "react-toastify";


const Cart = ({carts, setcarts}) => {

    const totalPrice = carts.reduce((sum,item) => sum + item.price, 0)

    const handlePayment = () => {
        setcarts([]);
        toast.success("Payment successful!")
    };

    const handleDelete = (item) => {
        const filteredArray = carts.filter(c => c.id !== item.id)
        setcarts(filteredArray);
        toast.success("Cart deleted!")

    }
    return (
        <div className="p-10 max-w-7xl mx-auto">

            <h1 className="text-2xl font-bold">Your Cart</h1>
            {
                carts.length === 0 ? <p>Cart is Empty</p> :
                <>
                    <div className="space-y-5 mt-5">
             {

                carts.map(item => <div className="flex items-center justify-between border rounded-lg p-3" key={item.id}>
                    <div className="flex items-center gap-2">
                        <div>
                        <img className="h-20 w-20 object-contain" src={item.icon} alt="" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">{item.name}</h2>
                    </div>
                    </div>

                    <div>${item.price}</div>
                    <button onClick={()=>handleDelete(item)} className="btn rounded-lg btn-error">Remove</button>
                </div>)
            }
           </div>
           <div className="flex justify-between p-5 mt-5 rounded-lg ">
            <div>Total:</div>
            <div className="font-bold">${totalPrice}</div>
           </div>

           <button onClick={handlePayment} className="btn w-full mt-5 bg-blue-700 text-white text-2xl rounded-full">Proceed to Checkout</button>
                </>
            }

           
        </div>
    );
};

export default Cart;