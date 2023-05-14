import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    const [girisEmail, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();






    const handleSubmit = (e) => {
        e.preventDefault();

        var isLogin = false;
        localStorage.setItem('isLogin', isLogin);
        
        const kullaniciAdi = sessionStorage.getItem('kayitemail');
        const sifre = sessionStorage.getItem('password');


        if (girisEmail == kullaniciAdi && password == sifre) {
            isLogin = true;
            localStorage.setItem('isLogin', isLogin);
            if (isLogin == true) {

                setSuccess('Giriş işlemi başarılı.Giriş yapmak için yönlendiriliyorsunuz...');

                setTimeout(() => {
                    navigate('/portal');

                }, 1500);

            } else {
                alert("Giriş yapınız.")
                navigate('/');
            }

        }
        else {
            setError('Hatali kullanici adi vaye sifre');
        }
    }



    return (
        <>
            <div className='row d-flex align-content-center justify-content-center mt-5' >
                <div className='row d-flex align-item-center  justify-content-center mt-5'>


                    <div className="col-6 d-flex align-item-center text-center justify-content-center">
                        <form className="text-center" onSubmit={handleSubmit}>

                            <h1 className="h3 mb-3 fw-normal" style={{ color: "#0a50ad" }}> <i className="fa-solid fa-right-to-bracket " style={{ color: "#0a50ad" }}></i> Giriş Yap</h1>

                            <div className="form-floating">
                                <input type="email"
                                    className="form-control mb-2"
                                    id="girisKullaniciAdi"
                                    placeholder="mail"
                                    value={girisEmail}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required />
                                <label for="floatingInput">Mail adresi</label>
                            </div>
                            <div className="form-floating">
                                <input type="password"
                                    className="form-control mb-2"
                                    id="girisSifre"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required />
                                <label for="floatingPassword">Şifre</label>
                            </div>



                            <button className="w-100 btn btn-lg btn-primary" style={{ backgroundColor: "#0a50ad", color: "white" }} type="submit" id="btnGirisYap"   >Giriş Yap</button>
                        </form>
                    </div>

                </div>
                <div className="row d-flex align-item-center justify-content-center mt-3">
                    <div className="col-6 d-flex align-item-center   justify-content-center">
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        {success && <p style={{ color: 'green' }}>{success}</p>}

                    </div>
                </div>
                <div className='row d-flex align-item-center  justify-content-center mt-3'>
                    <div className='col-6 d-flex align-item-center text-center justify-content-center'>

                        <p>Hesabınız yok mu? <Link to="/register" style={{ color: "#0a50ad" }}>Kayıt ol!</Link> </p>
                    </div>

                </div>


            </div>

        </>

    );

} export default Login;