import React, {useState} from 'react';
import Navbar from "./component/Navbar.jsx";
import CreateOrder from "./component/CreateOrder.jsx";
import OrderSummary from "./component/OrderSummary.jsx";
import OrderReport from "./component/OrderReport.jsx";

function App() {
    const [orders, setOrders] = useState([]);
    const handleOrderChange = (value) => {
        if(value) {
            const ordertoChange = orders.find((order) => order.id === value);
            // ordertoChange is the order that we want to change
            if (ordertoChange) {
                const updatedOrders = orders.filter((order) => order.id !== value);
                setOrders(updatedOrders);

                // If the order is pending, we delete it
                const isDelivered = ordertoChange.status === "delivered";
                if (isDelivered) {
                    alert("Order already delivered.");
                } else {
                    ordertoChange.status = "delivered";
                    setOrders((prevOrders) => [...prevOrders, ordertoChange]);
                }
            }
            if(value.toLowerCase() === "all") {
                setOrders(orders);
            } else if(value.toLowerCase() === "pending") {
                const pendingOrders = orders.filter((order) => order.status === "pending");
                setOrders(pendingOrders);
            } else if(value.toLowerCase() === "delivered") {
                const deliveredOrders = orders.filter((order) => order.status === "delivered");
                setOrders(deliveredOrders);
            }
        }
    }
    return (
        <div className="text-white bg-background">
            <div className={"container mx-auto px-4 h-screen flex flex-col"}><Navbar/>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
                    <CreateOrder onOrder={setOrders}/>
                    <div className={"md:col-span-2 h-[calc(100vh_-_130px)]"}>
                        <OrderSummary orders={orders.reverse()}/>
                        <OrderReport orders={orders} onOrderReport={handleOrderChange}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
