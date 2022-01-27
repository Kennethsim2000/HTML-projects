class Calculator{

    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement=previousOperandTextElement
        this.currentOperandTextElement=currentOperandTextElement
        this.clear()
    }

    clear(){
        this.currentOperand=''
        this.previousOperand=''
        this.operation=undefined
    }

    delete(){
        this.currentOperand=this.currentOperand.toString().slice(0,-1)
    /*slice() returns selected elements in an array, as a new array. Negative numbers select from the 
    end of array. slice(0,-1) select all elements except for the last element. */    
    }

    appendNumber(number){
        if(number==='.'&&this.currentOperand.includes('.'))  return
        this.currentOperand=this.currentOperand.toString()+number.toString();
    /*This is so we can append the numbers behind each other */    
    }

    chooseOperation(operation){
        if(this.currentOperand==='')   return
        if(this.previousOperand!==''){
            this.compute();
        //This is if there is already an operation, a current operand and a previous operand
        //Then u would want to compute and then return the new result with the new operation    
        }
        this.operation=operation;
        this.previousOperand=this.currentOperand
        this.currentOperand=''
    }

    compute(){
        let computation
        const prev=parseFloat(this.previousOperand)
        const current=parseFloat(this.currentOperand)
        /*parseFloat converts a String to a float. If the argument is not a string, then it is converted
        to one using toString */
        if(isNaN(prev)||isNaN(current)) return
        switch(this.operation){
            case '+':
                computation=prev+current
                break
            case '-':
                computation=prev-current
                break
            case '*':
                computation=prev*current
                break
            case '÷':
                computation=prev/current
                break    
            default:
                return
        } 
        this.currentOperand=computation
        this.operation=undefined
        this.previousOperand=''
    }
    
    getDisplayNumber(number){
       const stringNumber=number.toString
       const integerDigits=parseFloat(stringNumber.split('.')[0])
       const decimalDigits=stringNumber.split('.')[1]
       let integerDisplay
       if(isNaN(integerDigits)){
           integerDisplay=''
       //This is if a  number is not selected    
       }else{
           integerDisplay=integerDigits.toLocaleString('en',{
               maximumFractionDigits:0})
 //toLocaleString is a Number method used to convert a number into a locale-specific numberic representation of the number              
       }
       if(decimalDigits!=null){
           return `${integerDisplay}.${decimalDigits}`
       }else{
           return integerDisplay
       }

    }

    updateDisplay(){
        this.currentOperandTextElement.innerText=this.getDisplayNumber(this.currentOperand)
        if(this.operation!=null){
            this.previousOperandTextElement.innerText=
            `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        }
    }
}


const numberButtons=document.querySelectorAll('[data-number]')
const operationButtons=document.querySelectorAll('[data-operation')
const equalsButton=document.querySelector('[data-equals]')
const deleteButton=document.querySelector('[data-delete]')
const allClearButton=document.querySelector('[data-all-clear]')
const previousOperandTextElement=document.querySelector('[data-previous-operand]')
const currentOperandTextElement=document.querySelector('[data-current-operand]')

const calculator=new Calculator(previousOperandTextElement,currentOperandTextElement)

numberButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

/*innerText returns the text content of an element without spacing or descendants. innerHTML returns 
the content of an element and any spacing and descendants */

operationButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click',button=>{
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click',button=>{
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click',button=>{
    calculator.delete()
    calculator.updateDisplay()
})