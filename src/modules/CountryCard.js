import './CountryCard.css';
import CardDetailsPage from './CardDetailsPage';
import { useState } from 'react';

const CountryCard = (props) => {
    const [detailsDisplayed, setDetailsDisplayed] = useState(false);

    let cardclass = "";
    
    if (props.mode) {
        cardclass = "darkcard";
    }
    else {
        cardclass = "";
    }


    return (
        <>
            {detailsDisplayed && <CardDetailsPage card={props} onBack={()=>setDetailsDisplayed((prev) => !prev)} mode={props.mode} />}
            <div className={`card ${cardclass}`} onClick={()=>setDetailsDisplayed((prev) => !prev)}>
                <img alt='countryImg' id='countryImg' src={props.country.flags.png}></img>
                <h2 id='countryName'>{props.country.name.official}</h2>
                <div className={`countryDescription ${cardclass}`}>
                    <h3 id='population'><span>Population: </span>{props.country.population}</h3>
                    <h3 id='region'><span>Region: </span>{props.country.continents[0]}</h3>
                    <h3 id='capital'><span>Capital: </span>{props.country.capital}</h3>
                </div>
            </div>
        </>
    )
}


export default CountryCard;