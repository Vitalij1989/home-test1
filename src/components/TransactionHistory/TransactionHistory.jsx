// // import { TransactionItem } from 'components/TransactionItem/TransactionItem';
// import { TransactionItem } from 'components/TransactionItem/TransactionItem';
// import PropTypes from 'prop-types';
// export const TransactionHistory = ({ transactions }) => {
//   return (
//     <>
//       <thead>
//         <tr>
//           <th>Type</th>
//           <th>Amount</th>
//           <th>Currency</th>
//         </tr>
//       </thead>
//       <tbody>
//         console.log(transactions)
//         {transactions.map(transaction => {
//           return (
//             <tr key={transaction.id}>
//               <TransactionItem transaction={transaction} />
//             </tr>
//           );
//         })}
//       </tbody>
//     </>
//   );
// };
// TransactionHistory.propTypes = {
//   transaction: PropTypes.arrayOf(
//     PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired
//   ),
// };
