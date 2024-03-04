const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();
yesBtn.addEventListener("click", () => {
  question.innerHTML = "I Know it :)<br> U have a bright future !!";
  const questionIcon = document.getElementById("question-icon");
  questionIcon.outerHTML = `<img src="image.jpg" id="imagepic" >`;
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});
noBtn.addEventListener("mouseover", () => {
  const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
  const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
  noBtn.style.left = i + "px";
  noBtn.style.top = j + "px";
});
