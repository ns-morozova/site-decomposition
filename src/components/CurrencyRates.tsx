import React from 'react';
import { MdMoreHoriz } from "react-icons/md";
import styles from './styles.module.css';

interface CurrencyRate {
    name: string;
    rate: string;
    change: string;
}

interface CurrencyRatesProps {
    rates: CurrencyRate[];
}

/**
 * Компонент для отображения курсов валют.
 */
const CurrencyRates: React.FC<CurrencyRatesProps> = ({ rates }) => {
    return (
        <div className={styles.currencyRates}>
            {rates.map((rate, index) => (
                <div key={index} className={styles.currencyRate}>
                    <span className={styles.nameRate}>{rate.name}</span>
                    <span className={styles.rate}>{rate.rate}</span>
                    <span className={styles.changeRate}>{rate.change}</span>
                </div>
            ))}
            <MdMoreHoriz style={{ cursor: 'pointer' }} />
        </div>
    );
};

export default CurrencyRates;