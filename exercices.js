exercices = [{ // EA	proprietes: {		p:false,	},	enonce:		`<u>On considère la propriété suivante :</u><br />		<strong>Si</strong> un quadrilatère est un <span class="tag-parallelogramme">parallélogramme</span>, <strong>alors</strong> les <span class="tag-diagonales_milieu">diagonales se coupent en leur milieu</span>.		`,	redaction:		`Q1) Pour pouvoir utiliser cette propriété, que doit-on déjà savoir ?<br />		@1		Q2) <u>Si la condition est vérifiée</u>, que peut-on déduire à l'aide de cette propriété ?		@2		Q3) On sait que ABCD a ses diagonales qui se coupent en leur milieu.<br />Peut on utiliser <u>cette propriété</u> pour en déduire que ABCD est un parallélogramme ?		@3		`,	reponses: {		1:[			{				solution: true,				text: "On doit déjà savoir que le quadrilatère est un parallélogramme.",				error: "Q1) Tu t'es trompé !",			},			{				text: "On doit déjà savoir que le quadrilatère à ses diagonales qui se coupent en leur milieu."			}		],		2:[			{				text: "On peut en déduire que le quadrilatère est un parallélogramme.",			},			{				solution: true,				text: "On peut en déduire que les diagonales se coupent en leur milieu",				error: "Q2) Tu t'es trompé !"			}		],		3:[			{				text: "Oui.",			},			{				solution: true,				text: "Non.",				error: "Q3) Attention à ne pas confondre avec la propriété <i>Si un quadrilatère à ses diagonales qui se coupent en leur milieu, alors c'est un parallélogramme</i>. Cette propriété existe et est vraie, mais c'est une autre propriété ! Il ne faut pas confondre les deux !"			}		]	}},{ // E2	proprietes: {		p:true,		p_1:true,		p_2:false,		p_3:false,		p_4:false	},	enonce:		`<img src="./img/E2-1.png" style="height:150px;" /><br />Soit ABCD un <span class="tag-parallelogramme">parallélogramme</span>. Montrer que <span class="tag-cotes_opposes_meme_longueur">AB = CD</span>.`,	redaction:		`On sait que ABCD est un <span class="tag-parallelogramme">parallélogramme</span>.<br />		Or, $1.<br />		Donc <span class="tag-cotes_opposes_meme_longueur">AB = CD</span>.`,	reponses: {		1:{			solution: "p_1_2",			errors: {				p_1_1: "Que veut-on montrer ?",				p_1_3: "Que veut-on montrer ?",				p_1_4: "Que veut-on montrer ?"			}		}	}},{ // E3	proprietes: {		p:true,		p_1:true,		p_2:true,		p_3:false,		p_4:false	},	enonce:		`<img src="./img/E3-1.png" /><br />		Montrer que ABCD est un <span class="tag-parallelogramme">parallélogramme</span>.`,	redaction:		`On sait que ABCD a ses <span class="tag-diagonales_milieu">diagonales qui se coupent en leur milieu</span>.<br />		Or, $1.<br />		Donc ABCD est un <span class="tag-parallelogramme">parallélogramme</span>.`,	reponses: {		1:{			solution: "p_2_2",			errors: {				p_1_3: "La propriété que tu as utilisé nécessite que l'on sache déjà que ABCD est un parallélogramme. On ne peut donc pas l'utiliser pour montrer que ABCD est un parallélogramme."			}		}	}},{ // E4	proprietes: {		p:true,		p_1:true,		p_2:true,		p_3:false,		p_4:false	},	enonce:		`<img src="./img/E3-1.png" /><br />		Montrer que <span class="tag-cotes_opposes_meme_longueur">AD = BC</span>.`,	redaction:		`On sait que ABCD a ses <span class="tag-diagonales_milieu">diagonales qui se coupent en leur milieu</span>.<br />		Or, $1.<br />		Donc ABCD est un <span class="tag-parallelogramme">parallélogramme</span>.<br />		Or, $2.<br />		Donc <span class="tag-cotes_opposes_meme_longueur">AD = BC</span>.`,	reponses: {		1:{			solution: "p_2_2",			errors: {				p_1_3: "La propriété que tu as utilisé nécessite que l'on sache déjà que ABCD est un parallélogramme. On ne peut donc pas l'utiliser pour montrer que ABCD est un parallélogramme.",				p_1_2: 'Pour pouvoir utiliser la propriété <i><strong>Si</strong> un quadrilatère est un <span class="tag-parallelogramme">parallélogramme</span>, <strong>alors</strong> les <span class="tag-cotes_opposes_meme_longueur">côtés opposés ont la même longueur</span></i>, il faut déjà savoir que ABCD est un parallélogramme.'			}		},		2:{			solution: "p_1_2",			errors: {				p_2_3: 'La propriété <i><strong>Si</strong> un quadrilatère non croisé a ses <span class="tag-cotes_opposes_meme_longueur">côtés opposés de même longueur</span>, <strong>alors</strong> c\'est un <span class="tag-parallelogramme">parallélogramme</span></i> sert à montrer qu\'un quadrilatère est un parallélogramme et non pas que les côtés opposés ont la même longueur.'			}		}	}},{ // E5	proprietes: {		p:false	},	enonce: // https://chart.googleapis.com/chart?cht=tx&chl=\\widehat{\\text{DAB}}=\\widehat{\\text{DCB}}&chco=80BF40&chf=bg,s,00000000		`<img src="./img/E3-1.png" /><br />		Montrer que <img src="./img/DABDCB.png" />.`,	redaction:		`Un élève a écrit la démonstration suivante :		<div style="border-left:2px solid gray; padding-left:15px;">ABCD est un <span class="tag-parallelogramme">parallélogramme</span>.<br />		Or, <strong>si</strong> un quadrilatère est un <span class="tag-parallelogramme">parallélogramme</span>, <strong>alors</strong> les <span class="tag-angles_opposes_meme_mesure">angles opposés ont la même mesure</span>.<br />		Donc <img src="./img/DABDCB.png" />.</div><br />		La démonstration est-elle bonne ?<br />		@1`,	reponses: {		1:[			{				text: "Oui.",				error: "Il faut d'abord montrer que ABCD est un parallélogramme avant de pouvoir utiliser cette propriété ! La démonstration n'est donc pas complète !",			},			{				solution: true,				text: "Non."			}		]	}},{ // E6	proprietes: {		p:true	},	enonce:		`<img src="./img/E6-1.png" style="height:200px;" /><br />		Montrer que <span class="tag-diagonales_meme_longueur">LU = OP</span>.`,	redaction:		`$1 donc LOUP est un <span class="tag-rectangle">rectangle</span>.<br /><br />		Or, $2.<br /><br />		Donc <span class="tag-diagonales_meme_longueur">LU = OP</span>.`,	reponses: {		1:{			solution: "p_d_2"		},		2:{			solution: "p_3_3"		},	}},{ // E7	proprietes: {		p:true	},	enonce:		`Démontrer qu'un losange est un parallélogramme.<br /><i>Remarque : un losange est toujours non croisé.</i>`,	redaction:		`Soit ABCD un <span class="tag-losange">losange</span>.<br /><br />		$1 donc AB = BC = CD = DA.<br /><br />		Or, $2.<br /><br />		Donc ABCD est un <span class="tag-parallelogramme">parallélogramme</span>.`,	reponses: {		1:{			solution: "p_d_3"		},		2:{			solution: "p_2_3"		},	}},{ // E8	tag: false,	proprietes: {		p:false	},	enonce:		`ABCD est un quadrilatère qui a ses diagonales de même longueur.`,	redaction:		`Un élève dit :		<div style="border-left:2px solid gray; padding-left:15px;">ABCD a ses diagonales de même longueur.<br />		Or, <strong>Si</strong> un <span class="tag-parallelogramme">parallélogramme</span> a ses <span class="tag-diagonales_meme_longueur">diagonales de même longueur</span>, <strong>alors</strong> c'est un <span class="tag-rectangle">rectangle</span>.<br />		Donc ABCD est un rectangle.</div><br />		Que pense-tu de sa démonstration ?<br />		@1`,	reponses: {		1:[			{				text: "Elle est juste.",				error: "Pour utiliser cette propriété, il faut savoir que ABCD est un parallélogramme. Or rien ne nous dit dans l'énoncé que ABCD est un parallélogramme.",			},			{				solution: true,				text: "Elle est fausse."			}		]	}},{ // E9	tag: false,	proprietes: {		p:true	},	enonce:		`<img src="./img/E9-1.png" style="float:left;margin-right:10px;" /><br /><br /><br /><br /><br /><br />Soit ABCD un parallélogramme tel que ABD soit un triangle isocèle en A.<br />		Montrer que (AC) &perp; (BD).`,	redaction:		`Le triangle ABD est isocèle en A, donc AB = AD.<br />		Or, $1.<br />		Donc ABCD est un losange.<br />		De plus, on sait que $2.<br />		Donc (AC) &perp; (BD).`,	reponses: {		1:{			solution: "p_4_5"		},		2:{			solution: "p_3_6"		},	}},{ // E10	tag: false,	proprietes: {		p:true	},	enonce:		`<img src="./img/E10-1.png" style="float:left;margin-right:10px;height:300px;" /><br /><br /><br /><br />Soit ABC un triangle isocèle en A tel que AB = 6cm.<br />		D est le symétrique de A par rapport à C.<br />		On note J le milieu de [BD] et F le symétrique de A par rapport à J.<br />		Calculer le périmètre de ABFD.<br /><i>Remarque : une grande partie de cet exercice consiste à coder la figure, ce qui a déjà été fait ici.</i>`,	redaction:		`Les diagonales du quadrilatère ABFD se coupent	en leur milieu.<br />		Or, $1.<br />		Donc ABFD est un parallélogramme.<br />		Or, $2.<br />		Donc AB = FD et AD = BF.<br />		6 + 12 + 6 + 12 = 36<br />		Le périmètre de ABFD est donc égal à 36cm.`,	reponses: {		1:{			solution: "p_2_2"		},		2:{			solution: "p_1_2"		},	}}]