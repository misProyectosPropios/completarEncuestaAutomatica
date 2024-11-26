ListOfIframe = document.getElementsByTagName("iframe");

for(const iframe of ListOfIframe) {
  h2Tags = iframe.contentDocument.getElementsByTagName("h2");

  for (const title of h2Tags) {
    let valor;
    if (title.firstChild.textContent.includes("Docente")) {
      valor = title.parentElement.childNodes[1].childNodes[1].childNodes[3].childNodes[1]
    } else if (title.firstChild.textContent.includes("Materia")) {
      valor = title.parentElement.childNodes[1].childNodes[1].childNodes[1]
    }
    if (title.firstChild.textContent.includes("Evaluación") && confirm("No conoce a " + valor.innerHTML + "?")) {
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
