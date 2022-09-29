import React, { Component } from 'react';

// ? STYLE
import Scss from './styles/content.module.scss';

// ? ASSETS
import '../../assets/PopUp/popup.scss';

// ? FONT AWESOME
import { faA, faImages } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let sourceImage;

class Content extends Component {
  constructor({
    storyType,
    setStoryType,
    textStorySettings,
    imageStorySettings,
    setImageStorySettings,
  }) {
    super(
      storyType,
      setStoryType,
      textStorySettings,
      imageStorySettings,
      setImageStorySettings
    );
  }

  componentDidMount() {
    this.props.setStoryType('');

    const images = document.getElementById('ImageSource');
    const preview = document.getElementById('ImagePreview');

    images.addEventListener('change', function () {
      const reader = new FileReader();
      reader.addEventListener('load', function () {
        preview.style.backgroundImage = `url(${this.result})`;
        sourceImage = this.result;
      });
      reader.readAsDataURL(this.files[0]);
    });
  }

  // * STORIES
  ImageStorie() {
    for (let i = 0; i < document.getElementsByClassName('option').length; i++) {
      document.getElementsByClassName('option')[i].style.display = 'none';
    }
    document.getElementById('ImageStory').style.display = 'block';
  }

  TextStorie() {
    for (let i = 0; i < document.getElementsByClassName('option').length; i++) {
      document.getElementsByClassName('option')[i].style.display = 'none';
    }

    document.getElementById('TextStory').style.display = 'block';
  }

  render() {
    return (
      <div id={Scss.ContentContainer} className="contentContainerResp">
        <div
          className={`${Scss.option} option`}
          onClick={this.ImageStorie}
          onMouseUp={() => this.props.setStoryType('image_story')}
        >
          {/* ICON */}
          <div className={Scss.icon}>
            <FontAwesomeIcon icon={faImages} />
          </div>

          {/* WHAT STORIE */}
          <div className={Scss.whatStorie}>bir fotoğraf hikayesi oluştur.</div>

          {/* FILE SELECTION */}
          <label className={Scss.fileSelection}>
            <input type="file" id="ImageSource" accept="image/*" />
          </label>
        </div>

        <div
          className={`${Scss.option} option`}
          onClick={this.TextStorie}
          onMouseUp={() => this.props.setStoryType('text_story')}
        >
          {/* ICON */}
          <div className={Scss.icon}>
            <FontAwesomeIcon icon={faA} />
          </div>

          {/* WHAT STORIE */}
          <div className={Scss.whatStorie}>Bir yazı hikayesi oluştur</div>
        </div>

        <div className={Scss.preview} id="ImageStory">
          {/* TITLE */}
          <div className={Scss.title}>Önizleme</div>

          {/* BACKGROUND */}
          <div className={Scss.background}>
            <div
              className={Scss.previewStory}
              onMouseOver={() =>
                this.props.setImageStorySettings({
                  ...this.props.imageStorySettings,
                  image: sourceImage,
                })
              }
              id="ImagePreview"
            >
              {/* STATIC LEFT OPERATION */}
              <div id={Scss.ImageStoryText} className="ImageStoryAddText">
                <textarea
                  onKeyUp={e =>
                    this.props.setImageStorySettings({
                      ...this.props.imageStorySettings,
                      title: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="Yazı Yazın"
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        <div className={Scss.preview} id="TextStory">
          {/* TITLE */}
          <div className={Scss.title}>Önizleme</div>

          {/* BACKGROUND */}
          <div className={Scss.background}>
            <div
              className={`${Scss.previewStory} ${this.props.textStorySettings.background}`}
              style={{ fontFamily: this.props.textStorySettings.fontFamily }}
            >
              {this.props.textStorySettings.title || 'Yazmaya Başla'}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
