import React, { PureComponent } from 'react';
// ASSETS -> CSS
import '../../assets/Input/input.scss';
import '../../assets/Button/button.scss';
import '../../assets/MarginPadding/margin-padding.scss';
import '../../assets/Link/link.scss';
import '../../assets/List/list.scss';
// MODULE SCSS
import Scss from './style.module.scss';

class Login extends PureComponent {
  render() {
    return (
      <>
        <div id={Scss.MainContainer}>
          {/* LEFT BODY */}
          <div className={Scss.leftBody}>
            <h1>MuratBook</h1>
            <p className={Scss.content}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>

          {/* RIGHT BODY */}
          <div className={Scss.rightBody}>
            {/* FORM */}
            <div className={Scss.container}>
              <form>
                <div className="input-group">
                  <input placeholder="E-Posta veya Telefon Numarası..." />
                </div>

                <div className="input-group">
                  <input placeholder="Şifreniz..." />
                </div>

                <div className="input-group">
                  <button className="primary-btn">Giriş Yap</button>
                  <div className="br"></div>
                  <a href="#" className="primary-link">
                    Şifreni mi Unuttun?
                  </a>
                </div>

                <div className="input-group">
                  <div className="hr"></div>
                  <button className={`success-btn ${Scss.btnWidth}`}>
                    Yeni Hesap Oluştur
                  </button>
                </div>
              </form>
            </div>

            {/* BODY FOOT */}
            <div className={Scss.content}>
              <p>
                Ünlü biri, marka veya işletme için{' '}
                <a href="#" className="dark-link">
                  Sayfa oluştur
                </a>
                .
              </p>
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

export default Login;
