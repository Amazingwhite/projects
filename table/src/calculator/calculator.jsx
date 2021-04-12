import { Button, makeStyles } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import './calculator.css';

const useStyles = makeStyles({
    calculator: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    container: {
        width: 970,
        height: 700,
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: '#f1f2f4',
        margin: 'auto'
    },
    leftPanel: {
        width: 384,
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left'
    },
    switchCalculator: {
        display: 'flex',
        flexDirection: 'row'
    },
    rightPanel: {
        width: 296,
        display: 'flex',
        flexDirection: 'column'
    },
    switchCalculatorButton: {
        flexGrow: 1,
        fontSize: 14,
        lineHeight: '22px',
        color: '#0468FF',
        fontWeight: 400
    },
    estateCost: {
        margin: 8
    },
    estateCostText: {
        display: 'block'
    },
    input:{
    width: '100%',
    border: '1px solid #CED1D7',
    height: 40,
    outline: 'none',
    padding: '9px 12px',
    fontSize: 16,
    boxSizing:' border-box',
    fontFamily: 'Lato,Arial,sans-serif',
    lineHeight: 22,
    borderRadius: 4
    }
})

function Calculator() {
    const classes = useStyles();
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
                        <input className={classes.input}></input>
                        <Slider></Slider>
                    </div>
                    
                    <h1>Hello</h1>
                </div>
                <div className={classes.rightPanel}>
                    <h1>Hello but right side</h1>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
