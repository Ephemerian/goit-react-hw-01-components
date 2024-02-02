import React from 'react';
import css from './Statistics.module.css';
const colors = ['#4EC5F5', '#A43CF1', '#E64C66', '#20B8C5', '#C46A1B'];

export const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css.statList}>
                {stats.map(({ id, label, percentage }, i) => (
                    <li
                        className={css.item}
                        key={id}
                        style={{ backgroundColor: colors[i % colors.length] }}
                    >
                        <span className={css.label}>{label}</span>
                        <span className={css.percentage}>{percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};