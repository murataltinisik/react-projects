import React from 'react';

// ? SUB COMPONENTS
import Left from '../static/Left';
import Content from '../static/Content';

function Section() {
  return (
    <div className="d-flex justify-content-between">
      <Left title="Arkadaş İstekleri" />
      <Content info="Arkadaşlık istekleri veya önerileri olduğunda, burada görünecekler." />
    </div>
  );
}

export default Section;