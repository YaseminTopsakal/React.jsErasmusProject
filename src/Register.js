import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'



function Register() {

    const [kayitemail, setKayitEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passRepeat, setPassRepeat] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        if (password != passRepeat) {
            setError("Şifreler örtüşmüyor!"); 
            
              return;
        }
        sessionStorage.setItem('kayitemail', kayitemail);
        sessionStorage.setItem('password', password);

        setKayitEmail('');
        setPassword('');
        setPassRepeat('');
        setSuccess('Kayit oluşturuldu.Giriş yapmak için yönlendiriliyorsunuz...');
        setError('');

        setTimeout(() => {
            navigate('/');

              }, 1500);
    }




    return (
        <>

            <div className="row d-flex align-content-center justify-content-center mt-5">
                <div className="row d-flex align-content-center justify-content-center mt-5">


                    <div className=" col-6 d-flex align-item-center text-center justify-content-center ">


                        <form className="text-center  need-validations" onSubmit={handleSubmit} >

                            <h1 className="h3 mb-3 fw-normal " style={{ color: "#0a50ad" }}> <i className="fa-regular fa-pen-to-square  " style={{ color: "#0a50ad" }}></i>Kayıt Ol</h1>

                            <div className="form-floating mb-2">
                                <input type="email"
                                    className="form-control"
                                    id="kayitMail"
                                    placeholder="Mail"
                                    value={kayitemail}
                                    onChange={(e) => setKayitEmail(e.target.value)}
                                    required />
                                <label for="floatingInput">Mail adresi</label>
                            </div>
                            <div className="form-floating  mb-2">
                                <input type="password"
                                    className="form-control"
                                    id="kayitPassword1"
                                    placeholder="Password"
                                    minLength="6"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required />
                                <label for="floatingPassword">Şifre</label>
                            </div>
                            <div className="form-floating  mb-2">
                                <input type="password"
                                    className="form-control"
                                    id="kayitPassword2"
                                    placeholder="Password"
                                    value={passRepeat}
                                    minLength="6"
                                    onChange={(e) => setPassRepeat(e.target.value)}
                                    required />
                                <label for="floatingPassword">Şifrenizi tekrar edin</label>
                            </div>


                            <button className="w-100 btn btn-lg btn-primary " style={{ backgroundColor: "#0a50ad", color: "white" }} type="submit" id="btnKayitOl"  >Kayıt Ol</button>
                        </form>
                    </div>
                </div>
                <div className="row d-flex align-item-center  justify-content-center mt-3">
                    <div className="col-6 d-flex align-item-center  justify-content-center ">

                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        {success && <p style={{ color: 'green' }}>{success}</p>}

                    </div>
                </div>

                <div className='row d-flex align-item-center  justify-content-center mt-3'>
                    <div className='col-6 d-flex align-item-center text-center justify-content-center'>
                        <p>Hesabınız var mı? <Link to="/" style={{ color: "#0a50ad" }}>Giriş yap!</Link> </p>

                    </div>

                </div>

            </div>


        </>

    );
}
export default Register;