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

// * REDUX
import { connect } from "react-redux";
import { updateUser } from "../../../../actions/User/newUser";

class GeneralPageContent extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      username: '',
      contact: '',
      user: localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"))
    };
  }
  componentDidUpdate() {
    onRunUpdateComponent(this.props.location.search);
  }

  // *
  onSubmitName = e => {
    e.preventDefault();
    if(this.state.name.length >= 5){
      const name = this.state.name.split(" ")[0];
      const surname = this.state.name.split(" ")[1];

      this.state.user.name = name;
      this.state.user.surname = surname;

      this.props.updateUser(this.state.user);
    }
  };

  onSubmitUserName = e => {
    e.preventDefault();
    if(this.state.username.length >= 5){
      this.state.user.username = this.state.username;
      this.props.updateUser(this.state.user);
    }
  };

  onSubmitContact = e => {
    e.preventDefault();
    if(this.state.contact.length >= 10){
      this.state.user.emailPhone = this.state.contact;
      this.props.updateUser(this.state.user);
    }
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
                <p className={Scss.info}>
                  {this.state.user && `${this.state.user.name} ${this.state.user.surname}`}
                </p>
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
                <p className={Scss.info}>
                  {this.state.user && this.state.user.username ? `${this.state.user && this.state.user.username}`:"Bir Kullanıcı Adı Belirtmediniz."}
                </p>
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
                  <span>Ana: </span>
                  {this.state.user && `${this.state.user.emailPhone}`}
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

const mapStateToProps = ({ newUser }) => {
  return { newUser }
}

const mapDispatchToProps = {
  updateUser
}

export default connect(mapStateToProps, mapDispatchToProps)(GeneralPageContent);
