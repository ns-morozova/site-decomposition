import React from 'react';
import styles from './styles.module.css';

interface SearchFiltersProps {
    items: string[];
}

/**
 * Компонент для отображения списка фильтров поиска.
 */
const SearchFilters: React.FC<SearchFiltersProps> = ({ items }) => {
    return (
        <div className={styles.filtersList}>
            {items.map((item, index) => (
                <span key={index} className={styles.filter}>
                    {item}
                </span>
            ))}
        </div>
    );
};

export default SearchFilters;