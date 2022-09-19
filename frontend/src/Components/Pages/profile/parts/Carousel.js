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
import Scss from './styles/carousel.module.scss';
import './styles/responsive/responsive.carousel.scss';

class Carousel extends Component {
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