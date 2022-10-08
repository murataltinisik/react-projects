import React from 'react';

// ? SEND CARD
import SendCardList from '../../../static/SendCart/SendCardList';

function send({ Scss }) {
  return (
    <div className={`${Scss.sendContainer} sendResp`}>
      <SendCardList />
    </div>
  );
}

export default send;
