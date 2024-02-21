$(function(){

for(var i = 0; i< 10; i++) {

	if (localStorage.getItem('E' + i)) {
		
		if (localStorage.getItem('E' + i) == 0) {
			
			$(".exercices a:eq(" + i + ")").addClass('reussi');
			
		} else if (localStorage.getItem('E' + i) > 0) {
			
			$(".exercices a:eq(" + i + ")").addClass('reussiavecerreur');
			
		}
	}
}

if (localStorage.getItem('n')) {

	n = localStorage.getItem('n');

} else {

	n = 0;

}

$(".exercices a:eq(" + n + ")").addClass('ui-btn-active');

startExercice(n);



$(".exercices a").click(function(){

	n = $(".exercices a").index(this);

	localStorage.setItem('n', n)

	startExercice(n);

});



$(".proprietes li").draggable({

	revert: 'invalid',

	cursor: 'move',

	helper: function(){

		r = $(this).clone();

		r.find('.ui-li-count').remove();

		return r;

	}

});







$(".verifier button").click(function(){

	

	reponses = $(".redaction .drop, .redaction fieldset");

	erreur = false;

	$(".verifier .indications").html("");

	// TODO : DONT SHOW HINT IF EMPTY ; show hint on popup ?

	for (var i = 0; i < reponses.length; i++) {

		if ($(reponses[i]).hasClass('drop')) { // DRAG & DROP

			var reponse = exercices[n].reponses[$(reponses[i]).attr('n')];

			var v = $(reponses[i]).attr('v');

			if (v != reponse.solution) {

				erreur = true;

				if (reponse.errors && reponse.errors[v]) {

					$(".verifier .indications").append($("<p></p>").html("<b>Indication :</b> " + reponse.errors[v]));

				}

			}

		} else { // RADIO, CHECKBOX

			inputs = $(reponses[i]).find('input');

			var reponse = exercices[n].reponses[$(reponses[i]).attr('n')];

			for (var j = 0; j<inputs.length; j++) {

				l = $(inputs[j]).attr('i');

				if (!!reponse[l].solution != inputs[j].checked) {

					erreur = true;

					if (reponse[l].error) {

						$(".verifier .indications").append($("<p></p>").html("<b>Indication :</b> " + reponse[l].error));

					}

				}

			}

		}

		

	}

	

	
	if (erreur) {

		$("#popup-erreur").popup('open');
		
		if (localStorage.getItem('E' + n) != null) {
			
			if(localStorage.getItem('E' + n) < 0) {
			
				localStorage.setItem('E' + n, localStorage.getItem('E' + n) - 1);
			
			}
			
		} else {
			
			localStorage.setItem('E' + n, -1);
		
		}


	} else {

		$("#popup-juste").popup('open');

		if (localStorage.getItem('E' + n) != null) {
			
			if(localStorage.getItem('E' + n) < 0) {

				localStorage.setItem('E' + n, -1 * localStorage.getItem('E' + n));
				
				$(".exercices a:eq(" + n + ")").addClass('reussiavecerreur');

			}			
			
		} else {
			
			localStorage.setItem('E' + n, 0);
			$(".exercices a:eq(" + n + ")").addClass('reussi');
		
		}

	}

	// Intégration MathAlea
	const urlParams = new URLSearchParams(window.location.search)
	const mathalea = urlParams.get('mathalea')
	if (mathalea !== null) {
		const numeroExercice = parseInt(urlParams.get('numeroExercice'))
		let score = 0;
		let finalState = [];
		for(let k = 0; k < 10; k++) {
			if (localStorage.getItem('E' + k) !== null)
			{
				if(localStorage.getItem('E' + k) >= 0) {
					score++;
				}
				finalState.push(parseInt(localStorage.getItem('E' + k)).toString());
			} else {
				finalState.push('');
			}
		}
		finalState = finalState.join(';');
		const message = { score, numberOfQuestions: 10, type: 'mathaleaSendScore', numeroExercice, finalState }
      	window.parent.postMessage(message, '*')		
	}

});

});

function startExercice(n) {

	if(exercices[n].tag === false) {

		$("body").removeClass('enable-tag');

	} else {

		$("body").addClass('enable-tag');

	}

	$(".exercice_title").text("Exercice n°" + (parseInt(n)+1));

	$(".enonce").html("<span>"+exercices[n].enonce+"</span>"); // span to fix first img becoming thumb

	var redaction = exercices[n].redaction;

	redaction = redaction.replace(/\$([0-9])+/g,'<span class="drop placeholder" n="$1">Glisser un élément ici</span>');

	redaction = redaction.replace(/\@([0-9])+/g,function(m, k){

		var html = '<fieldset data-role="controlgroup" n="'+ k +'" data-mini="true">';

		reponse = exercices[n].reponses[k];

		for (var i = 0; i < reponse.length; i++) {

			html += '<input name="radio-' + k + '" type="radio" i="'+ i +'" id="radio-' + k + '-' + i + '"> <label for="radio-' + k + '-' + i + '">'+ reponse[i].text +'</label>';

		}

		html += '</fieldset>';

		return html;

	});

	redaction = redaction.replace(/\#([0-9])+/g,function(m, k){

		var html = '<fieldset data-role="controlgroup" n="'+ k +'" data-mini="true">';

		reponse = exercices[n].reponses[k];

		for (var i = 0; i < reponse.length; i++) {

			html += '<input type="checkbox" i="'+ i +'" id="checkbox-'+k+'-'+ i +'"> <label for="checkbox-'+k+'-'+ i +'">'+ reponse[i].text +'</label>';

		}

		html += '</fieldset>';

		return html;

	});

	$(".redaction").html(redaction);

	$(".redaction fieldset").controlgroup(); // on génère les cg

	
	

	

	for (var k in exercices[n].proprietes) {

		if (k == "p") { // p définie le statut par défaut des propriétés et des blocs (affichés/masqués)

			if(exercices[n].proprietes['p']) {

				$(".proprietes li, .proprietes div[data-role='collapsible']").show();

			} else {

				$(".proprietes li, .proprietes div[data-role='collapsible']").hide();

			}

		} else { // p_n permet d'afficher/masquer un bloc, p_m_n permet d'afficher/masquer une propriete

			if(exercices[n].proprietes[k]) {

				$(".proprietes div[name='" + k + "'], .proprietes li[name='" + k + "']").show();

			} else {

				$(".proprietes div[name='" + k + "'], .proprietes li[name='" + k + "']").hide();

			}

		}

	}

	$(".drop").droppable({

		accept: "*",

		activeClass: "ui-state-hover",

		hoverClass: "ui-state-active",

		tolerance: "pointer",

		over: function(e, ui) {

			$(ui.helper).addClass('ui-state-hover');

		},

		out: function(e, ui) {

			$(ui.helper).removeClass('ui-state-hover');

		},

		drop: function(e, ui) {

			var html = $(ui.helper).html();

			// html = html.substr(0,1).toLowerCase() + html.substr(1);

			/*if (html.substr(-1) == ".") {

				html = html.substr(0,html.length-1);

			}*/

			a = html;

			html = html.replace(/\.\s*$/,""); // retire le point final

			$(this).html(html).removeClass('placeholder');

			$(this).attr('v',$(ui.helper).attr('name'));

		}

	});

}

// Intégration MathAlea
const urlParams = new URLSearchParams(window.location.search)
const mathalea = urlParams.get('mathalea')
if (mathalea !== null) {
	const numeroExercice = parseInt(urlParams.get('numeroExercice'))
	window.addEventListener('message', async (event) => {
		if (event.data.type === 'mathaleaHasScore') {
		let finalState = event.data.finalState;
		finalState = (Array.isArray(finalState) ? finalState[0] : finalState).split(';');
		for(let k = 0; k < 10; k++) {
			if (finalState[k] !== '') {
				localStorage.setItem('E' + k, parseInt(finalState[k]).toString());
			}
		}
		for(var i = 0; i< 10; i++) {

			if (localStorage.getItem('E' + i)) {
				// Les removeClass ne devraient pas être nécessaire mais on les mets au cas où ...
				if (localStorage.getItem('E' + i) == 0) {
					
					$(".exercices a:eq(" + i + ")").addClass('reussi');
					$(".exercices a:eq(" + i + ")").removeClass('reussiavecerreur');
					
				} else if (localStorage.getItem('E' + i) > 0) {
					
					$(".exercices a:eq(" + i + ")").addClass('reussiavecerreur');
					$(".exercices a:eq(" + i + ")").removeClass('reussi');				
				} else {
					$(".exercices a:eq(" + i + ")").removeClass('reussiavecerreur');
					$(".exercices a:eq(" + i + ")").removeClass('reussi');	
				}
			}
		}
		}
	});
	window.parent.postMessage({type: 'mathaleaAskScore', numeroExercice}, '*');
}