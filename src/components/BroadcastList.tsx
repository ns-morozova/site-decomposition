import React from 'react';
import styles from './styles.module.css';
import { IoPlayCircleSharp } from "react-icons/io5";

interface BroadcastItem {
    broadcast: string;
    canal: string;
}

interface BroadcastListProps {
    items: BroadcastItem[];
}

/**
 * Компонент для отображения списка эфиров.
 */
const BroadcastList: React.FC<BroadcastListProps> = ({ items }) => {
    return (
        <ul className={styles.broadcastList}>
            {items.map((item, index) => (
                <li key={index} className={styles.broadcastItem}>
                    <IoPlayCircleSharp style={{ color: '#3D6AAA'}} />
                    <span>{item.broadcast} </span>
                    <span className={styles.broadcastCanal}>{item.canal}</span>
                </li>
            ))}
        </ul>
    );
};

export default BroadcastList;