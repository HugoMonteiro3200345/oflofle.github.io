function importData() {
    
  for (let r=0; r<tabCores.getRowCount(); r++) {
    const cor  = tabCores.getString (r, "cor");
    const tamanho = tabCores.getNum  (r, "tamanho");
    
    data_element = new DataElement (cor, tamanho);
  }
}

function drawData() {
  
  const scalar = height/tabCores.getRowCount();
  data_element.drawDataElement (scalar);
}