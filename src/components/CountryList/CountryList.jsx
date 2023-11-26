import React from 'react';
import Spinner from "../Spinner/Spinner.jsx";
import Message from "../Message/Message.jsx";
import styles from "../CountryList/CountryList.module.css";
import CountryItem from "../CountryItem/CountryItem.jsx";

function CountryList({cities, isLoading}) {
    if (isLoading) return <Spinner/>;
    if (!cities.length) return <Message message="Add your first city by clicking on a city on the map"/>;

    const countries = cities.reduce((arr, city) => {
        if (!arr.map((el) => el.country).includes(city.country))
            return [...arr, { country: city.country, emoji: city.emoji }];
        else return arr;
    }, []);

    const sortedCities = [...cities].sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <ul className={styles.countryList}>
            {countries.map((country) => {
                return <CountryItem country={country} key={country.id}/>
            })}
        </ul>
    );
}

export default CountryList;