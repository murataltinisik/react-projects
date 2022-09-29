import { createContext, useState, useEffect, useContext } from 'react';

const StorieSelectionContext = createContext();

export const StorieSelectionProvider = ({ children }) => {
  const [storyType, setStoryType] = useState(
    localStorage.getItem('story_type') || null
  );

  const [textStorySettings, setTextStorySettings] = useState({
    title: '',
    fontFamily: '',
    background: '',
  });

  const [imageStorySettings, setImageStorySettings] = useState({
    image: '',
    title: '',
  });

  useEffect(() => {
    localStorage.setItem('story_type', storyType);
  }, [storyType]);

  const values = {
    storyType,
    setStoryType,
    textStorySettings,
    setTextStorySettings,
    imageStorySettings,
    setImageStorySettings,
  };

  return (
    <StorieSelectionContext.Provider value={values}>
      {children}
    </StorieSelectionContext.Provider>
  );
};

export const useStory = () => useContext(StorieSelectionContext);
