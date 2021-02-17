const mainTitle = document.querySelector(".mainTitle"),
      btn = document.querySelector(".btn"),
      title = document.querySelector(".title");
      // changeBtn = document.querySelector(".changeBtn");
let btnTitle = document.querySelector(".btnTitle");

let changeBtn = document.querySelector(".changeBtn");
let words = document.querySelectorAll(".span");

// ширина блока анимация

btn.addEventListener("click", () => {
  console.log("click");
  mainTitle.classList.add("anim");
  if (mainTitle.classList.contains("anim")) {
    mainTitle.style.width = 500 + "px";
  }
});

// написание текста анимация

btn.addEventListener("click", () => {
  function fTypeText() {
    let anyString = title.textContent;
    title.innerHTML = '';
    let i = 0;
    title.style.opacity = 100;
    let fType = function() {
      if (i < anyString.length) {
        title.insertAdjacentHTML('beforeend', `<span>${anyString[i]}</span>`);
      }
      i++;
    }
    title.addEventListener("animationend", fType);
    fType();
    
  };
  setTimeout(fTypeText, 1000);
});

// анимация кнопки

btn.addEventListener("click", removeStyles);

function removeStyles(){
  // анимация высоты кнопки
  function AnimHeight(){
    btn.classList.add("widthAnim");
    setTimeout(function delayWidth(){
      if (btn.classList.contains("widthAnim")) {
        btn.style.paddingTop = 0 + "px";
        btn.style.paddingBottom = 0 + "px";
      }
    }, 500);
  }
  setTimeout(AnimHeight, 500);
  // анимация ширины кнопки
  function AnimWidth(){
    btn.classList.add("heightAnim");
    setTimeout(function delayHeight(){
      if (btn.classList.contains("heightAnim")) {
        btn.style.paddingLeft = 0 + "px";
        btn.style.paddingRight = 0 + "px";
      }
    }, 800);
  }
  setTimeout(AnimWidth, 800);
  setTimeout(removeStyles, 0);
}


btn.addEventListener("click", fRemoveText);

function fRemoveText() {  
  let anyString = btnTitle.textContent;
  let i = 0;
  let fRemove = function() {
    if (i <= anyString.length) {
      btnTitle.innerHTML = anyString.substring(0, anyString.length - i);
      setTimeout(arguments.callee, 200);
    }
    i++;
  }
  setTimeout(fRemove, 0);
};

btn.addEventListener("click", function hashTags() {
  // анимация хештегов
  // for (let i = 0; i < words.length; i++) ← как там:
  let i = 0; // 1. Инициализация переменной,
  
  function _loop() {
    if (i >= words.length) {
      return;
    }
    // 2. «Тело цикла» выполняется только если условие верно.
    if (words[i].id % 2 ==0) {
      words[i].classList.add("right");
    }else {
      words[i].classList.add("left");
    }

    i++; // 3. Перед каждой итерацией.
    
    setTimeout(_loop, 700); // Следующая итерация запустится через 0.5 секунды.

    words.forEach(function(e, i){
      setTimeout(function(){
        if (e.classList.contains("right")){
          e.classList.remove("rightSlide");
          e.classList.remove("right");
        }else {
          e.classList.remove("leftSlide");
          e.classList.remove("left");
        }
      }, 4000);
    });
  };
  setTimeout(_loop, 2500);
});

// parallax 

let btnBlock = document.querySelector(".btnBlock");
let page = document.querySelector(".page");

page.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 15;
  btnBlock.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});








