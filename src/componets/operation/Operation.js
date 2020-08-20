import React from 'react';

function Operation({ addTransaction, addDescription, addAmount, description, amount }) {
    return (
        <section className="operation">
            <h3>Новая операция</h3>
            <form id="form">
                <label>
                    <input
                        type="text"
                        className="operation__fields operation__name"
                        onChange={addDescription}
                        value={description}
                        placeholder="Наименование операции" />
                </label>
                <label>
                    <input type="number"
                        className="operation__fields operation__amount"
                        onChange={addAmount}
                        value={amount}
                        placeholder="Введите сумму" />
                </label>
                <div className="operation__btns">
                    <button
                        onClick={() => addTransaction(false)}
                        type="button"
                        className="operation__btn operation__btn-subtract">РАСХОД</button>
                    <button
                        onClick={() => addTransaction(true)}
                        type="button"
                        className="operation__btn operation__btn-add">ДОХОД</button>
                </div>
            </form >
        </section >
    )
};

export default Operation;