import './CardDetailsPage.css'
import { useState } from 'react';


const CardDetailsPage = (props) => {
    let languageskeys = props.card.country.languages;
    let languages = [];

    Object.keys(languageskeys).forEach(element => {
        languages.push(languageskeys[element])
    });

    let borderkeys = "";
    let borders = [];

    props.card.country.borders ? borderkeys = props.card.country.borders : borderkeys = "";

    if (borderkeys !== "") {
        Object.keys(borderkeys).forEach(element => {
            borders.push(borderkeys[element])
        });
    }
    if (borders.length === 0) {
        borders.push("No border countries");
    }

    let currencieskeys = props.card.country.currencies;
    let currencies = [];

    Object.keys(currencieskeys).forEach(element => {
        currencies.push(currencieskeys[element])
    });

    let namekeys = props.card.country.name.nativeName;
    let names = [];

    Object.keys(namekeys).forEach(element => {
        names.push(namekeys[element])
    });

    //const [darkMode, setDarkMode] = useState(props.mode);

    let background = "";
    let border = "";
    let lighterClass = "";
    let bordercountriesClass = "";
    let cardsClass = "";
    
    if (props.mode) {
        border = "container darkmain";
        background = "darkmain innercontainer";
        lighterClass = "dark";
        bordercountriesClass = "bordercountry dark"
        cardsClass = "dark cards"
    }
    else {
        border = "container";
        background = "innercontainer";
        lighterClass = "";
        bordercountriesClass = "bordercountry"
        cardsClass = "cards white";
    }

    return(
    <div className={border}>
        <div className={background}>
            <button onClick={props.onBack} className={lighterClass}>Back</button>
            <div className={cardsClass}>
                <img src={props.card.country.flags.png} alt="countryImg" id='countryImg'></img>
                <h1 className='countryname'>{props.card.country.name.official}</h1>
                <p className='oneline'><span className='width40'>Native name: </span>{names.map((name) => { return <div key={name.common}>{name.common}</div>})}</p>
                <p><span>Population: </span>{props.card.country.population}</p>
                <p><span>Region: </span>{props.card.country.region}</p>
                <p><span>Sub Region: </span>{props.card.country.subregion}</p>
                <p><span>Capital: </span>{props.card.country.capital[0]}</p>
                <br />
                <p><span>Top Level Domain: </span>{props.card.country.tld[0]}</p>
                <p className='oneline'><span>Currencies: </span>{currencies.map(currency => { return <div key={currency.name}>{currency.name}</div>})}</p>
                <p className='oneline'><span className='oneline'>Languages: </span>{languages.map(language => { return <div key={language}>{language}</div> })}</p>
                <br/>
                <h2 className='oneline'>Border Countries: </h2>
                <div className='borderCountries'>
                    {borders.map(border => {return <div className={bordercountriesClass} key={border}>{border}</div>})}
                </div>   
            </div>
        </div>
    </div>
    )
}

export default CardDetailsPage;