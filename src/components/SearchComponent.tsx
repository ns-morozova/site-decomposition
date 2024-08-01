import React from 'react';
import Logo from '../img/yandex-logo.png';
import SearchFilters from './SearchFilters';
import { LiaKeyboard } from "react-icons/lia";
import styles from './styles.module.css';

const filters = ['Видео', 'Картинки', 'Новости', 'Карты', 'Маркет', 'Переводчик', 'Эфир', 'ещё'];

/**
 * Компонент поиска.
 */
const SearchComponent: React.FC = () => {
    return (
        <div className={styles.searchContainer}>
            <div className={styles.searchFilters}><SearchFilters items={filters} /></div>
            <div className={styles.searchBox}>
                <img src={Logo} className={styles.logoYandex} />
                <input type="text" className={styles.searchInput} />
                <LiaKeyboard className={styles.iconKeyboard} />
                <button className={styles.searchButton}>Найти</button>
            </div>
            <div className={styles.slogan}>Найдется всё. Например, <span style={{ color: '#b9b9b9', cursor: 'pointer'}}>фаза луны сегодня</span></div>
        </div>
    );
};

export default SearchComponent;