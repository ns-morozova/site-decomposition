import React from 'react';
import styles from './styles.module.css';
import { IconType } from 'react-icons';

interface WeatherDisplayProps {
    title: string;
    currentTemperature: number;
    weatherIcon: IconType;
    morningTemperature: number;
    eveningTemperature: number;
}

/**
 * Компонент для отображения информации о погоде.
 */
const Weather: React.FC<WeatherDisplayProps> = ({
    title,
    currentTemperature,
    weatherIcon: WeatherIcon,
    morningTemperature,
    eveningTemperature,
}) => {
    return (
        <div className={styles.weatherContainer}>
            <h2 className={styles.weatherTitle}>{title}</h2>
            <div className={styles.weatherContent}>
                <WeatherIcon className={styles.weatherIcon} />
                <span className={styles.currentTemperature}>+{currentTemperature}°</span>
                <div>
                    <div className={styles.forecastItem}>
                        <span>Утром</span>
                        <span>+{morningTemperature}°</span>
                    </div>
                    <div className={styles.forecastItem}>
                        <span>Вечером</span>
                        <span>+{eveningTemperature}°</span>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Weather;