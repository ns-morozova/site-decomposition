import React from 'react';
import styles from './styles.module.css';

interface showItem {
    time: string;
    show: string;
    canal: string;
}

interface ShowListProps {
    items: showItem[];
}

/**
 * Компонент для отображения списка показов на телевидении.
 */
const ShowList: React.FC<ShowListProps> = ({ items }) => {
    return (
        <ul className={styles.showList}>
            {items.map((item, index) => (
                <li key={index} className={styles.showItem}>
                    <span>{item.time}</span>
                    <span>{item.show} </span>
                    <span className={styles.showCanal}>{item.canal}</span>
                </li>
            ))}
        </ul>
    );
};

export default ShowList;