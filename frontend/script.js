const Display = document.getElementById("Display");
const Buttons = Array.from(document.getElementsByClassName("button"));

Buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        Display.innerText = "";
        break;
      case "←":
        if (Display.innerText) {
          Display.innerText = Display.innerText.slice(0, 1);
        }
        break;

      case "=":
        try {
          Display.innerText = eval(Display.innerText);
        } catch {
          Display.innerText = "Error";
        }
        break;
      default:
        Display.innerText += e.target.innerText;
    }
  });
});
