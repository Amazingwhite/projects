import { Button, makeStyles } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import { useState } from 'react';
import classes from './calculator.module.css';

const useStyles = makeStyles({
    sliderButton: {
        color: 'rgba(0, 0, 0, 0.87)',
        padding: 0,
        minWidth: 0,
        boxSizing: 'border-box',
        margin: 4,
        fontSize: 11,
        backgroundColor: 'rgba(21, 34, 66, 0.06)',
        borderRadius: 16
    },
    applyButton: {
        backgroundColor: '#0468FF',
        color: '#fff',
        height: 48,
        fontSize: 14,
        font: 'Lato, Roboto, Arial, sans-serif',
        fontWeight: 'bold',
        lineHeight: 22,
        '&:hover': {
            backgroundColor: '#0248b2'
        }
    },
    switchCalculatorButton: {
        padding: '6px 8 px',
        fontWeight: 400,
        color: '#0468FF',
        flexGrow: 1,
        fontSize: 14,
        lineHeight: '22px'
    }
})

export default function Calculator() {

    const styles = useStyles();

    const [estateValue, setEstateValue] = useState(500000);
    const [firstDepositValue, setFirstDepositValue] = useState(0);
    const [loanPeriorValue, setLoanPeriorValue] = useState(1);
    const [interestRateValue, setInterestRateValue] = useState(1);
    

    let monthlyRate = interestRateValue/12/100;
    let loanPeriodMonths = (loanPeriorValue*12);
    let totalBid = ((1 + monthlyRate)**loanPeriodMonths);
    let monthlyPayment = ((estateValue-firstDepositValue)*monthlyRate*(totalBid/(totalBid - 1)));
    let percents = Math.round((monthlyPayment*loanPeriodMonths - (estateValue-firstDepositValue)));
    let minIncome = Math.round(((estateValue - firstDepositValue + percents)/12)*1.667);

    if (estateValue < 500000) setEstateValue(500000);
    if (firstDepositValue < 0) setFirstDepositValue(0);
    if (loanPeriorValue < 1) setLoanPeriorValue(1);
    if (interestRateValue < 1) setInterestRateValue(1);

    const numberWithSpaces = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };

    const handleEstateSliderChange = (event, newEstateValue) => {
        firstDepositValue >= newEstateValue - 500000 ? setFirstDepositValue(newEstateValue - 500000) : setFirstDepositValue(firstDepositValue);
        setEstateValue(newEstateValue);
    };

    const handleEstateInputChange = (event) => {
        firstDepositValue >= +event.target.value - 500000 ? setFirstDepositValue(+event.target.value - 500000) : setFirstDepositValue(firstDepositValue);
        setEstateValue(+event.target.value);
    };

    const handleFirstDepositSliderChange = (event, newFirstDepositValue) => {
        setFirstDepositValue(newFirstDepositValue);
    };

    const handleFirstDepositInputChange = (event) => {
        setFirstDepositValue(+event.target.value);

    };

    const firstDepositPercentCounter = (event) => {
        setFirstDepositValue((estateValue - 500000) * event.currentTarget.value)
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
            <div className={classes.container}>
                <div className={classes.leftPanel}>
                    <div className={classes.switchCalculator}>
                        <Button className={styles.switchCalculatorButton}>Недвижимость</Button>
                        <Button className={styles.switchCalculatorButton}>Кредит</Button>
                        <Button className={styles.switchCalculatorButton}>Платеж</Button>
                    </div>

                    <div className={classes.estateCost}>
                        <p>Стоимость недвижимости</p>
                        <input className={classes.estateInput} type="number" inputMode='numeric' value={estateValue} onChange={handleEstateInputChange} />
                        <Slider
                            min={500000}
                            max={99999999}
                            step={280000}
                            defaultValue={500000}
                            onChange={handleEstateSliderChange}
                            value={estateValue} />
                    </div>

                    <div className={classes.firstDeposit}>
                        <p>Первоначальный взнос</p>
                        <input
                            className={classes.firstDepositInput}
                            type="number"
                            inputMode='numeric'
                            value={firstDepositValue}
                            onChange={handleFirstDepositInputChange} />
                        <Slider
                            min={0}
                            max={estateValue - 500000}
                            step={10000}
                            defaultValue={0}
                            onChange={handleFirstDepositSliderChange}
                            value={firstDepositValue} />

                        <div className={classes.firstDepositButtons}>
                            <Button className={styles.sliderButton} onClick={firstDepositPercentCounter} value={0}>0%</Button>
                            <Button className={styles.sliderButton} onClick={firstDepositPercentCounter} value={0.1}>10%</Button>
                            <Button className={styles.sliderButton} onClick={firstDepositPercentCounter} value={0.15}>15%</Button>
                            <Button className={styles.sliderButton} onClick={firstDepositPercentCounter} value={0.2}>20%</Button>
                            <Button className={styles.sliderButton} onClick={firstDepositPercentCounter} value={0.25}>25%</Button>
                            <Button className={styles.sliderButton} onClick={firstDepositPercentCounter} value={0.3}>30%</Button>
                        </div>
                    </div>

                    <div className={classes.loanPeriod}>
                        <p>Срок кредита</p>
                        <input className={classes.loanPeriodInput} type="number" inputMode='numeric' onChange={handleLoanPeriodInputChange} value={loanPeriorValue} />
                        <Slider
                            min={1}
                            max={30}
                            step={1}
                            defaultValue={1}
                            onChange={handleLoanPeriorSliderChange}
                            value={loanPeriorValue} />

                        <div className={classes.loanPeriodButtons}>
                            <Button className={styles.sliderButton} onClick={changeLoanPeriod} value={5}>5 лет</Button>
                            <Button className={styles.sliderButton} onClick={changeLoanPeriod} value={10}>10 лет</Button>
                            <Button className={styles.sliderButton} onClick={changeLoanPeriod} value={15}>15 лет</Button>
                            <Button className={styles.sliderButton} onClick={changeLoanPeriod} value={20}>20 лет</Button>
                        </div>
                    </div>

                    <div className={classes.interestRate}>
                        <p>Процентная ставка</p>
                        <input className={classes.interestRateInput} type="number" inputMode='numeric' value={interestRateValue} onChange={handleInterestRateInputChange} />
                        <Slider
                            min={1}
                            max={30}
                            step={0.1}
                            defaultValue={1}
                            onChange={handleInterestRateSliderChange}
                            value={interestRateValue} />

                        <div className={classes.loanPeriodButtons}>
                            <Button className={styles.sliderButton} onClick={changeInterestRate} value={4.5}>4,5%</Button>
                            <Button className={styles.sliderButton} onClick={changeInterestRate} value={6}>6%</Button>
                            <Button className={styles.sliderButton} onClick={changeInterestRate} value={7.5}>7,5%</Button>
                            <Button className={styles.sliderButton} onClick={changeInterestRate} value={9.1}>9,1%</Button>
                            <Button className={styles.sliderButton} onClick={changeInterestRate} value={10}>10%</Button>
                        </div>
                    </div>
                </div>
                <div className={classes.rightPanel}>
                    <p>Ваш ежемесячный платеж</p>
                    <div className={classes.monthlyPaymentCounter}>
                        <h1>{numberWithSpaces(monthlyPayment.toFixed())} ₽</h1>
                    </div>
                    <div className={classes.rightPanelElement}>
                        <p>Кредит</p>
                        <div >
                            <p>{numberWithSpaces(estateValue - firstDepositValue)} ₽</p>
                        </div>
                    </div>

                    <div className={classes.rightPanelElement}>
                        <p>Проценты</p>
                        <div >
                            <p>{numberWithSpaces(percents)} ₽</p>
                        </div>
                    </div>

                    <div className={classes.rightPanelElement}>
                        <p>Проценты+кредит</p>
                        <div >
                            <p>{numberWithSpaces(estateValue - firstDepositValue + percents)} ₽</p>
                        </div>
                    </div>

                    <div className={classes.rightPanelElement}>
                        <p>Необходимый доход</p>
                        <div >
                            <p>{numberWithSpaces(minIncome)}</p>
                        </div>
                    </div>

                    <Button href='http://www.yandex.ru' variant='contained' className={styles.applyButton}>
                        Подать заявку онлайн
                    </Button>
                </div>
            </div>
    );
}

