import React from 'react';

function TopRanks({ topUsers }) {
  return (
    <div className="top-ranks">
      <div className="trophy-background"></div>
      {topUsers.map((user) => (
        <div key={user.rank} className={`rank-item top-${user.rank}`}>
          <img src={process.env.PUBLIC_URL + `/images/${user.avatar}`} alt={user.name} />
          <div className="rank-details">
            <span className="rank">#{user.rank}</span>
            <span className="name">{user.name}</span>
            <span className="points">{user.points.toLocaleString()} points</span>
            {user.rank === 1 && <span className="trophy">🏆</span>}
            {user.rank === 2 && <span className="trophy">🥈</span>}
            {user.rank === 3 && <span className="trophy">🥉</span>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TopRanks;