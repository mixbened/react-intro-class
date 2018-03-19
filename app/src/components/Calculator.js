import React, { Component } from 'react';
import calculatorImg from "../calculator.png"

class Calculator extends Component {
    constructor(){
        super();
        this.state = {
            header: 'Calculator',
            display: '0',
            operator:'',
            temp: 0,
            resetdisplay: false,
        }
    }

    updateHeader(val) {
        this.setState(() => {
            return {
                header: val,
            }
        })
    }

    updateDisplay(num){
        if(this.state.display === '0'){
        this.setState(() => {
            return {
                display: num,
            }
        })    
        } else {
        this.setState(() => {
            if(this.state.display.length < 13){
            return {
                display: this.state.display + num,
            }} else {
            return {
                display: num,
            }
            }
        })
        }
    }

    setOperator(op){
        if(!this.state.operator){
        this.setState(() => {
            return {
                operator: op,
                temp: this.state.display,
                display: '0',
            }
        })
    }
    }

    calculate(){
        if(this.state.operator === '+'){
            let result = parseInt(this.state.temp, 10) + parseInt(this.state.display, 10);
            this.setState(()=> {
                return {
                    display: result,
                }
            })
        } else if (this.state.operator === '-'){
            let result = parseInt(this.state.temp, 10) - parseInt(this.state.display, 10);
            this.setState(()=> {
                return {
                    display: result,
                }
            })
        } else if(this.state.operator === '*'){
            let result = parseInt(this.state.temp, 10) * parseInt(this.state.display, 10);
            this.setState(()=> {
                return {
                    display: result,
                }
            })  
        } else if(this.state.operator === '/'){
            let result = parseInt(this.state.temp, 10) / parseInt(this.state.display, 10);
            this.setState(()=> {
                return {
                    display: result,
                }
            })  
        }
    }

    clearAll(){
        this.setState(() => {
            return {
            display: '0',
            operator:'',
            temp: 0,
            resetdisplay: false, 
            }
        })
    }

    render(){
        return (
            <div id="calculator-container">
            <input id="header-input" onChange={e => this.updateHeader(e.target.value)}/>
            <h1 id="header"> {this.state.header} </h1>
            <img className="remove-highlight" src={calculatorImg} alt="calculator" />
            <div id="calculator-mask" className="remove-highlight">
                <div className="output">
                <span className="total">{this.state.display}</span>
                </div>
        
                <div className="btn clear" onClick={e => this.clearAll()}></div>
        
                <div className="btn zero" onClick={e => this.updateDisplay('0')}></div>
                <div className="btn one" onClick={e => this.updateDisplay('1')}></div>
                <div className="btn two" onClick={e => this.updateDisplay('2')}></div>
                <div className="btn three" onClick={e => this.updateDisplay('3')}></div>
                <div className="btn four" onClick={e => this.updateDisplay('4')}></div>
                <div className="btn five" onClick={e => this.updateDisplay('5')}></div>
                <div className="btn six" onClick={e => this.updateDisplay('6')}></div>
                <div className="btn seven" onClick={e => this.updateDisplay('7')}></div>
                <div className="btn eight" onClick={e => this.updateDisplay('8')}></div>
                <div className="btn nine" onClick={e => this.updateDisplay('9')}></div>
        
                <div className="btn equal" onClick={e => this.calculate()}></div>
                <div className="btn multiply" onClick={e => this.setOperator('*')}></div>
                <div className="btn divide" onClick={e => this.setOperator('/')}></div>
                <div className="btn subtract" onClick={e => this.setOperator('-')}></div>
                <div className="btn add" onClick={e => this.setOperator('+')}></div>
            </div>
            </div>
        )
    }
}

export default Calculator;
