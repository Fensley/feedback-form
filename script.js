const textArea = document.getElementById("textarea");
const btn = document.getElementById("btn");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

textArea.addEventListener("input", (e) => {
  const message = e.target.value;
});

btn.addEventListener("click", () => {
  document.getElementsByClassName("select-holder")[0].placeholder =
    "thanks we recieve your feedback";
});

// not functional yet
