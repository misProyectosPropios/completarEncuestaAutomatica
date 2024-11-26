

ListOfIframe = document.getElementsByTagName("iframe");

console.log(ListOfIframe);

for(const iframe of ListOfIframe) {
  h2Tags = iframe.contentDocument.getElementsByTagName("h2");
  console.log(h2Tags);
  for (const title of h2Tags) {
    if (title.firstChild.textContent.includes("Evaluación") && confirm("Autocompleta campo?")) {
      //Seleccionar campos correctos (No responde)
    	radioButtons = title.parentElement.getElementsByTagName("input");
      for (const button of radioButtons) {
      	if (button.type === 'radio' && button.parentElement.childNodes[2].data.includes("No Responde")) {
      		button.checked = true;
      	}
    	}
    }
  }
}


