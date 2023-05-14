
import ReactDOM from 'react-dom';
import React, { useState } from 'react';

function KayitBilgileri() {

    const [email, setEmail] = useState('');
    const [newEmail, setNewEmail] = useState('');

    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');


    const handleSubmit = () => {

        const kullaniciAdi = sessionStorage.getItem('kayitemail');
        const sifre = sessionStorage.getItem('password');

        if (email == kullaniciAdi && password == sifre) {

            document.getElementById("eskiDiv").style.display = "none";
           
            document.getElementById("yeniDiv").style.display = "block";     

        }
        else {
            setError('Hatali kullanici adi vaye sifre');
        }
    }

    const changeUser =()=>{
        sessionStorage.setItem('kayitemail', newEmail);               
        sessionStorage.setItem('password', newPassword);     
        setSuccess('Kullanıcı bilgileriniz başarıyla değiştirildi.');
        document.getElementById("successP").style.display="block";
    }

    return (
        <>
            <div className="row d-flex align-item-center text-center justify-content-center">
                <div className="col-12 d-flex align-item-center text-center justify-content-center">
                    <div className='row d-flex align-item-center text-center justify-content-center'>
                        <div className='col-12 d-flex align-item-center text-center justify-content-center'>
                            <form className="text-center" onSubmit={handleSubmit}>
                                <div className="row my-3">
                                    <div className="col-12">

                                        <h1 style={{ color: "#0a50ad" }}>  Kullanıcı Bilgileri</h1>
                                        <p>Kullanıcı bilgilerini aşağıdaki formdan düzenleyebilirsiniz.</p>
                                    </div>
                                </div>
                                <div id="eskiDiv">
                                    <div className="form-floating">
                                        <input type="mail"
                                            className="form-control mb-2"
                                            id="eskiMail"
                                            value={email}
                                            placeholder="kullanıcıAdi"
                                            onChange={(e) => setEmail(e.target.value)}
                                            required />
                                        <label for="floatingInput">Eski kullanıcı adı</label>
                                    </div>
                                    <div className="form-floating">
                                        <input type="password"
                                            className="form-control mb-2"
                                            id="eskiSifre"
                                            value={password}
                                            placeholder="Password"
                                            onChange={(e) => setPassword(e.target.value)}
                                            required />
                                        <label for="floatingPassword">Eski şifre</label>
                                    </div>
                                    <div className="col-12 d-flex align-item-center text-center justify-content-center'">
                                        {error && <p style={{ color: 'red' }}>{error}</p>}
                                    </div>
                                    <button className="w-100 btn btn-lg btn-primary" style={{ backgroundColor: "#0a50ad", color: "white" }} type="" id="btnDuzenle" onClick={handleSubmit}>Düzenle</button>
                                </div>

                                <div id="yeniDiv" style={{display:"none"}}>
                                    <div className="form-floating" id='yeniMail' >
                                        <input type="mail"
                                            className="form-control mb-2"
                                            id="yeniMail"
                                            value={newEmail}
                                            placeholder="kullanıcıAdi"
                                            onChange={(e) => setNewEmail(e.target.value)}
                                            required />
                                        <label for="floatingInput">Yeni kullanıcı adı</label>
                                    </div>
                                    <div className="form-floating" id='yeniSifre' >
                                        <input type="password"
                                            className="form-control mb-2"
                                            id="yeniSifre"
                                            value={newPassword}
                                            placeholder="Password"
                                            onChange={(e) => setNewPassword(e.target.value)}
                                            required />
                                        <label for="floatingPassword">Yenişifre</label>
                                    </div>
                                    <div className="row d-flex align-item-center  justify-content-center mt-3'">
                                        
                                        <button className="w-100 btn btn-lg btn-primary" style={{ backgroundColor: "#0a50ad", color: "white" }} type="button" id="btnDuzenle" onClick={()=>changeUser()}>Kaydet</button>
                                    </div>

                                </div>

                                <div className="col-12 d-flex align-item-center text-center justify-content-center'" id="successP" style={{display:"none"}}>
                                        {success && <p style={{ color: 'green' }}>{success}</p>}
                                        </div>
                            </form>

                           
                        </div>
                    </div>
                </div>


            </div>
        

        </>
    );
}

export default KayitBilgileri;