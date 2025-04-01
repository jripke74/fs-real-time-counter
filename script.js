const textInput = document.querySelector("#text-input");
const charCount = document.querySelector("#char-count");

function updateCharacterCount() {
  const text = textInput.value;
  const count = text.length;

  if (count > 50) {
    textInput.value = text.substring(0, 50);
  }

  const updatedCount = textInput.value.length;
  charCount.textContent = `Character Count: ${updatedCount}/50`;

  if (updatedCount >= 50) {
    charCount.style.color = "red";
  } else {
    charCount.disable = true;
  }
}

textInput.addEventListener("input", updateCharacterCount);

updateCharacterCount();
