const tec_btn = document.querySelectorAll(".btn_tec");
const res = document.querySelectorAll(".hidden .pre");

console.log(res);

tec_btn.forEach((btn, index) => {
  btn.addEventListener("mouseover", () => {
    res.forEach((pre) => {
      pre.style.display = "none";
    });
    res[index].style.display = "block";
  });
});
