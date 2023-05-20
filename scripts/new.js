console.clear();
const feedbackCarousel = document.querySelector("[data-feedback-carousel]");
const feedbackPrevBtn = document.querySelector("[data-feedback-prev-btn]");
const feedbackNextBtn = document.querySelector("[data-feedback-next-btn]");
const maxCardNumber = 2;
let currentCardPosition = 1;
const feedbackData = [
  {
    thumbnail: "https://picsum.photos/id/200/100/100",
    userName: "Person #01",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla, nulla sed tempus varius."
  },
  {
    thumbnail: "https://picsum.photos/id/100/100/100",
    userName: "Person #02",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla, nulla sed tempus varius."
  },
  {
    thumbnail: "https://picsum.photos/id/50/100/100",
    userName: "Person #03",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla, nulla sed tempus varius."
  },
  {
    thumbnail: "https://picsum.photos/id/20/100/100",
    userName: "Person 04",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla, nulla sed tempus varius."
  },
  {
    thumbnail: "https://picsum.photos/id/30/100/100",
    userName: "Person 05",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla, nulla sed tempus varius."
  },
  {
    thumbnail: "https://picsum.photos/id/40/100/100",
    userName: "Person 06",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla, nulla sed tempus varius."
  }
];

function renderFeedback() {
  feedbackCarousel.innerHTML = feedbackData
    .map((feedback, index) => {
      console.log(
        `index:${index}, currentCardPosition: ${currentCardPosition}, maxCardNumber: ${maxCardNumber}`
      );
      if (index + 1 < currentCardPosition) {
        return;
      }
      if (index + 1 < currentCardPosition + maxCardNumber)
        return `
        <li class="feedbackCard">
        
          <div class="feedback__userName">${feedback.userName}</div>
          <p class="feedback__content">${feedback.content}</p>
        </li>
        `;
    })
    .join("");
}

feedbackPrevBtn.addEventListener("click", () => {
  if (currentCardPosition <= 1) {
    return;
  }
  currentCardPosition -= 1;
  renderFeedback();
});

feedbackNextBtn.addEventListener("click", () => {
  if (currentCardPosition === feedbackData.length) {
    return;
  }
  currentCardPosition += 1;
  renderFeedback();
});

renderFeedback();
