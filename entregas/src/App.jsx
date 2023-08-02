import React, { useState } from 'react';
import "./styles/index.scss";
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';


const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [hasData, setHasData] = useState(false); // Estado para controlar se há dados ou não

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
    setHasData(true); // Definir como true quando houver entrada de dados
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
    setHasData(transactions.length > 1); // Verificar se ainda há outros dados após excluir
  };

  const calculateTotal = () => {
    return transactions.reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0);
  };

  return (
    <div className="App">
      <Header />
      <div className='container'>
        <div className='body'>
          <div className='bodyForm'>
            <Form addTransaction={addTransaction} />
            {hasData && ( // Se houver dados, mostrar o saldo total
              <div className="total">
                <h3>Valor total: </h3>
                <span className={calculateTotal() >= 0 ? 'income' : 'expense'}>
                  {calculateTotal() >= 0 ? '+' : '-'} R$ {Math.abs(calculateTotal())}
                </span>
                <p className='paragrapha'>Valor se refere ao saldo</p>
              </div>
            )}
          </div>

          {hasData ? ( // Se tiver dados, mostrar o histórico de transações
            <div className='result'>
              <List transactions={transactions} deleteTransaction={deleteTransaction} />
            </div>
          ) : (

            // Se não tiver dados, mostrar a mensagem
            <div>
              <p className="title two" >Resumo financeiro</p>
              <p className="title one">Você não possui nenhum lançamento</p>

            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default App;
