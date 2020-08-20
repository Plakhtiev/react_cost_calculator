import React, { Component } from "react";
import Total from './componets/total/Total';
import History from './componets/history/History';
import Operation from './componets/operation/Operation';


class App extends Component {


    state = {
        transactions: [],
        description: '',
        amount: '',
        resultExpeses: 0,
        resultIncome: 0,
        totalBalance: 0,
    }

    addTransaction = add => {

        const transactions = [...this.state.transactions,
        {
            id: `cmr${(+new Date()).toString(16)}`,
            description: this.state.description,
            amount: this.state.amount,
            add
        }];


        this.setState({//очистка инпута
            transactions,
            description: '',
            amount: '',
        }, this.getTotalBalance);
    }

    addAmount = e => {
        this.setState({ amount: e.target.value });
    }

    addDescription = e => {
        this.setState({ description: e.target.value });
    }

    getIcome() {
        return this.state.transactions
            .filter(item => item.add)
            .reduce((acc, item) => +item.amount + acc, 0)
    }

    getExpeses() {
        return this.state.transactions
            .filter(item => !item.add)
            .reduce((acc, item) => +item.amount + acc, 0)
    }
    getTotalBalance() {
        const resultIncome = this.getIcome();
        const resultExpeses = this.getExpeses();

        const totalBalance = resultIncome - resultExpeses;
        this.setState({
            resultExpeses,
            resultIncome,
            totalBalance,
        });
    }

    render() {
        // console.log(this.state);
        return (
            <React.Fragment>
                <header>
                    <h1>Кошелек</h1>
                    <h2>Калькулятор расходов</h2>
                </header>
                <main>
                    <div className="container">
                        <Total
                            resultExpeses={this.state.resultExpeses}
                            resultIncome={this.state.resultIncome}
                            totalBalance={this.state.totalBalance}
                        />
                        <History transactions={this.state.transactions} />
                        <Operation
                            addTransaction={this.addTransaction}
                            addAmount={this.addAmount}
                            addDescription={this.addDescription}
                            description={this.state.description}
                            amount={this.state.amount}
                        />
                    </div>
                </main>
            </React.Fragment>
        );
    }
};

export default App;