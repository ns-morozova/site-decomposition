import React, { useState } from 'react';
import styles from './styles.module.css';

interface MainNewsProps {
    items: string[];
}

/**
 * Компонент для навигационной строки с переключаемыми пунктами.
 */
const MainNews: React.FC<MainNewsProps> = ({ items }) => {
    const [selectedItem, setSelectedItem] = useState<string>('Сейчас в СМИ');

    const handleItemClick = (item: string) => {
        setSelectedItem(item);
    };

    return (
        <nav className={styles.contMainNews}>
            <ul className={styles.mainNews}>
                {items.map((item, index) => (
                    <li
                        key={index}
                        className={`${styles.mainNewsItem} ${selectedItem === item ? styles.mainNewsSel : ''}`}
                        onClick={() => handleItemClick(item)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default MainNews;