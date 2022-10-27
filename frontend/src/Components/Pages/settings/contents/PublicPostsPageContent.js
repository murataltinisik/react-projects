import React, { Component } from 'react';

// ? FONT AWESOME
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// ? CLASSIC SCSS
import Scss from '../../../assets/scss/settings-scss/contents-scss/classic.module.scss';

export class PublicPostsPageContent extends Component {
  render() {
    return (
      <>
        {/* TITLE */}
        <h3 className="title">Herkese Açık Gönderi Filtreleri ve Araçları</h3>

        {/* CONTENT */}
        <div id={Scss.PublicPostsPageContent}>
          {/* INFORMATION */}
          <ul className={Scss.informations}>
            <li>
              <div className={Scss.multiSetting}>
                <p className={Scss.title}>Beni Kimler takip edebilir</p>

                {/* SETTINGS */}
                <ul className={Scss.settings}>
                  <li>
                    <a href="#" className={`${Scss.notHover} direction-row`}>
                      <p className={Scss.info}>
                        <span>
                          Takipçiler senin gönderilerini, Reels videolarını,
                          hikayelerini ve soundbite'larını Akışta görür.
                          Arkadaşların senin gönderilerini, Reels videolarını,
                          hikayelerini ve soundbite'larını varsayılan olarak
                          takip eder ama herkese açık gönderilerini, Reels
                          videolarını, hikayelerini ve soundbite'larını
                          arkadaşın olmayan kişilerin de takip etmesine izin
                          verebilirsin. Seni kimlerin takip edebileceğini seçmek
                          için bu ayarı kullan. Bir Reels videosu, hikaye veya
                          soundbite paylaştığında veya oluşturduğunda, bunları
                          paylaşmak istediğin hedef kitleyi seçersin. Bu ayar,
                          Marketplace'te ve alım satım gruplarında seni takip
                          eden kişiler için geçerli değildir. Bu ayarları
                          Marketplace'te yönetebilirsin.
                          <br />
                          <a href="#" className="primary-link">
                            Daha fazla bilgi al
                          </a>
                        </span>
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>

          {/* INFORMATION */}
          <ul id={Scss.informations}>
            <li>
              <a href="#">
                <p className={Scss.title}>Herkese Açık Gönderi Yorumları</p>
                <p className={Scss.info}>
                  <span>
                    Herkese açık gönderilerine kimler yorum yapabilir?
                    <b>Hekese Açık</b>
                  </span>
                </p>
                <button className={Scss.action}>
                  <FontAwesomeIcon icon={faPencil} />
                  <span>Düzenle</span>
                </button>
              </a>
            </li>

            <li>
              <a href="#">
                <p className={Scss.title}>Herkese Açık gönderi bildirimleri</p>
                <p className={Scss.info}>
                  <span>
                    Şunlardan Bildirim al <b>Herkese açık</b>
                  </span>
                </p>
                <button className={Scss.action}>
                  <FontAwesomeIcon icon={faPencil} />
                  <span>Düzenle</span>
                </button>
              </a>
            </li>

            <li>
              <a href="#">
                <p className={Scss.title}>Herkese açık profil bilgileri</p>
                <p className={Scss.info}>
                  <span>
                    Herkese açık profil resimlerini ve diğer profil bilgilerini
                    kimler beğenebilir veya bunlara kimler yorum yapabalir?{' '}
                    <b>Arkadaşlar</b>
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

export default PublicPostsPageContent;
