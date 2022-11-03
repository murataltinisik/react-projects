import React, { Component } from 'react';

// ? FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

// ? CLASSIC SCSS
import Scss from '../../../assets/scss/settings-scss/contents-scss/classic.module.scss';

// * REACT ROUTER 5.2.0
import { NavLink } from 'react-router-dom';

// * ON SAVE SETTING PROPERTY
import {
  onSaveSettingProperty,
  onRunUpdateComponent,
} from '../TabProperty/TabProperty';

class GeneralPageContent extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      username: '',
      contact: '',
    };
  }

  componentDidUpdate() {
    onRunUpdateComponent(this.props.location.search);
  }

  // *
  onSubmitName = e => {
    // return this.state.name;
    e.preventDefault();
  };

  onSubmitUserName = e => {
    // return this.state.username;
    e.preventDefault();
  };

  onSubmitContact = e => {
    // return this.state.contact;
    e.preventDefault();
  };

  render() {
    return (
      <>
        {/* TITLE */}
        <h3 className="title">GENEL HESAP AYARLARI</h3>

        {/* CONTENT */}
        <div id={Scss.GeneralPageContent}>
          <ul id={Scss.informations}>
            <li id="name" className="parentTab">
              <NavLink to={`${this.props.match.url}?section=name`}>
                <p className={Scss.title}>Adın</p>
                <p className={Scss.info}>Murat Altınışık</p>
                <button className={Scss.action}>
                  <FontAwesomeIcon icon={faPencil} />
                  <span>Düzenle</span>
                </button>
              </NavLink>

              <div className={Scss.changeProperty}>
                <form onSubmit={this.onSubmitName}>
                  Yeni Adınız*
                  <input
                    type="text"
                    onKeyUp={e => (this.state.name = e.target.value)}
                    placeholder="Adınızı Değiştirin"
                  />
                  <button type="submit" onMouseUp={onSaveSettingProperty}>
                    Kaydet
                  </button>
                </form>
              </div>
            </li>

            <li id="username" className="parentTab">
              <NavLink to={`${this.props.match.url}?section=username`}>
                <p className={Scss.title}>Kullanıcı Adı</p>
                <p className={Scss.info}>Bir Kullanıcı adı Belirlemedin.</p>
                <button className={Scss.action}>
                  <FontAwesomeIcon icon={faPencil} />
                  <span>Düzenle</span>
                </button>
              </NavLink>

              <div className={Scss.changeProperty}>
                <form onSubmit={this.onSubmitUserName}>
                  Kullanıcı Adı*
                  <input
                    type="text"
                    onKeyUp={e => (this.state.username = e.target.value)}
                    placeholder="Kullanızı Adı"
                  />
                  <button type="submit" onMouseUp={onSaveSettingProperty}>
                    Kaydet
                  </button>
                </form>
              </div>
            </li>

            <li id="contact" className="parentTab">
              <NavLink to={`${this.props.match.url}?section=contact`}>
                <p className={Scss.title}>İletişim</p>
                <p className={Scss.info}>
                  <span>Ana:</span>
                  altinisikmurat396@gmail.com
                </p>
                <button className={Scss.action}>
                  <FontAwesomeIcon icon={faPencil} />
                  <span>Düzenle</span>
                </button>
              </NavLink>

              <div className={Scss.changeProperty} id="contact">
                <form onSubmit={this.onSubmitContact}>
                  İletişim*
                  <input
                    type="text"
                    onKeyUp={e => (this.state.contact = e.target.value)}
                    placeholder="E-Posta Adresiniz"
                  />
                  <button type="submit" onMouseUp={onSaveSettingProperty}>
                    Kaydet
                  </button>
                </form>
              </div>
            </li>

            <li>
              <a href="javascript:void(0)">
                <p className={Scss.title}>Anıtlaştırma Ayarları</p>
                <p className={Scss.info}>
                  <span>
                    Vefat etmen durumunda hesabına ne olacağına karar ver.
                  </span>
                </p>
                <button className={Scss.action}>
                  <FontAwesomeIcon icon={faPencil} />
                  <span>Düzenle</span>
                </button>
              </a>
            </li>

            <li>
              <a href="javascript:void(0)">
                <p className={Scss.title}>Kimlik Onayı</p>
                <p className={Scss.info}>
                  <span>
                    Sosyal Meselelerle, seçimlerde veya siyasetle ilgili
                    reklamlar yayınlamak gibi şeyler yapmak için kimliğini
                    onayla.
                  </span>
                </p>
                <button className={Scss.action}>
                  <FontAwesomeIcon icon={faPencil} />
                  <span>Düzenle</span>
                </button>
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default GeneralPageContent;
