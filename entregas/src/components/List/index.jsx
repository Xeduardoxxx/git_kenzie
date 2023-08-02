import style from "./style.module.scss"


const List = ({ transactions, deleteTransaction }) => {
  return (
    <section className={style.form}>
      <div className={transactions.amount}>
        <h2 className="title two">Resumo financeiro</h2>
        <ul>
          {/* Mapear cada transação e criar um item de lista para exibir no histórico */}
          {transactions.map((transaction) => (
            <li key={transaction.id} className={transaction.amount < 0 ? 'expense' : 'income'}>
              <div>
                {/* Exibir o texto da transação */}
                {transaction.text}
                <span className="transaction-type">{transaction.type === 'income' ? 'Entrada' : 'Saída'}</span>
                {/* Botão para excluir a transação */}
              </div>
              <div>
                <span> R$ {Math.abs(transaction.amount)}</span>
                {/* Exibir o tipo de transação (entrada ou saída) */}
                <button className='btn sm' onClick={() => deleteTransaction(transaction.id)}>Excluir</button>
              </div>
            </li>
          ))}
        </ul>
      </div >
    </section >

  );
};

export default List;


