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
		<h1><a href='africa'>Yambuku</a> o <a href='wuhan'>Wuhan</a></h1></p>"
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


	wuhan: new undum.SimpleSituation(
		"<h1>Wuhan</h1>\
		<p>Aparentemente te encuentras ante una ciudad avanzada y cuidada, pero no eres consciente de los peligros que la desolan…</p></br>\
		<p>Vas con paso miedoso viendo a personas extrañas en tu trayecto\
		Te paras a leer unos carteles que parece que repiten por todas las calles y <a href='noticiapangolin' class='once'>descubres la causa de estos males…</a></p>"
	),

 noticiapangolin: new undum.SimpleSituation(
		"<h1>Wuhan</h1>\
		<p>La ciudad está siendo controlada por el poder de una entidad despiadada, el Pangolín gigante. (<a href='vermas' class='once'>Ver más</a>)</p></p></br>\
		<p>Amenaza a la ciudad obligando a los ciudadanos a que sacrifiquen a sus hijos cada mes para contentar sus deseos.</p>\
		<p>Hace unos años el Pangolín gigante era más compasivo, pero últimamente ha empezado a pedir cada vez más niños \
		para su ritual y no es posible ofrecer los sacrificios por lo que el Pangolín gigante \
		está empezando a destrozar y amenazar a los habitantes de la ciudad así lo que todos viven con \
		miedo y buscan a alguien que pueda luchar contra él.</p>\
		<p><a href='huang' class='once'>Continuar</a></p>"
	),

	vermas: new undum.SimpleSituation(
		"<h1>SOBRE EL PANGOLÍN GIGANTE</h1>\
		<p>Efrey, también conocido actualmente como el Pangolín gigante, solía ser un pangolín que disfrutaba todos los días la vida que tenía, jugaba con sus amigos y \
		aspiraba a formar una gran familia junto a su mejor amiga.</p>\
		<p>Pasó el tiempo y finalmente construyó una familia con su amor. Mientras caminaba un día con sus hijos, se encontró unos humanos (situación bastante normal que no generaría ningún problema) \
		y sin previo aviso, estos humanos se comieron a los hijos de nuestro amigo Efrey.</p>\
		<p>Desde entonces, Efrey(Tiamat) ha odiado a los humanos y ha deseado castigarlos, por haberlo hecho sufrir de esa forma.</p>\
		<p>Un día, mientras comía su comida favorita, empezó a crecer y a ganar un poder conmensurablemente alto, resulta que había digerido una fruta que otorgaba poderes a quien la consumía.</p>\
		<p><p><a href='noticiapangolin' class='once'>Volver</a></p>"

	),

	huang: new undum.SimpleSituation(
		"<h1>Wuhan</h1>\
		<p>Durante el trayecto te encuentras con un hombre que transmite la sensación de que tiene información interesante que puede contarte. </p></br>\
		<p>Por lo tanto <a href='conversacionhuang' class='once'>entablas una conversación con él</a>.</p>"
	),

	conversacionhuang: new undum.SimpleSituation(
		"<h1>Wuhan</h1>\
		<p class='dialogo'><strong>Huang: </strong>Nǐ hǎo, wǒ jiào Huang Vid, pareces nuevo en esta ciudad, en qué te puedo ayudar?\
		<li> <a href='./diag1h' class='once'>¿Por qué todos tenéis los ojos así?</a> </li> \
		<li> <a href='./diag2h' class='once'>¿Qué puedes contarme acerca de los Pangolines? </a></li></ul></p>",

		{
			actions: {
				"diag1h": function (character, system, action) {
					system.setCharacterText("<p>...</p>");
				},

				"diag2h": function (character, system, action) {
					system.doLink("conversacionhuang2");
				},
			}
		}
	),

	conversacionhuang2: new undum.SimpleSituation(
		"<h1>Wuhan</h1>\
		<p class='dialogo'><strong>Huang: </strong>Hoy es tu día de suerte, recientemente un estudio realizado por la Universidad de Wuhan, \
		ha demostrado que una gran fuerza pangolinesca emana desde las ruinas de El Templo del Cielo.\
		<p class='dialogo'>Desde hace 5 años, estas ruinas no han sido visitadas por nadie, de hecho, para acceder a ellas, \
		 necesitas un traje especial sin él, es imposible adentrarse ahí dentro debido a la radiación pangolinesca.</p>\
		 <p>Implementar</p>"

		 //IMPLEMENTAR ENLACE A BOSS
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

				},
			}
		}
	),

	volvercuevabossuno: new undum.SimpleSituation(
		"<h1>Cueva Frutal</h1>\
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
					if (character.qualities.antorcha) {
						system.doLink("caminoyavisitado");
					} else {
						system.doLink("caminoes");
					}
				},

				"caminoos": function (character, system, action) {
					if (character.qualities.antorcha) {
						if (character.qualities.llave) {
							system.doLink("caminoyavisitado");
						} else {
							system.doLink("caminoosantorcha");
						}
					} else {
						system.doLink("caminoosnoantorcha")
					}

				}
			}
		}
	),
	caminonornollave: new undum.SimpleSituation(
		"<h1>Cueva Frutal</h1>\
		<p>Tras andar un buen rato, divisas una puerta con un gran candado.</p>\
		<p>Vaya, parece ser que no tienes la llave, pero tu intuicion te dice que la llave no estará muy lejos.</p>\
		<p>Por ello, decides <a href='volvercuevabossuno'>volver atrás</a> y buscar en la cueva.</p>"
	),
	caminonorllave: new undum.SimpleSituation(
		//falta esto <a href='primerboss'>continuar tu aventura</a>
		"<h1>Cueva Frutal</h1>\
		<p>Efectivamente, la llave que has encontrado es la que abre el candado.</p>\
		<p>Ya puedes <a href='primerBoss'>entrar al escondite</a>  después de este quebradero de cabeza que te han dado\
		los dichosos caminos de la cueva.</p>"
	),

	caminoyavisitado: new undum.SimpleSituation(
		"<h1>Cueva Frutal</h1>\
		<p>Deja de perder el tiempo buscando en sitios que ya has visitado e intenta\
		<a href='volvercuevabossuno'>investigar otras zonas</a>.</p>"
	),



	caminoes: new undum.SimpleSituation(
		"<h1>Cueva Frutal</h1>\
		<p>Consigues pasar por esa pequeña brecha, aunque con bastantes problemas, y llegas a un callejon sin salida.</p>\
		<p>!QUE DRAMA!, tanto esfuerzo para nada. </p>\
		<p>Solo encuentras una <a class='once' href='./antorcha'>antorcha</a>. </p>\
		<p>Solo puedes mirar a la pared, por lo que decides <a href='volvercuevabossuno'>volver atrás</a>.</p>",
		{
			actions: {
				"antorcha": function (character, system, action) {
					system.setQuality("antorcha", true);
				}
			}
		}
	),
	caminoosantorcha: new undum.SimpleSituation(
		"<h1>Cueva Frutal</h1>\
		<p>Ahora vas con tranquilidad por el camino oscuro con ayuda de la antorcha.</p>\
		<p>!Por fin!, empiezas a ver algo de esperanza en tu aventura al ver el brillo de una <a class='once' href='./llave'>llave</a>\
		que hay en el suelo.</p>\
		<p>Debes <a href='volvercuevabossuno'>volver atrás</a> para probar la llave. </p>",
		{
			actions: {
				"llave": function (character, system, action) {
					system.setQuality("llave", true);
				}
			}
		}

	),
	caminoosnoantorcha: new undum.SimpleSituation(
		"<h1>Cueva Frutal</h1>\
		<p>Te atreves a ir por el camino oscuro. </p></br> \
	  <p>No tardas mucho tiempo en darte cuenta de que como sigas por este camino vas a tarda más\
	  en encontrar algo de valor que en acabar una ingeniería. </p></br>\
	  <p>Por lo tanto no te queda otra que <a href='volvercuevabossuno'>volver a la cueva</a>.</p></br>"
	),


	primerboss: new undum.SimpleSituation(
		"<p>Por implementar</p>"
	),


	templocielo: new undum.SimpleSituation(
		"<h1>El templo del cielo</h1> \
	<p>Te adentras en las profundidades de este templo destruido, \
	no sin antes usar un traje protector creado con la piel de aquel murciélago de Yambuku.</p></br> \
	<p>Desde la entrada notas la presencia de decenas de pangolines, </br>\
	además de una gran fuerza con un poder inimaginable (probablemente sea el Pangolín Gigante), \
	seguramente no puedas acabar con ella sin antes descubrir los misterios de la cueva. </p></br> \
	<p>Procedes a enfrentarte con los pangolines que te atacan: </p> </br>\
	<p><ul><li><a href='pangolin'> Matar pangolín </a></li> \
	<li><a href='segundoboss'>Enfrentar al Pangolín Gigante</a></li></ul></p>"
	),

	pangolin: new undum.SimpleSituation(
		"<h1>Matar pangolín</h1> \
	<p>Te encuentras con los súbditos del Pangolín Gigante, decides:</p></br>\
	<p><ul><li><a href='./pangolin-muerto'> Matar pangolín </a></li> \
	<li><a href='segundoboss'>Enfrentar al Pangolín Gigante</a></li></ul>.</p>",
		{

			actions: {
				"pangolin-muerto": function (character, system, action) {
					system.setQuality("pangolines", character.qualities.pangolines + 1);
				}
			}

		}
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
					system.doLink("pangolin");   // Aqui hay que añadir el link con la situacion 7
				}
			}
		}
	),
	bossderrotado: new undum.SimpleSituation(
		"<h1>Cueva del pangolin</h1>\
		<p>Esa feroz batalla que tuviste antes contra esos pangolines te ha servido para descubrir el punto débil \
	de todos ellos, por lo que despues de marear un poco al pangolin realizas un ataque directo a su nariz, provocando\
	su muerte en el momento.</p>\
	<p>Tras ver como cae derrotado, decides cortar su cabeza para llevartela como trofeo.</p>\
	<p>Sin nada mas que poder hacer, decides <a href='situacion9'>salir de la cueva </a></p>" // CAMBIAR HREF AL NOMBRE DE LA SITUACION
	,
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
	<a href='pangolin'>seguir entrenando</a> con los pequeños pangolines.\
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

	llave: new undum.OnOffQuality(
		"Llave", { priority: "0005", group: 'inventario', onDisplay: "&#10003;" }
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
	system.setQuality("llave", false)
	system.setQuality("pangolines", 0)
	system.setCharacterText("<p>�Comienzas tu fascinante aventura!</p>");
};
