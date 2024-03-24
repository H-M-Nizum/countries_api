import React from 'react';
import './Country.css'
const Country = (props) => {
    const {name, population, area, region, capital, timezones, flags, coatOfArms
    } = props.country
    // console.log(props.country)
    return (
        <div className='card'>
            <h2 className='countryName'>Name : {name.common}</h2>
            <hr />
            <div className='imgs'>
                <div>
                    <img className='img' src={flags.png} alt="" />
                </div>
                <div>
                    <img className='img' src={coatOfArms.png} alt="" />
                </div>
            </div>
            <h3>Populations : {population}</h3>
            <h3>Area : {area}</h3>
            <p>Region : {region}</p>
            <p>Capital : {capital}</p>
            <p>TimeZones : {timezones}</p>
        </div>
    );
};

export default Country;