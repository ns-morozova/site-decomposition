import React from 'react';
import { IconType } from 'react-icons';
import styles from './styles.module.css';

interface NewsListProps {
    news: {
        icon: IconType;
        text: string;
        link: string;
    }[];
}

/**
 * Компонент для отображения списка новостей с иконками.
 */
const NewsList: React.FC<NewsListProps> = ({ news }) => {
    return (
        <div className={styles.newsList}>
            {news.map((item, index) => (
                <div key={index} className={styles.newsItem}>
                    <item.icon />
                    <a href={item.link} className={styles.text}>
                        {item.text}
                    </a>
                </div>
            ))}
        </div>
    );
};

export default NewsList;
