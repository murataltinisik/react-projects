// * CHANGE BG COLOR
export const changeBgColor = e => {
  document
    .querySelectorAll('.body-content textarea')[0]
    .setAttribute('class', e.target.className);
  document.querySelectorAll('.body-content textarea')[0].style.textAlign =
    'center';
  document.querySelectorAll('.body-content textarea')[0].style.height = '18rem';
  document.querySelectorAll('.body-content textarea')[0].style.lineHeight =
    '18rem';
  document.querySelectorAll('.body-content textarea')[0].style.fontWeight = 700;
};

// * ON SHOW BG COLOR CONTAINER
export const onShowBgColorContainer = () => {
  document.getElementsByClassName('picker')[0].style.display = 'none';
  document.getElementById('colorContainer').style.display = 'flex';
};

// * ON BG BACK
export const onBgBack = () => {
  document.getElementById('colorContainer').style.display = 'none';
  document.getElementsByClassName('picker')[0].style.display = 'flex';

  document
    .querySelectorAll('.body-content textarea')[0]
    .setAttribute('class', 'bg-white');
  document.querySelectorAll('.body-content textarea')[0].style.textAlign =
    'unset';
  document.querySelectorAll('.body-content textarea')[0].style.height = 'unset';
  document.querySelectorAll('.body-content textarea')[0].style.lineHeight =
    'unset';
  document.querySelectorAll('.body-content textarea')[0].style.fontWeight =
    'unset';
};

// * ON IMAGE SOURCE
export const showSelectedImageContainer = () => {
  document.querySelector('#InputFile').style.display = 'block';
};

// * SELECTED IMAGE
export const selectedImage = (setShipmentDatas, shipmentDatas) => {
  document
    .getElementById('imageSource')
    .addEventListener('change', function () {
      const reader = new FileReader();
      reader.addEventListener('load', function () {
        // PREVIEW
        document.querySelector('#ImagePreview').style.display = 'block';
        document.querySelectorAll('#ImagePreview img')[0].src = this.result;

        // STATE
        setShipmentDatas({
          ...shipmentDatas,
          shipment: {
            message: shipmentDatas.shipment.message,
            image: this.result,
            tagUserId: shipmentDatas.shipment.tagUserId,
          },
        });

        // BODY FOOT
        document.getElementsByClassName('tools')[0].style.display = 'none';
        document.getElementById('InputFile').style.display = 'none';
      });
      reader.readAsDataURL(this.files[0]);
    });
};

// * DELETE IMAGE
export const deleteImage = (setShipmentDatas, shipmentDatas) => {
  // STATE
  setShipmentDatas({
    ...shipmentDatas,
    shipment: {
      message: shipmentDatas.shipment.message,
      image: '',
      tagUserId: shipmentDatas.shipment.tagUserId,
    },
  });

  // PREVIEW
  document.querySelectorAll('#ImagePreview img')[0].src = '';

  // BODY FOOT
  document.getElementsByClassName('tools')[0].style.display = 'flex';
};

// * ON TAG USER
export const onTagUser = () => {
  document.getElementById('popup-pages').style.display = 'block';
  document.getElementById('main-popup').style.display = 'none';
};

// * ON TAG
export const onTag = (id, setShipmentDatas, shipmentDatas) => {
  setShipmentDatas({
    ...shipmentDatas,

    shipment: {
      message: shipmentDatas.shipment.message,
      image: shipmentDatas.shipment.image,
      tagUserId: id,
    },
  });

  document.getElementById('popup-pages').style.display = 'none';
  document.getElementById('main-popup').style.display = 'block';
};

// * ON FIND USER TAG
export const onFindUserTag = e => {
  const mainElement = document.querySelectorAll('#userResults ul')[0];
  const elements = document.querySelectorAll('#userResults ul li');
  const resultMessage = document.querySelectorAll('.result-message')[0];

  if (e.target.value.length > 0) {
    mainElement.style.display = 'block';
    resultMessage.style.display = 'none';

    for (let i = 0; i < elements.length; i++) {
      if (
        elements[i].childNodes[0].childNodes[1].childNodes[0].innerText.indexOf(
          e.target.value
        ) != -1
      ) {
        elements[i].style.display = 'flex';
      } else {
        elements[i].style.display = 'none';
      }
    }
  } else {
    resultMessage.style.display = 'block';
    mainElement.style.display = 'none';
  }
};

// * ON BACK PAGE
export const onBackPage = () => {
  document.getElementById('popup-pages').style.display = 'none';
  document.getElementById('main-popup').style.display = 'block';
};
