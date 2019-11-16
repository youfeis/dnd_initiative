

$(document).ready(function(){
	$('.initiative-viewport').scrollTop($('.initiative-bar').height());

	new Sortable(initiativeBar, {
    	animation: 150,
    	ghostClass: 'grey-shade'
	});

	sort();

	$('.button.start').click(function(){
		console.log(state());
		if(state() == false){
			start();
			updateCurrent();	
		}

	});

	$('.button.next').click(function(){
		if(state() == true){
			moveCurrentToTop();
			var scroll = $(".initiative-viewport").scrollTop() - $(".initiative-bar .entity").height();
			$(".initiative-viewport").animate({scrollTop:scroll}, 500, 'swing', function() { 
			   removeBottom();
			});
			
			updateCurrent();
		}
	});

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
});


function sort(){
	$(".initiative-bar .entity").sort(asc_sort).appendTo('.initiative-bar');
}

function asc_sort(a, b){
	var int_a = parseInt($(a).find('.initiative').text(), 10);
	var int_b = parseInt($(b).find('.initiative').text(), 10);
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