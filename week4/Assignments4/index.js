function ajax(url) {
  // your code here
  return fetch(url, { method: "get" })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(`Error: ${error}`);
    });
}

const a = [1, 2, 3, 4];

function render(data) {
  // your code here
  const datas1 = document.querySelector(".words1");
  const datas2 = document.querySelector(".words2");
  //<div class="topics">${products.topics}<div></div>
  const btn = document.querySelector("#btn");
  
  let newHTML = "";

  for (let i = 0; i < 5; i++) {
    let products = data[i];
    let newArray = products.topics;
    //console.log(newArray)
    const test = newArray
      .map((item) => `<div class="topics">${item}</div>`)
      .join("");

    //console.log(test);
    newHTML += `<span class="item">
                    <div class="line1">
                        <div class="name">${products.name}</div>
                        <div class="visibility">${products.visibility}</div>
                    </div>
                    <div class="description">${products.description}</div>
                    ${test}
                    </span>

                    <hr id="hr${i}"></hr>`;

    datas1.innerHTML = newHTML;
  }
  btn.addEventListener("click", () => {
    hr4.style.display='block';
    console.log("you click");
     let fiveMoreData="";
     if(fiveMoreData===""){
             for (let i = 5; i < 10; i++) {
                 let products = data[i];
                 let newArray = products.topics;
                 const test = newArray
                 .map((item) => `<div class="topics">${item}</div>`)
                 .join("");
                 fiveMoreData += `<span class="item">
                             <div class="line1">
                                 <div class="name">${products.name}</div>
                                 <div class="visibility">${products.visibility}</div>
                             </div>
                             <div class="description">${products.description}</div>
                             ${test}
                             </span>
    
                             <hr id="hr${i}"></hr>`;
                 
                 datas2.innerHTML = fiveMoreData;
                 datas2.style.display='flex';
                 btn.style.display='none';
                
    //             //console.log(fiveMoreData==="")
             }
         }

    }
    
  );
}
//   ${test}

const url = "https://api.github.com/orgs/facebook/repos?per_page=10&amp;page=1";

ajax(url).then((data) => {
  render(data);
});
