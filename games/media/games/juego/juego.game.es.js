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
jQuery.fx.off=false

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
                "baston": function(character, system, action) {
															system.setQuality( "baston", true );
															system.setCharacterText("<p>Se te ha sido otorgado el baston mágico del poderoso Gandalf</p>");
															system.doLink("selectorciudad");
															},

				"espada": function(character, system, action) {
															system.setQuality( "espada", true );
															system.setCharacterText("<p>Se te ha sido otorgada la espada Excalibur del poderoso King Arthur</p>");
															system.doLink("selectorciudad");
															}
					}
				}
	),

	selectorciudad: new undum.SimpleSituation (
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
	"<p>Por implementar...</p>"
	),


	primerboss: new undum.SimpleSituation(
		"<p>Por implementar</p>"
	),

	segundoboss: new undum.SimpleSituation(
		"<p>Por implementar</p>"
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
        "Manipulador de campos de energia cero", {priority:"0001", group:'inventario', onDisplay:"&#10003;"}
    ),

	baston: new undum.OnOffQuality(
		"Baston", {priority:"0002", group:'inventario', onDisplay:"&#10003;"}
	),

	espada: new undum.OnOffQuality(
		"Espada", {priority:"0003", group:'inventario', onDisplay:"&#10003;"}
	),

	pangolin: new undum.OnOffQuality(
		"Pangolin", {priority:"0004", group:'inventario', onDisplay:"&#10003;"}
	)

};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    inventario: new undum.QualityGroup('Inventario', {priority:"0001"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    system.setQuality( "manipulador" , false )
	system.setQuality( "baston" , false )
	system.setQuality( "espada", false )
	system.setQuality( "pangolin", false )
    system.setCharacterText("<p>�Comienzas tu fascinante aventura!</p>");
};
