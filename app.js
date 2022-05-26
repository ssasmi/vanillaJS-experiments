const text = document.querySelector(".text span");

const btnsCounter = document.querySelectorAll(".btn-2");
let count = 0;

function getCount() {
  return --count;
}
console.log(btnsCounter);
btnsCounter.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("dec")) {
      getCount();
    } else if (styles.contains("inc")) {
      ++count;
    } else {
      count = 0;
    }
    btnsCounter.forEach((btn) => {
      btn.textContent = `${"n   " + btn.classList[1]}: ${count}`;
    });

    count>=0?text.style.backgroundColor = "green":text.style.backgroundColor = "red"
  });
});
text.textContent = count;
// color /////////////////////////////
const btnColor = document.getElementById("color");

//const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};

const handleColor = () => {
  const colorRandom = `#${((Math.random() * 0xfff) << 0).toString(16)}`;

  //text.textContent = colors[Math.floor(Math.random() * colors.length)];
  text.textContent = randomRgb();
  document.body.style.backgroundColor = text.textContent;
};

btnColor.addEventListener("click", handleColor);
///////////////////////////////////
