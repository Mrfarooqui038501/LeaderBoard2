import React, { useState } from 'react';
import usersData from './components/data/users.json';
import TopRanks from './components/TopRanks';
import RankList from './components/RankList';
import Pagination from './components/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const totalUsers = usersData.users.length;
  const totalPages = Math.ceil((totalUsers - 3) / itemsPerPage); 

  const topUsers = usersData.users.slice(0, 3);
  const allUsers = usersData.users.slice(3); 

  return (
    <div className="App container">
      <h1 className="text-center my-4">Weekly Contribution Ranking</h1>
      <p className="text-center text-muted">Settlement time: 2 days 01:45:29</p>
      <TopRanks topUsers={topUsers} />
      <RankList
        users={allUsers}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default App;