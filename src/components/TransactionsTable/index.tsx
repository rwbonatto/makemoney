import { useEffect } from 'react';
import { Container } from './styles'

export function TransactionsTable() {
  useEffect(() => {
    fetch('http://192.168.1.117:3000/api/transactions')
      .then(response => response.json())
      .then(data => console.log(data))
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Mercado</td>
            <td className="withdraw">- R$1.000</td>
            <td>Desenvolvimento</td>
            <td>12/03/2021</td>
          </tr>
          <tr>
            <td>Combustível</td>
            <td className="withdraw">- R$500</td>
            <td>Despesas</td>
            <td>17/03/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$5.000</td>
            <td>Casa</td>
            <td>28/03/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}