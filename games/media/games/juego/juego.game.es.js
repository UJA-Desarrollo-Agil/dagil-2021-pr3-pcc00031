// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "12b4d560-828e-11eb-9881-0800200c9a66"; // GEnerado por http://www.famkruithof.net/uuid/uuidgen

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

// En modo depuraci�n, que no haya efectos de jquery
jQuery.fx.off = false

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
	start: new undum.SimpleSituation(
		"<h1>Comienza tu aventura</h1>\
		<img style = 'width:500px; height:320px; display: block; margin: 0 auto'  class= 'img-situation' src = './media/img/Bienvenido.png' > <br> \
			<p>Bienvenido, estás a punto de comenzar tu aventura en este mundo.<\p> </br>\
			<p>Para llevar a cabo esta aventura, deberás indicarme qué tipo de rol quieres seguir en el juego:<\p>\
			<h1><a href='./baston' class='once'>Mago</a> - <a href='./espada' class='once'>Guerrero</a></h1>",
		{
			actions: {
				"baston": function (character, system, action) {
					system.setQuality("baston", true);
					system.setCharacterText("<p>Se te ha sido otorgado el baston mágico del poderoso Gandalf</p>");
					system.doLink("selectorciudad");
				},

				"espada": function (character, system, action) {
					system.setQuality("espada", true);
					system.setCharacterText("<p>Se te ha sido otorgada la espada Excalibur del poderoso King Arthur</p>");
					system.doLink("selectorciudad");
				}
			}
		}
	),

	selectorciudad: new undum.SimpleSituation(
		"<h1>Tienes que tomar una decisión.</h1>\
		<p>¿A qué ciudad quieres ir e intentar salvar a su civilización de su oscuro futuro?:\
		<h1><a href='africa'>Yambuku</a> o <a href='wuham'>Wuhan</a></h1></p>"
	),

	africa: new undum.SimpleSituation(
		"<h1>Yambuku</h1> \
		<p>Acabas de llegar a África. Este clima tan caluroso te recuerda a que podrías estar de vacaciones en Marbella en vez de intentar salvar el mundo, \
		pero bueno, tal y como dijo el tío Ben, un gran poder conlleva una gran responsabilidad. \
		Después de horas y horas de caminar por el desierto, y a punto de desfallecer, encuentras Yambuku.</p>  </br>\
		<p>Mientras paseabas por la aldea, te cruzas con un señor con unas prendas algo distintas a los demás, \
		por lo que llegas a la conclusión de que ese señor puede ser alguien importante de la aldea.Por ello decides llamar su atención. </p></br >\
		<p>Como era de esperar, no habla el mismo idioma que tú, pero gracias a esos cursos que se anunciaban en youtube sobre aprender idiomas conseguiste \
		aprender todas las lenguas existentes en el mundo.</p> </br>\
		<p> Un lugareño con pintas extravagantes te saluda: </p> \
		<p class='dialogo'><strong> Toro Sentado: </strong> Jambo,¿en qué puedo ayudarte?\
		<ul><li> <a href='./diag1' class='once'>¿Me podría decir donde habitan los murciélagos de la fruta? </a></li>\
		<li> <a href='./diag2' class='once'>¿Qué prendas más bonitas,¿dónde las has comprado?</a> </li> \
		<li> <a href='./diag3' class='once'>¿Qué opinas sobre las metodologías ágiles? </a></li></ul></p>",
		{
			actions: {
				"diag1": function (character, system, action) {

					system.setCharacterText("<p>Los murciélagos se sitúan en zonas cálidas y regiones con alta afluencia de árboles frutales. Al sur de esta aldea podrás encontrar esta zona. </p>");
					system.doLink("cuevabossuno");
				},

				"diag2": function (character, system, action) {

					system.setCharacterText("<p>Una pregunta algo tonta, ya que estas en una aldea perdida de la mano de dios y el tema de compra venta no está muy avanzada. </p>");

				},
				"diag3": function (character, system, action) {

					system.setCharacterText("<p>Pienso que son totalmente necesarias,sobre todo me ayudan en el cumplimiento de los objetivos del desarrollo de la aldea y en la simplificación de las mismas. Sin ellas, la aldea no hubiera prosperado tanto en tan poco tiempo.</p>");

				},
			}
		}

	),


	wuham: new undum.SimpleSituation(

	),

	cuevabossuno: new undum.SimpleSituation(
		"<h1>Cueva Frutal</h1>\
	<p>Después de una larga caminata, consigues divisar el tan ansiado bosque, \
	por lo que te diriges de inmediato allí. Entre tanto árbol, encuentras una \
	cueva muy sospechosa, por lo que decides entrar.</p></br>\
	<p>Al entrar a la cueva encuentras 3 caminos.<ul>\
	<li> <a href='./caminonor' class='once'>Camino normal</a></li>\
	<li> <a href='./caminoes' class='once'>Camino estrecho</a> </li> \
	<li> <a href='./caminoos' class='once'>Camino oscuro</a></li></ul></p>",
		{
			actions: {
				"caminonor": function (character, system, action) {
					if (character.qualities.llave) {
						system.doLink("caminonorllave");
					} else {
						system.doLink("caminonornollave");
					}
				},

				"caminoes": function (character, system, action) {

					system.doLink("caminoes");

				},
				"caminoos": function (character, system, action) {
					if (character.qualities.antorcha) {
						system.doLink("caminoosantorcha");
					} else {
						system.doLink("caminoosnoantorcha")
					}





				}
			}
		}
	),
	caminonornollave: new undum.SimpleSituation(
		"	<h1>Cueva Frutal</h1>\
		<p>Tras andar un buen rato, divisas una puerta con un gran candado.</p>\
		<p>Vaya, parece ser que no tienes la llave, pero tu intuicion te dice que la llave no estará muy lejos.</p>\
		<p>Por ello, decides <a href='cuevabossuno'>volver atrás</a> y buscar en la cueva </p>"
	),
	caminonorllave: new undum.SimpleSituation(
		//Em esta situacion abres la puerta y dejas un <a href que implementare yo mas tarde>
		"POR IMPLEMENTAR"
	),


	caminoes: new undum.SimpleSituation(
		"	<h1>Cueva Frutal</h1>\
		<p>Consigues pasar por esa pequeña brecha, aunque con bastantes problemas, y llegas a un callejon sin salida.</p>\
		<p>!QUE DRAMA!, tanto esfuerzo para nada. Solo encuentras una <a class='once' href='./antorcha'>antorcha</a> </p>\
		<p>Solo puedes mirar a la pared, por lo que decides <a href='cuevabossuno'>volver atrás</a></p>",
		{
			actions: {
				"antorcha": function (character, system, action) {
					system.setQuality("antorcha", true);
				}
			}
		}
	),
	caminoosantorcha: new undum.SimpleSituation(
		//IMPLEMENTAR DIEGO AQUI PILLAS LA LLAVE al alumbrar con la antorcha recogida
		"<p>Tienes antorcha</p>"

	),
	caminoosnoantorcha: new undum.SimpleSituation(
		//IMPLEMENTAR DIEGO INVENTA ALGO ROLLO NO VEO UNA MIERDA Y TAL
		"<p>No tienes una antorcha</p>"

	),


	primerboss: new undum.SimpleSituation(
		"<p>Por implementar</p>"
	),




	//Situacion 8 añadida. Faltan algunos href que seran implementados mas tarde.

	segundoboss: new undum.SimpleSituation(
		"<h1>Cueva del pangolin</h1>\
	<p>Sin ningun temor, decides entrar al escondite del pangolín gigante y poner fin al \
	oscuro futuro que le espera a la humanidad</p>\
	<p>El pangolin, nada mas verte, realiza un grito que asustaría hasta al mismisimo Chuck Norris, pero \
	tu te quedas ahi, sin inmutarte como un buen héroe.</p>\
	<p>Decides <a href='./ataque'>realizar un ataque</a> o por el contrario <a>volver atrás</a>\
	ya que no estas tan seguro de poder eliminar a este duro rival.</p>",
		{
			actions: {
				"ataque": function (character, system, action) {
					if (character.qualities.pangolines > 11) {
						system.doLink("bossderrotado")
					} else {
						system.doLink("bossvive")
					}
				},
				"volveratras": function (character, system, action) {
					system.doLink("situacion7");   // Aqui hay que añadir el link con la situacion 7
				}
			}
		}
	),
	bossderrotado: new undum.SimpleSituation(
		"<h1>Cueva del pangolin</h1>\
		<p>Esa feroz batalla que tuviste antes contra esos pangolines te ha servido para descubrir el punto débil \
	de todos ellos, por lo que despues de marear un poco al pangolin realizas un ataque directo a su nariz, provocando\
	su muerte en el momento.</p>\
	<p>Tras ver como cae derrotado, decides cortar su cabeza para llevartela como trofeo.</p>",
		{
			actions: {
				enter: function (character, system, action) {
					system.setQuality("pangolin", true);  
				}
			}
		}

	),
	bossvive: new undum.SimpleSituation(
		"<h1>Cueva del pangolin</h1>\
		<p>Intentas atacar justo en el corazon, pero este se enrolla, parando tu ataque y realizando un contraataque que te manda fuera\
	de la sala. Parece ser que no eres lo suficientemente fuerte para matarlo, por lo que debes de \
	<a href='situacion7'>seguir entrenando</a> con los pequeños pangolines.\
	</p>", // Falta añadir link a situacion 7
	),
};


// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
	manipulador: new undum.OnOffQuality(
		"Manipulador de campos de energia cero", { priority: "0001", group: 'inventario', onDisplay: "&#10003;" }
	),

	baston: new undum.OnOffQuality(
		"Baston", { priority: "0002", group: 'inventario', onDisplay: "&#10003;" }
	),
	antorcha: new undum.OnOffQuality(
		"Antorcha", { priority: "0005", group: 'inventario', onDisplay: "&#10003;" }
	),

	espada: new undum.OnOffQuality(
		"Espada", { priority: "0003", group: 'inventario', onDisplay: "&#10003;" }
	),

	pangolin: new undum.OnOffQuality(
		"Pangolin", { priority: "0004", group: 'inventario', onDisplay: "&#10003;" }
	),
	pangolines: new undum.NonZeroIntegerQuality(
		"Pangolines KO", { priority: "0004", group: 'inventario', onDisplay: "&#10003;" }
	)

};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
	inventario: new undum.QualityGroup('Inventario', { priority: "0001" })
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function (character, system) {
	system.setQuality("manipulador", false)
	system.setQuality("baston", false)
	system.setQuality("espada", false)
	system.setQuality("pangolin", false)
	system.setQuality("antorcha", false)
	system.setQuality("pangolines", 0)
	system.setCharacterText("<p>�Comienzas tu fascinante aventura!</p>");
};
