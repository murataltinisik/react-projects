import React from 'react';

function CommentList() {
  return (
    <div className="comments">
      <div className="commenter">
        <div className="image">
          <img src="https://scontent.fesb3-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p32x32&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=AUCBojK_Ff4AX8ZhcxM&tn=U7RQGoxjCU6lu3jj&_nc_ht=scontent.fesb3-1.fna&oh=00_AT_MP2C2X03UEYCUAhZTSfjmv8pfrERkbaXDObgnn0xkbw&oe=6358D9F8" />
        </div>

        <div className="detail">
          <div className="name">Murat Altınışık</div>
          <div className="description">
            dklsşaikdlşisaklşisaklşakşgksdalfakdişslşfi
          </div>
        </div>
      </div>

      <div className="answering">
        <div className="image">
          <img src="https://scontent.fesb3-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p32x32&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=AUCBojK_Ff4AX8ZhcxM&tn=U7RQGoxjCU6lu3jj&_nc_ht=scontent.fesb3-1.fna&oh=00_AT_MP2C2X03UEYCUAhZTSfjmv8pfrERkbaXDObgnn0xkbw&oe=6358D9F8" />
        </div>

        <div className="detail">
          <div className="name">Yusuf Altınışık</div>
          <div className="description">
            dklsşaikdlşisaklşisaklşakşgksdalfakdişslşfi
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentList;
