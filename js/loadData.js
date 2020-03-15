function loadData(){
	let data = [];
	data.push(['player','fighter','萨迦 厄矛','20']);
	data.push(['player','paladin','贝塔 米昂','20']);
	data.push(['player','wizard','可可洛特 那可','20']);
	data.push(['mob','mob','超大型蘑菇','14']);
	data.push(['mob','mob','冬菇夏鼠','6']);

	// data.push(['npc','erinka','艾琳卡']);
	// data.push(['npc','taigamaru','大河丸']);
	// data.push(['player-control','familiar','蝙蝠']);
	// data.push(['player-control','roach','萝卜']);
	// data.push(['init-counter','','']);
	// data.push(['init-counter','','']);
	// data.push(['init-counter','','']);
	// data.push(['init-counter','','']);







	data.forEach(function(e){
		let type = e[0];
		let playerClass = e[1];
		let name = e[2];
		let initiative = e[3];
		let template = 
		`<div class='entity ${type} ${playerClass}'>
            <div class='icon'></div>
            <input class='initiative' value=${initiative}>
            <div class='name'>${name}</div>
        </div>`;
        $('#initiativeBar').append(template);
	});


}