import React, {useState} from 'react';
import SearchOrder from "./SearchOrder.jsx";
import foodItem from "../Lib/lib.js"
const CreateOrder = ({onOrder}) => {
    const [inputValue, setInputValue] = useState("");
    const [orders, setOrders] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(1);
    const handleOrderChange = (value) => {
        setTotalPrice(totalPrice + value.price);
        setTotalItems(totalItems + 1);
        const orderData = {
            totalPrice: totalPrice + value.price,
            totalItems: totalItems,
        }
        setOrders((prevOrders) => {
            return [
                ...prevOrders,
                {
                    id: value.id,
                    customerName: inputValue,
                    items: [value],
                    totalPrice: totalPrice,
                    status: "pending",
                    createdAt: new Date().toLocaleString(),
                },
            ];
        });
        onOrder(orders, orderData);
    };
    return (
        <div className={"bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]"}>
            <SearchOrder onInputValueChange={setInputValue}/>
            {/*Choose Items*/}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Choose Items</label>
                <div className="items-container">
                    {foodItem.map((item)=>(
                        <div key={item.id}
                            className="bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300">
                            <div className="flex items-center">
                                <div className="w-12 h-12   flex items-center justify-center mr-3">
                                    <img src={item.icon || ""} alt="Hamburger" className="w-10 h-10"/>
                                </div>
                                <div>
                                    <h3 className="font-medium">{item.name}</h3>
                                    <p className="text-xs text-gray-400">BDT {item.price}</p>
                                </div>
                            </div>
                            <button onClick={()=> handleOrderChange(item)}
                                className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500"
                                     viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd"
                                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                          clipRule="evenodd"/>
                                </svg>
                            </button>
                        </div>
                    ))}

                </div>
            </div>
            <button
                className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                Place Order (BDT {totalPrice})
            </button>
        </div>
    );
};

export default CreateOrder;
