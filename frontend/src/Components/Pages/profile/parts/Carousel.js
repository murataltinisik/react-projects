import React, { Component } from 'react';

// ? FONT AWESOME
import {
  faChevronLeft,
  faChevronRight,
  faClose,
  faEllipsis,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// ? SCSS
import Scss from '../../../assets/scss/profile-scss/carousel.module.scss';
import '../../../assets/scss/profile-scss/responsive/responsive.carousel.scss';

class Carousel extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  onNext = () => {
    let counter = this.state.counter++;
    const cards = document.querySelectorAll('.cards')[0];
    const length = document.querySelectorAll('.cards .group').length;

    if (counter < 0) {
      counter = 0;
    }

    if (counter < length) {
      cards.style.left = `-${98.75 * counter}%`;

      // * SET TIME OUT
      setTimeout(() => {
        document.getElementById('prev').style.opacity = '1';
      }, 500);
      document.getElementById('prev').style.display = 'block';
    } else if (counter === length) {
      setTimeout(() => {
        document.getElementById('next').style.opacity = '0';
      }, 500);
      document.getElementById('next').style.display = 'none';
    }
  };

  onPrev = () => {
    let counter = --this.state.counter;
    const cards = document.querySelectorAll('.cards')[0];

    if (counter >= 0) {
      cards.style.left = `-${98.75 * counter}%`;
    }

    if (counter === 0) {
      // * SET TIME OUT
      setTimeout(() => {
        document.getElementById('prev').style.opacity = '0';
      }, 500);
      document.getElementById('prev').style.display = 'none';
    }
  };

  render() {
    return (
      <div id={Scss.Carousel} className="cardContainer carouselContainerResp">
        {/* HEAD */}
        <div className="head d-flex justify-content-between align-items-center">
          <h5>Tanıyor Olabileceğin Kişiler</h5>
          <button className="menu btn">
            <FontAwesomeIcon icon={faEllipsis} />
          </button>
        </div>

        {/* CARDS */}
        <div className="cards d-flex justify-content-start align-items-center">
          <div className="group d-flex justify-content-start align-items-center">
            <div className="card">
              <div className="head">
                <FontAwesomeIcon icon={faClose} />
              </div>

              <div className="body">
                <div className="image">
                  <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                </div>

                <div className="content">Kübra Altınışık</div>

                <div className="foot">
                  <button className="facebook-btn">
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span>Arkadaşı Ekle</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="head">
                <FontAwesomeIcon icon={faClose} />
              </div>

              <div className="body">
                <div className="image">
                  <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                </div>

                <div className="content">Kübra Altınışık</div>

                <div className="foot">
                  <button className="facebook-btn">
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span>Arkadaşı Ekle</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="head">
                <FontAwesomeIcon icon={faClose} />
              </div>

              <div className="body">
                <div className="image">
                  <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                </div>

                <div className="content">Kübra Altınışık</div>

                <div className="foot">
                  <button className="facebook-btn">
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span>Arkadaşı Ekle</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="head">
                <FontAwesomeIcon icon={faClose} />
              </div>

              <div className="body">
                <div className="image">
                  <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                </div>

                <div className="content">Kübra Altınışık</div>

                <div className="foot">
                  <button className="facebook-btn">
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span>Arkadaşı Ekle</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="head">
                <FontAwesomeIcon icon={faClose} />
              </div>

              <div className="body">
                <div className="image">
                  <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                </div>

                <div className="content">Kübra Altınışık</div>

                <div className="foot">
                  <button className="facebook-btn">
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span>Arkadaşı Ekle</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="group d-flex justify-content-start align-items-center">
            <div className="card">
              <div className="head">
                <FontAwesomeIcon icon={faClose} />
              </div>

              <div className="body">
                <div className="image">
                  <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                </div>

                <div className="content">Kübra Altınışık</div>

                <div className="foot">
                  <button className="facebook-btn">
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span>Arkadaşı Ekle</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="head">
                <FontAwesomeIcon icon={faClose} />
              </div>

              <div className="body">
                <div className="image">
                  <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                </div>

                <div className="content">Kübra Altınışık</div>

                <div className="foot">
                  <button className="facebook-btn">
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span>Arkadaşı Ekle</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="head">
                <FontAwesomeIcon icon={faClose} />
              </div>

              <div className="body">
                <div className="image">
                  <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                </div>

                <div className="content">Kübra Altınışık</div>

                <div className="foot">
                  <button className="facebook-btn">
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span>Arkadaşı Ekle</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="head">
                <FontAwesomeIcon icon={faClose} />
              </div>

              <div className="body">
                <div className="image">
                  <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                </div>

                <div className="content">Kübra Altınışık</div>

                <div className="foot">
                  <button className="facebook-btn">
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span>Arkadaşı Ekle</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="head">
                <FontAwesomeIcon icon={faClose} />
              </div>

              <div className="body">
                <div className="image">
                  <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                </div>

                <div className="content">Kübra Altınışık</div>

                <div className="foot">
                  <button className="facebook-btn">
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span>Arkadaşı Ekle</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="group d-flex justify-content-start align-items-center">
            <div className="card">
              <div className="head">
                <FontAwesomeIcon icon={faClose} />
              </div>

              <div className="body">
                <div className="image">
                  <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                </div>

                <div className="content">Kübra Altınışık</div>

                <div className="foot">
                  <button className="facebook-btn">
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span>Arkadaşı Ekle</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="head">
                <FontAwesomeIcon icon={faClose} />
              </div>

              <div className="body">
                <div className="image">
                  <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                </div>

                <div className="content">Kübra Altınışık</div>

                <div className="foot">
                  <button className="facebook-btn">
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span>Arkadaşı Ekle</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="head">
                <FontAwesomeIcon icon={faClose} />
              </div>

              <div className="body">
                <div className="image">
                  <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                </div>

                <div className="content">Kübra Altınışık</div>

                <div className="foot">
                  <button className="facebook-btn">
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span>Arkadaşı Ekle</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="head">
                <FontAwesomeIcon icon={faClose} />
              </div>

              <div className="body">
                <div className="image">
                  <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                </div>

                <div className="content">Kübra Altınışık</div>

                <div className="foot">
                  <button className="facebook-btn">
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span>Arkadaşı Ekle</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="head">
                <FontAwesomeIcon icon={faClose} />
              </div>

              <div className="body">
                <div className="image">
                  <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                </div>

                <div className="content">Kübra Altınışık</div>

                <div className="foot">
                  <button className="facebook-btn">
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span>Arkadaşı Ekle</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="group d-flex justify-content-start align-items-center">
            <div className="card">
              <div className="head">
                <FontAwesomeIcon icon={faClose} />
              </div>

              <div className="body">
                <div className="image">
                  <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                </div>

                <div className="content">Kübra Altınışık</div>

                <div className="foot">
                  <button className="facebook-btn">
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span>Arkadaşı Ekle</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="head">
                <FontAwesomeIcon icon={faClose} />
              </div>

              <div className="body">
                <div className="image">
                  <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                </div>

                <div className="content">Kübra Altınışık</div>

                <div className="foot">
                  <button className="facebook-btn">
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span>Arkadaşı Ekle</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="head">
                <FontAwesomeIcon icon={faClose} />
              </div>

              <div className="body">
                <div className="image">
                  <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                </div>

                <div className="content">Kübra Altınışık</div>

                <div className="foot">
                  <button className="facebook-btn">
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span>Arkadaşı Ekle</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="head">
                <FontAwesomeIcon icon={faClose} />
              </div>

              <div className="body">
                <div className="image">
                  <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                </div>

                <div className="content">Kübra Altınışık</div>

                <div className="foot">
                  <button className="facebook-btn">
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span>Arkadaşı Ekle</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="head">
                <FontAwesomeIcon icon={faClose} />
              </div>

              <div className="body">
                <div className="image">
                  <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                </div>

                <div className="content">Kübra Altınışık</div>

                <div className="foot">
                  <button className="facebook-btn">
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span>Arkadaşı Ekle</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="group d-flex justify-content-start align-items-center">
            <div className="card">
              <div className="head">
                <FontAwesomeIcon icon={faClose} />
              </div>

              <div className="body">
                <div className="image">
                  <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                </div>

                <div className="content">Kübra Altınışık</div>

                <div className="foot">
                  <button className="facebook-btn">
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span>Arkadaşı Ekle</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="head">
                <FontAwesomeIcon icon={faClose} />
              </div>

              <div className="body">
                <div className="image">
                  <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                </div>

                <div className="content">Kübra Altınışık</div>

                <div className="foot">
                  <button className="facebook-btn">
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span>Arkadaşı Ekle</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="head">
                <FontAwesomeIcon icon={faClose} />
              </div>

              <div className="body">
                <div className="image">
                  <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                </div>

                <div className="content">Kübra Altınışık</div>

                <div className="foot">
                  <button className="facebook-btn">
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span>Arkadaşı Ekle</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="head">
                <FontAwesomeIcon icon={faClose} />
              </div>

              <div className="body">
                <div className="image">
                  <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                </div>

                <div className="content">Kübra Altınışık</div>

                <div className="foot">
                  <button className="facebook-btn">
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span>Arkadaşı Ekle</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="head">
                <FontAwesomeIcon icon={faClose} />
              </div>

              <div className="body">
                <div className="image">
                  <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                </div>

                <div className="content">Kübra Altınışık</div>

                <div className="foot">
                  <button className="facebook-btn">
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span>Arkadaşı Ekle</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="navigation">
          <button id="prev" onClick={this.onPrev}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button id="next" onClick={this.onNext}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    );
  }
}

export default Carousel;
