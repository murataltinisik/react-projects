import React from 'react';

// ? FORMIK
import { useFormik } from 'formik';

// ? YUP
import * as Yup from 'yup';

// ? ASSETS -> CSS
import '../../assets/css/Link/link.scss';
import '../../assets/css/List/list.scss';
import '../../assets/css/Input/input.scss';
import '../../assets/css/Button/button.scss';
import '../../assets/css/TextAlign/text-align.scss';
import '../../assets/css/MarginPadding/margin-padding.scss';

// ? MODULE SCSS
import Scss from '../../assets/scss/auth-scss/style.module.scss';

function FindAccount() {
  const validationSchema = Yup.object({
    emailOrNumberFindAccount: Yup.string().max(
      70,
      'Email Adresiniz En fazla 70 karakterli olmalıdır!!!'
    ),
  });

  const formik = useFormik({
    initialValues: {
      emailOrNumber: '',
      password: '',
      emailOrNumberFindAccount: '',
    },
    validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <div id={Scss.MainContainer} className="px-5">
        {/* HEADER */}
        <header className="d-flex justify-content-between align-items-center">
          <div className={Scss.title}>MuratBook</div>

          <div className="d-flex align-items-center">
            <form onSubmit={formik.handleSubmit}>
              <div className="input-group" style={{ marginTop: '0' }}>
                <input
                  type="text"
                  name="emailOrNumber"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  values={formik.values.emailOrNumber}
                  className="p-05 px-2"
                  placeholder="E-posta veya telefon"
                />
              </div>

              <div className="input-group ml-1" style={{ marginTop: '0' }}>
                <input
                  type="text"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  values={formik.values.password}
                  className="p-05 px-2"
                  placeholder="Şifreniz..."
                />
              </div>

              <button
                type="submit"
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

            <form onSubmit={formik.handleSubmit}>
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
                  name="emailOrNumberFindAccount"
                  placeholder="E-Posta veya Telefon Numarası..."
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.emailOrNumberFindAccount}
                  style={{
                    borderColor: `${
                      formik.touched.emailOrNumberFindAccount &&
                      formik.errors.emailOrNumberFindAccount
                        ? 'red'
                        : ''
                    }`,
                  }}
                />

                {formik.touched.emailOrNumberFindAccount &&
                  formik.errors.emailOrNumberFindAccount && (
                    <div className="error error-l">
                      {formik.errors.emailOrNumberFindAccount}
                    </div>
                  )}
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

export default FindAccount;
