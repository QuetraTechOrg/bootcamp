function changeText() {
  // Access the heading element by its ID
  const heading = document.getElementById("heading");

  // Change the text content of the heading
  heading.textContent = "MERN STACK PRO BOOTCAMP";

  // Access the paragraph element by its ID
  const paragraph = document.getElementById("content");

  // Add a CSS class to highlight the paragraph
  paragraph.classList.add("highlight");

  //change the text content
  paragraph.innerText = "new text";
}

function seePassword() {
  const passwordInput = document.getElementById("motDePasse");
  console.log(passwordInput);
}
