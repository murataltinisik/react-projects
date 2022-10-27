import React, { Component } from 'react';

// ? CLASSIC 2 SCSS
import Scss from '../../../assets/scss/settings-scss/contents-scss/classic2.module.scss';

export class LanguageAndRegionPageContent extends Component {
  render() {
    return (
      <>
        {/* TITLE */}
        <h3 className="title">Dil ve Bölge Ayarları</h3>

        {/* CONTENT */}
        <div id={Scss.LanguageAndRegionPageContent}>
          {/* BOX */}
          <div className={Scss.box}>
            <div className={Scss.boxTitle}>Engellemeleri Yönet</div>

            {/* SETTING MENU */}
            <ul className={Scss.settingMenu}>
              <li>
                <div>
                  <p>Facebook Dili</p>
                  <span>
                    www.facebook.com adresinde bu hesap için Facebook'taki
                    düğmeler, başlıklar ve diğer yazılar için kullanılan dil
                  </span>
                </div>

                <button className="secondary-btn">Düzenle</button>
              </li>

              <li>
                <div>
                  <p>Bölge Formatı</p>

                  {/* UL */}
                  <ul>
                    <li>
                      <div>
                        <span>Tarih, saat ve sayı formatları</span>
                      </div>

                      <button className="secondary-btn">Düzenle</button>
                    </li>

                    <li>
                      <div>
                        <span>Sıcaklık</span>
                      </div>

                      <button className="secondary-btn">Düzenle</button>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <div>
                  <p>Arkadaşlarından ve Sayfalardan Gönderiler</p>

                  {/* UL */}
                  <ul>
                    <li>
                      <div>
                        <span>Gönderilerin çevrilmesini istediğin dil</span>
                      </div>

                      <button className="secondary-btn">Düzenle</button>
                    </li>

                    <li>
                      <div>
                        <span>Çeviri sunulmasını istemediğin diller</span>
                      </div>

                      <button className="secondary-btn">Düzenle</button>
                    </li>

                    <li>
                      <div>
                        <span>
                          Otomatik olarak çevrilmesini istemediğin diller
                        </span>
                      </div>

                      <button className="secondary-btn">Düzenle</button>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <div>
                  <p>Çok Dilli Gönderiler</p>
                  <span>
                    Bir durumun çok dilli versiyonlarını paylaşmana izin veren
                    bir özellik
                  </span>
                </div>

                <button className="secondary-btn">Düzenle</button>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default LanguageAndRegionPageContent;
