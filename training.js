let plus = document.querySelectorAll(".plus");
let answers = document.querySelectorAll(".answers");

// function work() {
//       for (let i of answers) {
//         i.classList.toggle("show");

//   answers[i].classList.toggle("show");
//   console.log(answers[i]);

//       }
// }

// a forEach loop

plus.forEach((item) => {
  item.addEventListener("click", () => {
    answers.forEach((i) => {
      i.classList.toggle("show");
    });
  });
});
