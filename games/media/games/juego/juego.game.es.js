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
				"<img style='width:500px; height:320px; display: block; margin: 0 auto'  class='img-situation' src='./media/img/Bienvenido.png'>\
			<p>Bienvenido, est�s a punto de comenzar tu aventura en este mundo.<\p>\
			<p>Para llevar a cabo esta aventura, deber�s indicarme qu� tipo de rol quieres seguir en el juego:<\p>\
			<a href='./baston' class='once'>Mago</a>, <a href='./espada' class='once'>Guerrero</a>",
				{
				actions: {
                "baston": function(character, system, action) {
															system.setQuality( "baston", true );
															system.setCharacterText("<p>Se te ha sido otorgado el baston m�gico del poderoso Gandalf</p>");
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
      "<p><h1>Tienes que tomar una decisión.</h1></p>\
    <p>¿A qué ciudad quieres ir e intentar salvar a su civilización de su oscuro futuro?:</p>\
    <a href='yambuku'>Yambuku</a> o <a href='wuhan'>Wuhan</a>"
		),

    yambuku: new undum.SimpleSituation(
      "<p>Por implementar</p>"
    ),
    wuham: new undum.SimpleSituation(
      "<p>Por implementar</p>"
    ),


		comprarfiesta: new undum.SimpleSituation(
			"<p>Pensativo empiezas a pensar que ese d�a ten�as una fiesta de carnaval a escondidas de la polic�a</p>\
			<p> Por lo que te decides a comprar la bebida, buscando tu <a href='./mascarilla' class='once'>mascarilla</a>, \
			 y por supuesto <a href='./dinero' class='once'>dinero</a>. </p>\
			<p>Recapacitando puedes <a href='habitacion'>pensar mejor y no ir a la fiesta</a> o <a href='mercadona'>ir a comprar la bebida</a>.</p>",
				{
            actions: {
                'mascarilla': function( character, system, action) {
																	system.setCharacterText( "<p>Necesaria para salir de casa. \
																											Si no quieres que te multen claro est�.(Virus a parte)</p>" );
																},
				'llaves': function( character, system, action) {
																	system.setQuality( "llaves", true );
																	system.setCharacterText( "<p>Cuidado porque sin ellas no podr�s entrar de nuevo.</p>" );
																},
				'dinero': function( character, system, action) {
																	system.setCharacterText( "<p>Con esto podr�s comprar todo lo que quieras. \
																														S� eres rico asi que no escatimes.</p>" );
																},
					  }
				}
		),

		mercadona: new undum.SimpleSituation(
			"<h1>Mercadona</h1>\
			<p>Aqu� te puedes comprar todo lo que necesites para la fiesta, una botella de <a href='./whisky' class='once'>Whisky</a>, \
			<a href='./coca-cola' class='once'>Coca-Cola</a>, <a href='./fanta' class='once'>Fanta</a>, <a href='./vasos' class='once'>Vasos</a> \
			y <a href='./hielo' class='once'>Hielo</a>. </p>\
			<p> <a href='casanollavenop'>Y vuelves a casa despu�s de pagar todo lo que has cogido</a>. </p>",
				{
            actions: {
                'whisky': function( character, system, action) {
																	system.setCharacterText( "<p>Necesaria para salir de casa. \
																											Si no quieres que te multen claro est�.(Virus a parte)</p>" );
																},
				'coca-cola': function( character, system, action) {
																	system.setCharacterText( "<p>Cuidado porque sin ellas no podr�s entrar de nuevo.</p>" );
																},
				'fanta': function( character, system, action) {
																	system.setCharacterText( "<p>Con esto podr�s comprar todo lo que quieras. \
																														S� eres rico asi que no escatimes.</p>" );
																},
				'vasos': function( character, system, action) {
																	system.setCharacterText( "<p>Con esto podr�s comprar todo lo que quieras. \
																														S� eres rico asi que no escatimes.</p>" );
																},
				'hielo': function( character, system, action) {
																	system.setCharacterText( "<p>Con esto podr�s comprar todo lo que quieras. \
																														S� eres rico asi que no escatimes.</p>" );
																},
					  },
					  enter: function( character, system, from ){
					$('body').css('background-image', 'url(https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2020/06/26/interior-de-uno-de-los-66-supermercados-de-mercadona-en-cyl-1.jpeg)')
							}
				}
		),
		casanollavenop: new undum.SimpleSituation(
			"<h1>Fachada de tu casa</h1>\
			<p>Te encuentras ya para entrar en casa y te propones a buscar las llaves para entrar. </p>",
			{
				enter: function( character, system, from ) {
					$('body').css('background-image', 'url(https://espaciohogar.com/wp-content/uploads/2020/10/facahdas-modernas-2021.jpg)')
					if( character.qualities.llaves ) {
						system.doLink( "casaconllavenop" );
					} else {
            $('body').css('background-image', 'url(https://espaciohogar.com/wp-content/uploads/2020/10/facahdas-modernas-2021.jpg')
						system.write( "<p>y descubres que al salir de tu casa olvidaste las llaves \
						por lo que recuerdas la llave que hay escondida en el <a href='patiotraserollavenop'>patio trasero</a>. </p>"

				);
					}
				}
			}
		),

		patiotraserollavenop: new undum.SimpleSituation(
			"<h1>Patio trasero</h1> \
			<p> Buscando en el �rbol en el agujero trasero <a href='./llaves' class='once'>coges la llave</a> y vuelves a <a href='casanollavenop'>la puerta</a> para entrar.</p>",
				{
				enter: function( character, system, from ){
					$('body').css('background-image', 'url(https://decortips.com/es/_next/image?url=https%3A%2F%2Fdecortips.com%2Fes%2Fwp-content%2Fuploads%2F2019%2F04%2Ftener-jardin-bonito.jpg&w=1920&q=75)')
							},
            actions: {

				'llaves': function( character, system, action) {
																	system.setQuality( "llaves", true );
																	system.setCharacterText( "<p>Cuidado porque sin ellas no podr�s entrar de nuevo.</p>" );
																}

					  }
				}
		),

		patiotraserollavesip: new undum.SimpleSituation(
			"<h1>Patio trasero</h1> \
			<p> Buscando en el �rbol en el agujero trasero <a href='./llaves' class='once'>coges la llave</a> y vuelves a <a href='casanollavesip'>la puerta</a> para entrar.</p>",
				{
				enter: function( character, system, from ){
					$('body').css('background-image', 'url(https://decortips.com/es/_next/image?url=https%3A%2F%2Fdecortips.com%2Fes%2Fwp-content%2Fuploads%2F2019%2F04%2Ftener-jardin-bonito.jpg&w=1920&q=75)')
				},
            actions: {

				'llaves': function( character, system, action) {
																	system.setQuality( "llaves", true );
																	system.setCharacterText( "<p>Cuidado porque sin ellas no podr�s entrar de nuevo.</p>" );
																}
					  }
				}

		),
		casaconllavenop: new undum.SimpleSituation(
			"<h1>Casa</h1>\
			<p>Dejas todo lo comprado pensando en la fiesta y te olvidas de la idea de salvar el planeta. </p> \
			<h1>Fin de la historia.</h1>",
				{
				enter: function( character, system, from ){
					$('body').css('background-image', 'url(https://www.kamin-klaus.com/218-thickbox_default/chimenea-electrica-182-cm-luxury-kamin-72-negro.jpg)')
					}
				}
		),

		casaconllavesip: new undum.SimpleSituation(
			"<h1>Casa</h1>\
			<p>Haces arder al pangolin(si es que cogiste el pangolin) para que todo desaparezca y te asomas al ventana viendo todo en la \
			normalidad y la gente sin mascarilla como si nada hubiera pasado. </p>\
			<h1>Fin de la historia.</h1>",
				{
				enter: function( character, system, from ){
					$('body').css('background-image', 'url(https://www.kamin-klaus.com/218-thickbox_default/chimenea-electrica-182-cm-luxury-kamin-72-negro.jpg)')
					}
				}
		),

		patiotraseromaquina: new undum.SimpleSituation(
			"<p> <a href='pasado'>Usas la maquina </a>para volver al pasado .</p>"
		),

		patiotrasero: new undum.SimpleSituation(
			"<h1>Patio trasero</h1>\
			<p>Una vez en el patio te dispones a viajar al pasado al momento justo en que el maldito chino se comi� el pangol�n. </p>",
			{
				enter: function( character, system, from ) {
					$('body').css('background-image', 'url(https://decortips.com/es/_next/image?url=https%3A%2F%2Fdecortips.com%2Fes%2Fwp-content%2Fuploads%2F2019%2F04%2Ftener-jardin-bonito.jpg&w=1920&q=75)')
					if( character.qualities.timemachine ) {
						system.doLink( "patiotraseromaquina" );
					} else {
					$('body').css('background-image', 'url(https://decortips.com/es/_next/image?url=https%3A%2F%2Fdecortips.com%2Fes%2Fwp-content%2Fuploads%2F2019%2F04%2Ftener-jardin-bonito.jpg&w=1920&q=75)')
						system.write( "<p>y descubres que no has cogido la maquina del tiempo para viajar al pasado \
										por lo que decides <a href='habitacion'>volver a por ella</a>. </p>"

				);
					}
				}
			}
		),

		pasado: new undum.SimpleSituation(
			"<h1>Marzo de 2020</h1>\
			<p> Te encuentras en china en marzo en el a�o 2020 momentos antes de la consumici�n del pangol�n.</p> \
			<p> De repente, te quedas pensativo y sorprendido al ver a toda la multitud sin mascarilla y recuerdas cuando todo antes estaba as� \
			y te decides a <a href='restaurante'>entrar</a> al restaurante chino y evitar que ocurra todo. </p>",
				{
				enter: function( character, system, from ){
					$('body').css('background-image', 'url(https://previews.123rf.com/images/bartekchiny/bartekchiny1002/bartekchiny100200047/6889334-china-shenzhen-el-10-de-febrero-china-gente-b%C3%BAsquedas-coloridas-decoraciones-para-el-a%C3%B1o-nuevo-chino-el-10-.jpg)')
					}
				}
		),

		restaurante: new undum.SimpleSituation(
			"<p> Est�s en el restaurante y llamas al camarero para que te ponga a ti el pangol�n que le ibas a poner al otro cliente ofreciendole 7000 yuanes. </p>\
			<p> El camarero se vuelve loco y obviamente te ofrece a ti el <a href='./pangolin' class='once'>pangolin</a>, por lo que tu decides guardarlo.\
			Despu�s de todo no ha sido tan dif�cil... y te decides a <a href='casanollavesip'>volver a tu casa</a></p>",
				{
            actions: {
				'pangolin': function( character, system, action) {
																	system.setQuality( "pangolin", true );
																	system.setCharacterText( "<p>Ya tienes el pangolin causante de la tragedia.\
																										Cuidado no te lo comas o lo liaras todo de nuevo.</p>" );
																}
					  },

				enter: function( character, system, from ){
					$('body').css('background-image', 'url(http://www.gzddd.com/uploads/allimg/191009/1-1910091543123E.jpg)')
					}

				}
		),

		casanollavesip: new undum.SimpleSituation(
			"<h1>Fachada de tu casa</h1>\
			<p>Te encuentras ya para entrar en casa y te propones a buscar las llaves para entrar. </p>",
			{
				enter: function( character, system, from ) {
				$('body').css('background-image', 'url(https://espaciohogar.com/wp-content/uploads/2020/10/facahdas-modernas-2021.jpg)')
					if( character.qualities.llaves ) {
						system.doLink( "casaconllavesip" );
					} else {
            $('body').css('background-image', 'url(https://espaciohogar.com/wp-content/uploads/2020/10/facahdas-modernas-2021.jpg')
						system.write( "<p>y descubres que al salir de tu casa olvidaste las llaves \
						por lo que recuerdas la llave que hay escondida en el <a href='patiotraserollavesip'>patio trasero</a>. </p>"
				);
					}
				}
			}
		)


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
