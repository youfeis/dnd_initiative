

$(document).ready(function(){
	

	new Sortable(initiativeBar, {
    	animation: 150,
    	ghostClass: 'grey-shade'
	});


	$('.button.start').click(function(){
		console.log(state());
		if(state() == false){
			start();
			updateCurrent();	
		}
	});
	$('.button.next').click(next);
	$('.button.resort').click(function(){
		if(state() == false){
			sort();	
		}

	});
	$('.button.stop').click(function(){
		if(state() == true){
			stop();	
		}

	});

	document.body.onkeyup = function(e){
    	if(e.keyCode == 32){
        	next();
    	}
	}




	loadData();
	$('.entity input.initiative').focus(function() {
    	$(this).select();
	});
	$('.initiative-viewport').scrollTop($('.initiative-bar').height());
});


function sort(){
	$(".initiative-bar .entity").sort(asc_sort).appendTo('.initiative-bar');
}

function asc_sort(a, b){
	var int_a = parseInt($(a).find('.initiative')[0].value, 10);
	var int_b = parseInt($(b).find('.initiative')[0].value, 10);
	if (int_b < int_a){
		return 1;
	}else if(int_b > int_a){
		return -1;
	}else{
		return 0;
	}
	  
}

function updateCurrent(){
	$('.initiative-bar .entity:last-child').clone().appendTo('.current-entity');
}

function moveCurrentToTop(){
	$('.current-entity .entity').prependTo('.initiative-bar');
}

function removeBottom(){
	$('.initiative-bar .entity:last-child').remove();
}

function state(){
	return !$('body').hasClass('game-stopped');
}

function stop(){
	$('body').addClass('game-stopped');
}

function start(){
	$('body').removeClass('game-stopped');
}


function next(){
	if(state() == true){
		moveCurrentToTop();
		var scroll = $(".initiative-viewport").scrollTop() - $(".initiative-bar .entity").height();
		//$(".initiative-viewport").animate({scrollTop:scroll}, 200, 'swing', function() { 
	    removeBottom();
		//});
		
		updateCurrent();
	}
}