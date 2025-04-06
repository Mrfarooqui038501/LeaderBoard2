import React from 'react';

function TopRanks({ topUsers }) {
  return (
    <div className="top-ranks">
      {topUsers.map((user) => (
        <div key={user.rank} className={`rank-item top-${user.rank}`}>
          <img src={process.env.PUBLIC_URL + `/images/${user.avatar}`} alt={user.name} />
          <div className="rank-details">
            <span className="rank">#{user.rank}</span>
            <span className="name">{user.name}</span>
            <span className="points">{user.points.toLocaleString()} points</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TopRanks;