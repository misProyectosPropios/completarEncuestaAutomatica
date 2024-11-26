radioButtons = document.getElementsByTagName("input");
for (const button of radioButtons) {
  	if (button.type === 'radio' && button.parentElement.childNodes[2].data.includes("No Responde")) {
      button.checked = true;
    }
}
