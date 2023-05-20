let currentPos = 0;
const colorWidth = 189;
  let content = document.getElementById("content")
  console.log(content)
  let next = document.querySelector(".next");
  let prev = document.querySelector(".prev");
  const slide = event => {
    if (event.target.value == 'prev') {
      if (currentPos === -4 * colorWidth) {
        currentPos = 0;
      } else {
        currentPos = currentPos - colorWidth;
      }
    } else {
      if (currentPos === 0) {
        currentPos = -4 * colorWidth;
      } else {
        currentPos = currentPos + colorWidth;
      }
    }
    console.log(currentPos)
    content.style.left = currentPos + "px";
  };

  prev.addEventListener("click", slide);
  next.addEventListener("click", slide);

