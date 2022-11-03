// * ON SAVE SETTING PROPERTY
export const onSaveSettingProperty = () => {
  const elements = document.getElementsByClassName('parentTab');
  for (let i = 0; i < elements.length; i++) {
    elements[i].childNodes[1].style.display = 'none';
  }
};

// * ON CHANGE SETTING PROPERTY
export const onChangeSettingProperty = e => {
  alert(e.target.value);
};

// * ON RUN UPDATE COMPONENT
export const onRunUpdateComponent = location => {
  if (location) {
    document.getElementById(
      location.split('=')[1]
    ).childNodes[1].style.display = 'block';
  }
};
