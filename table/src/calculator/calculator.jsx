import { Button } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import { useState } from 'react';
import classes from './calculator.module.css';

export default function Calculator() {

    const [estateValue, setEstateValue] = useState(500000);
    const [firstDepositValue, setFirstDepositValue] = useState(0);
    const [loanPeriorValue, setLoanPeriorValue] = useState(1);
    const [interestRateValue, setInterestRateValue] = useState(1);

    const handleEstateSliderChange = (event, newEstateValue) => {
        setEstateValue(newEstateValue);
    };

    const handleEstateInputChange = (event) => {
        setEstateValue(+event.target.value);
    };

    const handleFirstDepositSliderChange = (event, newFirstDepositValue) => {
        setFirstDepositValue(newFirstDepositValue);
    };

    const handleFirstDepositInputChange = (event) => {
        setFirstDepositValue(+event.target.value);
    };
    
    const firstDepositPercentCounter = (event) => {
        setFirstDepositValue((estateValue - 500000)*event.currentTarget.value)
    };

    const handleLoanPeriorSliderChange = (event, newLoanPeriodValue) => {
        setLoanPeriorValue(newLoanPeriodValue);
    };

    const handleLoanPeriodInputChange = (event) => {
        setLoanPeriorValue(+event.target.value);
    };

    const changeLoanPeriod = (event) => {
        setLoanPeriorValue(+event.currentTarget.value);
    };

    const handleInterestRateSliderChange = (event, newInterestRateValue) => {
        setInterestRateValue(newInterestRateValue);
    };

    const handleInterestRateInputChange = (event) => {
        setInterestRateValue(+event.target.value);
    };

    const changeInterestRate = (event) => {
        setInterestRateValue(+event.currentTarget.value);
    };

    return (
        <div className="calculator">
            <div className={classes.container}>
                <div className={classes.leftPanel}>
                    <div className={classes.switchCalculator}>
                        <Button className={classes.switchCalculatorButton}>Недвижимость</Button>
                        <Button className={classes.switchCalculatorButton}>Кредит</Button>
                        <Button className={classes.switchCalculatorButton}>Платеж</Button>
                    </div>

                    <div className={classes.estateCost}>
                        <p>Стоимость недвижимости</p>
                        <input className={classes.estateInput} type="number" value={estateValue} onChange={handleEstateInputChange} />
                        <Slider
                            min={500000}
                            max={99999999}
                            step={280000}
                            defaultValue={500000}
                            onChange={handleEstateSliderChange}
                            value={estateValue}/>
                    </div>

                    <div className={classes.firstDeposit}>
                        <p>Первоначальный взнос</p>
                        <input 
                            className={classes.firstDepositInput} 
                            type="number" 
                            value={firstDepositValue >= estateValue - 500000 ? estateValue - 500000 : firstDepositValue} 
                            onChange={handleFirstDepositInputChange} />
                        <Slider
                            min={0}
                            max={estateValue - 500000}
                            step={10000}
                            defaultValue={0}
                            onChange={handleFirstDepositSliderChange}
                            value={firstDepositValue}/>

                        <div className={classes.firstDepositButtons}>
                            <Button className={classes.firstDepositPercentButton} onClick={firstDepositPercentCounter} value={0}>0%</Button>
                            <Button className={classes.firstDepositPercentButton} onClick={firstDepositPercentCounter} value={0.1}>10%</Button>
                            <Button className={classes.firstDepositPercentButton} onClick={firstDepositPercentCounter} value={0.15}>15%</Button>
                            <Button className={classes.firstDepositPercentButton} onClick={firstDepositPercentCounter} value={0.2}>20%</Button>
                            <Button className={classes.firstDepositPercentButton} onClick={firstDepositPercentCounter} value={0.25}>25%</Button>
                            <Button className={classes.firstDepositPercentButton} onClick={firstDepositPercentCounter} value={0.3}>30%</Button>
                        </div>
                    </div>

                    <div className={classes.loanPeriod}>
                        <p>Срок кредита</p>
                        <input className={classes.loanPeriodInput} type="number" onChange={handleLoanPeriodInputChange} value={loanPeriorValue} />
                        <Slider
                            min={1}
                            max={30}
                            step={1}
                            defaultValue={1}
                            onChange={handleLoanPeriorSliderChange}
                            value={loanPeriorValue}/>

                        <div className={classes.loanPeriodButtons}>
                            <Button className={classes.loanPeriodButton} onClick={changeLoanPeriod} value={5}>5</Button>
                            <Button className={classes.loanPeriodButton} onClick={changeLoanPeriod} value={10}>10</Button>
                            <Button className={classes.loanPeriodButton} onClick={changeLoanPeriod} value={15}>15</Button>
                            <Button className={classes.loanPeriodButton} onClick={changeLoanPeriod} value={20}>20</Button>
                        </div>
                    </div>

                    <div className={classes.interestRate}>
                        <p>Процентная ставка</p>
                        <input className={classes.interestRateInput} type="number" value={interestRateValue} onChange={handleInterestRateInputChange} />
                        <Slider
                            min={1}
                            max={30}
                            step={0.1}
                            defaultValue={1}
                            onChange={handleInterestRateSliderChange}
                            value={interestRateValue} />

                        <div className={classes.loanPeriodButtons}>
                            <Button className={classes.loanPeriodButton} onClick={changeInterestRate} value={4.5}>4,5%</Button>
                            <Button className={classes.loanPeriodButton} onClick={changeInterestRate} value={6}>6%</Button>
                            <Button className={classes.loanPeriodButton} onClick={changeInterestRate} value={7.5}>7,5%</Button>
                            <Button className={classes.loanPeriodButton} onClick={changeInterestRate} value={9.1}>9,1%</Button>
                            <Button className={classes.loanPeriodButton} onClick={changeInterestRate} value={10}>10%</Button>
                        </div>
                    </div>
                </div>
                <div className={classes.rightPanel}>
                    <h1>Hello but right side</h1>
                </div>
            </div>
        </div>
    );
}