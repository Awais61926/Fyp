import React from 'react';





const Dashboard = () => {
  // Dummy data for sales analytics
  const salesData = [
    { month: 'January', revenue: 5000 },
    { month: 'February', revenue: 6000 },
    { month: 'March', revenue: 7000 },
    // Add more data as needed
  ];

  // Dummy data for user activity
  const userActivityData = [
    { date: '2024-03-01', users: 100 },
    { date: '2024-03-02', users: 120 },
    { date: '2024-03-03', users: 150 },
    // Add more data as needed
  ];

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-800 text-white py-4 px-8">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </header>
      <main className="flex-grow p-8">
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-gray-200 p-6 rounded shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Sales Analytics</h2>
            <ul>
              {salesData.map((item, index) => (
                <li key={index} className="mb-2">
                  {item.month}: ${item.revenue.toLocaleString()}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-200 p-6 rounded shadow-lg">
            <h2 className="text-lg font-semibold mb-4">User Activity</h2>
            <ul>
              {userActivityData.map((item, index) => (
                <li key={index} className="mb-2">
                  {item.date}: {item.users} users
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <footer className="bg-gray-800 text-white py-4 px-8 text-center">
        <p>&copy; 2024 TechNest. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Dashboard;


