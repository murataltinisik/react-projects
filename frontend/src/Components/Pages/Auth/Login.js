import React, {useEffect, useState} from 'react';

// ? FORMIK
import { useFormik } from 'formik';

// ? YUP
import * as Yup from 'yup';

// ? ASSETS -> CSS
import '../../assets/css/Link/link.scss';
import '../../assets/css/List/list.scss';
import '../../assets/css/Alert/alert.scss';
import '../../assets/css/Input/input.scss';
import '../../assets/css/Button/button.scss';
import '../../assets/css/MarginPadding/margin-padding.scss';

// ? MODULE SCSS
import Scss from '../../assets/scss/auth-scss/style.module.scss';

// * REACT ROUTER 5.2.0
import { NavLink } from 'react-router-dom';

// * REDUX COMPONENTS
import { connect } from 'react-redux';
import { loginUser } from '../../../actions/User/auth';

function Login(props) {
  const [isSubmit, setIsSubmit] = useState(false);

  const validationSchema = Yup.object({
    emailOrNumber: Yup.string()
      .max(70, 'Email Adresiniz En fazla 70 karakterli olmalıdır!!!')
      .required('E-Mail Adresiniz...'),
    password: Yup.string()
      .min(8, 'Şifreniz En az 8 karakterli olmalıdır!!!')
      .max(16, 'Şifreniz En Fazla 16 Karakterli Olmalıdır!!!')
      .required('Şifreniz...'),
  });

  const formik = useFormik({
    initialValues: {
      emailOrNumber: '',
      password: '',
    },
    validationSchema,
    onSubmit: values => {
      props.loginUser(values);
      setIsSubmit(true);
    },
  });

  return (
    <>
      <div id={Scss.MainContainer} className="px-5 login-main-container">
        {/* LEFT BODY */}
        <div className={`${Scss.leftBody} left-body-responsive`}>
          <h1>MuratBook</h1>
          <p className={Scss.content}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>

        {/* RIGHT BODY */}
        <div className={`${Scss.rightBody} right-body-responsive`}>
          {/* FORM */}
          <div className={Scss.container}>
            <form onSubmit={formik.handleSubmit}>
              {localStorage.getItem("redirect_type") === "CHANGE_PASSWORD" &&
                <div className="alert alert-info">
                  Şifreniz Değiştirildiği için, tekrar giriş yapmanız gerekiyor...
                </div>
              }

              {isSubmit && (props.auth.user === "NOT_FOUND" ? (
                    <div className="alert alert-danger">Lütfen E-Posta veya Şifrenizi Kontrol ediniz!!!</div>
                ):(
                    props.auth.user === undefined ? (
                        <div className="alert alert-danger">
                          Şifreniz Hatalı!!!
                        </div>
                    ):(
                        <div className="alert alert-success">
                          Giriş Başarılı...
                        </div>
                    )
                )
              )}


              <div className="input-group">
                <input
                  type="text"
                  name="emailOrNumber"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.emailOrNumber}
                  placeholder="E-Posta veya Telefon Numarası..."
                  style={{
                    borderColor: `${
                      formik.touched.emailOrNumber &&
                      formik.errors.emailOrNumber
                        ? 'red'
                        : ''
                    }`,
                  }}
                />

                {formik.touched.emailOrNumber &&
                  formik.errors.emailOrNumber && (
                    <div className="error error-l">
                      {formik.errors.emailOrNumber}
                    </div>
                  )}
              </div>

              <div className="input-group">
                <input
                  type="text"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  placeholder="Şifreniz..."
                  style={{
                    borderColor: `${
                      formik.touched.password && formik.errors.password
                        ? 'red'
                        : ''
                    }`,
                  }}
                />

                {formik.touched.password && formik.errors.password && (
                  <div className="error error-l">{formik.errors.password}</div>
                )}
              </div>

              <div className="input-group">
                <button type="submit" className="primary-btn">
                  Giriş Yap
                </button>
                <div className="br"></div>
                <NavLink to="/find-account" className="primary-link">
                  Şifreni mi Unuttun?
                </NavLink>
              </div>

              <div className="input-group">
                <div className="hr"></div>
                <NavLink
                  to="/register"
                  className={`success-link ${Scss.btnWidth}`}
                >
                  Yeni Hesap Oluştur
                </NavLink>
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

const mapStateToProps = ({ auth }) => {
  return { auth };
};

const mapDispatchToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
