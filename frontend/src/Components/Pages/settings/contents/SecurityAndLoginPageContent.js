import React, { Component } from 'react';

// ? FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBell,
  faCaretDown,
  faCircleUser,
  faKey,
  faLock,
  faMessage,
  faPhone,
  faShield,
} from '@fortawesome/free-solid-svg-icons';

// ? SECURITY AND LOGIN SCSS
import Scss from '../../../assets/scss/settings-scss/contents-scss/security-and-login.module.scss';

// * ON SAVE SETTING PROPERTY
import {
  onSaveSettingProperty,
  onRunUpdateComponent,
} from '../TabProperty/TabProperty';

// * REACT ROUTER 5.2.0
import { NavLink } from 'react-router-dom';

class SecurityAndLoginPageContent extends Component {
  constructor() {
    super();
    this.state = {
      password: {
        old: '',
        new: '',
        newAgain: '',
      },
    };
  }

  componentDidUpdate() {
    onRunUpdateComponent(this.props.location.search);
  }

  onSubmitNewPassword = e => {
    console.log(this.state.password);
    e.preventDefault();
  };

  render() {
    return (
      <>
        {/* TITLE */}
        <h3 className="title">Güvenlik ve Giriş</h3>

        {/* CONTENT */}
        <div id={Scss.SecurityAndLoginPageContent}>
          {/* BOX - RECOMMENDATION */}
          <div className={Scss.box}>
            {/* TITLE */}
            <div className={Scss.title}>Tavsiye Edilen</div>

            {/* DESCRIPTION */}
            <div className={Scss.description}>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faShield} />
                  <div className={Scss.detail}>
                    <b>Önemli Güvenlik Ayarlarını Kontrol Et</b>
                    <p>
                      Hesabını korumaya yardımcı olmak için bazı adımları
                      tamamlaman gerekiyor.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* BOX - WHERE YOU LOGGED */}
          <div className={Scss.box}>
            {/* TITLE */}
            <div className={Scss.title}>Giriş Yaptığın Yerler</div>

            {/* DESCRIPTION */}
            <div className={Scss.description}>
              <ul>
                <li>
                  <img src="https://www.facebook.com/images/si/security_settings/wyli/device-windows.png" />
                  <div className={Scss.detail}>
                    <p className={Scss.change}>
                      Windows Pc <span className="elips"></span>
                      Ankara, Turkey
                      <div className={Scss.info}>IP: 124.156.48.2</div>
                    </p>
                    <p>
                      Chrome <span className="elips"></span>
                      <span>Şu an aktif</span>
                    </p>
                  </div>
                </li>

                <li>
                  <img src="https://www.facebook.com/images/si/security_settings/wyli/device-windows.png" />
                  <div className={Scss.detail}>
                    <p className={Scss.change}>
                      Windows Pc <span className="elips"></span>
                      Ankara, Turkey
                      <div className={Scss.info}>IP: 124.156.48.2</div>
                    </p>
                    <p>
                      Chrome <span className="elips"></span>
                      16 Eylül, 14:22
                    </p>
                  </div>
                </li>

                <li className={Scss.moreInfo}>
                  <FontAwesomeIcon icon={faCaretDown} />
                  <span>Daha Fazla</span>
                </li>
              </ul>
            </div>
          </div>

          {/* BOX - LOGIN */}
          <div className={Scss.box}>
            {/* TITLE */}
            <div className={Scss.title}>Giriş</div>

            {/* DESCRIPTION */}
            <div className={Scss.description}>
              <ul>
                <li id="changePassword" className={`${Scss.link} parentTab`}>
                  <NavLink
                    to={`${this.props.match.url}?section=changePassword`}
                  >
                    <FontAwesomeIcon icon={faKey} />
                    <div className={Scss.detail}>
                      <b>Şifreyi Değiştir</b>
                      <p>
                        Başka bir yerde kullanmadığın güçlü bir şifre kullanmak
                        iyi bir fikirdir.
                      </p>
                    </div>
                  </NavLink>

                  <div className={Scss.changeProperty}>
                    <form onSubmit={this.onSubmitNewPassword}>
                      Yeni Adınız*
                      <div className="mb-1 mt-1">
                        <input
                          type="password"
                          onKeyUp={e =>
                            (this.state.password.old = e.target.value)
                          }
                          placeholder="Eski Şifre"
                        />
                      </div>
                      <div className="mb-1">
                        <input
                          type="password"
                          onKeyUp={e =>
                            (this.state.password.new = e.target.value)
                          }
                          placeholder="Yeni Şifre"
                        />
                      </div>
                      <div>
                        <input
                          type="password"
                          onKeyUp={e =>
                            (this.state.password.newAgain = e.target.value)
                          }
                          placeholder="Yeni Şifre Tekrar"
                        />
                      </div>
                      <button type="submit" onMouseUp={onSaveSettingProperty}>
                        Değişiklikleri Kaydet
                      </button>
                    </form>
                  </div>
                </li>

                <li id="loginInfoLog" className={`${Scss.link} parentTab`}>
                  <NavLink to={`${this.props.match.url}?section=loginInfoLog`}>
                    <FontAwesomeIcon icon={faCircleUser} />
                    <div className={Scss.detail}>
                      <b>Giriş Bilgilerini kaydet</b>
                      <p>
                        Sadece seçtiğin tarayıcılarda ve cihazlarda
                        kaydedilecek.
                      </p>
                    </div>
                  </NavLink>

                  <div className={Scss.changeProperty}>
                    <NavLink to="">
                      <div className={Scss.infoTitle}>
                        Giriş Bilgileri Kaydet
                      </div>
                      <div className={Scss.infoDescription}>
                        Bu tarayıcıda yeniden giriş yaparken şifreni girmen
                        gerekmeyecek.
                      </div>
                    </NavLink>

                    <NavLink to="">
                      <div className={Scss.infoTitle}>Hesabı Kaldır</div>
                      <div className={Scss.infoDescription}>
                        Bir sonraki girişinde e-postanı veya telefon numaranı
                        girmen gerekecek.
                      </div>
                    </NavLink>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* BOX - VERIFICATION */}
          <div className={Scss.box}>
            {/* TITLE */}
            <div className={Scss.title}>İki faktörlü kimlik doğrulaması</div>

            {/* DESCRIPTION */}
            <div className={Scss.description}>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faShield} />
                  <div className={Scss.detail}>
                    <b>İki faktörlü kimlik doğrulaması kullan</b>
                    <p>
                      Tanımadığınız bir cihazdan veya tarayıcıdan giriş denemesi
                      fark edersek bir kod isteyeceğiz.
                    </p>
                  </div>
                </li>

                <li>
                  <FontAwesomeIcon icon={faPhone} />
                  <div className={Scss.detail}>
                    <b>İZin verilen girişler</b>
                    <p>
                      Giriş kodu kullanmak zorunda kalmayacağın cihazların
                      listesini gözden geçir.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* BOX - ADDITIONAL SECURITY */}
          <div className={Scss.box}>
            {/* TITLE */}
            <div className={Scss.title}>İlave Günvenlik ayarlama</div>

            {/* DESCRIPTION */}
            <div className={Scss.description}>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faBell} />
                  <div className={Scss.detail}>
                    <b>Tanımayan girişler hakkında uyarılar al</b>
                    <p>
                      Birisi genellikle kullanmadığın bir cihazdan veya
                      tarayıcıdan hesabına giriş yaparsa, sana bildireceğiz.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* BOX - DEVELOPED */}
          <div className={Scss.box}>
            {/* TITLE */}
            <div className={Scss.title}>Gelişmiş</div>

            {/* DESCRIPTION */}
            <div className={Scss.description}>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faLock} />
                  <div className={Scss.detail}>
                    <b>Şifrelenmiş bildirim e-postaları</b>
                    <p>
                      Facebook'tan gelen bildirim e-postalrına ilave güvenlik
                      ekle (bu e-postaların şifrelerini sadece sen çözebilirsin)
                    </p>
                  </div>
                </li>

                <li>
                  <FontAwesomeIcon icon={faMessage} />
                  <div className={Scss.detail}>
                    <b>Yakınlarda Facebook'tan gelen e-postalarını gör</b>
                    <p>
                      Güvenlik hakkındaki e-postalar dahil yakınlarda sana
                      gönderdiğimiz e-postaların bir listesini gör.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SecurityAndLoginPageContent;
