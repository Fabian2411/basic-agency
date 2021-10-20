import React from 'react';

import BasicCompaniesData from '../../data/BasicCompanies.json'
import './Featured.scss';

// sfc
const Featured = () => {
    return (
        <section className="companies">
            {BasicCompaniesData.map((basicCompanies,elt)=> <div key={elt} className="index">
            <img src={basicCompanies.image} alt="com" className="companies_img"/>
            <h5 clssName="com_name">{basicCompanies.title}</h5>
            <p className="line"></p>
            <p className="com_description">{basicCompanies.info}</p>
            </div>
        )}    
        </section>
    );
}

export default Featured;


