//const { brotliDecompressSync } = require("zlib");







 function processFormData() {
  const numberElement = document.getElementById("number");
  const number = numberElement.value;
  console.log(number);

  fetch(`http://localhost:3000/getData?number=${number}`, 
    {headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }})
    
    .then(res => res.text())
    .then(num => {
      const newNum = document.querySelector('.content')
      newNum.innerHTML = `<h1 id="result">${num}</h1>`
    })
  
}