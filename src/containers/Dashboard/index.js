import React from 'react';

import Header from '../../components/Header';
import Todo from '../Todo';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <Todo />
    </div>
  )
}

export default Dashboard;
