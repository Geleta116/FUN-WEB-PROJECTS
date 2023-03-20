let b1 = document.getElementById("b1")
let b2 = document.getElementById("b2")
let b3 = document.getElementById("b3")
let b4 = document.getElementById("b4")
let b5 = document.getElementById("b5")
let b6 = document.getElementById("b6")
let b7 = document.getElementById("b7")
let b8 = document.getElementById("b8")
let b9 = document.getElementById("b9")
let output = document.getElementById("output")
let restarter = document.getElementById("replay")
let tdd =  document.getElementsByClassName("td")
let x = document.getElementById("x")
x.style.backgroundColor = "green"
let o = document.getElementById("o")
let bb1 = null
let bb2 = null
let bb3 = null
let bb4 = null
let bb5 = null
let bb6 = null
let bb7 = null
let bb8 = null
let bb9 = null
let bb10 = null
let count = 0
let prev_player = 0
let gameover = false
function h1(){
      if (bb1 == bb2 && bb1 == bb3 && count <= 9){
            
            b1.style.backgroundColor = "Green"
            b2.style.backgroundColor = "Green"
            b3.style.backgroundColor = "Green"
            
            return true
      }
      else{
            return false
      }

}
function h2(){
      if (bb4 == bb5 && bb5 == bb6 && count <= 9){
            b4.style.backgroundColor = "Green"
            b5.style.backgroundColor = "Green"
            b6.style.backgroundColor = "Green"
            return true
      }
      else{
            return false
      }
}

function h3(){
      if (bb7 == bb8 && bb8 == bb9 && count <= 9){
            b7.style.backgroundColor = "Green"
            b8.style.backgroundColor = "Green"
            b9.style.backgroundColor = "Green"
            return true
      }
      else{
            return false
      }
}
function v1(){
      if (bb1 == bb4 && bb4 == bb7 && count <= 9){
            b1.style.backgroundColor = "Green"
            b4.style.backgroundColor = "Green"
            b7.style.backgroundColor = "Green"
            return true
      }
      else{
            return false
      }
}
function v2(){
      if (bb2 == bb5 && bb5 == bb8 && count <= 9){
            b2.style.backgroundColor = "Green"
            b5.style.backgroundColor = "Green"
            b8.style.backgroundColor = "Green"
            return true
      }
      else{
            return false
      }
}
function v3(){
      if (bb3 == bb6 && bb6 == bb9 && count <= 9){
            b3.style.backgroundColor = "Green"
            b6.style.backgroundColor = "Green"
            b9.style.backgroundColor = "Green"
            return true
      }
      else{
            return false
      }
}
function d1(){
      if (bb1 == bb5 && bb5 == bb9 && count <= 9){
            b1.style.backgroundColor = "Green"
            b5.style.backgroundColor = "Green"
            b9.style.backgroundColor = "Green"
            return true
      }
      else{
            return false
      }
}
function d2(){
      if (bb3 == bb5 && bb5 == bb7 && count <= 9){
            b3.style.backgroundColor = "Green"
            b5.style.backgroundColor = "Green"
            b7.style.backgroundColor = "Green"
            return true
      }
      else{
            return false
      }
}

function check_b1(){
      if (gameover )
      {
            
      }
      else{
      if (prev_player == 0 && !(bb1) && count <= 9){
            count ++
            b1.innerHTML = "X"
            prev_player = 1
            bb1 = "X"
            
            if (h1() || v1() || d1() ){
                  output.innerHTML = "THE WINNER IS X"
                  gameover = true
            }
            else if( count == 9){
                                              output.innerHTML = "THE GAME IS A DRAW"
                              gameover = true
                              x.style.backgroundColor = "black";
                              o.style.backgroundColor = "black";
                  gameover = true
                  
            }
            else{
                  output.innerHTML = "Turn Player : O"
                  x.style.backgroundColor = "black";
                  x.style.color = "white";
                  o.style.backgroundColor = "green";
            }
      }
      else if( prev_player == 1 & !(bb1) && count <= 9){
            count ++
            b1.innerHTML = "O"
            prev_player = 0
            bb1 = "O"
            
            if (h1() || v1() || d1() ){
                  output.innerHTML = "THE WINNER IS O"
                  gameover = true
            }
            else if( count == 9){
                              output.innerHTML = "THE GAME IS A DRAW"
                              gameover = true
                              x.style.backgroundColor = "black";
                              o.style.backgroundColor = "black";
                  gameover = true
                 
            }
            else{
                  output.innerHTML = "Turn Player : X"
                  
                  x.style.backgroundColor = "green";
                  o.style.color = "white";
                  o.style.backgroundColor = "black";

            }
           
      }
     
      }
}
function check_b2(){
      if (gameover )
      {
           
      }
      else{
      if (prev_player == 0 && !(bb2) && count <= 9){
            count ++
            b2.innerHTML = "X"
            prev_player = 1
            bb2 = "X"
           
            if (h1() || v2()){
                  output.innerHTML = "THE WINNER IS X"
                  gameover = true
            }
            else if( count == 9){
                                              output.innerHTML = "THE GAME IS A DRAW"
                              gameover = true
                              x.style.backgroundColor = "black";
                              o.style.backgroundColor = "black";
                  gameover = true
            }
            else{
                  output.innerHTML = "Turn Player : O"
                  x.style.backgroundColor = "black";
                  x.style.color = "white";
                  o.style.backgroundColor = "green";
            }
      }
      else if( prev_player == 1 & !(bb2) && count <= 9){
            count ++
            b2.innerHTML = "O"
            prev_player = 0
            bb2 = "O"
           
            if (h1() || v2()){
                  output.innerHTML = "THE WINNER IS O"
                  gameover = true
            }
            else if( count == 9){
                                              output.innerHTML = "THE GAME IS A DRAW"
                              gameover = true
                              x.style.backgroundColor = "black";
                              o.style.backgroundColor = "black";
                  gameover = true
            }
            else{
                  output.innerHTML = "Turn Player : X"
                  
                  x.style.backgroundColor = "green";
                  o.style.color = "white";
                  o.style.backgroundColor = "black";
            }
           
      }
     
      }
     
      }

function check_b3(){
      if (gameover)
      {
           
      }
      else{
      if (prev_player == 0 && !(bb3) && count <= 9){
            count ++
            b3.innerHTML = "X"
            prev_player = 1
            bb3 = "X"
            
            if (h1() || v3() || d2()){
                  output.innerHTML = "THE WINNER IS X"
                  gameover = true
            }
            else if( count == 9){
                                              output.innerHTML = "THE GAME IS A DRAW"
                              gameover = true
                              x.style.backgroundColor = "black";
                              o.style.backgroundColor = "black";
                  gameover = true
            }
            else{
                  output.innerHTML = "Turn Player : O"
                  x.style.backgroundColor = "black";
                  x.style.color = "white";
                  o.style.backgroundColor = "green";
            }
      }
      else if( prev_player == 1 & !(bb3) && count <= 9){
            count ++
            b3.innerHTML = "O"
            prev_player = 0
            bb3 = "O"
            
            if (h1() || v3() || d2()){
                  output.innerHTML = "THE WINNER IS O"
                  gameover = true
            }
            else if( count == 9){
                                              output.innerHTML = "THE GAME IS A DRAW"
                              gameover = true
                              x.style.backgroundColor = "black";
                              o.style.backgroundColor = "black";
                  gameover = true
            }
            else{
                  output.innerHTML = "Turn Player : X"
                  
                  x.style.backgroundColor = "green";
                  o.style.color = "white";
                  o.style.backgroundColor = "black";
                  x.style.backgroundColor = "green";
                  o.style.color = "white";
                  o.style.backgroundColor = "black";

            }
           
      }
     
      }
}
function check_b4(){
      if (gameover)
      {
           
      }
      else{
      if (prev_player == 0 && !(bb4) && count <= 9){
            count ++
            b4.innerHTML = "X"
            prev_player = 1
            bb4 = "X"
           
            if (h2() || v1()){
                  output.innerHTML = "THE WINNER IS X"
                  gameover = true
            }
            else if( count == 9){
                                              output.innerHTML = "THE GAME IS A DRAW"
                              gameover = true
                              x.style.backgroundColor = "black";
                              o.style.backgroundColor = "black";
                  gameover = true
            }
            else{
                  output.innerHTML = "Turn Player : O"
                  x.style.backgroundColor = "black";
                  x.style.color = "white";
                  o.style.backgroundColor = "green";
            }
      }
      else if( prev_player == 1 & !(bb4) && count <= 9){
            count ++
            b4.innerHTML = "O"
            prev_player = 0
            bb4 = "O"
           
            if (h2() || v1()){
                  output.innerHTML = "THE WINNER IS O"
                  gameover = true
            }
            else if( count == 9){
                                              output.innerHTML = "THE GAME IS A DRAW"
                              gameover = true
                              x.style.backgroundColor = "black";
                              o.style.backgroundColor = "black";
                  gameover = true
            }
            else{
                  output.innerHTML = "Turn Player : X"
                  
                  x.style.backgroundColor = "green";
                  o.style.color = "white";
                  o.style.backgroundColor = "black";
            }
           
      }
     
      }
}
function check_b5(){
      if (gameover)
      {
           
      }
      else{
      if (prev_player == 0 && !(bb5) && count <= 9){
           count ++
            b5.innerHTML = "X"
            prev_player = 1
            bb5 = "X"
            
            if (h2() || v2() || d1() || d2() ){
                  output.innerHTML = "THE WINNER IS X"
                  gameover = true
            }
            else if( count == 9){
                                              output.innerHTML = "THE GAME IS A DRAW"
                              gameover = true
                              x.style.backgroundColor = "black";
                              o.style.backgroundColor = "black";
                  gameover = true
            }
            else{
                  output.innerHTML = "Turn Player : O"
                  x.style.backgroundColor = "black";
                  x.style.color = "white";
                  o.style.backgroundColor = "green";
            }
      }
      else if( prev_player == 1 & !(bb5) && count <= 9){
            count ++
            b5.innerHTML = "O"
            prev_player = 0
            bb5 = "O"
            
            if (h2() || v2() || d1() || d2() ){
                  output.innerHTML = "THE WINNER IS O"
                  gameover = true
            }
            
            else if( count == 9){
                                              output.innerHTML = "THE GAME IS A DRAW"
                              gameover = true
                              x.style.backgroundColor = "black";
                              o.style.backgroundColor = "black";
                  gameover = true
            }
            else{
                  output.innerHTML = "Turn Player : X"
                  
                  x.style.backgroundColor = "green";
                  o.style.color = "white";
                  o.style.backgroundColor = "black";
            }
           
      }
     
      }
}
function check_b6(){
      if (gameover)
      {
           
      }
      else{
      if (prev_player == 0 && !(bb6) && count <= 9){
            count ++
            b6.innerHTML = "X"
            prev_player = 1
            bb6 = "X"
           
            if (v3() || h2()){
                  output.innerHTML = "THE WINNER IS X"
                  gameover = true
            }
            else if( count == 9){
                                              output.innerHTML = "THE GAME IS A DRAW"
                              gameover = true
                              x.style.backgroundColor = "black";
                              o.style.backgroundColor = "black";
                  gameover = true
            }
            else{
                  output.innerHTML = "Turn Player : O"
                  x.style.backgroundColor = "black";
                  x.style.color = "white";
                  o.style.backgroundColor = "green";
            }
      }
      else if( prev_player == 1 & !(bb6)){
            count ++
            b6.innerHTML = "O"
            prev_player = 0
            bb6 = "O"
           
            
            if (v3() || h2()){
                  output.innerHTML = "THE WINNER IS O"
                  gameover = true
            }
            else if( count == 9){
                                              output.innerHTML = "THE GAME IS A DRAW"
                              gameover = true
                              x.style.backgroundColor = "black";
                              o.style.backgroundColor = "black";
                  gameover = true
            }
            else{
                  output.innerHTML = "Turn Player : X"
                  
                  x.style.backgroundColor = "green";
                  o.style.color = "white";
                  o.style.backgroundColor = "black";
            }
           
      }
     
      }
}
function check_b7(){
      if (gameover)
      {
           
      }
      else{
      if (prev_player == 0 && !(bb7)){
            count ++
            b7.innerHTML = "X"
            prev_player = 1
            bb7 = "X"
          
             if(v1() || d2() || h3()){
                  output.innerHTML = "THE WINNER IS X"
                  gameover = true
             }
            
            else if( count == 9){
                                              output.innerHTML = "THE GAME IS A DRAW"
                              gameover = true
                              x.style.backgroundColor = "black";
                              o.style.backgroundColor = "black";
                  gameover = true
            }
            else{
                  output.innerHTML = "Turn Player : O"
                  x.style.backgroundColor = "black";
                  x.style.color = "white";
                  o.style.backgroundColor = "green";
            }
      }
      else if( prev_player == 1 & !(bb7)){
            count ++
            b7.innerHTML = "O"
            prev_player = 0
            bb7 = "O"
           
            if(v1() || d2() || h3()){
                  output.innerHTML = "THE WINNER IS O"
                  gameover = true
             }
            
            
            else if( count == 9){
                                              output.innerHTML = "THE GAME IS A DRAW"
                              gameover = true
                              x.style.backgroundColor = "black";
                              o.style.backgroundColor = "black";
                  gameover = true
            }
            else{
                  output.innerHTML = "Turn Player : X"
                  
                  x.style.backgroundColor = "green";
                  o.style.color = "white";
                  o.style.backgroundColor = "black";
            }
           
      }
     
      }
}
function check_b8(){
      if (gameover )
      {
           
      }
      else{
      if (prev_player == 0 && !(bb8)){
            count ++
            b8.innerHTML = "X"
            prev_player = 1
            bb8 = "X"
           
            if (h3() || v2()){
                  output.innerHTML = "THE WINNER IS X"
                  gameover = true
            }
            
            else if( count == 9){
                                              output.innerHTML = "THE GAME IS A DRAW"
                              gameover = true
                              x.style.backgroundColor = "black";
                              o.style.backgroundColor = "black";
                  gameover = true
            }
            else{
                  output.innerHTML = "Turn Player : O"
                  x.style.backgroundColor = "black";
                  x.style.color = "white";
                  o.style.backgroundColor = "green";
            }
      }
      else if( prev_player == 1 & !(bb8)){
            count ++
            b8.innerHTML = "O"
            prev_player = 0
            bb8 = "O"
           
            if (h3() || v2()){
                  output.innerHTML = "THE WINNER IS O"
                  gameover = true
            }
            
            else if( count == 9){
                              output.innerHTML = "THE GAME IS A DRAW"
                              gameover = true
                              x.style.backgroundColor = "black";
                              o.style.backgroundColor = "black";
                  gameover = true
           
      }
      else{
            output.innerHTML = "Turn Player : X"
                  
                  x.style.backgroundColor = "green";
                  o.style.color = "white";
                  o.style.backgroundColor = "black";
      }
     
      }
}
}

function check_b9(){
            if (gameover)
                  {
                  
                  }
             else{
                  if (prev_player == 0 && !(bb9)){
                        count ++
                        b9.innerHTML = "X"
                        prev_player = 1
                        bb9 = "X"
                  
                        if (h3() || v3() || d1()){
                              output.innerHTML = "THE WINNER IS X"
                              gameover = true
                        }
                        else if( count == 9){
                              output.innerHTML = "THE GAME IS A DRAW"
                              gameover = true
                              x.style.backgroundColor = "black";
                              o.style.backgroundColor = "black";
                             
                        }
                        else{
                              output.innerHTML = "Turn Player : O"
                              x.style.backgroundColor = "black";
                              x.style.color = "white";
                              o.style.backgroundColor = "green";
                        }
                  }
                  else if( prev_player == 1 & !(bb9)){
                        count ++
                        b9.innerHTML = "O"
                        prev_player = 0
                        bb9 = "O"
                        
                        if (h3() || v3() || d1()){
                              output.innerHTML = "THE WINNER IS O"
                              gameover = true
                        }
                        else if( count == 9){
                              output.innerHTML = "THE GAME IS A DRAW"
                              gameover = true
                              x.style.backgroundColor = "black";
                              o.style.backgroundColor = "black";
                              
                        }
                        else{
                              output.innerHTML = "Turn Player : X"
                              x.style.backgroundColor = "green";
                              o.style.color = "white";
                              o.style.backgroundColor = "black";
                        }
                  
                  }
      
            }
      
}

