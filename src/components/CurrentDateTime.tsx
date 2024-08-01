import React from 'react';
import styles from './styles.module.css';

/**
 * Компонент для отображения актуальной даты и времени.
 */
const CurrentDateTime: React.FC = () => {
    const now = new Date();
    const dateOptions: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const timeOptions: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit'
    };

    const formattedDate = now.toLocaleDateString('ru-RU', dateOptions);
    const formattedTime = now.toLocaleTimeString('ru-RU', timeOptions);

    return (
        <div className={styles.dateTime}>
            {formattedDate} {formattedTime}
        </div>
    );
};

export default CurrentDateTime;