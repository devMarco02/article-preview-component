// toggle share button

const shareBtn = document.querySelector(".card__share-button");
const footer = document.querySelector(".card__footer");
const shareIcon = document.querySelector(".card__share-icon");
const shareLinks = document.querySelector(".card__share-links");

shareBtn.onclick = () => {
  footer.classList.toggle("card__footer--active");
  shareIcon.classList.toggle("card__share-icon--active");
  shareBtn.classList.toggle("card__share-button--active");
  shareLinks.classList.toggle("card__share-links--active");
};

// social media share

const facebook = document.querySelector(".card__media-link--fb");
const twitter = document.querySelector(".card__media-link--twitter");
const pinterest = document.querySelector(".card__media-link--pinterest");

const init = () => {
  const img = document.createElement("img");
  img.src = "./images/drawers.jpg";

  const postUrl = encodeURI(document.location.href);
  const postTitle = encodeURI("Hi everyone, please check this out: ");
  const drawerImg = img.src;

  facebook.setAttribute(
    "href",
    `https://www.facebook.com/sharer.php?u=${postUrl}`
  );

  twitter.setAttribute(
    "href",
    `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
  );

  pinterest.setAttribute(
    "href",
    `https://pinterest.com/pin/create/bookmarklet/?media=${drawerImg}&url=${postUrl}&description=${postTitle}`
  );
};

init();
