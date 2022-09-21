import React, { Component } from 'react';

// ? MODULE SCSS
import Scss from './styles/content.module.scss';

// ? RESPONSIVE SCSS
import './styles/responsive/responsive-content.scss';

class Content extends Component {
  render() {
    return (
      <div id={Scss.ContentContainer} className="contentContainerResp">
        {/* HEAD */}
        <div className="d-flex justify-content-between align-items-center pt-3 pr-5">
          <h3 className={Scss.title}>Tanıyor Olabileceğin Kişiler</h3>
          <a href="#" className="primary-link">
            Tümünü Gör
          </a>
        </div>

        {/* FRIENDS */}
        <div className={`${Scss.friends} d-flex flex-wrap mt-1`}>
          <div className="friend-card">
            <div className="image">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/480px-User-avatar.svg.png" />
            </div>

            <div className="name">Murat Altınışık</div>

            <div className="actions d-flex direction-column justify-content-center align-items-center">
              <button className="facebook-btn">Arkadaş Ekle</button>
              <button className="secondary-btn activeClass">Kaldır</button>
            </div>
          </div>

          <div className="friend-card">
            <div className="image">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/480px-User-avatar.svg.png" />
            </div>

            <div className="name">Murat Altınışık</div>

            <div className="actions d-flex direction-column justify-content-center align-items-center">
              <button className="facebook-btn">Arkadaş Ekle</button>
              <button className="secondary-btn activeClass">Kaldır</button>
            </div>
          </div>

          <div className="friend-card">
            <div className="image">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/480px-User-avatar.svg.png" />
            </div>

            <div className="name">Murat Altınışık</div>

            <div className="actions d-flex direction-column justify-content-center align-items-center">
              <button className="facebook-btn">Arkadaş Ekle</button>
              <button className="secondary-btn activeClass">Kaldır</button>
            </div>
          </div>

          <div className="friend-card">
            <div className="image">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/480px-User-avatar.svg.png" />
            </div>

            <div className="name">Murat Altınışık</div>

            <div className="actions d-flex direction-column justify-content-center align-items-center">
              <button className="facebook-btn">Arkadaş Ekle</button>
              <button className="secondary-btn activeClass">Kaldır</button>
            </div>
          </div>

          <div className="friend-card">
            <div className="image">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/480px-User-avatar.svg.png" />
            </div>

            <div className="name">Murat Altınışık</div>

            <div className="actions d-flex direction-column justify-content-center align-items-center">
              <button className="facebook-btn">Arkadaş Ekle</button>
              <button className="secondary-btn activeClass">Kaldır</button>
            </div>
          </div>

          <div className="friend-card">
            <div className="image">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/480px-User-avatar.svg.png" />
            </div>

            <div className="name">Murat Altınışık</div>

            <div className="actions d-flex direction-column justify-content-center align-items-center">
              <button className="facebook-btn">Arkadaş Ekle</button>
              <button className="secondary-btn activeClass">Kaldır</button>
            </div>
          </div>

          <div className="friend-card">
            <div className="image">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/480px-User-avatar.svg.png" />
            </div>

            <div className="name">Murat Altınışık</div>

            <div className="actions d-flex direction-column justify-content-center align-items-center">
              <button className="facebook-btn">Arkadaş Ekle</button>
              <button className="secondary-btn activeClass">Kaldır</button>
            </div>
          </div>

          <div className="friend-card">
            <div className="image">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/480px-User-avatar.svg.png" />
            </div>

            <div className="name">Murat Altınışık</div>

            <div className="actions d-flex direction-column justify-content-center align-items-center">
              <button className="facebook-btn">Arkadaş Ekle</button>
              <button className="secondary-btn activeClass">Kaldır</button>
            </div>
          </div>

          <div className="friend-card">
            <div className="image">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/480px-User-avatar.svg.png" />
            </div>

            <div className="name">Murat Altınışık</div>

            <div className="actions d-flex direction-column justify-content-center align-items-center">
              <button className="facebook-btn">Arkadaş Ekle</button>
              <button className="secondary-btn activeClass">Kaldır</button>
            </div>
          </div>

          <div className="friend-card">
            <div className="image">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/480px-User-avatar.svg.png" />
            </div>

            <div className="name">Murat Altınışık</div>

            <div className="actions d-flex direction-column justify-content-center align-items-center">
              <button className="facebook-btn">Arkadaş Ekle</button>
              <button className="secondary-btn activeClass">Kaldır</button>
            </div>
          </div>

          <div className="friend-card">
            <div className="image">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/480px-User-avatar.svg.png" />
            </div>

            <div className="name">Murat Altınışık</div>

            <div className="actions d-flex direction-column justify-content-center align-items-center">
              <button className="facebook-btn">Arkadaş Ekle</button>
              <button className="secondary-btn activeClass">Kaldır</button>
            </div>
          </div>

          <div className="friend-card">
            <div className="image">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/480px-User-avatar.svg.png" />
            </div>

            <div className="name">Murat Altınışık</div>

            <div className="actions d-flex direction-column justify-content-center align-items-center">
              <button className="facebook-btn">Arkadaş Ekle</button>
              <button className="secondary-btn activeClass">Kaldır</button>
            </div>
          </div>

          <div className="friend-card">
            <div className="image">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/480px-User-avatar.svg.png" />
            </div>

            <div className="name">Murat Altınışık</div>

            <div className="actions d-flex direction-column justify-content-center align-items-center">
              <button className="facebook-btn">Arkadaş Ekle</button>
              <button className="secondary-btn activeClass">Kaldır</button>
            </div>
          </div>

          <div className="friend-card">
            <div className="image">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/480px-User-avatar.svg.png" />
            </div>

            <div className="name">Murat Altınışık</div>

            <div className="actions d-flex direction-column justify-content-center align-items-center">
              <button className="facebook-btn">Arkadaş Ekle</button>
              <button className="secondary-btn activeClass">Kaldır</button>
            </div>
          </div>

          <div className="friend-card">
            <div className="image">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/480px-User-avatar.svg.png" />
            </div>

            <div className="name">Murat Altınışık</div>

            <div className="actions d-flex direction-column justify-content-center align-items-center">
              <button className="facebook-btn">Arkadaş Ekle</button>
              <button className="secondary-btn activeClass">Kaldır</button>
            </div>
          </div>

          <div className="friend-card">
            <div className="image">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/480px-User-avatar.svg.png" />
            </div>

            <div className="name">Murat Altınışık</div>

            <div className="actions d-flex direction-column justify-content-center align-items-center">
              <button className="facebook-btn">Arkadaş Ekle</button>
              <button className="secondary-btn activeClass">Kaldır</button>
            </div>
          </div>

          <div className="friend-card">
            <div className="image">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/480px-User-avatar.svg.png" />
            </div>

            <div className="name">Murat Altınışık</div>

            <div className="actions d-flex direction-column justify-content-center align-items-center">
              <button className="facebook-btn">Arkadaş Ekle</button>
              <button className="secondary-btn activeClass">Kaldır</button>
            </div>
          </div>

          <div className="friend-card">
            <div className="image">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/480px-User-avatar.svg.png" />
            </div>

            <div className="name">Murat Altınışık</div>

            <div className="actions d-flex direction-column justify-content-center align-items-center">
              <button className="facebook-btn">Arkadaş Ekle</button>
              <button className="secondary-btn activeClass">Kaldır</button>
            </div>
          </div>

          <div className="friend-card">
            <div className="image">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/480px-User-avatar.svg.png" />
            </div>

            <div className="name">Murat Altınışık</div>

            <div className="actions d-flex direction-column justify-content-center align-items-center">
              <button className="facebook-btn">Arkadaş Ekle</button>
              <button className="secondary-btn activeClass">Kaldır</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
