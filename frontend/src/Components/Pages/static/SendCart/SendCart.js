import React from 'react';

import Head from './parts/Head';
import Body from './parts/Body';
import Foot from './parts/Foot';
import Comment from './parts/Comment';

function SendCart({ itemId }) {
  return (
    <div className="send-card" itemID={itemId}>
      {/* HEAD */}
      <Head />

      {/* BODY */}
      <Body />

      {/* FOOT */}
      <Foot />

      {/* COMMENTS */}
      <Comment />
    </div>
  );
}

export default SendCart;
