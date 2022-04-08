import React from 'react'
import MarkedLocationMap from '../googleMap'
import "./mainPageFooter.scss"
import { ReactComponent as FooterImage } from '../../assets/footerImg.svg';


const MainPageFooter = () => {
    return (
        <div className='footer-container'>
            {/* <div className="footer-image" style={{ backgroundImage: `url(${"https://i.ibb.co/ZYW3VTp/brown-brim.png"})`, backgroundSize: 'cover' }}>             
            </div> */}
            <div className="footer-image">
                <FooterImage style={{ width: "100%", height: "100%" }}/>
            </div>
            <div className="text-field-wrapper">
                <p><strong>İletişim</strong></p>
                <p>Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi D2 Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul</p>
                <br/>
                <p><strong>Email: bilgi@tesodev.com</strong></p>
            </div>
            <div className="map-wrapper">
                <MarkedLocationMap/>
            </div>
        </div>
    )
}

export default MainPageFooter