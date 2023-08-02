import React, { useState } from 'react';
import styles from "./style.module.scss"

const Form = ({ addTransaction }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [transactionType, setTransactionType] = useState('income');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: transactionType === 'income' ? +amount : -amount,
      type: transactionType
    };
    addTransaction(newTransaction);
    setText('');
    setAmount('');
  };

  return (
    <div className={styles.inputBox}>
      <form onSubmit={handleSubmit}>
        {}
        <div>
          <label className="paragraph" htmlFor="text">Descrição</label>
          <br />
          {}
          <input id="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Digite a descrição..." required />
        </div>
        {}
        <div>
          <label className="paragraph" htmlFor="amount">Valor (R$)</label>
          <br />
          {}
          <input type="text" id="amount" inputMode="numeric" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Digite o valor..." pattern="[0-9]+" required />
        </div>
        {}
        <div>
          <p className="paragraph">Tipo de valor:</p>
          <label className="paragraph" htmlFor="transactionType"></label>
          <select className={styles.select} id="transactionType" value={transactionType} onChange={(e) => setTransactionType(e.target.value)}>
            <option className="paragraph" value="income">Entrada</option>
            <option className="paragraph" value="expense">Saída</option>
          </select>
        </div>
        {}
        <button className='btn lg' type="submit">Inserir valor</button>
      </form>
    </div>
  );
};

export default Form;
