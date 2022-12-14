class DataElement {
  
    constructor (cor, tamanho) {
      this.cor  = cor;
      this.tamanho = tamanho;
    }

    drawDataElement (scalar) { 

        for (let a=0; a<tabCores.getRowCount(); a++) {

          const cor  = tabCores.getString (a, "cor");
          const size = tabCores.getNum    (a, "tamanho");

            for(let b=0; b<radians(360); b+=radians(60)) {

                push();
                translate(width/2, height/2);
                rotate(a);
                translate(0, 200);
                ellipseMode(CENTER);
                fill(cor);
                ellipse(0,0,size);
                pop();
                data_element = new DataElement (cor, size);
            }  
        }
    }
}