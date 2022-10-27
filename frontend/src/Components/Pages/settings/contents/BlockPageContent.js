import React, { Component } from 'react';

// ? CLASSIC 2 SCSS
import Scss from '../../../assets/scss/settings-scss/contents-scss/classic2.module.scss';

export class BlockPageContent extends Component {
  render() {
    return (
      <>
        {/* TITLE */}
        <h3 className="title">Profil ve Etiketleme</h3>

        {/* CONTENT */}
        <div id={Scss.ProfileAndTagPageContent}>
          {/* BOX */}
          <div className={Scss.box}>
            <div className={Scss.boxTitle}>Engellemeleri Yönet</div>

            {/* SETTING MENU */}
            <ul className={Scss.settingMenu}>
              <li>
                <div>
                  <p>Kısıtlılar Listesi</p>
                  <span>
                    Bir arkadaşını Kısıtlılar Listene eklediğinde, arkadaşın
                    sadece Arkadaşlar ile paylaştığın gönderilerini göremez.
                    Herkese Açık olarak veya ortak bir arkadaşınızın zaman
                    tünelinde paylaştığın şeyleri ve kendisinin etiketlendiği
                    gönderileri görmeye devam edebilir. Arkadaşlarını Kısıtlılar
                    Listene eklediğinde, Facebook bunu onlara bildirmez.
                  </span>
                </div>

                <button className="secondary-btn">Edit</button>
              </li>

              <li>
                <div>
                  <p>Kullanıcılar Engelle</p>
                  <span>
                    Birini engellediğinde, bu kişi senin zaman tünelinde
                    paylaştığın şeyleri göremez, seni etiketleyemez, seni
                    etkinliklere veya gruplara davet edemez, seninle konuşma
                    başlatamaz ve seni arkadaş olarak ekleyemez. Not: Buna
                    ikinizin de katıldığı uygulamalar, oyunlar veya gruplar
                    dahil değildir.
                  </span>
                </div>
                <button className="secondary-btn">Edit</button>
              </li>

              <li>
                <div>
                  <p>Mesajları Engelle</p>
                  <span>
                    Facebook'ta birinin profilini engellersen, engellediğin kişi
                    seninle Messenger'da da iletişime geçemez. Bir kişinin
                    Facebook profilini ve oluşturabileceği diğer profilleri
                    engellemediğin sürece kendisi senin zaman tünelinde bir
                    şeyler paylaşabilir, seni etiketleyebilir ve gönderilerine
                    veya yorumlarına yorum yapabilir.
                  </span>
                </div>
                <button className="secondary-btn">Edit</button>
              </li>

              <li>
                <div>
                  <p>Uygulama Davetlerini engelle</p>
                  <span>
                    Birisinin profilinden gelen uygulama davetlerini
                    engellediğinde, bu kişinin profilinin gelecekte göndereceği
                    tüm uygulama isteklerini otomatik olarak yok sayarsın.
                    Belirli bir arkadaşının profilinden gelen davetleri
                    engellemek için, en son isteğin altındaki "Gelecekte Bu
                    Profilden Gelen Tüm Davetleri Yok Say" bağlantısına tıkla.
                  </span>
                </div>
                <button className="secondary-btn">Edit</button>
              </li>

              <li>
                <div>
                  <p>Etkinlik davetlerini engelle</p>
                  <span>
                    Birisinin profilinden gelen etkinlik davetlerini
                    engellediğinde, bu profilin gelecekte göndereceği tüm
                    etkinlik isteklerini otomatik olarak yok sayarsın.
                  </span>
                </div>
                <button className="secondary-btn">Edit</button>
              </li>

              <li>
                <div>
                  <p>Uygulamaları Engelle</p>
                  <span>
                    Uygulamaları engelle Bir uygulamayı engellediğinde, uygulama
                    artık Facebook üzerinden seninle iletişim kuramaz ve senin
                    hakkındaki herkese açık olmayan bilgileri alamaz
                  </span>
                </div>
                <button className="secondary-btn">Edit</button>
              </li>

              <li>
                <div>
                  <p>Sayfaları Engelle</p>
                  <span>
                    Bir Sayfayı engellediğinde, bu Sayfa artık gönderilerinle
                    etkileşimde bulunamaz, yorumlarını beğenemez ve
                    yanıtlayamaz. Sen de Sayfanın Zaman Tünelinde paylaşımda
                    bulunamaz ve Sayfaya mesaj gönderemezsin. Sayfayı
                    beğendiysen, engellediğinde Sayfayı beğenmekten vazgeçer ve
                    takip etmeyi bırakırsın.
                  </span>
                </div>
                <button className="secondary-btn">Edit</button>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default BlockPageContent;
