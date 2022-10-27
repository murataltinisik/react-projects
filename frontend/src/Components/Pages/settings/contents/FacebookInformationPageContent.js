import React, { Component } from 'react';

// ? CLASSIC SCSS
import Scss from '../../../assets/scss/settings-scss/contents-scss/classic.module.scss';

export class FacebookInformationPageContent extends Component {
  render() {
    return (
      <>
        {/* TITLE */}
        <h3 className="title">Facebook Bilgilerin</h3>

        {/* CONTENT */}
        <div id={Scss.FacebookInformationPageContent}>
          <ul id={Scss.informations}>
            <li>
              <a href="#">
                <p className={Scss.title}>Bilgilerine Eriş</p>
                <p className={Scss.info}>
                  <span>Bilgilerini kategorilere göre görüntüle.</span>
                </p>
                <button className={Scss.action}>
                  <span>Gör</span>
                </button>
              </a>
            </li>

            <li>
              <a href="#">
                <p className={Scss.title}>Bilgilerinin bir kopyasını aktar</p>
                <p className={Scss.info}>
                  <span>
                    Fotoğraflarını, videolarını, gönderilerini veya diğer
                    bilgilerini başka bir hizmete kopyala.
                  </span>
                </p>
                <button className={Scss.action}>
                  <span>Gör</span>
                </button>
              </a>
            </li>

            <li>
              <a href="#">
                <p className={Scss.title}>Bilgilerini indir</p>
                <p className={Scss.info}>
                  <span>
                    Bilgilerinin bir kopyasını saklamak veya başka bir hizmete
                    aktarmak için indir.
                  </span>
                </p>
                <button className={Scss.action}>
                  <span>Gör</span>
                </button>
              </a>
            </li>

            <li>
              <a href="#">
                <p className={Scss.title}>Hareketler dökümü</p>
                <p className={Scss.info}>
                  <span>Bilgilerini ve bazı ayaları görüntüle ve yönet.</span>
                </p>
                <button className={Scss.action}>
                  <span>Gör</span>
                </button>
              </a>
            </li>

            <li>
              <a href="#">
                <p className={Scss.title}>Facebook'un Dışındaki harketler</p>
                <p className={Scss.info}>
                  <span>
                    Facebook'un dışında ziyaret ettiğin işletme ve
                    kuruluşlardaki hareketleri gör veya sil.
                  </span>
                </p>
                <button className={Scss.action}>
                  <span>Gör</span>
                </button>
              </a>
            </li>

            <li>
              <a href="#">
                <p className={Scss.title}>Bilgilerini Yönetme</p>
                <p className={Scss.info}>
                  <span>
                    Bilgilerini nasıl yöneteceğinle ilgili daha fazla bilgi al.
                  </span>
                </p>
                <button className={Scss.action}>
                  <span>Gör</span>
                </button>
              </a>
            </li>

            <li>
              <a href="#">
                <p className={Scss.title}>Dondurma ve Silme</p>
                <p className={Scss.info}>
                  <span>
                    Hesabının geçici olarak dondur veya kalıcı olarak sil.
                  </span>
                </p>
                <button className={Scss.action}>
                  <span>Gör</span>
                </button>
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default FacebookInformationPageContent;
