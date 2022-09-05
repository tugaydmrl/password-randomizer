import React, { useState } from "react"

import "./PasswordRandomizer.css";

const PasswordRandomizer = () => {
  const [length, setLength] = useState(6);
  const [password, setPassword] = useState("");
  const [useLowerCase, setUseLowerCase] = useState(true);
  const [useUpperCase, setUseUpperCase] = useState(false);
  const [useNumbers, setUseNumbers] = useState(false);
  const [useSymbols, setUseSymbols] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = lowerCase.toUpperCase();
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()+/=?_-~æ";

  const generatePassword = () => {
    setPassword("");
    let generatedPassword = "";
    let chars = [
      useLowerCase ? lowerCase : [],
      useUpperCase ? upperCase : [],
      useNumbers ? numbers : [],
      useSymbols ? symbols : [],
    ].join("");

    for(let i = 0; i <= length; i++){
      let randomNumber = Math.floor(Math.random() * chars.length);
      generatedPassword += chars.substring(randomNumber, randomNumber + 1);
    }

    setPassword(generatedPassword);
  }

  let time = 3;
  const copyPassword = () => {
    if(password.length){
      navigator.clipboard.writeText(password);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
      return;
    }
    alert("You can't copy without generate password.");
  }

  return (
    <div className="passwordRandomizer">
      <div className="inputs">
        <div className="passwordSection">
          <input type="text" className="passwordInput" placeholder="Create a password" value={password} readOnly />
          <i className="fa-regular fa-clipboard icon" onClick={(e: React.MouseEvent<HTMLElement>) => copyPassword()}></i>
        </div>
        <span className="copyInformation" style={{ display: isCopied ? "block" : "none"}}>Succesfully copied!</span>
        <div className="controlSection">
          <div className="controls">
            <label htmlFor="lowercase" className="option option-checkbox">Lowercase
              <input type="checkbox" name="lowercase" checked={useLowerCase} />
              <div className="option_indicator" onClick={(e: React.MouseEvent<HTMLElement>) => setUseLowerCase(!useLowerCase)}></div>
            </label>
            <label htmlFor="uppercase" className="option option-checkbox">Uppercase
              <input type="checkbox" name="uppercase" checked={useUpperCase} />
              <div className="option_indicator"  onClick={(e: React.MouseEvent<HTMLElement>) => setUseUpperCase(!useUpperCase)}></div>
            </label>
          </div>  
          <div className="controls">
            <label htmlFor="numbers" className="option option-checkbox">Numbers
              <input type="checkbox" name="numbers" checked={useNumbers} />
              <div className="option_indicator" onClick={(e: React.MouseEvent<HTMLElement>) => setUseNumbers(!useNumbers)}></div>
            </label>
            <label htmlFor="symbols" className="option option-checkbox">Symbols
              <input type="checkbox" name="symbols" checked={useSymbols} />
              <div className="option_indicator" onClick={(e: React.MouseEvent<HTMLElement>) => setUseSymbols(!useSymbols)}></div>
            </label>
          </div>
        </div>
        <div className="length">
          <label htmlFor="length">Password Length</label>
          <input type="range" className="istyle" name="length" min="6" max="20" value={length} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLength(e.target.value as any)} />
          <span>{length}</span>
        </div>
      </div>
        <button onClick={(event: React.MouseEvent<HTMLElement>) => generatePassword()} className="generate-btn">Generate</button>
    </div>
  )
}

export default PasswordRandomizer