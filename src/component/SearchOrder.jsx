import React from 'react';

const SearchOrder = ({onInputValueChange}) => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
            <p className="text-gray-400 text-sm mb-4">Accurately fulfill customer orders based on a precise
                understanding of their requirements.</p>
            {/*Customer Name Input */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Customer Name</label>
                <input type="text" onChange={(e) => onInputValueChange(e.target.value)}
                       className="w-full bg-gray-700 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"/>
            </div>
        </div>
    );
};

export default SearchOrder;
