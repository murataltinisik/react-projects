import React from 'react';

// ? SUB COMPONENTS
import Left from '../static/Left';
import Content from '../static/Content';

function Section() {
  return (
    <div className="d-flex justify-content-between">
      <Left title="Öneriler" />
      <Content info="Profillerinin önizlemesini görmek için kişilerin adlarını seç." />
    </div>
  );
}

export default Section;
