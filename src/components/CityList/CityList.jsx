import styles from './CityList.module.css';
import Spinner from "../Spinner/Spinner.jsx";
import CityItem from "../CityItem/CityItem.jsx";
import Message from "../Message/Message.jsx";

function CityList({cities, isLoading}) {
    if (isLoading) return <Spinner/>;
    if (!cities.length) return <Message message="Add your first city by clicking on a city on the map"/>;
    const sortedCities = [...cities].sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <ul className={styles.cityList}>
            {sortedCities.map((city) => {
                return <CityItem city={city} key={city.id}/>
            })}
        </ul>
    );
}

export default CityList;