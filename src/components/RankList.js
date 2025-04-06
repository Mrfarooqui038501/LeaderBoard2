import React from 'react';

function RankList({ users, currentPage, itemsPerPage }) {
  const startIndex = (currentPage - 1) * itemsPerPage + 3; // Skip top 3
  const endIndex = startIndex + itemsPerPage;
  const paginatedUsers = users.slice(startIndex, endIndex);

  return (
    <div className="rank-list">
      {paginatedUsers.map((user) => (
        <div key={user.rank} className="rank-item">
          <span className="rank">#{user.rank}</span>
          <img src={process.env.PUBLIC_URL + `/images/${user.avatar}`} alt={user.name} />
          <div className="rank-details">
            <span className="name">{user.name}</span>
            <span className="points">{user.points.toLocaleString()} points</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RankList;