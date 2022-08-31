"use strict";
function cancel() {
    setTimeout(mixx, 2);
    function mixx() {
        document.getElementById('absi').style.right = "-70%";
    
    }
    setTimeout(vixx, 210);
    function vixx() {
        document.getElementById('dark').style.display = "none";
          
    }
}
function menu(){
    setTimeout(yes , 3);
    function yes() {
        document.getElementById('absi').style.right = "0%";
    }
    
setTimeout(oks , 0);
    function oks() {
      document.getElementById('dark').style.display = "block";
    
    }
}

    
document.getElementById("sub-drop").addEventListener("click", () => {
    falls()
});
function falls(){
        let dropDu = document.getElementById('sub-f');
        let f = document.getElementById("drop-1");
        let r = document.getElementById("drop-2");
      
   
            if (dropDu.style.visibility == "hidden") {
                dropDu.style.visibility = "visible";
                dropDu.style.maxHeight = '200px';
                dropDu.style.paddingTop = '1.2em';
                r.style.display = 'block';
                f.style.display = 'none';
            }
            else {
                dropDu.style.visibility = "hidden";
                dropDu.style.maxHeight = '0px';
                dropDu.style.paddingTop = '0em';
                r.style.display = 'none';
                f.style.display = 'block';
            }
        }

    
    


document.getElementById("sub-drops").addEventListener("click", fallsd);

function fallsd(){
    let dropDw = document.getElementById('sub-c');
    let f = document.getElementById("fall"); 
    let r = document.getElementById("rise");
    if (dropDw.style.visibility == "hidden"){ 
        dropDw.style.visibility = "visible";
        dropDw.style.maxHeight = '200px';
    dropDw.style.paddingTop = '1.2em';
        r.style.display = 'block';
        f.style.display = 'none';
    }
    else {dropDw.style.visibility = "hidden";
        dropDw.style.maxHeight = '0px';
    dropDw.style.paddingTop = '0em';
        r.style.display = 'none';
        f.style.display = 'block';
    }
}



    
    


document.getElementById("move").addEventListener('click', doth); 
let ft = document.getElementById('feature');
function doth() {

   

   
    
    
    if (ft.style.display== "none") {
       ft.style.display= "block";
       document.getElementById("move").style.color="black"

        document.getElementById('dw-2').style.display = 'block';
        document.getElementById('dw-1').style.display = 'none';
    }
    else {
        document.getElementById('feature').style.display= "none";
        document.getElementById('dw-1').style.display = 'block';  
        document.getElementById('dw-2').style.display = 'none';
        document.getElementById("move").style.color = " hsl(0, 0%, 41%)";
    }
    }


   
    
    
        
    

    
    
        
  

        

    document.getElementById("drop-down").addEventListener('click', dropit); 

function dropit() {
    let subt = document.getElementById('sub-twu');
       
    if (subt.style.display == "none") {
        document.getElementById("drop-down").style.color="black"
        document.getElementById('sub-twu').style.display = "block";
        document.getElementById('d-up').style.display = "block";
        document.getElementById('dw-f').style.display = "none";
    }
    else {
        subt.style.display = "none";
        document.getElementById('d-up').style.display = "none";
        document.getElementById('dw-f').style.display = "block";
        document.getElementById("drop-down").style.color="hsl(0, 0%, 41%)"
    }
}
    

     
       
  
      
    

    

