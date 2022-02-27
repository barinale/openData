  class Slider {
  constructor(Arrow, items, progress = null) {
    this.LeftArrow = document.querySelector("#useCases .arrowLeft");
    this.RightArrow = document.querySelector("#useCases .arrowRight");
    this.items = items;
    this.merge = this.items.getBoundingClientRect().x;
    this.postion = 0;
    this.addEvent();
    this.item = this.items.querySelectorAll(".item");
    this.postions = this.allPostion();
    if (progress != null) {
      this.progress = progress;
      this.move();
      this.width = 8;
    }
    this.click = false;
    this.step = this.getSteps();
    this.LeftMove();
    this.rightMove();
  }
  getSteps() {
    let step = 0;
    this.item.forEach((element) => {
      if (
        element.getBoundingClientRect().x +
          element.getBoundingClientRect().width +
          this.merge >
        window.innerWidth
      ) {
        step++;
      }
    });
    return step;
  }
  addEvent() {
    this.LeftArrow.addEventListener("click", () => {
      if (this.progress != null) {
        this.width = 8;
        this.check();
        this.click = true;
      }
      this.LeftMove();
    });
    this.RightArrow.addEventListener("click", () => {
      if (this.progress != null) {
        this.width = 8;
        this.check();
        this.click = true;
      }
      this.rightMove();
    });
  }
  allPostion() {
    let Array = [];
    this.item.forEach((element) => {
      Array.push(element.getBoundingClientRect().x - this.merge);
    });
    return Array;
  }
  LeftMove() {
    if (this.postion == this.step) {
      this.postion = 0;
      this.items.style.right = `${this.postions[this.postion]}px`;
    } else {
      this.postion++;
      this.items.style.right = `${this.postions[this.postion]}px`;
    }
  }
  rightMove() {
    if (this.postion == 0) {
      this.postion = this.step;
      this.items.style.right = `${this.postions[this.postion]}px`;
    } else {
      this.postion--;
      this.items.style.right = `${this.postions[this.postion]}px`;
    }
  }
  resize() {
    this.items.style.right = this.postions[0];
    this.merge = this.items.getBoundingClientRect().x;
    console.log(this.step)
    console.log(this.postions)
    this.items.style.left = `0px`;
    this.item = this.items.querySelectorAll(".item");
    this.postions = this.allPostion();
    this.step = this.getSteps();
    if (this.progress != null) {
      this.click = true;
      this.check();
      this.width = 8;
    }
    this.postion = 0;
    this.items.style.left = `initial`;
  }
  move() {
    setInterval(() => {
      this.progress.style.width = this.width + "%";

      if (!this.click) {
        this.progress.style.width = this.width + "%";
        this.width++;
        if (this.width >= 100) {
          this.width = 0;
          this.LeftMove();
        }
      }
    }, 70);
  }
  check() {
    setTimeout(() => {
      this.click = false;
    }, 3000);
  }
}

const SliderMain = new Slider(
  null,
  document.querySelector("#useCases .items"),
  null
);


window.addEventListener("resize", () => {
  SliderMain.resize();

});

class SliderButton{
  constructor(items,button){
    this.item = items.querySelectorAll('.item');
    this.button = button.querySelectorAll('span');
    console.log(this.item)
    console.log(this.button)
    this.addEvent()
  }
  addEvent(){
    var self = this;
    this.button.forEach(element=>{
      element.addEventListener('click',()=>{
        self.ShowAndDisplay(element.className,element)
      })
    })
  }
  ShowAndDisplay(postion,element){
    console.log(postion)
    switch(postion){
      case "1" :
       this.resetColorButton()
        this.item[0].style.display="block"
        element.style.backgroundColor="#58DD3A";
        this.item[1].style.display="none"
        
        this.item[2].style.display="none"
      break;
      case "2" :
       this.resetColorButton()

        this.item[0].style.display="none"
        this.item[1].style.display="block"
        this.item[2].style.display="none"
        element.style.backgroundColor="#58DD3A";
      
        break;
        case "3":
       this.resetColorButton()
        element.style.backgroundColor="#58DD3A";

        this.item[0].style.display="none"
        this.item[1].style.display="none"
        this.item[2].style.display="block"
      
          break;
    }
  }
  resetColorButton(){
      this.button.forEach(element=>{
          element.style.backgroundColor = "#ffffff"
        })
  }
}


const SliderButton1 = new SliderButton(document.querySelector('.sectionHeaderInfo .items'),document.querySelector('.sectionHeaderInfo .buttonDeplace'))