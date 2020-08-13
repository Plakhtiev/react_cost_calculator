import React from "react";
import Total from './componets/total/Total';
import History from './componets/history/History';
import Operation from './componets/operation/Operation';


function App() {
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
                    <Operation />
                </div>
            </main>
        </React.Fragment>);
};

export default App;