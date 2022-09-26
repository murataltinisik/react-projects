import React from 'react';
import CommentList from './CommentList/CommentList';

function Comment() {
  return (
    <div className="comment">
      {/* INPUT */}
      <div className="input">
        <div className="image">
          <img src="https://scontent.fesb3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=c8Y23ztaUNIAX-si-UX&_nc_ht=scontent.fesb3-2.fna&oh=00_AT9Jtbrv41wvJPKINgMMWhPjnN9OduM_lYyLiPV50W4sEQ&oe=6350F0F8" />
        </div>

        <input type="text" placeholder="Yorum Yaz" />
      </div>

      {/* INFO */}
      <div className="info">Paylaşmak için enter tuşuna bas.</div>

      {/* COMMENTS */}
      <CommentList />
      <CommentList />
    </div>
  );
}

export default Comment;
