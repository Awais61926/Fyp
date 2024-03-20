import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  
  const salesData = [
    { month: 'January', revenue: 0 },
    { month: 'February', revenue: 10000 },
    { month: 'March', revenue: 800 },
    { month: 'April', revenue: 4000 },
    { month: 'May', revenue: 8000 },
    { month: 'June', revenue: 450 },
    { month: 'July', revenue: 900 },
    { month: 'August', revenue: 2800 },
    { month: 'September', revenue: 3100 },
    { month: 'October', revenue: 5000 },
    { month: 'November', revenue: 100 },
    { month: 'December', revenue: 10000 },
  ];

  // Dummy data for clients
  const clientsData = [
    { month: 'January', clients: 15 },
    { month: 'February', clients: 25 },
    { month: 'March', clients: 10 },
    { month: 'April', clients: 20 },
    { month: 'May', clients: 30 },
    { month: 'June', clients: 12 },
    { month: 'July', clients: 18 },
    { month: 'August', clients: 22 },
    { month: 'September', clients: 28 },
    { month: 'October', clients: 35 },
    { month: 'November', clients: 8 },
    { month: 'December', clients: 40 },
  ];

  // Dummy data for purchases
  const purchasesData = [
    { month: 'January', purchases: 5 },
    { month: 'February', purchases: 10 },
    { month: 'March', purchases: 2 },
    { month: 'April', purchases: 8 },
    { month: 'May', purchases: 12 },
    { month: 'June', purchases: 3 },
    { month: 'July', purchases: 6 },
    { month: 'August', purchases: 7 },
    { month: 'September', purchases: 9 },
    { month: 'October', purchases: 15 },
    { month: 'November', purchases: 1 },
    { month: 'December', purchases: 18 },
  ];

  // State to track selected month
  const [selectedMonth, setSelectedMonth] = useState('January');

  // Function to handle month selection change
  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  // Find unique months from salesData
  const months = Array.from(new Set(salesData.map(item => item.month)));

  // Find data for selected month
  const selectedMonthSalesData = salesData.find(data => data.month === selectedMonth);
  const selectedMonthClientsData = clientsData.find(data => data.month === selectedMonth);
  const selectedMonthPurchasesData = purchasesData.find(data => data.month === selectedMonth);
 const formatYAxisTick = (value) => `$${value}`;
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-800 text-white py-4 px-8">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </header>
      <main className="flex-grow p-8">
        <div className="mb-8 flex justify-center items-center">
          <h2 className="text-lg font-semibold mr-4">Select Month:</h2>
          <div className="relative">
            <select value={selectedMonth} onChange={handleMonthChange} className="appearance-none bg-gray-200 border border-gray-500 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              {months.map(month => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-5-5 1.5-1.5L10 9l7.5-7.5L19 4z"/></svg>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-gray-200 p-6 rounded shadow-md flex flex-col items-center justify-center">
            <h2 className="text-lg font-semibold mb-4">Sellers</h2>
            <span className="text-3xl font-bold mb-2">{selectedMonthSalesData ? selectedMonthSalesData.revenue : '-'}</span>
            
          </div>
          <div className="bg-gray-200 p-6 rounded shadow-md flex flex-col items-center justify-center">
            <h2 className="text-lg font-semibold mb-4">Customers</h2>
            <span className="text-3xl font-bold mb-2">{selectedMonthClientsData ? selectedMonthClientsData.clients : '-'}</span>
            
          </div>
          <div className="bg-gray-200 p-6 rounded shadow-md flex flex-col items-center justify-center">
            <h2 className="text-lg font-semibold mb-4">Orders</h2>
            <span className="text-3xl font-bold mb-2">{selectedMonthPurchasesData ? selectedMonthPurchasesData.purchases : '-'}</span>
            
          </div>
        </div>
      </main>
      <ResponsiveContainer width="95%" height={300}>
        <LineChart data={salesData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={formatYAxisTick} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
      <footer className="bg-gray-900 text-white py-4 px-8 text-center">
        <p>&copy; 2024 TechNest. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Dashboard;
