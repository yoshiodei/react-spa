import React from 'react';
import './../css/service.css';

const Service = () => {
    return (
        <section className="service"> 
            <h2 className="service_title">Services</h2>
            <div className="service_div">
                <div className="service_card">
                    <img />
                    <div className="service_card_div">
                        <p>Massage</p>
                        <div className="line"></div>
                    </div>
                </div>
                <div className="service_card">
                    <img />
                    <div className="service_card_div">
                        <p>Hair Salon</p>
                        <div className="line"></div>
                    </div>
                </div>
                <div className="service_card">
                    <img />
                    <div className="service_card_div">
                        <p>Piercing</p>
                        <div className="line"></div>
                    </div>
                </div>
                <div className="service_card">
                    <img />
                    <div className="service_card_div">
                        <p>Nail Fixing</p>
                        <div className="line"></div>
                    </div>
                </div>
                <div className="service_card">
                    <img />
                    <div className="service_card_div">
                        <p>Makeup</p>
                        <div className="line"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Service;
