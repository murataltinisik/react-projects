import React from 'react';

// ? CONTEXT
import { useStory } from '../../Context/StorieSelectionContext';

// ? ASSETS
import '../../assets/css/Background/background.scss';

// ? RESPONSIVE
import '../../assets/scss/stories-scss/content.module.scss';

// ? STATIC
import StaticLeft from '../static/StaticLeft/StaticLeft';

// ? CONTENT
import Content from './Content';

function Section() {
  const {
    storyType,
    setStoryType,
    textStorySettings,
    setTextStorySettings,
    imageStorySettings,
    setImageStorySettings,
  } = useStory();

  const menu = [
    {
      name: 'Murat Altınışık',
      image: [
        true,
        'https://scontent.fesb3-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p60x60&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=mvzbp2eS_CYAX8DfXqy&tn=U7RQGoxjCU6lu3jj&_nc_ht=scontent.fesb3-1.fna&oh=00_AT-Xdrff5jm5VpXa6c2u4Zde9_haBKlM2fohhIVyX9Drcw&oe=6358D9F8',
      ],
    },
  ];

  return (
    <div className="d-flex" id="StoriesSection">
      <StaticLeft
        title="Hikayen"
        menu={menu}
        storyType={storyType}
        textStorySettings={textStorySettings}
        setTextStorySettings={setTextStorySettings}
        imageStorySettings={imageStorySettings}
      />

      <Content
        setStoryType={setStoryType}
        textStorySettings={textStorySettings}
        imageStorySettings={imageStorySettings}
        setImageStorySettings={setImageStorySettings}
      />
    </div>
  );
}

export default Section;
