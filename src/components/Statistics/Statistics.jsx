import css from './Statistics.module.css'
const colors = ['#4EC5F5', '#A43CF1', '#E64C66', '#20B8C5', '#C46A1B']
export const Statistics = ({ data }) => {
    return (
        <section className={css.statistics}>
            <h2 className={css.title}>Upload stats</h2>

            <ul className={css.statList}>
                {data.map(({ id, label, percentage }, i) => {
                    return(
                        <li className={css.item} key={id} style={{ backgroundColor: colors[i] }}>
                            <span className={css.label}>{ label}</span>
                            <span className={css.percentage}>{ percentage}%</span>
                    </li>)}) }               
            </ul>
        </section>
        )
    }