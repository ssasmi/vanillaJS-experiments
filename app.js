const text = document.querySelector(".text span");

const btnsCaunter = document.querySelectorAll(".btn-2");
const count = 0;

console.log(btnsCaunter);
btnsCaunter.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        return console.log(e.currentTarget.classList)
    })
})
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
