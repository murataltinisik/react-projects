import React, { Component } from 'react';

// ? CLASSIC 2 SCSS
import Scss from '../../../assets/scss/settings-scss/contents-scss/classic2.module.scss';

export class StoriesPageContent extends Component {
  render() {
    return (
      <>
        {/* TITLE */}
        <h3 className="title">Hikaye Ayarları</h3>

        {/* CONTENT */}
        <div id={Scss.StoriesPageContent}>
          {/* BOX */}
          <div className={Scss.box}>
            <div className={Scss.boxTitle}>Paylaşım Seçenekleri</div>

            {/* SETTING MENU */}
            <ul className={Scss.settingMenu}>
              <li>
                <div>
                  <p style={{ width: '90%' }}>
                    Herkese açık hikayelerini başkalarının kendi hikayelerinde
                    paylaşmasına izin veriyor musun?
                  </p>
                  <span style={{ width: '90%' }}>
                    Hikayeleri senin tam adını ve asıl hikayenin bağlantısını
                    içerecektir. Kimlerin göreceğini onlar kontrol edecektir.
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

export default StoriesPageContent;
