import React from 'react';
import styles from './styles.module.css';
import { IconType } from 'react-icons';

interface RubricBlockProps {
  title: string;
  children: React.ReactNode;
  Icon?: IconType;
}

/**
 * Компонент для отображения рубрики с заголовком и списком.
 */
const RubricBlock: React.FC<RubricBlockProps> = ({ title, children, Icon }) => {
  return (
    <div className={styles.rubric}>
      <div className={styles.rubricHeader}>
        <h2 className={styles.rubricTitle}>{title}</h2>
        {Icon && <Icon />}
      </div>
      <div className={styles.rubricContent}>{children}</div>
    </div>
  );
};

export default RubricBlock;