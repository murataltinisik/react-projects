import React from 'react';

// ? FORMIK
import { useFormik } from 'formik';

// ? YUP
import * as Yup from 'yup';

// ? ASSETS -> CSS
import '../../assets/css/Link/link.scss';
import '../../assets/css/List/list.scss';
import '../../assets/css/Input/input.scss';
import '../../assets/css/Alert/alert.scss';
import '../../assets/css/Display/flex.scss';
import '../../assets/css/Button/button.scss';
import '../../assets/css/WidthHeight/width-height.scss';
import '../../assets/css/MarginPadding/margin-padding.scss';

// ? MODULE SCSS
import Scss from '../../assets/scss/auth-scss/style.module.scss';
import '../../assets/scss/auth-scss/responsive/responsive.scss';

// * REACT ROUTER 5.2.0
import { NavLink } from 'react-router-dom';

// * REDUX COMPONENTS
import { connect } from 'react-redux';
import { registerUser } from '../../../actions/User/auth';

function Register(props) {
  // * DAYS
  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  // * MONTHS
  const months = [
    'Oca',
    'Şub',
    'Mar',
    'Nis',
    'May',
    'Haz',
    'Tem',
    'Ağu',
    'Eyl',
    'Eki',
    'Kas',
    'Ara',
  ];

  // * YEARS
  const years = [];

  // YEARS
  for (let i = 0; i <= 100; i++) {
    let year = new Date().getFullYear();
    years.push(year - i);
  }

  // * VALIDATION SHEMA
  const validationSchema = Yup.object({
    name: Yup.string()
      .max(15, 'Adınız en fazla 15 karakter olmalıdır!!!')
      .required('Adınız...'),
    surname: Yup.string()
      .max(15, 'Soyadınız en fazla 15 karakter olmalıdır!!!')
      .required('Soyadınız...'),
    emailOrNumber: Yup.string()
      .max(70, 'Email Adresiniz En fazla 70 karakterli olmalıdır!!!')
      .required('E-Mail Adresiniz...'),
    password: Yup.string()
      .min(8, 'Şifreniz En az 8 karakterli olmalıdır!!!')
      .max(16, 'Şifreniz En Fazla 16 Karakterli Olmalıdır!!!')
      .required('Şifreniz...'),
    year: Yup.number()
      .max(2008, 'En az 16 yaşında olmalısınız...')
      .required('Doğum Yılınız...'),
    gender: Yup.string().required('Cinsiyetiniz...'),
  });

  // TODO: FORMIK
  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      emailOrNumber: '',
      password: '',
      day: 0,
      month: 0,
      year: 2022,
      gender: null,
    },
    validationSchema,
    onSubmit: values => {
      props.registerUser(values);
    },
  });

  return (
    <>
      <div id={Scss.MainContainer} className="height-auto main-responsive">
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

            <form onSubmit={formik.handleSubmit} className="p-1 pt-0 px-2">
              {/* ALERT */}
              {props.auth.user.error === "Already Reported" && (
                <div className="alert alert-danger">
                  E-Posta Adresiniz Geçersiz! Lütfen Farklı bir
                  e-posta adresini kullanınız...
                </div>
              )}

              {props.auth.user.createdAt && props.auth.user.createdAt.length > 0 && (
                  <div className="alert alert-success">
                    Kayıt Başarılı. Yönlendiriliyorsunuz...
                  </div>
              )}

              {/* NAME AND SURNAME */}
              <div className="input-group d-flex justify-content-center">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Adın"
                    className="p-1 register-input"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    style={{
                      borderColor: `${
                        formik.touched.name && formik.errors.name ? 'red' : ''
                      }`,
                    }}
                  />

                  {formik.touched.name && formik.errors.name && (
                    <div className="error error-l">{formik.errors.name}</div>
                  )}
                </div>

                <div className="ml-1">
                  <input
                    type="text"
                    name="surname"
                    placeholder="Soyadın"
                    className="p-1 register-input"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.surname}
                    style={{
                      borderColor: `${
                        formik.touched.surname && formik.errors.surname
                          ? 'red'
                          : ''
                      }`,
                    }}
                  />

                  {formik.touched.surname && formik.errors.surname && (
                    <div className="error error-r">{formik.errors.surname}</div>
                  )}
                </div>
              </div>

              {/* EMAIL OR NUMBER PHONE */}
              <div className="input-group">
                <input
                  type="text"
                  name="emailOrNumber"
                  placeholder="Cep Telefon Numarası veya e-posta"
                  className="p-1 register-input"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.emailOrNumber}
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

              {/* NEW PASSWORD */}
              <div className="input-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Yeni Şifre"
                  className="p-1 register-input"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
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

              {/* SELECTS */}
              <div className="input-group">
                <div className="input-group-title">Doğum Tarihi</div>

                <div className="d-flex justify-content-between">
                  <select
                    name="day"
                    className="p-05 register-input"
                    onChange={formik.handleChange}
                    value={formik.values.day}
                  >
                    {days.map((day, i) => (
                      <option
                        value={day.toString().length === 1 ? '0' + day : day}
                      >
                        {day}
                      </option>
                    ))}
                  </select>

                  <select
                    name="month"
                    className="p-05 register-input"
                    onChange={formik.handleChange}
                    value={formik.values.month}
                  >
                    {months.map((month, i) => (
                      <option
                        value={
                          i.toString().length === 1 ? '0' + (i + 1) : i + 1
                        }
                      >
                        {month}
                      </option>
                    ))}
                  </select>

                  <select
                    name="year"
                    className="p-05 register-input"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.year}
                    style={{
                      borderColor: `${
                        formik.touched.year && formik.errors.year ? 'red' : ''
                      }`,
                    }}
                  >
                    {years.map(year => (
                      <option value={year}>{year}</option>
                    ))}
                  </select>

                  {formik.touched.year && formik.errors.year && (
                    <div className="error error-l">{formik.errors.year}</div>
                  )}
                </div>
              </div>

              {/* GENDER */}
              <div className="input-group">
                <div className="input-group-title">Cinsiyet</div>

                <div className="d-flex justify-content-center align-items-center">
                  <label className="radio d-flex justify-content-between">
                    <span>Erkek</span>
                    <input
                      type="radio"
                      name="gender"
                      onChange={formik.handleChange}
                      value="0"
                    />
                  </label>

                  <label className="radio mx-1 d-flex justify-content-between">
                    <span>Kadın</span>
                    <input
                      type="radio"
                      name="gender"
                      onChange={formik.handleChange}
                      value="1"
                    />
                  </label>

                  <label className="radio d-flex justify-content-between">
                    <span>Özel</span>
                    <input
                      type="radio"
                      name="gender"
                      value="2"
                      onChange={formik.handleChange}
                    />
                  </label>

                  {formik.touched.gender && formik.errors.gender && (
                    <div className="error error-l">{formik.errors.gender}</div>
                  )}
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
                <button type="submit" className="success-btn p-1 mt-1 width-50">
                  Kaydol
                </button>
              </div>

              <NavLink to="/login" className="primary-link">
                Hesabınız Zaten var mı?
              </NavLink>
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

const mapStateToProps = ({ auth }) => {
  return { auth };
};

const mapDispatchToProps = {
  registerUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
