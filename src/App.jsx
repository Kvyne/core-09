import React from 'react';
import AdminDashboard from './Components/AdminDashboard';
import UserProfile from './Components/UserProfile'; // Import UserProfile

function App() {
  return (
    <div>
      <AdminDashboard />
      <UserProfile /> {/* Add UserProfile component here */}
    </div>
  );
}

export default App;
