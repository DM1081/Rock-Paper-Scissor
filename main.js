// JavaScript Document

var x;
var y;

rock.addEventListener('click', function(event) {

var i = Math.floor(Math.random() * 3) + 1; 
	
	
	if (i ===1) {
	alert(" Player 1 you threw rock");

	}
	else if (i ===2) {
		
		alert("Player 1 you threw paper");
	}
	else  {
		
		alert("Player 1 you threw scissors");
	} 
	
	x =i;
	
//	return i;
//	ans(i, j);
		
});


paper.addEventListener('click', function(event) {

var j = Math.floor(Math.random() * 3) + 1; 
	
	
	if (j ===1) {
	alert("Player 2 you threw rock");  //Then determine who won
		
	}
	else if (j ===2) {
		
		alert("Player 2 you threw paper");
	}
	else  {
		
		alert("Player 2 you threw scissors");
	} 
		
	y = j;
	
	ans(x, y);
	
});
	
	
	
		function ans(i, j) {
		
		if (i === j) {
			
			alert("Draw");
		}
		
		else if  ((i === 1) && (j === 3)) {
			
			alert("Player 1 wins");
		}
		
		else if ((i ===1) &&(j===2)){
			alert("player 2 wins");
		}
			
			
			else if  ((i === 2) && (j === 3)) {
			
			alert("Player 2 wins");
		}
		
		else if ((i ===2) &&(j===1)) {
			alert("player 1 wins");
		}
			
			else if  ((i === 3) && (j === 2)) {
			
			alert("Player 1 wins");
		}
		
		else if ((i ===3) &&(j===1)) {
			alert("player 2 wins");
		}
			
			
			
		
	}
		
	
