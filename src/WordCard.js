import React, {useState} from 'react';
import _, { attempt } from 'lodash';
import CharacterCard from './CharacterCard';

const prepareStateFromWord = (given_word) => {

    let word = given_word.toUpperCase()
    
    let chars = _.shuffle(Array.from(word))
    
    return {
     word,
     chars,
     attempt: 1,
     guess: '',
     completed: false
    }
}

export default function WordCard(props){

    const [state, setState] = useState(prepareStateFromWord(props.value))

    const activationHandler = c => { 
        console.log(`คุณเลือก ${c}`)
        
        let guess = state.guess + c //ค่ากดอะไรมาแล้ว
        setState({...state, guess}) // set state เป็น state ใหม่ 
        //split
        let usingsplit = guess.split('');
        let sum1,sum2,sum3;
        let fin_sum = 24;

        //sum1
            if (usingsplit[1] == '+'){
                sum1 = parseInt(usingsplit[0]) + parseInt(usingsplit[2]);
            }else if (usingsplit[1] == '-')
            {
                sum1 = parseInt(usingsplit[0] - usingsplit[2]);
            }else if (usingsplit[1] == '*')
            {
                sum1 = parseInt(usingsplit[0] * usingsplit[2]);
            }

        //sum2
            if (guess.length == 3){
            console.log('ผลลัพท์ = ' + sum1)
            }

            if (usingsplit[3] == '+'){
                sum2 = sum1 + parseInt(usingsplit[4])
            }else if (usingsplit[3] == '-')
            {
                sum2 = sum1 - parseInt(usingsplit[4])
            }else if (usingsplit[3] == '*')
            {
                sum2 = sum1 * parseInt(usingsplit[4])
            }

        if (guess.length == 5){
            console.log('ผลลัพท์2 = ' + sum2)
        }

        //sum3
             if (usingsplit[5] == '+'){
                sum3 = sum2 + parseInt(usingsplit[6])
            }else if (usingsplit[5] == '-')
            {
                sum3 = sum2 - parseInt(usingsplit[6])
            }else if (usingsplit[5] == '*')
            {
                sum3 = sum2 * parseInt(usingsplit[6])
            }

        if (guess.length == 7){
            console.log('ผลลัพท์3 = ' + sum3)
        }

        if (guess.length == state.word.length){
            if(sum3.length == fin_sum.length){ //ถ้าตัวอักษรยาวเท่ากับของเดิมไหม
            if(sum3 == fin_sum){ //ถ้าตัวอักษรเหมือนกับของเดิม
            console.log('เย้!! คุณชนะ เกม24')
            setState({...state, guess: '', completed: true})
            }else{ //ถ้าไม่ ให้reset
            console.log('คำตอบไม่ถูก, เริ่มเกมใหม่')
            setState({...state, guess: '', attempt: state.attempt + 1})
            }
          } 
        }
    }
 return (
 <div>
     {
       state.chars.map((c, i) =>
       
        <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>
        )
       }
     </div>
 )
}
