// toggle share button

const shareBtn = document.querySelector(".share-button");
const footer = document.querySelector(".card-footer");
const shareSvg = document.querySelector(".share");

shareBtn.onclick = () => {
  footer.classList.toggle("active");
  shareSvg.classList.toggle("clicked");
};

// social media share

const facebook = document.querySelector(".fb-btn");
const twitter = document.querySelector(".twitter-btn");
const pinterest = document.querySelector(".pinterest-btn");

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
