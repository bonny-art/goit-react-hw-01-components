import { BaseTable, THead, Th, Tr, Td } from './TransactionsHistory.styled';

export const TransactionsHistory = ({ data }) => {
  return (
    <BaseTable>
      <THead>
        <tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </tr>
      </THead>

      <tbody>
        {data.map(({ id, type, amount, currency }, idx) => (
          <Tr key={id}>
            <Td>{type}</Td>
            <Td>{amount}</Td>
            <Td>{currency}</Td>
          </Tr>
        ))}
      </tbody>
    </BaseTable>
  );
};
