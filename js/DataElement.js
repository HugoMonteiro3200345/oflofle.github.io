let textL, textP;

/* Vai buscar os dados das bolasw já delarados */
class DataElement {
  
  
    constructor (ano, numero_alunas, cor, tamanho) 
    {
      this.ano = ano;
      this.numero_alunas = numero_alunas;
      this.cor  = cor;
      this.tamanho = tamanho;
      this.pos = 0;
    }
  
  /* Animação entre o ponto médio e o valor de cada ano */
    animDataElement() 
    {
      if (this.pos >= this.escala) this.pos--;
      else 
      if (this.pos <= this.escala) this.pos++;
    }

    /* Desenhar  */
    drawDataElement (pos) 
    {
      this.margem = 150;
      
      let pvs_scene_btn_x = width/2;
      let pvs_scene_btn_y = height-10;
      let pvs_scene_btn_w = 200;
      let pvs_scene_btn_h = 30;
      
      if (device_orientation === "l") 
      {      

        textL = 716;
        
        noStroke();
        fill(255);
        textSize(40);
        textAlign (CENTER, CENTER);
        text("A HISTÓRIA DOS DIREITOS DAS MULHERES", width/2, this.margem); 
        

        textSize(16);
        textAlign (LEFT, CENTER);
        text(ourText, width/2-textL/2, height-120-100, width/2+textL/2, 120);

        this.escala = map (this.numero_alunas, 34000, 212000, height/2-this.margem*2, -height/2+this.margem*2);
        
        this.escala2 = map (this.numero_alunas, 34000, 212000, 10, 100);

        ellipseMode(CENTER);
        fill(this.cor);
        push();
        stroke(1);
          translate (0, height/2)
          ellipse(pos, this.pos, this.escala2);
        pop();
        
      }
      
      else 
      
      if (device_orientation === "p") 
      {
        noStroke();
        fill(255);
        textSize(30);
        textAlign (CENTER, CENTER);
        text("A História dos Direitos das Mulheres", width/2, this.margem); 
        
        this.escala = map (this.numero_alunas, 34000, 212000, width/2-this.margem, -width/2+this.margem);
        ellipseMode(CENTER);
        fill(this.cor);

        push();
        stroke(1);
          translate (width/2, 0)
          ellipse(this.pos, pos, this.tamanho);
        pop();
        
        noStroke();
        fill(255);
        textSize(13);
        textAlign (LEFT, CENTER);
        text(ourText, width/2-quadrante*1.5, height-240-10, width/2+quadrante, 240);
        
      }
    }
  
    drawText() 
    {
    }
}