import React from 'react';

import MiniCard from './MiniCard';

function MiniCardList() {
  return (
    <div
      style={{ paddingRight: '5rem' }}
      className="d-flex flex-wrap justify-content-between align-items-center"
    >
      <MiniCard />
      <MiniCard />
      <MiniCard />
      <MiniCard />
    </div>
  );
}

export default MiniCardList;
