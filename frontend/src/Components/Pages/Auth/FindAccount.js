import React, { PureComponent } from 'react';
// ASSETS -> CSS
import '../../assets/Input/input.scss';
import '../../assets/Button/button.scss';
import '../../assets/MarginPadding/margin-padding.scss';
import '../../assets/TextAlign/text-align.scss';
import '../../assets/Link/link.scss';
import '../../assets/List/list.scss';
// MODULE SCSS
import Scss from './style.module.scss';

class FindAccount extends PureComponent {
  render() {
    return (
      <>
        <div id={Scss.MainContainer} className="px-5">
          {/* HEADER */}
          <header className="d-flex justify-content-between align-items-center">
            <div className={Scss.title}>MuratBook</div>

            <div className="d-flex align-items-center">
              <form>
                <div className="input-group" style={{ marginTop: '0' }}>
                  <input
                    type="text"
                    className="p-05 px-2"
                    placeholder="E-posta veya telefon"
                  />
                </div>

                <div className="input-group ml-1" style={{ marginTop: '0' }}>
                  <input
                    type="text"
                    className="p-05 px-2"
                    placeholder="E-posta veya telefon"
                  />
                </div>

                <button
                  className={`primary-btn ${Scss.btnWidth} ml-1 py-05 px-1 mr-1`}
                >
                  Giriş Yap
                </button>
              </form>

              <a href="#" className="primary-link">
                Hesabını mı Unuttun?
              </a>
            </div>
          </header>

          {/* RIGHT BODY */}
          <div
            className={`${Scss.rightBody} ${Scss.findAccount}`}
            style={{ width: '32rem' }}
          >
            {/* FORM */}
            <div className={`${Scss.container} px-0 mx-0`}>
              <div className="pb-1 text-left px-2">
                <h3>Hesabını Bul</h3>
              </div>

              <div className="hr"></div>

              <form>
                <p
                  className={`${Scss.content} text-left px-2`}
                  style={{ fontSize: '.85rem' }}
                >
                  Lorem Ipsum is simply dummy text of the printing and typesetti
                  ng industry.
                </p>

                <div className="input-group px-2">
                  <input
                    type="text"
                    placeholder="E-Posta veya Telefon Numarası..."
                  />
                </div>

                <div className="input-group" style={{ textAlign: 'right' }}>
                  <div className="hr"></div>
                  <button
                    className={`secondary-btn ${Scss.btnWidth} ml-1 py-05 px-2`}
                  >
                    İptal
                  </button>

                  <button
                    className={`primary-btn ${Scss.btnWidth} ml-1 py-05 px-2 mr-1`}
                  >
                    Ara
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div id={Scss.FootContainer}>
          {/* HEAD */}
          <div className={Scss.head}>
            <ul className={Scss.language}>
              <li>
                <a href="#" className="light-link">
                  Türkçe
                </a>
              </li>
              <li>
                <a href="#" className="light-link">
                  English (Uk)
                </a>
              </li>
              <li>
                <a href="#" className="light-link">
                  Français (France)
                </a>
              </li>
              <li>
                <a href="#" className="light-link">
                  Kurdi (Kurmanci)
                </a>
              </li>
            </ul>
          </div>

          <div className="br"></div>
          <div className="hr"></div>

          {/* BODY */}
          <div className={Scss.body}>
            <ul className={Scss.links}>
              <li>
                <a href="#" className="light-link">
                  Kaydol
                </a>
              </li>
              <li>
                <a href="#" className="light-link">
                  Giriş Yap
                </a>
              </li>
              <li>
                <a href="#" className="light-link">
                  Messenger
                </a>
              </li>
              <li>
                <a href="#" className="light-link">
                  Oyunlar
                </a>
              </li>
              <li>
                <a href="#" className="light-link">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="#" className="light-link">
                  Reklam Oluştur
                </a>
              </li>
              <li>
                <a href="#" className="light-link">
                  Sayfa Oluştur
                </a>
              </li>
              <li>
                <a href="#" className="light-link">
                  Hizmetler
                </a>
              </li>
              <li>
                <a href="#" className="light-link">
                  Yerel
                </a>
              </li>
              <li>
                <a href="#" className="light-link">
                  Marketplace
                </a>
              </li>
              <li>
                <a href="#" className="light-link">
                  Geliştiriciler
                </a>
              </li>
              <li>
                <a href="#" className="light-link">
                  Gizlilik
                </a>
              </li>
              <li>
                <a href="#" className="light-link">
                  Çerezler
                </a>
              </li>
              <li>
                <a href="#" className="light-link">
                  Koşullar
                </a>
              </li>
              <li>
                <a href="#" className="light-link">
                  Yardım
                </a>
              </li>
            </ul>
          </div>

          <div className="br"></div>
          {/* FOOT */}
          <div className={Scss.foot}>Meta 2022</div>
        </div>
      </>
    );
  }
}

export default FindAccount;
