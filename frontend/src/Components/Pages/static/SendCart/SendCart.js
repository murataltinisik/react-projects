import React from 'react';

import Head from './parts/Head';
import Body from './parts/Body';
import Foot from './parts/Foot';
import Comment from './parts/Comment';

function SendCart({ itemId, head, body }) {
  return (
    <div className="send-card" itemID={itemId}>
      {/* HEAD */}
      <Head
        who={head.who}
        actions={head.actions}
        actionIcon={head.actionIcon}
      />

      {/* BODY */}
      <Body card={body.card} />

      {/* FOOT */}
      <Foot />

      {/* COMMENTS */}
      <Comment />
    </div>
  );
}

export default SendCart;
