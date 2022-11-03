import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';

// ? CLASSIC SCSS
import Scss from '../../../assets/scss/settings-scss/contents-scss/classic.module.scss';

// * ON SAVE SETTING PROPERTY
import {
  onChangeSettingProperty,
  onRunUpdateComponent,
} from '../TabProperty/TabProperty';

// * REACT ROUTER 5.2.0
import { NavLink } from 'react-router-dom';

export class PrivacyPageContent extends Component {
  componentDidUpdate() {
    onRunUpdateComponent(this.props.location.search);
  }

  render() {
    return (
      <>
        {/* TITLE */}
        <h3 className="title">Gizlilik Ayarları ve Araçları</h3>

        {/* CONTENT */}
        <div id={Scss.PrivacyPageContent}>
          {/* INFORMATION */}
          <ul className={Scss.informations}>
            <li>
              <div className={Scss.multiSetting}>
                <p className={Scss.title}>Gizlilik kısayolları</p>

                {/* SETTINGS */}
                <ul className={Scss.settings}>
                  <li>
                    <a href="#">
                      <p className={Scss.title}>Kullanıcı Adı</p>
                      <p className={Scss.info}>
                        <span>
                          İstediğin kişilerle paylaşımda bulunduğundan emin
                          olmak için bazı önemli ayarları hızlıca gözden geçir.
                        </span>
                      </p>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <p className={Scss.title}>Profilini Yönet</p>
                      <p className={Scss.info}>
                        <span>
                          Profil bilgilerinin gizliliğini (ör. doğum tarihini
                          veya ilişkilerini kimlerin görebileceğini) değiştirmek
                          için profiline git.
                        </span>
                      </p>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <p className={Scss.title}>
                        Gizlilik esasları ile daha fazla bilgi al
                      </p>
                      <p className={Scss.info}>
                        <span>
                          Bu etkileşimli kılavuzla sık sorulan soruların
                          yanıtlarını bul.
                        </span>
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>

          {/* INFORMATION */}
          <ul className={Scss.informations}>
            <li>
              <div className={Scss.multiSetting}>
                <p className={Scss.title}>Hareklerin</p>

                {/* SETTINGS */}
                <ul className={Scss.settings}>
                  <li id="publicPostStatus">
                    <NavLink
                      to={`${this.props.match.url}?section=publicPostStatus`}
                      className="direction-row"
                    >
                      <p className={Scss.info}>
                        <span>
                          İleride Paylaşacağın gönderileri kimler görebilir?
                        </span>
                      </p>

                      <button className={Scss.action}>
                        <FontAwesomeIcon icon={faPencil} />
                        <span>Düzenle</span>
                      </button>
                    </NavLink>

                    <div className={Scss.changeProperty}>
                      <select onChange={onChangeSettingProperty}>
                        <option value="0">Herkese Açık</option>
                        <option value="1">Arkadaşlar</option>
                      </select>
                    </div>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="direction-row align-items-center justify-content-between"
                    >
                      <p className={`${Scss.info} width-50`}>
                        <span>
                          Tüm Gönderilerini ve etiketlenmiş olduğun şeyleri
                          gözden geçir.
                        </span>
                      </p>

                      <button className={Scss.action}>
                        <span>Hareklerin Dökümünü kullan</span>
                      </button>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="direction-row align-items-center justify-content-between"
                    >
                      <p className={`${Scss.info} width-50`}>
                        <span>
                          Arkadaşlarının arkadaşlarıyla veya herkese açık
                          paylaşılmış olduğun gönderilerin hedef kitlesini
                          sınırla.
                        </span>
                      </p>

                      <button className={Scss.action}>
                        <span>Geçmiş gönderileri sınırla</span>
                      </button>
                    </a>
                  </li>

                  <li id="subscribedto">
                    <NavLink
                      to={`${this.props.match.url}?section=subscribedto`}
                      className="direction-row"
                    >
                      <p className={Scss.info}>
                        <span>
                          Takip ettiğin kişileri, sayfaları ve listeleri kimler
                          görebilir?
                        </span>
                      </p>

                      <button className={Scss.action}>
                        <FontAwesomeIcon icon={faPencil} />
                        <span>Düzenle</span>
                      </button>
                    </NavLink>

                    <div className={Scss.changeProperty}>
                      <select onChange={onChangeSettingProperty}>
                        <option value="0">Herkese Açık</option>
                        <option value="1">Arkadaşlar</option>
                        <option value="2">Sadece Ben</option>
                      </select>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>

          {/* INFORMATION */}
          <ul className={Scss.informations}>
            <li>
              <div className={Scss.multiSetting}>
                <p className={Scss.title}>
                  İnsanlar seni nasıl bulabilir ve seninle nasıl iletişim
                  kurabilir?
                </p>

                {/* SETTINGS */}
                <ul className={Scss.settings}>
                  <li>
                    <a href="#" className="direction-row">
                      <p className={Scss.info}>
                        <span>Sana kimler arkadaşlık isteği gönderebilir?</span>
                      </p>

                      <button className={Scss.action}>
                        <FontAwesomeIcon icon={faPencil} />
                        <span>Düzenle</span>
                      </button>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="direction-row align-items-center justify-content-between"
                    >
                      <p className={`${Scss.info} width-50`}>
                        <span>Arkadaş listeni kimler görebilir?</span>
                      </p>
                      <button className={Scss.action}>
                        <FontAwesomeIcon icon={faPencil} />
                        <span>Düzenle</span>
                      </button>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="direction-row align-items-center justify-content-between"
                    >
                      <p className={`${Scss.info} width-50`}>
                        <span>
                          Kayıtlı e-posta adresini kullanarak kimler seni
                          aratabilir?
                        </span>
                      </p>
                      <button className={Scss.action}>
                        <FontAwesomeIcon icon={faPencil} />
                        <span>Düzenle</span>
                      </button>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="direction-row align-items-center justify-content-between"
                    >
                      <p className={`${Scss.info} width-50`}>
                        <span>
                          Kayıtı telefon numaranı kimler aratarak seni
                          bulubilir?
                        </span>
                      </p>

                      <button className={Scss.action}>
                        <FontAwesomeIcon icon={faPencil} />
                        <span>Düzenle</span>
                      </button>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="direction-row align-items-center justify-content-between"
                    >
                      <p className={`${Scss.info} width-50`}>
                        <span>
                          Facebook'un dışındaki arama motorlarının, profiline
                          bağlantı vermesini istiyormusun?
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
            </li>
          </ul>

          {/* INFORMATION */}
          <ul className={Scss.informations}>
            <li>
              <div className={Scss.multiSetting}>
                <p className={Scss.title}>Mesaj İsteklerini Nasıl Alırsın?</p>

                {/* SETTINGS */}
                <ul className={Scss.settings}>
                  <li>
                    <a href="#" className="direction-row align-items-center">
                      <div style={{ width: '100%' }}>
                        <p className={Scss.title}>Potansiyel Bağlantılar</p>
                        <p className={Scss.info}>
                          <span>Facebook'taki arkadaşlarının arkadaşları</span>
                        </p>
                      </div>

                      <button className={Scss.action}>
                        <FontAwesomeIcon icon={faPencil} />
                        <span>Düzenle</span>
                      </button>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="direction-row align-items-center">
                      <div style={{ width: '100%' }}>
                        <p className={Scss.title}>Diğer Kişiler</p>
                        <p className={Scss.info}>
                          <span>Facebook'taki diğer kişiler</span>
                        </p>
                      </div>

                      <button className={Scss.action}>
                        <FontAwesomeIcon icon={faPencil} />
                        <span>Düzenle</span>
                      </button>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="direction-row">
                      <p className={Scss.info}>
                        <span>Intagram'daki Hesaplar</span>
                      </p>

                      <button className={Scss.action}>
                        <FontAwesomeIcon icon={faPencil} />
                        <span>Düzenle</span>
                      </button>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default PrivacyPageContent;
