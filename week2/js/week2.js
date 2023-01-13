const title = document.querySelector(".welcome");
const btnHam = document.querySelector(".ham");
const clickedNav = document.querySelector("#right-nav");
const sidebar = document.querySelector(".sidebar");
const close = document.querySelector(".material-icons");
const button = document.querySelector(".button");
const contentBox3 = document.querySelector(".content-box-3");
const contentBox4 = document.querySelector(".content-box-4");



title.addEventListener("click", () => {
  title.innerHTML = "<h1 class=welcome>Have a nice day!</h1>";
});

//動作：點擊漢堡 >> 反應：跳出選單
//判斷選單是否開著>>開著>>點擊x關閉>>回到原來的畫面

//彈出選單 right-nav

btnHam.addEventListener("click", () => {
  btnHam.style.display = "none";
  sidebar.style.display = "flex";
});
close.addEventListener("click", () => {
  sidebar.style.display = "none";
  btnHam.style.display = "flex";
});

//button.addEventListener("click", () => {
//    contentBox3.style.display = "flex";
//    contentBox4.style.display = "flex";
//  
//    if（contentBox3.style.display === "flex"） {
 //   contentBox3.style.display = "none";
//    contentBox4.style.display = "none";
//  }
//});

button.addEventListener("click", () => {
  //console.log("ok");
  if(contentBox3.style.display === "flex") {
    contentBox3.style.display = "none";
    contentBox4.style.display = "none";
  }
  else{
  contentBox3.style.display = "flex";
  contentBox4.style.display = "flex";
  }
});
