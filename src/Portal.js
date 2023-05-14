import React, { useEffect } from 'react';
import { Route, Routes, Link, useNavigate, NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';
import BasvuruFormu from './component/BasvuruFormu';
import BasvuruGoruntule from './component/BasvuruGoruntule';
import KayitBilgileri from './component/KayitBilgileri';
import logo from './img/khas-logo-test.png';





function Portal() {
    const kullaniciAdi = sessionStorage.getItem('kayitemail');
    var isLogin = localStorage.getItem('isLogin');
    const navigate = useNavigate();

    useEffect(()=>{

        
        if(isLogin == 'false' || isLogin== ""){
            navigate('/');
        }
    })



    const aStyle = {
        backgroundColor: '#0a50ad',
        color: 'white'
        
    }
    
   

    const hoverAStyle = {
        backgroundColor: 'white',
        border: '1px solid #0a50ad',
        color: '#0a50ad'
    }

    const formTikla = () => {
        ReactDOM.render(<BasvuruFormu />, document.getElementById("sol"));
        document.getElementById("sol").style.display = "block";
        document.getElementById("sag").style.display = "none";

    }
    const goruntuleTikla = () => {
        ReactDOM.render(<BasvuruGoruntule />, document.getElementById("sag"));
        document.getElementById("sag").style.display = "block";
        document.getElementById("sol").style.display = "none";

    }
    const KayitBilgiiTikla = () => {
        ReactDOM.render(<KayitBilgileri />, document.getElementById("sag"));
        document.getElementById("sag").style.display = "block";
        document.getElementById("sol").style.display = "none";

    }

    const checkLogin = () => {

         navigate('/');
        isLogin = false;       
        localStorage.setItem('isLogin', isLogin);
       
    }
    return (
        <>
            <div className='row'>
                <div className='col-12'>
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 px-5 mb-1 border-bottom">

                        <img src={logo} alt="logo" style={{ width: "80", height: "80" }} id="logo" />

                        <div className="col align-items-center ">
                            <h1 className='text-center' style={{ color: "#0a50ad" }}>KADİR HAS ÜNİVERSİTESİ</h1>
                            <h3 className="ms-5 d-flex justify-content-center"> <em>Erasmus Projesi Kordinatörlüğü</em></h3>
                        </div>

                        <div className="text-end " id="LogOutDiv" >
                            <p>{kullaniciAdi}</p>

                            <button type="button" className="btn btn-danger" id="btnLogout" onClick={checkLogin} stylşe={{ color: "white", textDecoration: "none" }}>Çıkış</button>
                        </div>

                    </div>
                </div>
            </div>

            {/* SIDEBAR */}
            <div className="row">
                <div className="col-4">

                    <div className="d-flex flex-column flex-shrink-0 p-3 bg-white mt-3 ml-3" style={{ width: '280px', height: '100%', border: '1px solid #0a50ad', marginLeft: '10px' }}>


                        <h5 className="fs-4 text-center " style={{ color: '#0a50ad' }}>Menu</h5>

                        <hr />
                        <ul className="nav nav-pills flex-column mb-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link active mt-3 text-center" aria-current="page" style={aStyle}
                                    onMouseOver={(e) => Object.assign(e.target.style, hoverAStyle)}
                                    onMouseOut={(e) => Object.assign(e.target.style, aStyle)} onClick={formTikla}>Başvuru Formu</NavLink>

                            </li>
                            <li>
                                <NavLink className="nav-link active mt-3 text-center" aria-current="page" style={aStyle}
                                    onMouseOver={(e) => Object.assign(e.target.style, hoverAStyle)}
                                    onMouseOut={(e) => Object.assign(e.target.style, aStyle)} onClick={goruntuleTikla}>Başvuru Bilgilerini Görüntüle</NavLink>

                            </li>
                            <li>
                                <NavLink className="nav-link active mt-3 text-center" aria-current="page" style={aStyle}
                                    onMouseOver={(e) => Object.assign(e.target.style, hoverAStyle)}
                                    onMouseOut={(e) => Object.assign(e.target.style, aStyle)} onClick={KayitBilgiiTikla}>Kullanıcı Bilgilerini Düzenle</NavLink>

                            </li>

                        </ul>
                        <hr />
                        <div className="dropdown">
                            <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">

                                <strong>mdo</strong>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                                <li><a className="dropdown-item" href="#">New project...</a></li>
                                <li><a className="dropdown-item" href="#">Settings</a></li>
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Sign out</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* SIDEBAR END */}
                </div>
                <div className="col-8" id="icerikDiv">
                    <div className="row">
                        <div className='col-6' id="sag" style={{ display: "none" }}>

                        </div>
                        <div className='col-6' id="sol" style={{ display: "none" }}>

                        </div>
                    </div>



                </div>

            </div>


        </>
    );
}

export default Portal;
