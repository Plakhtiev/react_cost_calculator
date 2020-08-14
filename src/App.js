import React, { Component } from "react";
import Total from './componets/total/Total';
import History from './componets/history/History';
import Operation from './componets/operation/Operation';


class App extends Component {


    state = {
        transactions: [],
        description: '',
        amount: ''
    }

    addTransaction(add) {
        const transaction = {
            id: `cmr${(+new Date()).toString(16)}`,
            description: this.state.description,
            amount: this.state.amount,
            add
        }
    }

    addAmount = e => {
        this.setState({ amount: e.target.value });
    }

    addDescription = e => {
        this.setState({ description: e.target.value });
    }

    render() {
        console.log(this.state);
        return (
            <React.Fragment>
                <header>
                    <h1>Кошелек</h1>
                    <h2>Калькулятор расходов</h2>
                </header>
                <main>
                    <div className="container">
                        <Total />
                        <History />
                        <Operation
                            addTransaction={this.addTransaction}
                            addAmount={this.addAmount}
                            addDescription={this.addDescription}
                        />
                    </div>
                </main>
            </React.Fragment>
        );
    }
};

export default App;