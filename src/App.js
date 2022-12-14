import React from 'react';
import './App.css';
import WordCard from './WordCard';
import 'animate.css';


const character = "4352+-*";
function App() {
  return (
    <div>
      <h1 className="head animate__animated  animate__slideInDown">เกม24 หรรษา</h1>
      <h3 className="para animate__animated animate__lightSpeedInRight">วิธีการเล่น นี้คือเกม24อย่างง่าย คือเป็นเกมทางคณิตศาสตร์ที่จะมีตัวเลขมาให้ทั้งหมด 4 ตัว 
        จากนั้นนำตัวเลขทั้งหมดมา บวก ลบ คูณ  กันให้ได้แต้มเท่ากับ 24 โดยตัวเลขเพียง 1 ตัวจะใช้ได้เพียง 1 ครั้งเท่านั้น
        และจำเป็นต้องใช้เครื่องหมายคณิตศาตร์ให้ครบทุกตัว ***และอย่าลืมเปิด Developer tools</h3>
      <h4>รูปแบบ การกด --> 1)เลขที่1 เครื่องหมายที่1 เลขที่2 = ผลลัพท์1   ------------->   2)ผลลัพท์1 เครื่องหมายที่2 เลขที่3 = ผลลัพท์2  ---------------->  3)ผลลัพท์2 เครื่องหมายที่3 เลขที่4 = ผลลัพท์สุดท้าย </h4>
      <WordCard value={character}/>
      <h2 className="head animate__animated animate__bounceIn animate__delay-2s">ขอยอมแพ้ ดูเฉลย!!</h2>
      <h3 className='box animate__animated animate__fadeIn animate__delay-2s'>
        ---------------------------------
        5 + 3 - 2 * 4 กับ 3 - 2 + 5 * 4 
        ---------------------------------
        </h3>
    </div>
  );
}

export default App;
