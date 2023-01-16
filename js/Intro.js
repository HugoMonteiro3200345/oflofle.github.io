function drawIntro()
{
  textSize (40);
  textAlign (CENTER);
  text("Titulo do projeto", width/2, 100);
  
  textSize(20);
  textAlign(CENTER);
  textWrap(WORD);
  text(descricao, width/2, 150, width-100);
  
  
  let nxt_scene_btn_x = width/2;
  let nxt_scene_btn_y = height/2;
  let nxt_scene_btn_w = 200;
  let nxt_scene_btn_h = 30;
  
  rectMode(CENTER);
  noStroke();
  rect (nxt_scene_btn_x, nxt_scene_btn_y, nxt_scene_btn_w, nxt_scene_btn_h);
  
  if (mouseX > nxt_scene_btn_x-nxt_scene_btn_w/2 && 
      mouseX < nxt_scene_btn_x+nxt_scene_btn_w/2 && 
      mouseY > nxt_scene_btn_y-nxt_scene_btn_h/2 && 
      mouseY < nxt_scene_btn_y+nxt_scene_btn_h/2 && 
      mouseIsPressed === true && 
      mouseIsReleased === true)
  {
    scene = 2;
    mouseIsReleased = false;
    rectMode(CORNER);
  }
}
