let dragons = [];

function setup() {
  createCanvas(600, 400);
  r=3;

  for (let i = 0; i < 60; i++) {
    dragons.push(new Mover());
  }
}

function preload() {
  
  backgroundImg = loadImage("kota.png") //Memasukkan background berupa gambar
  
}

function draw() {
  background(backgroundImg);
  
  for (let i = 0; i < dragons.length; i++) {
    dragons[i].pindah();
    dragons[i].show();
    dragons[i].batasan();
  }
}


class Mover {
  constructor(){
    this.location =
      createVector(random(width),random(height));
    
    this.velocity = createVector(3,3);
    this.acceleration = createVector(0.05,-0.05);
    this.luas = random(10,10);
    
  }
  
  show(){
    
    //warna putih
    noStroke();
    fill('white');
    rect(this.location.x-2, this.location.y-2, 4, 4);
    rect(this.location.x+2, this.location.y+2, 8, 2);
    rect(this.location.x-10, this.location.y+2, 8, 2);
    rect(this.location.x-8, this.location.y+4, 16, 4);
    rect(this.location.x-4, this.location.y+8, 8, 2);
    
    //warna hitam
    noStroke();
    fill('Black');
    rect(this.location.x+2, this.location.y, 10, 2);
    rect(this.location.x-12, this.location.y, 10, 2);
    rect(this.location.x-12, this.location.y-4, 2, 8);
    rect(this.location.x+10, this.location.y-4, 2, 8);
    rect(this.location.x-10, this.location.y-8, 2, 4);
    rect(this.location.x+8, this.location.y-8, 2, 4);
    rect(this.location.x-8, this.location.y-10, 4, 2);
    rect(this.location.x+4, this.location.y-10, 4, 2);
    rect(this.location.x-4, this.location.y-12, 8, 2);
    rect(this.location.x-10, this.location.y+4, 2, 4);
    rect(this.location.x+8, this.location.y+4, 2, 4);
    rect(this.location.x-8, this.location.y+8, 4, 2);
    rect(this.location.x+4, this.location.y+8, 4, 2);
    rect(this.location.x-4, this.location.y+10, 8, 2);
    
  }
  
  pindah(){
    var mouse = createVector(mouseX, mouseY); //gerak perpindahan naga mengikuti arah kursor mouse
    var w = p5.Vector.sub(mouse,CENTER);
    noStroke()
    
    //Membuat bentuk dragon
    
    //merah tua
    fill(128,0,0);
    rect(mouse.x+(r*-4), mouse.y+(r*-13), (r*1),(r*3));
    rect(mouse.x+(r*3), mouse.y+(r*-13), (r*1),(r*3));
    rect(mouse.x+(r*-4), mouse.y+(r*-10), (r*8),(r*5));
    rect(mouse.x+(r*-5), mouse.y+(r*-5), (r*10),(r*3));
    rect(mouse.x+(r*-5), mouse.y+(r*-5), (r*10),(r*3));
    rect(mouse.x+(r*-4), mouse.y+(r*-2), (r*8),(r*2));
    rect(mouse.x+(r*-5), mouse.y+(r*0), (r*10),(r*2));
    rect(mouse.x+(r*-6), mouse.y+(r*2), (r*12),(r*2));
    rect(mouse.x+(r*-7), mouse.y+(r*4), (r*14),(r*3));           rect(mouse.x+(r*7), mouse.y+(r*-7), (r*1),(r*2));
    rect(mouse.x+(r*-8), mouse.y+(r*-7), (r*1),(r*2));
    rect(mouse.x+(r*9), mouse.y+(r*-6), (r*1),(r*1));
    rect(mouse.x+(r*-10), mouse.y+(r*-6), (r*1),(r*1));
    rect(mouse.x+(r*10), mouse.y+(r*-5), (r*1),(r*1));
    rect(mouse.x+(r*-11), mouse.y+(r*-5), (r*1),(r*1));
    rect(mouse.x+(r*11), mouse.y+(r*-4), (r*1),(r*2));
    rect(mouse.x+(r*-12), mouse.y+(r*-4), (r*1),(r*2));
    rect(mouse.x+(r*12), mouse.y+(r*-2), (r*1),(r*2));
    rect(mouse.x+(r*-13), mouse.y+(r*-2), (r*1),(r*2));
    
    //warna kuning muda
    fill(255,255,153)
    rect(mouse.x+(r*2), mouse.y+(r*3), (r*1),(r*1));
    rect(mouse.x-(r*3), mouse.y+(r*3), (r*1),(r*1));
    rect(mouse.x-(r*4), mouse.y+(r*4), (r*8),(r*2));
    rect(mouse.x-(r*3), mouse.y+(r*6), (r*6),(r*1));
    rect(mouse.x-(r*3), mouse.y+(r*7), (r*6),(r*1));
    rect(mouse.x-(r*2), mouse.y+(r*7), (r*4),(r*1));
    
    //warna biru tua
    fill('darkblue');
    rect(mouse.x-(r*5), mouse.y-(r*2), (r*1),(r*2));
    rect(mouse.x-(r*6), mouse.y-(r*6), (r*1),(r*5));
    rect(mouse.x-(r*5), mouse.y-(r*13), (r*1),(r*8));
    rect(mouse.x-(r*4), mouse.y-(r*14), (r*1),(r*1));
    rect(mouse.x-(r*3), mouse.y-(r*13), (r*1),(r*3));
    rect(mouse.x-(r*2), mouse.y-(r*11), (r*1),(r*3));
    rect(mouse.x-(r*1), mouse.y-(r*11), (r*2),(r*1));
    rect(mouse.x+(r*1), mouse.y-(r*11), (r*1),(r*3));
    rect(mouse.x+(r*2), mouse.y-(r*13), (r*1),(r*3));
    rect(mouse.x+(r*3), mouse.y-(r*14), (r*1),(r*1));
    rect(mouse.x+(r*4), mouse.y-(r*13), (r*1),(r*8));
    rect(mouse.x+(r*5), mouse.y-(r*6), (r*1),(r*5));
    rect(mouse.x+(r*4), mouse.y-(r*2), (r*1),(r*2));
    rect(mouse.x+(r*5), mouse.y+(r*0), (r*1),(r*2));
    rect(mouse.x+(r*6), mouse.y+(r*2), (r*1),(r*2));
    rect(mouse.x+(r*7), mouse.y+(r*4), (r*1),(r*3));
    rect(mouse.x+(r*6), mouse.y+(r*7), (r*1),(r*2));
    rect(mouse.x+(r*3), mouse.y+(r*9), (r*3),(r*1));
    rect(mouse.x+(r*-3), mouse.y+(r*8), (r*6),(r*1));
    rect(mouse.x+(r*-6), mouse.y+(r*9), (r*3),(r*1));
    rect(mouse.x+(r*-7), mouse.y+(r*7), (r*1),(r*2));
    rect(mouse.x+(r*-8), mouse.y+(r*4), (r*1),(r*3));
    rect(mouse.x+(r*-7), mouse.y+(r*2), (r*1),(r*2));
    rect(mouse.x+(r*-6), mouse.y+(r*0), (r*1),(r*2));
    rect(mouse.x+(r*-4), mouse.y+(r*6), (r*1),(r*1));
    rect(mouse.x+(r*-3), mouse.y+(r*7), (r*1),(r*1));
    rect(mouse.x+(r*2), mouse.y+(r*7), (r*1),(r*1));
    rect(mouse.x+(r*3), mouse.y+(r*6), (r*1),(r*1));
    rect(mouse.x+(r*-1), mouse.y+(r*3), (r*2),(r*1));
    rect(mouse.x+(r*-4), mouse.y+(r*-7), (r*1),(r*1));
    rect(mouse.x+(r*3), mouse.y+(r*-7), (r*1),(r*1));
    
    //putih
    fill('white');
    rect(mouse.x+(r*-4), mouse.y+(r*-5), (r*1),(r*2));
    rect(mouse.x+(r*3), mouse.y+(r*-5), (r*1),(r*2));
    
    //cokelat muda 
    fill(255,153,0);
    rect(mouse.x+(r*3), mouse.y+(r*1), (r*1),(r*1));
    rect(mouse.x+(r*-4), mouse.y+(r*1), (r*1),(r*1));
    rect(mouse.x+(r*2), mouse.y+(r*2), (r*1),(r*1));
    rect(mouse.x+(r*-3), mouse.y+(r*2), (r*1),(r*1));
    rect(mouse.x+(r*-2), mouse.y+(r*3), (r*1),(r*1));
    rect(mouse.x+(r*-4), mouse.y+(r*3), (r*1),(r*1));
    rect(mouse.x+(r*1), mouse.y+(r*3), (r*1),(r*1));
    rect(mouse.x+(r*3), mouse.y+(r*3), (r*1),(r*1));
    rect(mouse.x+(r*4), mouse.y+(r*4), (r*1),(r*2));
    rect(mouse.x+(r*-5), mouse.y+(r*4), (r*1),(r*2));
    rect(mouse.x+(r*-6), mouse.y+(r*5), (r*1),(r*1));
    rect(mouse.x+(r*5), mouse.y+(r*5), (r*1),(r*1));
    rect(mouse.x+(r*-6), mouse.y+(r*7), (r*3),(r*1));
    rect(mouse.x+(r*3), mouse.y+(r*7), (r*3),(r*1));
    rect(mouse.x+(r*-7), mouse.y+(r*6), (r*1),(r*1));
    rect(mouse.x+(r*6), mouse.y+(r*6), (r*1),(r*1));
    rect(mouse.x+(r*-5), mouse.y+(r*8), (r*1),(r*1));
    rect(mouse.x+(r*4), mouse.y+(r*8), (r*1),(r*1));
    rect(mouse.x+(r*6), mouse.y+(r*-8), (r*1),(r*6));
    rect(mouse.x+(r*7), mouse.y+(r*-8), (r*1),(r*1));
    rect(mouse.x+(r*8), mouse.y+(r*-7), (r*2),(r*1));
    rect(mouse.x+(r*8), mouse.y+(r*-6), (r*1),(r*1));
    rect(mouse.x+(r*7), mouse.y+(r*-5), (r*1),(r*1));
    rect(mouse.x+(r*10), mouse.y+(r*-6), (r*1),(r*1));
    rect(mouse.x+(r*11), mouse.y+(r*-5), (r*1),(r*1));
    rect(mouse.x+(r*12), mouse.y+(r*-4), (r*1),(r*2));
    rect(mouse.x+(r*11), mouse.y+(r*-2), (r*1),(r*1));
    rect(mouse.x+(r*13), mouse.y+(r*-2), (r*1),(r*3));
    rect(mouse.x+(r*12), mouse.y+(r*0), (r*1),(r*1));
    rect(mouse.x+(r*-7), mouse.y+(r*-8), (r*1),(r*6));
    rect(mouse.x+(r*-8), mouse.y+(r*-8), (r*1),(r*1));
    rect(mouse.x+(r*-8), mouse.y+(r*-5), (r*1),(r*1));
    rect(mouse.x+(r*-9), mouse.y+(r*-7), (r*1),(r*2));
    rect(mouse.x+(r*-10), mouse.y+(r*-7), (r*1),(r*1));
    rect(mouse.x+(r*-11), mouse.y+(r*-6), (r*1),(r*1));
    rect(mouse.x+(r*-12), mouse.y+(r*-5), (r*1),(r*1));
    rect(mouse.x+(r*-13), mouse.y+(r*-4), (r*1),(r*2));
    rect(mouse.x+(r*-12), mouse.y+(r*-2), (r*1),(r*1));
    rect(mouse.x+(r*-14), mouse.y+(r*-2), (r*1),(r*3));
    rect(mouse.x+(r*-13), mouse.y+(r*0), (r*1),(r*1));
    
    //biru muda
    fill(0,0,255);
    rect(mouse.x+(r*2), mouse.y+(r*-3), (r*1),(r*1));
    rect(mouse.x+(r*-3), mouse.y+(r*-3), (r*1),(r*1));
    rect(mouse.x+(r*1), mouse.y+(r*2), (r*1),(r*1));
    rect(mouse.x+(r*-2), mouse.y+(r*2), (r*1),(r*1));
    rect(mouse.x+(r*3), mouse.y+(r*8), (r*1),(r*1));
    rect(mouse.x+(r*5), mouse.y+(r*8), (r*1),(r*1));
    rect(mouse.x+(r*-4), mouse.y+(r*8), (r*1),(r*1));
    rect(mouse.x+(r*-6), mouse.y+(r*8), (r*1),(r*1));
    rect(mouse.x+(r*7), mouse.y+(r*-4), (r*1),(r*1));
    rect(mouse.x+(r*-8), mouse.y+(r*-4), (r*1),(r*1));
    rect(mouse.x+(r*7), mouse.y+(r*-3), (r*2),(r*1));
    rect(mouse.x+(r*-9), mouse.y+(r*-3), (r*2),(r*1));
    rect(mouse.x+(r*6), mouse.y+(r*-2), (r*4),(r*1));
    rect(mouse.x+(r*-10), mouse.y+(r*-2), (r*4),(r*1));
    rect(mouse.x+(r*5), mouse.y+(r*-1), (r*7),(r*1));
    rect(mouse.x+(r*-12), mouse.y+(r*-1), (r*7),(r*1));
    rect(mouse.x+(r*6), mouse.y+(r*0), (r*3),(r*1));
    rect(mouse.x+(r*-9), mouse.y+(r*0), (r*3),(r*1));
    
    var arahMouse = p5.Vector.sub(mouse, this.location); //arah gerak pemangsa
    var topSpeed = (5, 10); //top speed pemangsa
    
    arahMouse.normalize();
    arahMouse.mult(0.5); 
  
    
    this.velocity.add(this.acceleration);
    this.velocity.add(arahMouse);
    this.velocity.limit(topSpeed);
    this.location.add(this.velocity);
  }
  
  
  batasan(){
    if (this.location.x < 0 || this.location.x > width){
      this.velocity.x = -1*this.velocity.x
    }
    else if (this.location.y < 0 || this.location.y > height){
      this.velocity.y = -1*this.velocity.y
    }
  }
}