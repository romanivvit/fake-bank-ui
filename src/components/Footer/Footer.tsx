// import { useTranslation } from 'react-i18next';
import GoogleMapReact from 'google-map-react';
import facebook from '../../assets/svg/facebook-icon.svg';
import './styles.scss';

export const AnyReactComponent = ({ text }:any) => (
    <div style={{
        color: 'white',
        background: 'grey',
        padding: '15px 10px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        transform: 'translate(-50%, -50%)',
    }}
    >
        {text}
    </div>
);
export const Footer = () => {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627,
        },
        zoom: 11,
    };

    return (
        <footer id="footer">
            <div className="wrapper">
                <div className="footer-navigation">
                    <ul>
                        <li>Home</li>
                        <li>Apartments</li>
                        <li>Map</li>
                        <li>Vienna Info</li>
                        <li>Contact</li>
                        <li>Anreise</li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <span>Our phone number :</span>
                    <p> +43 1 234-00-11</p>
                </div>
                <div className="footer-map" style={{ height: '300px', width: '540px' }}>
                    <GoogleMapReact
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    >
                        <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
                            text="Kreyser Avrora"
                        />
                    </GoogleMapReact>
                </div>
            </div>
            <div className="line" />
            <div className="social-media">
                <img src={facebook} alt="" />
            </div>
        </footer>
    );
};
