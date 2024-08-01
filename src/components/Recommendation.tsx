import React from 'react';
import styles from './styles.module.css';

interface RecProps {
    image?: string;
    title: string;
    link: string;
    caption: string;
}

/**
 * Компонент для отображения рекомендуемой статьи.
 */
const Recommendation: React.FC<RecProps> = ({ image, title, link, caption }) => {
    return (
        <div className={styles.contRec}>
            <img src={image} alt={title} className={styles.imageRec} />
            <div className={styles.descrRec}>
                <a href={link} className={styles.titleRec}>{title}</a>
                <span className={styles.captionRec}>{caption}</span>
            </div>
            
        </div>
    );
};

export default Recommendation;