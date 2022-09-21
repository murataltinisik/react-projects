import React from 'react';

// ? SUB COMPONENTS
import Left from '../static/Left';
import Content from '../static/Content';

function Section() {
  return (
    <div className="d-flex justify-content-between">
      <Left title="Özel Listeler" />
      <Content info="Gösterilecek Özel Liste Yok" />
    </div>
  );
}

export default Section;
