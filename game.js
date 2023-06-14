const button = document.getElementById('btn')
const cells= document.querySelectorAll('.cell')
const info =  document.querySelector('#info')


const winCond = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
let options =['','','','','','','','','']


let currentPlayer ='X'
let running =false
let  won =false


function start(){
    cells.forEach(cell =>  cell.addEventListener('click', onClick))
   running=true

}
button.addEventListener('click', restart)

    //updateCell(this, cellIndex);
    //checkWinner();


function onClick(){  
  const cellIndex=  this.getAttribute('cellIndex'); 
  //update(this, cellIndex)
  if(options[cellIndex]!= ''&& running===true){
      
      return
    }
    else if(options[cellIndex]== ''){
        updateCell(this, cellIndex)
        
        
    }
    checkWin()
   
}
 function updateCell(cell, index ){
if (running){
    options[index] = currentPlayer
    cell.textContent = currentPlayer


}
else{
    alertThem()
}
}

function restart(){
    options =['','','','','','','','','']
   cells.forEach(cell => {cell.innerHTML=''
})
info.innerHTML="Game Ready"
document.getElementById('alert').innerHTML=""
document.getElementById('alert').classList=''

document.getElementById('restart').innerHTML= ''
document.getElementById('restart').classList = ''

   won=false
   running=true
    
}

// currentPlayer=(currentPlayer ='X')? 'O':'X'
 function changePlayer(){
    if(currentPlayer=='X'){
        currentPlayer='O'
    }
    else if(currentPlayer=='O'){
        currentPlayer='X'
    }
    info.innerHTML= `${currentPlayer} 's turn` 

}

function checkWin(){
    for (let i =0; i<winCond.length; i++){
     let conditons = winCond[i]
     let cellA = options[conditons[0]]
     let cellB = options[conditons[1]]
     let cellC = options[conditons[2]]
     
     //console.log(cellA===cellB)
    if(cellA==''||cellB==''||cellC==''){
        continue
    }

     if( (cellA==cellB && cellB==cellC) ){
         
        won= true
        break;
     }

        
    }
    if (won){
        alertThem()
        info.innerHTML=`${currentPlayer} Won`
        running=false
       
      
    }
    
    else if (!options.includes('')){
        
        info.innerHTML=`Tie`
        tie ()
        restarter()
    }
    else //if (!won && cellA==''||cellB=='' ||cellC=='')
    {
        changePlayer()

    }


}

function alertThem(){
    // alert(`${currentPlayer} Won`)
    // document.getElementById('alert').innerHTML=`${currentPlayer} Won`
    bots()
    restarter()
}

function bots(){
     
    const div= document.getElementById('alert')
    div.classList= 'container alert alert-success'
    div.innerHTML= `${currentPlayer} Won!` 
    div.style.color='red'
    div.style.fontSize= '40px'
};
function restarter(){
let restartButton = document.getElementById('restart')
restartButton.classList = 'container alert alert-success'
restartButton.innerHTML = `RESTART`
restartButton.addEventListener('click', restart)
};
function tie (){
   const div= document.getElementById('alert')
    div.classList= 'container alert alert-primary'
    div.innerHTML= `Its A Tie!` ;
};
start()