import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import SellerAnlayticsCard from "../../ui/SellerAnlayticsCard";
import ProductDetails from './productDetails';
import salesData, { productsData } from "./saleData";

export default function Dashboard() {
    const [selectedData, setSelectedData] = useState(null);

    const handleDataClick = (data, index) => {
        setSelectedData(data);
    };

    const handleMonthClick = (index) => {
        setSelectedData(salesData[index]);
    };

    const renderMonthNames = () => (
        <div className="flex justify-between w-full min-w-full p-3 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-md gap-3 mt-6 mb-7">
            {salesData.map((item, index) => (
                <button
                    key={index}
                    className={`flex-1 text-center font-bold font-sans py-2 rounded-lg transition duration-300 ease-in-out ${selectedData && selectedData.month === item.month ? 'bg-blue-500 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-blue-100 hover:text-blue-500'}`}
                    onClick={() => handleMonthClick(index)}
                >
                    {item.month}
                </button>
            ))}
        </div>
    );





    // Calculate cumulative totals
    const cumulativeData = salesData.map((item, index) => {
        const cumulativeSales = salesData.slice(0, index + 1).reduce((acc, curr) => acc + curr.Sales, 0);
        const cumulativeViews = salesData.slice(0, index + 1).reduce((acc, curr) => acc + curr.views, 0);
        const cumulativeProfits = salesData.slice(0, index + 1).reduce((acc, curr) => acc + curr.profit, 0); // Corrected typo
        return {
            ...item,
            cumulativeSales,
            cumulativeViews,
            cumulativeProfits
        };
    });

    const renderLineChart = (
        <ResponsiveContainer width="95%" height={300}>
            <LineChart data={cumulativeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="cumulativeSales" stroke="#8884d8" name="Sales" />
                <Line type="monotone" dataKey="cumulativeViews" stroke="gray" dot={false} name="Views" />
                <Line type="monotone" dataKey="cumulativeProfits" stroke="green" dot={false} name="Profits" />
            </LineChart>
        </ResponsiveContainer>
    );
    const productDetails = (
        <div className="flex justify-between w-full min-w-full p-4 bg-gray-100 rounded-lg mt-5 shadow-lg">
            <h5 className="font-bold text-gray-800 text-center font-sans">Image</h5>
            <h5 className="flex-1 text-gray-800 text-center font-bold font-sans">
                Name
            </h5>
            <h5 className="flex-1 text-gray-800 text-center font-bold font-sans">
                Description
            </h5>
        
            <h5 className="flex-1 text-gray-800 text-center font-bold font-sans">
                Stock
            </h5>
            <h5 className="flex-1 text-gray-800 text-center font-bold font-sans">
                Price
            </h5>
        </div>
    )
    
    return (
        <div>
            {renderMonthNames()}

            <div className="grid md:grid-cols-3 gap-3">

                <SellerAnlayticsCard number={selectedData ? selectedData.Sales : 0} text={"Sales"} />
                <SellerAnlayticsCard text={"Views"} number={selectedData ? selectedData.views : 0} />
                <SellerAnlayticsCard text={"Profit"} number={selectedData ? `$${selectedData.profit}` : "$0"} />
            </div>
            <div className="flex flex-col gap-2">
                {productDetails}
                {productsData.map((product) => (
                    <ProductDetails key={product.id} product={product} />
                ))}


                {renderLineChart}
            </div>
        </div>
    );
}
