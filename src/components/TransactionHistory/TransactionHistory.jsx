import css from './TransactionHistory.module.css'

export const Transaction = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
  <thead>
    <tr className={css.tableHeader}>
      <th className={ css.tableTitle}>Type</th>
      <th className={ css.tableTitle}>Amount</th>
      <th className={ css.tableTitle}>Currency</th>
    </tr>
  </thead>

     <tbody className={css.tableBody}>
       {items.map(({id, type, amount, currency}) => {
         return <tr key={id} className={ css.tableRow}>
                  <td className={ css.tableContent}>{ type}</td>
                  <td className={ css.tableContent}>{ amount}</td>
                  <td className={ css.tableContent}>{currency }</td>
                </tr>
       })}
    
    
  </tbody>
</table>)
}