import React, { useState } from 'react';

function BasvuruGoruntule() {


    const isim = sessionStorage.getItem('ad');
    const soyisim = sessionStorage.getItem('soyad');
    const milliyet = sessionStorage.getItem('milliyet');
    const milliyet2 = sessionStorage.getItem('milliyet2');
    const kimlik = sessionStorage.getItem('Kimlikno');
    const dg = sessionStorage.getItem('Dgmtarihi');
    const englacik = sessionStorage.getItem('englAciklama');
    const email = sessionStorage.getItem('Email');
    const tel = sessionStorage.getItem('telefon');
    const sehir = sessionStorage.getItem('sehir');
    const ilce = sessionStorage.getItem('ilce');
    const mah = sessionStorage.getItem('mahalle');
    const sok = sessionStorage.getItem('sokak');
    const ulke = sessionStorage.getItem('ulke');
    const posta = sessionStorage.getItem('posta');
    const uni = sessionStorage.getItem('universite');
    const bolum = sessionStorage.getItem('bolum');
    const meztarih = sessionStorage.getItem('mezunTarih');
    const gpa = sessionStorage.getItem('gpa');
    const cinsiyet = sessionStorage.getItem('cinsiyet');
    const egitim = sessionStorage.getItem('egitim');
    const engel = sessionStorage.getItem('engel');

    const cv = sessionStorage.getItem('cv');
    const nytmek = sessionStorage.getItem('nytMek');
    const pasapor = sessionStorage.getItem('pasaport');
    const ika = sessionStorage.getItem('ikamet');
    const dip = sessionStorage.getItem('diploma');
    const ing = sessionStorage.getItem('ing');

   



    const engellilik = () => {
        var engel = document.getElementById("bsvEngel");
        var engelDiv = document.getElementById("engelAciklamaDiv");
        if (engel != null && engel.value == 1) {
            engelDiv.hidden = '';
        }
        else {
            if (engelDiv != null) {
                engelDiv.hidden = 'hidden';

            }
        }
    }

    const sayfa1 = () => {
        document.getElementById("divKisiselBiligler").style.display = "block";
        document.getElementById("divIletisim").style.display = "none";
        document.getElementById("divEgitim").style.display = "none";
        document.getElementById("divDokuman").style.display = "none";

    }
    const sayfa2 = () => {
        document.getElementById("divKisiselBiligler").style.display = "none";
        document.getElementById("divIletisim").style.display = "block";
        document.getElementById("divEgitim").style.display = "none";
        document.getElementById("divDokuman").style.display = "none";

    }
    const sayfa3 = () => {
        document.getElementById("divKisiselBiligler").style.display = "none";
        document.getElementById("divIletisim").style.display = "none";
        document.getElementById("divEgitim").style.display = "block";
        document.getElementById("divDokuman").style.display = "none";

    }
    const sayfa4 = () => {
        document.getElementById("divKisiselBiligler").style.display = "none";
        document.getElementById("divIletisim").style.display = "none";
        document.getElementById("divEgitim").style.display = "none";
        document.getElementById("divDokuman").style.display = "block";

    }

    return (
        <>
            <div className="col-9 mt-3" style={{ minWidth: "768px" }}>
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 style={{ color: "#0a50ad" }}>Başvuru Bilgileri</h1>
                        <p>Başvuru bilgilerinizi aşağıdaki formdan görüntüleyebilirsiniz.</p>

                    </div>

                </div>
                <form className="px-2 py-2" style={{ border: "solid", borderColor: "#0a50ad" }}>

                    {/* KisiselBilgiler    */}
                    <div id="divKisiselBiligler" style={{ display: "block" }}>
                        <h5 className="text-center">Kişisel Bilgiler</h5>

                        <div className="row mb-3 mt-3">
                            <label for="bsvAd" className="col-sm-2 col-form-label">Ad:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="bsvAd" value={isim} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="bsvSoyad" className="col-sm-2 col-form-label">Soyad:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="bsvSoyad" value={soyisim}  />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="bsvMilliyet" className="col-sm-2 col-form-label">Milliyet:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="bsvMilliyet" value={milliyet} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="bsvMilliyet2" className="col-sm-2 col-form-label">Milliyet 2:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="bsvMilliyet2" value={milliyet2} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="bsvKimlikNo" className="col-sm-2 col-form-label">Kimlik No:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="bsvKimlikNo" value={kimlik}  />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label for="bsvCinsiyet" className="col-sm-2 col-form-label">Kimlikteki Cinsiyet:</label>
                            <div className="col-sm-10">

                                <select className="mt-2" id="bsvCinsiyet" >
                                    {(() => {
                                        if (cinsiyet == 1) {
                                            return (
                                                <option value="1" selected id="kadin">Kadın</option>
                                            )
                                        } else if (cinsiyet==2) {
                                            return (
                                                <option value="2" selected id='erkek'>Erkek</option>

                                            )
                                        }else{
                                            return (
                                                <option value="" selected >Cinsiyet</option>

                                            )
                                        }
                                    })()}
                                </select>

                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="bsvDogumTarih" className="col-sm-2 col-form-label">Doğum tarihi:</label>
                            <div className="col-sm-10">
                                <input type="date" className="form-control" id="bsvDogumTarih" value={dg}  />
                            </div>

                        </div>
                        <div className="row mb-3">
                            <label for="bsvEngel" className="col-sm-2 col-form-label">Engellilik:</label>
                            <div className="col-sm-10">
                                <select className="mt-2" id="bsvEngel" onClick={() => engellilik()} >
                                    {(() => {
                                        if (engel == 0) {
                                            return (
                                                <option value="0" selected >Hayır</option>
                                            )
                                        } else if(engel==1) {
                                            return (
                                                <option value="1" selected >Evet</option>

                                            )
                                        }else{
                                            return (
                                                <option value="" selected >Engel Durumu</option>

                                            )
                                        }
                                    })()}
                                </select>

                            </div>
                        </div>

                      
                                    <div className="row mb-3 " id="engelAciklamaDiv" hidden>
                                        <label for="bsvAciklama" className="col-sm-2 col-form-label">Açıklama:</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" id="bsvAciklama" value={englacik}  />
                                        </div>
                                    </div>
                        
                             
                                    <div className="row mb-3 " id="engelAciklamaDiv">
                                        <label for="bsvAciklama" className="col-sm-2 col-form-label">Açıklama:</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" id="bsvAciklama" value={englacik}  />
                                        </div>
                                    </div>


                    </div>
                    {/* KisiselBilgiler Son  */}


                    {/* Iletisim */}

                    <div id="divIletisim" style={{ display: "none" }}>
                        <h5 className="text-center">İletişim Bilgileri</h5>
                        <div className="row mb-3 mt-3">
                            <label for="bsvMail" className="col-sm-2 col-form-label">Mail:</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="bsvMail" value={email}  />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="bsvTelefon" className="col-sm-2 col-form-label">Telefon:</label>
                            <div className="col-sm-10">
                                <input type="tel" className="form-control" id="bsvTelefon" value={tel}  />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="bsvSehir" className="col-sm-2 col-form-label">Şehir:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="bsvSehir" value={sehir}  />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="bsvIlce" className="col-sm-2 col-form-label">İlçe:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="bsvIlce" value={ilce}  />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="bsvMahalle" className="col-sm-2 col-form-label">Mahalle:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="bsvMahalle" value={mah}  />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="bsvSokak" className="col-sm-2 col-form-label">Sokak:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="bsvSokak" value={sok}  />
                            </div>

                        </div>

                        <div className="row mb-3">
                            <label for="bsvUlke" className="col-sm-2 col-form-label">Ülke:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="bsvUlke" value={ulke}  />
                            </div>

                        </div>
                        <div className="row mb-3">
                            <label for="bsvPostaKod" className="col-sm-2 col-form-label">Posta Kodu:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="bsvPostaKod" value={posta}  />
                            </div>

                        </div>
                    </div>

                    {/* Iletisim Son */}

                    {/* Egitim */}
                    <div id="divEgitim" style={{ display: "none" }}>
                        <h5 className="text-center">Eğitim Bilgileri</h5>
                        <div className="row mb-3 mt-3">
                            <label for="bsvUni" className="col-sm-2 col-form-label">Üniversite Adı:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="bsvUni" value={uni}  />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="bsvBolum" className="col-sm-2 col-form-label">Bölüm:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="bsvBolum" value={bolum}  />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="bsvEgitimDurum" className="col-sm-2 col-form-label">Eğitim Durumu:</label>
                            <div className="col-sm-10">
                                <select className="mt-2" id="bsvEgitimDurum" >
                                    {(() => {
                                        if (egitim == 0) {
                                            return (
                                                <option value="0" selected>Mezun</option>

                                            )

                                        } else if (egitim == "1") {
                                            <option value="1" selected>Öğrenci</option>
                                        }
                                        else {
                                            return (
                                                <option value="" selected>Egitim Durumu</option>

                                            )
                                        }
                                    })()}

                                </select>
                                <p></p>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="bsvMezuniyetTarih" className="col-sm-2 col-form-label">Mezuniyet tarihi:</label>
                            <div className="col-sm-10">
                                <input type="date" className="form-control" id="bsvMezuniyetTarih" value={meztarih}  />
                            </div>

                        </div>
                        <div className="row mb-3">
                            <label for="bsvGPA" className="col-sm-2 col-form-label">GPA:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="bsvGPA" value={gpa}  />
                            </div>
                        </div>
                    </div>


                    {/* Egitim Son */}


                    {/* Dokuman */}

                    <div id="divDokuman" style={{ display: "none" }}>

                        <h5 className="text-center">Doküman</h5>

                        <div className="row g-3">
                            <div className="mb-3">
                                <label for="formFileMultiple" className="form-label">CV</label>
                                <input className="form-control" type="text" id="formFileMultiple" value={cv}  />
                            </div>
                            <div className="mb-3">
                                <label for="formFileMultiple" className="form-label">Niyet Mektubu</label>
                                <input className="form-control" type="text" id="formFileMultiple" value={nytmek}  />
                            </div>
                            <div className="mb-3">
                                <label for="formFileMultiple" className="form-label">Pasaport</label>
                                <input className="form-control" type="text" id="formFileMultiple" value={pasapor}  />
                            </div>
                            <div className="mb-3">
                                <label for="formFileMultiple" className="form-label">İkametgah Belgesi</label>
                                <input className="form-control" type="text" id="formFileMultiple" value={ika}  />
                            </div>
                            <div className="mb-3">
                                <label for="formFileMultiple" className="form-label">Diploma</label>
                                <input className="form-control" type="text" id="formFileMultiple" value={dip}  />
                            </div>
                            <div className="mb-3">
                                <label for="formFileMultiple" className="form-label">İngilizce Yeterlilik Belgesi</label>
                                <input className="form-control" type="text" id="formFileMultiple" value={ing}  />
                            </div>
                        </div>
                    </div>


                    {/* Dokuman Son*/}

                   
                </form >

                <div className="row d-flex align-content-center justify-content-center mt-4">
                    <div className="col-12 d-flex align-content-center justify-content-center">


                        <nav aria-label="Page navigation example">
                            <ul class="pagination">

                                <li class="page-item" > <a class="page-link" onClick={sayfa1} style={{ color: "#0a50ad" }}>1</a></li>
                                <li class="page-item"><a class="page-link" onClick={sayfa2} style={{ color: "#0a50ad" }}>2</a></li>
                                <li class="page-item"><a class="page-link" onClick={sayfa3} style={{ color: "#0a50ad" }}>3</a></li>
                                <li class="page-item"><a class="page-link" onClick={sayfa4} style={{ color: "#0a50ad" }}>4</a></li>


                            </ul>
                        </nav>
                    </div>
                </div>
            </div >
        </>
    );
}
export default BasvuruGoruntule;