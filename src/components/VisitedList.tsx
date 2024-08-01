import React from 'react';
import styles from './styles.module.css';

interface VisitedListProps {
    items: {
        title: string;
        text: string;
    }[];
}

/**
 * Компонент для отображения списка посещаемого.
 */
const VisitedList: React.FC<VisitedListProps> = ({ items }) => {
    return (
        <div className={styles.visitedList}>
            {items.map((item, index) => (
                <div key={index} className={styles.visitedItem}>
                    <span className={styles.visitedTitle}>{item.title} —</span>
                    <span>{item.text}</span>
                </div>
            ))}
        </div>
    );
};

export default VisitedList;
