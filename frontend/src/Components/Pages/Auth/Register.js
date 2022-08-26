import React, { PureComponent } from 'react';
// ASSETS -> CSS
import '../../assets/Input/input.scss';
import '../../assets/Button/button.scss';
import '../../assets/MarginPadding/margin-padding.scss';
import '../../assets/Display/flex.scss';
import '../../assets/WidthHeight/width-height.scss';
import '../../assets/Link/link.scss';
import '../../assets/List/list.scss';
// MODULE SCSS
import Scss from './style.module.scss';
import './responsive/responsive.scss';

class Login extends PureComponent {
  render() {
    return (
      <>
        <div id={Scss.MainContainer} className="height-auto main-responsive">
          {/* LEFT BODY */}

          {/* RIGHT BODY */}
          <div
            className={`${Scss.rightBody} ${Scss.register} my-3 register-responsive-container`}
            style={{ width: '27rem' }}
          >
            <div>
              <h1>MuratBook</h1>
            </div>

            {/* FORM */}
            <div className={`${Scss.container} p-0 py-1`}>
              <div className={Scss.head}>
                <h2>Yeni Hesap Oluştur</h2>
                <small>Hızlı ve Kolaydır.</small>
              </div>

              <div className="hr mt-1"></div>

              <form className="p-1 pt-0 px-2">
                {/* NAME AND SURNAME */}
                <div className="input-group d-flex justify-content-center">
                  <input
                    type="text"
                    placeholder="Adın"
                    className="p-1 register-input"
                  />

                  <input
                    type="text"
                    placeholder="Soyadın"
                    className="p-1 ml-1 register-input"
                  />
                </div>

                {/* EMAIL OR NUMBER PHONE */}
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Cep Telefon Numarası veya e-posta"
                    className="p-1 register-input"
                  />
                </div>

                {/* NEW PASSWORD */}
                <div className="input-group">
                  <input
                    type="password"
                    placeholder="Yeni Şifre"
                    className="p-1 register-input"
                  />
                </div>

                {/* SELECTS */}
                <div className="input-group">
                  <div className="input-group-title">Doğum Tarihi</div>

                  <div className="d-flex justify-content-between">
                    <select className="p-05 register-input">
                      <option value="0" selected>
                        0
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>

                    <select className="p-05 mx-1 register-input">
                      <option value="0" selected>
                        Oca
                      </option>
                      <option value="1">Şub</option>
                      <option value="2">Mar</option>
                      <option value="3">Nis</option>
                      <option value="4">May</option>
                    </select>

                    <select className="p-05 register-input">
                      <option value="2022" selected>
                        2022
                      </option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                    </select>
                  </div>
                </div>

                {/* GENDER */}
                <div className="input-group">
                  <div className="input-group-title">Cinsiyet</div>

                  <div className="d-flex justify-content-center align-items-center">
                    <label className="radio d-flex justify-content-between">
                      <span>Erkek</span>
                      <input type="radio" name="gender"></input>
                    </label>

                    <label className="radio mx-1 d-flex justify-content-between">
                      <span>Kadın</span>
                      <input type="radio" name="gender"></input>
                    </label>

                    <label className="radio d-flex justify-content-between">
                      <span>Özel</span>
                      <input type="radio" name="gender"></input>
                    </label>
                  </div>
                </div>

                <div className={Scss.information}>
                  <p className="mt-1">
                    Hizmetimizi kullanan kişiler senin iletişim bilgilerini
                    Facebook'a yüklemiş olabilir.
                    <a href="#" className="primary-link">
                      Daha fazla bilgi al.
                    </a>
                  </p>

                  <p className="mt-1">
                    Kaydol düğmesine tıklayarak,{' '}
                    <a href="#" className="primary-link">
                      Koşullarımızı
                    </a>
                    ,
                    <a href="#" className="primary-link">
                      Gizlilik
                    </a>
                    İlkemizi ve{' '}
                    <a href="#" className="primary-link">
                      Çerezler İlkemizi
                    </a>{' '}
                    kabul etmiş olursun. Bizden SMS Bildirimleri alabilir ve bu
                    bildirimleri istediğin zaman durdurabilirsin.
                  </p>
                </div>

                <div>
                  <button className="success-btn p-1 mt-1 width-50">
                    Kaydol
                  </button>
                </div>

                <a href="#" className="primary-link">
                  Hesabınız Zaten var mı?
                </a>
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

export default Login;
