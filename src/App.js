import React, { useState } from 'react';
import usersData from './data/users.json';
import TopRanks from './components/TopRanks';
import RankList from './components/RankList';
import Pagination from './components/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const totalUsers = usersData.users.length;
  const totalPages = Math.ceil((totalUsers - 3) / itemsPerPage); // Exclude top 3

  const topUsers = usersData.users.slice(0, 3);
  const allUsers = usersData.users.slice(3); // Exclude top 3 for pagination

  return (
    <div className="App container">
      <div className="header">
        <button className="back-btn">&larr;</button>
        <span className="tab active">Party Ranking</span>
        <span className="tab">Live Ranking</span>
        <span className="tab">Hourly Ranking</span>
        <span className="tab">Family Rankir</span>
        <span className="help-btn">?</span>
      </div>
      <div className="tabs">
        <button className="tab-button active">Weekly Contribution Ranking</button>
        <button className="tab-button">Weekly Charm Ranking</button>
      </div>
      <h1 className="title">Weekly Contribution Ranking</h1>
      <p className="settlement">Settlement time: 2 days 01:45:29</p>
      <div className="rewards">Rewards</div>
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