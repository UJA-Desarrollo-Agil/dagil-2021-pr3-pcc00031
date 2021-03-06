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

//Nombre
var nombre = "";

function preguntaNombre(){
  nombre=prompt('¿Cómo te llamas?')
  nombre=nombre || "Jambo"
}

function setNombre(){
  $(".nombre").html(nombre)
}

// Audio
var ini = document.getElementById("ini");
var inter = document.getElementById("inter");
var boss = document.getElementById("boss");

// Videos
var vid1 = document.getElementById('vid1');
var vid2 = document.getElementById('vid2');
var vid3 = document.getElementById('vid3');
var vid4 = document.getElementById('vid4');
var vid5 = document.getElementById('vid5');
var vid6 = document.getElementById('vid6');

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
        "<h1>Comienza tu aventura</h1>\
		  <img style = 'width:500px; height:320px; display: block; margin: 0 auto'  class= 'img-situation' src = './media/img/Bienvenido.png' > <br> \
			<center><p>Bienvenido, estás a punto de comenzar tu aventura en este mundo.</p> </br>\
      <script>preguntaNombre()</script>\
			<p><span class='nombre'></span>, para llevar a cabo esta aventura, deberás indicarme qué tipo de rol quieres seguir en el juego:</p>\
			<h1><a href='./baston' class='once'>Mago</a> - <a href='./espada' class='once'>Guerrero</a></h1>\
      <script>setNombre()</script>",
        {
            enter: function (character, system, from) {
                ini.play();
                vid1.style.display = 'none';
                vid2.style.display = 'none';
                vid3.style.display = 'none';
                vid4.style.display = 'none';
                vid5.style.display = 'none';
                vid6.style.display = 'none';

            },
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
        "<h1>Tienes que tomar una decisión </h1>\
        <img class='img-situation' src='./media/img/mapamundi.jpeg'>\
		<p>¿A qué ciudad quieres ir e intentar salvar a su civilización de su oscuro futuro?:\
		<h1><a href='africa'>Yambuku</a> o <a href='wuhan'>Wuhan</a> o <a href='islajava'>Isla de Java</a></h1></p>",
        {

            enter: function (character, system, from) {
                ini.play();
            }

        }
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
		<p> Un lugareño con pintas extravagantes te saluda: </p></br> \
         <img class= 'img-situation' src = './media/img/jefetribu.jpg'> \
		<p class='dialogo'><strong> Toro Sentado: </strong> <span class='nombre'></span>,¿en qué puedo ayudarte?\
		<ul><li> <a href='./diag1' class='once'>¿Me podría decir donde habitan los murciélagos de la fruta? </a></li>\
		<li> <a href='./diag2' class='once'>¿Qué prendas más bonitas,¿dónde las has comprado?</a> </li> \
		<li> <a href='./diag3' class='once'>¿Qué opinas sobre las metodologías ágiles? </a></li></ul></p>\
    <script>setNombre()</script>",
        {
            enter: function (character, system, from) {
                ini.play();
                vid1.style.display = 'block';
                vid2.style.display = 'none';
                vid3.style.display = 'none';
                vid4.style.display = 'none';
                vid5.style.display = 'none';
                vid6.style.display = 'none';
            },
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
        <img class='img-situation' src='./media/img/Wuhan.jpeg'>\
		<p>Aparentemente te encuentras ante una ciudad avanzada y cuidada, pero no eres consciente de los peligros que la desolan…</p></br>\
		<p>Vas con paso miedoso viendo a personas extrañas en tu trayecto. \
		Te paras a leer unos carteles que parece que repiten por todas las calles y <a href='noticiapangolin' class='once'>descubres la causa de estos males…</a></p>",
        {

            enter: function (character, system, from) {
                boss.pause();
                ini.play();
                vid3.style.display = 'block';
                vid1.style.display = 'none';
                vid2.style.display = 'none';
                vid4.style.display = 'none';
                vid5.style.display = 'none';
                vid6.style.display = 'none';
            }
        }
    ),

    noticiapangolin: new undum.SimpleSituation(
        "\
		<p>La ciudad está siendo controlada por el poder de una entidad despiadada, el Pangolín gigante. (<a href='vermas' class='once'>Ver más</a>)</p></p></br>\
		<p>Amenaza a la ciudad obligando a los ciudadanos a que sacrifiquen a sus hijos cada mes para contentar sus deseos.</p>\
		<p>Hace unos años el Pangolín gigante era más compasivo, pero últimamente ha empezado a pedir cada vez más niños \
		para su ritual y no es posible ofrecer los sacrificios por lo que el Pangolín gigante \
		está empezando a destrozar y amenazar a los habitantes de la ciudad así lo que todos viven con \
		miedo y buscan a alguien que pueda luchar contra él.</p>\
		<p><a href='huang' class='once'>Continuar</a></p>",
        {
            enter: function (character, system, from) {
                ini.play();
            }
        }
    ),

    vermas: new undum.SimpleSituation(
        "<h1>SOBRE EL PANGOLÍN GIGANTE</h1>\
       <img class='img-situation' src='./media/img/efrey.jpg'>\
		<p>Efrey, también conocido actualmente como el Pangolín gigante, solía ser un pangolín que disfrutaba todos los días la vida que tenía, jugaba con sus amigos y \
		aspiraba a formar una gran familia junto a su mejor amiga.</p>\
		<p>Pasó el tiempo y finalmente construyó una familia con su amor. Mientras caminaba un día con sus hijos, se encontró unos humanos (situación bastante normal que no generaría ningún problema) \
		y sin previo aviso, estos humanos se comieron a los hijos de nuestro amigo Efrey.</p>\
		<p>Desde entonces, Efrey ha odiado a los humanos y ha deseado castigarlos, por haberlo hecho sufrir de esa forma.</p>\
		<p>Un día, mientras comía su comida favorita, empezó a crecer y a ganar un poder conmensurablemente alto, resulta que había digerido una fruta que otorgaba poderes a quien la consumía.</p>\
		<p>Gracias a este poder comenzó a plantarle cara a los humanos y a obligar que les dieran a sus hijos como sacrificio para así completar su venganza. \
		Aunque esto no era suficiente para satisfacer su necesidades…</p>\
		<p>Efrey había conseguido un ejército de pangolines y actualmente está desarrollando un virus con el que es posible que aniquile a todos los humanos.</p>\
		<p><a href='noticiapangolin' class='once'>Volver</a></p>",
        {
            enter: function (character, system, from) {
                ini.play();
            }
        }
    ),

    huang: new undum.SimpleSituation(
        "\
		<p>Durante el trayecto te encuentras con un hombre que transmite la sensación de que tiene información interesante que puede contarte. </p></br>\
        <img class='img-situation' src='./media/img/huang.jpg'></br>\
		<p>Por lo tanto <a href='conversacionhuang' class='once'>entablas una conversación con él</a>.</p>",
        {
            enter: function (character, system, from) {
                ini.play();
            }
        }
    ),

    conversacionhuang: new undum.SimpleSituation(
        "\
		<p class='dialogo'><strong>Huang: </strong>Nǐ hǎo, wǒ jiào Huang Vid, pareces nuevo en esta ciudad, en qué te puedo ayudar?\
		<li> <a href='./diag1h' class='once'><strong><span class='nombre'></span></strong>: ¿Por qué todos tenéis los ojos así?</a> </li> \
		<li> <a href='./diag2h' class='once'><strong><span class='nombre'></span></strong>: ¿Qué puedes contarme acerca de los Pangolines? </a></li></ul></p>\
    <script>setNombre()</script>",

        {
            enter: function (character, system, from) {
                ini.play();
            },
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
        "\
		<p class='dialogo'><strong>Huang: </strong>Hoy es tu día de suerte, recientemente un estudio realizado por la Universidad de Wuhan, \
		ha demostrado que una gran fuerza pangolinesca emana desde las ruinas de El Templo del Cielo.\
		<p class='dialogo'>Desde hace 5 años, estas ruinas no han sido visitadas por nadie, de hecho, para acceder a ellas, \
		 necesitas un traje especial sin él, es imposible adentrarse ahí dentro debido a la radiación pangolinesca.</p>\
		 <p>Debes <a href='./irtemplocielo' class='once'>continuar tu aventura.</a></p>",
        {
            enter: function (character, system, from) {
                ini.play();
            },
            actions: {
                "irtemplocielo": function (character, system, action) {
                    if (character.qualities.pielmurcielago) {
                        system.write("<h1>Te diriges al Templo del Cielo</h1>");
                        system.doLink("templocielo");
                    } else {
                        system.write("<h1>Te diriges a Yambuku ya que no puedes acceder al Templo del Cielo aún. </h1>");
                        system.doLink("africa");
                    }
                },
            }
        }
    ),

    cuevabossuno: new undum.SimpleSituation(
        "<h1>Cueva Frutal</h1>\
        <img class='img-situation' src='./media/img/cueva_frutal.jpg'>\
	<p>Después de una larga caminata, consigues divisar el tan ansiado bosque, \
	por lo que te diriges de inmediato allí. Entre tanto árbol, encuentras una \
	cueva muy sospechosa, por lo que decides entrar.</p></br>\
	<p>Al entrar a la cueva encuentras 3 caminos.<ul>\
	<li> <a href='./caminonor' class='once'>Camino normal</a></li>\
	<li> <a href='./caminoes' class='once'>Camino estrecho</a> </li> \
	<li> <a href='./caminoos' class='once'>Camino oscuro</a></li></ul></p>",
        {
            enter: function (character, system, from) {
                ini.pause();
                inter.play();
                vid2.style.display = 'block';
                vid1.style.display = 'none';
                vid3.style.display = 'none';
                vid4.style.display = 'none';
                vid5.style.display = 'none';
                vid6.style.display = 'none';
            },
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
        "<p></p>",

        {
            enter: function (character, system, from) {
                if (character.qualities.baston) {
                    system.write("<h1>Cueva Frutal</h1>\
								<p>Efectivamente, la llave que has encontrado es la que abre el candado.</p>\
								<p>Ya puedes <a href='primerbossmago'>entrar al escondite</a> y derrotar a este terrible monstruo</p>");
                } if (character.qualities.espada) {
                    system.write("<h1>Cueva Frutal</h1>\
								<p>Efectivamente, la llave que has encontrado es la que abre el candado.</p>\
								<p>Ya puedes <a href='primerbossguerrero'>entrar al escondite</a> y derrotar a este terrible monstruo</p>");
                }
            }

        }
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

    primerbossmago: new undum.SimpleSituation(
        "<h1>Murciélago de la fruta</h1>\
        <img class='img-situation' src='./media/img/murcielago.jpg'>\
        <p>Estás ante el murciélago de la Fruta, ten cuidado con él ya que es muy rápido y será\
		peligroso si no piensas una estrategia y cómo defenderte antes.\
		Vaya, eres el primer mago que solo ha practicado un tipo de ataque, pero es tan letal\
 		que de un solo golpe derrotarás a cualquier enemigo. Por ende, decides usar lechazo mágico\
		para poder acabar con él.</p></br>\
 		<p>Sin embargo, este escurridizo murciélago te consigue esquivar y te golpea fuertemente en la cabeza.\
		Tu, que estás al borde de desangrarte, consigues con tus últimas fuerzas volver a realizar el lechazo mágico.\
		El murciélago cae derrotado y tú, con ese cursillo de primeros auxilios consigues vendar y curar tus heridas.\
		Finalmente, decides llevarte la cabeza y la piel del murciélago como trofeo y vas a la <a href='wuhan'>siguiente ciudad</a>.</p></br>",
        {
            enter: function (character, system, from) {
                inter.pause();
                boss.play();
                system.setQuality("porcentaje", 33);
                system.setQuality("cabezamurcielago", true);
                system.setQuality("pielmurcielago", true);
                system.setCharacterText("<p>Has conseguido la piel inmunológica del murciélago y su cabeza.</p>");
            }
        }
    ),

    primerbossguerrero: new undum.SimpleSituation(
        "<h1>Murciélago de la fruta</h1>\
        <img class='img-situation' src='./media/img/murcielago.jpg'>\
        <p>Estás ante el murciélago de la Fruta, ten cuidado con él ya que es muy rápido y será\
        peligroso si no piensas una estrategia y cómo defenderte antes.\
        Vaya, eres el primer guerrero que solo ha practicado un tipo de ataque, pero es tan letal\
        que de un solo golpe derrotarás a cualquier enemigo. Por ende, decides usar barrigazo bacoriano\
		para poder acabar con él.</p></br>\
 		<p>Sin embargo, este escurridizo murciélago te consigue esquivar y te golpea fuertemente en la cabeza.\
		Tu, que estás al borde de desangrarte, consigues con tus últimas fuerzas volver a realizar el barrigazo bacoriano.\
		El murciélago cae derrotado y tú, con ese cursillo de 1 auxilios consigues vendar y curar tus heridas.\
		Finalmente, decides llevarte la cabeza y piel del murciélago como trofeo y vas a la <a href='wuhan'>siguiente ciudad</a>.</p></br>",
        {
            enter: function (character, system, from) {
                inter.pause();
                boss.play();
                system.setQuality("porcentaje", 33);
                system.setQuality("cabezamurcielago", true);
                system.setQuality("pielmurcielago", true);
                system.setCharacterText("<p>Has conseguido la piel inmunológica del murciélago y su cabeza.</p>");
            }
        }
    ),

    templocielo: new undum.SimpleSituation(
        "<h1>El templo del cielo</h1> \
        <img class='img-situation' src='./media/img/templo.jpg'>\
	<p>Te adentras en las profundidades de este templo destruido, \
	no sin antes usar un traje protector creado con la piel de aquel murciélago de Yambuku.</p></br> \
	<p>Desde la entrada notas la presencia de decenas de pangolines, </br>\
	además de una gran fuerza con un poder inimaginable (probablemente sea el Pangolín Gigante), \
	seguramente no puedas acabar con ella sin antes descubrir los misterios de la cueva. </p></br> \
	<p>Procedes a enfrentarte con los pangolines que te atacan: </p> </br>\
	<p><ul><li><a href='pangolin'> Matar pangolines </a></li> \
	<li><a href='segundoboss'>Enfrentar al Pangolín Gigante</a></li></ul></p>",
        {
            enter: function (character, system, from) {
                ini.pause();
                inter.play();
                vid4.style.display = 'block';
                vid1.style.display = 'none';
                vid2.style.display = 'none';
                vid3.style.display = 'none';
                vid5.style.display = 'none';
                vid6.style.display = 'none';
            }
        }
    ),

    pangolin: new undum.SimpleSituation(
        "<h1>Matar pangolín</h1> \
	<p>Te encuentras con los súbditos del Pangolín Gigante, decides:</p></br>\
	<p><ul><li><a href='./pangolin-muerto'> Matar pangolín</a><i>(Click para matar pangolín)</i></li> \
	<li><a href='./ir-boss''>Enfrentar al Pangolín Gigante</a></li></ul></p>",
        {
            enter: function (character, system, from) {
                boss.pause();
                inter.play();
                system.setCharacterText("<p>Quizá deberías de matar 60/5 pangolines para descubrir algo</p>");
                
            },
            actions: {
                "pangolin-muerto": function (character, system, action) {
                    system.setQuality("pangolines", character.qualities.pangolines + 1);
                    if(character.qualities.pangolines > 11){
                        system.setCharacterText("<p>Has descubierto el punto débil de los pangolines</p>")
                    }
                },
                "ir-boss": function (character, system, action) {
                    system.doLink("segundoboss");
                }
            }

        }
    ),

    segundoboss: new undum.SimpleSituation(
        "<h1>Pangolín Gigante</h1>\
        <img class='img-situation' src='./media/img/pangolin.jpg'>\
	<p>Sin ningun temor, decides entrar al escondite del pangolín gigante y poner fin al \
	oscuro futuro que le espera a la humanidad</p>\
	<p>El pangolin, nada mas verte, realiza un grito que asustaría hasta al mismisimo Chuck Norris, pero \
	tu te quedas ahi, sin inmutarte como un buen héroe.</p>\
	<p>Decides <a href='./ataque'>realizar un ataque</a> o por el contrario <a href='./volveratras'>volver atrás</a>\
	ya que no estas tan seguro de poder eliminar a este duro rival.</p>",
        {
            enter: function (character, system, from) {
                inter.pause();
                boss.play();
            },
            actions: {
                "ataque": function (character, system, action) {
                    if (character.qualities.pangolines > 11) {
                        system.setQuality("porcentaje", character.qualities.porcentaje + 33);
                        system.setQuality("pangolin", true);
                        system.doLink("bossderrotado");
                    } else {
                        system.doLink("bossvive");
                    }
                },
                "volveratras": function (character, system, action) {
                    system.doLink("pangolin");
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
	<p>Sin nada mas que poder hacer, decides <a href='islajava'>salir de la cueva</a>. </p>"
    ),

    bossvive: new undum.SimpleSituation(
        "<h1>Cueva del pangolin</h1>\
		<p>Intentas atacar justo en el corazon, pero este se enrolla, parando tu ataque y realizando un contraataque que te manda fuera\
	de la sala. Parece ser que no eres lo suficientemente fuerte para matarlo, por lo que debes de \
	<a href='pangolin'>seguir entrenando</a> con los pequeños pangolines.</p>",
    ),

    islajava: new undum.SimpleSituation(
        "<h1> Isla de Java </h1>\
       <img class='img-situation' src='./media/img/isla.jpg'>\
        <p>Depués de haber nadado durante un rato, llegas a una isla tropical y paradisiaca, estás en la Isla de Java. Es una isla sumamente \
    tranquila ya que no hay personas ni siquiera animales, sin embargo te encuentras con bastantes objetos en la playa.</br></br>\
        <a href='playa'>Continuar a la playa</a></p> ", {
        enter: function (character, system, from) {
            ini.play();
            boss.pause();
            vid1.style.display = 'none';
            vid2.style.display = 'none';
            vid3.style.display = 'none';
            vid4.style.display = 'none';
            vid5.style.display = 'block';
            vid6.style.display = 'none';

        }
    }
    ),

    playa: new undum.SimpleSituation(
        "<h1> Playa de la Isla de Java </h1>\
        <img class='img-situation' src='./media/img/arena.jpg'>\
        <p>Entre los objetos que hay en la playa, localizas: una <a class='once' href='./pala'>pala</a> y <a class='once' href='./cubo'>cubo</a> de juguete, \
        lo cual es curioso porque no hay nadie cerca, te percatas de que tienen resto de sangre;\
    un <a class='once' href='./barco'>barco de madera</a>, puede que te sea útil en un futuro para navegar de forma más rápida, \
    un <a class= 'once' href = './traje'>traje de buceo</a>,\
    casualmente parece que es de tu talla pero… ¿para qué ibas a quererlo? y finalmente un <a class='once' href='./libro'>libro</a> titulado:\
    ‘La historia del Dengue’ (<a href='historiadengue')>leer</a>).</br></br>\
    <a href='islajavaprof'>Continuar explorando</a></p>",
        {

            actions: {

                "pala": function (character, system, action) {
                    if (character.qualities.pala == false) {
                        system.setQuality("pala", true);
                        system.setCharacterText("<p>Has obtenido una pala de juguete</p>");
                        system.write("<h1>Al coger la pala te percatas de que hay una especie de marca</h1>\
                        <p>Puedes: <a href='./agujero' class='once'>cavar un agujero</a> o bien, <a href='play'>seguir explorando la playa.</a></p>");
                    } else {
                        system.setCharacterText("<p>Ya la has recogido antes</p>");
                    }
                },
                "agujero": function (character, system, action) {
                    system.write("</br><p>Al cavar un agujero te percatas de que hay enterrado un <a href='./talisman' class='once'>talisman</a>,\
                                puede que te sea útil en un futuro.</br></br>\
                       <img style='width:300px; height:220px;display:block; margin: 0 auto' class='img-situation' src='./media/img/talisman.png'></br>\
                                <h1><a href='islajavaprof'>Continuar</a> o <a href='play'>volver a la playa</a></p>");
                },
                "talisman": function (character, system, action) {
                    system.setQuality("talisman", true);
                    system.setCharacterText("<p>Has obtenido un talismán</p>");
                },

                "libro": function (character, system, action) {
                    system.setQuality("libro", true);
                    system.setCharacterText("<p>Has obtenido un libro</p>");
                },

                "traje": function (character, system, action) {
                    system.setQuality("traje", true);
                    system.setCharacterText("<p>Has obtenido un traje de buceo</p>");
                },

                "barco": function (character, system, action) {
                    system.setQuality("barco", true);
                    system.setCharacterText("<p>Has obtenido un barco de madera</p>");
                },

                "cubo": function (character, system, action) {
                    system.setQuality("cubo", true);
                    system.setCharacterText("<p>Has obtenido un cubo de juguete</p>");
                }
            },
        }
    ),

    play: new undum.SimpleSituation(
        "<p></p>",
        {
            enter: function (character, system, action) {
                system.doLink("playa");
            }

        }
    ),

    islajavaprof: new undum.SimpleSituation(
        "<h1>Profundidades de la Isla de Java</h1>\
        <p>Después de haber caminado por la playa un rato te adentras más profundo en la isla \
        y descubres una pequeña cabaña. </p></br>\
        <img class='img-situation' src='./media/img/casa.jpg'>\
        <p>Antes de entrar en ella te encuentras a una joven la cual \
        te observa desde la rama de un árbol, sin que te des cuenta, tras un portentoso salto, se \
        para frente a ti y de manera muy efusiva te dice:</p></br>\
        <img class='img-situation' src='./media/img/girl.jpg'>\
        <p class='dialogo'>¿Qué haces aquí? No es posible que hayas podido llegar hasta aquí sin morir…</p> \
        <p> Le cuentas que tu travesía por la isla ha sido de lo más agradable y le preguntas: </br></br>\
        <ul><li> <a href='soledad' class='once'>¿No hay nadie más en esta isla?</a></li>\
		<li> <a href='historiagirl' class='once'>¿Qué haces tú sola aquí?</a></li></ul></p>",
    ),

    soledad: new undum.SimpleSituation(
        "<p class='dialogo'>En esta isla solo habitamos yo y la plaga de mosquitos acuáticos. \
        Seguramente no te hayan atacado porque actualmente es la hora de su siesta.</p> \
        <p> Ante estas palabras de la chica misteriosa decides: \
        <a href='historiagirl'>preguntar qué pasó con las demás personas</a> o \
        <a href='./combatirplaga'>ir a combatir a la plaga</a>. </p>",
        {

            actions: {

                "combatirplaga": function (character, system, action) {
                    if (character.qualities.talisman == false) {
                        system.doLink("sintalisman");
                    } else {
                        system.doLink("contalisman");
                    }
                }
            }
        }
    ),

    historiagirl: new undum.SimpleSituation(
        "\
        <p class='dialogo'>Desde hace años, la plaga de mosquitos acuáticos que habitan esta isla \
        eliminaron a toda la población que vivía pacíficamente en este paraíso.</br></br>Hasta hace unos meses \
        sólo quedaba mi familia: mi prometido (Boy) y nuestros dos hijos. Un día decidimos salir para que \
        jugaran un poco en la playa. Al ser la hora de la siesta no pensábamos que fuera a pasar nada, \
        sin embargo, ese día el mosquito del dengue gigante salió de las profundidades del mar y acabó con toda mi familia, \
        sólo yo pude sobrevivir.</p>\
        <p> Tras escuchar esta historia decides que acabarás con la plaga de esta isla y obviamente con el Mosquito del Dengue,\
        abandonas la cabaña y te <a href='./combatirplaga'>decides a enfretarte a la plaga</a>.</p>",
        {

            actions: {

                "combatirplaga": function (character, system, action) {
                    if (character.qualities.talisman == false) {
                        system.doLink("sintalisman");
                    } else {
                        system.doLink("contalisman");
                    }
                }
            }
        }
    ),

    historiadengue: new undum.SimpleSituation(
        "<h1> Historia del Dengue </h1>\
        <p>En la Isla de Java vivían animales junto a seres humanos siguiendo una perfecta sinergia, \
        entre ellos, destacaba una gran cantidad de mosquitos, los cuales temían al agua y siempre respetaban\
        la hora de la siesta.</p></br>\
        <p>Un día, un mosquito entró en el océano de forma casual, estubo a punto de morir, sin embargo, en su\
        lecho de muerte consiguió llegar hasta la orilla de la playa. Justo antes de morir, se encontró con un talismán,\
        gracias a este, consiguió sobrevivir milagrosamente.</p></br>\
        <p>Después de este suceso, el mosquito comenzó a crecer y a obtener capacidad de respirar y sobrevivir debajo del agua.\
        Además, empezó a volverse mucho más agresivo y hostil hacia los habitantes de la isla. Sumado a todo ello,\
        consiguió la capacidad para transmitir estas cualidades a los demás mosquitos de la isla.</p></br>\
        <p>Todos ellos se conocen como: 'Los mosquitos del Dengue'</p></br></br>\
        <p><i>Escrito por: Boy (Esposo de Girl)</i></p></br></br>\
        <p>PD: Con mis últimos esfuerzos voy a enfrentarme al maldito mosquito del dengue. Ya mismo me reuniré con vosotros..</p></br>\
        <p><a href='playa'>Continuar</a></p>"
    ),

    sintalisman: new undum.SimpleSituation(
        "<h1> HAS MUERTO </h1>\
        <p><img class='img-situation' src='./media/img/muerte.jpeg'>Mientras caminas por la playa, observas a lo lejos una gran nube negra que parece ser la plaga. \
        Te gusta ser el héroe siempre y decides lanzarte a derrotarla. </p>\
        <p>Por desgracia, la gran cantidad de mosquitos finalmente acaba contigo y no has sido capaz de terminar tu aventura. </p>." // Añadir foto de Kiko Rivera

    ),

    contalisman: new undum.SimpleSituation(
        "<h1>lucha contra la plaga</h1>\
        <img class='img-situation' src='./media/img/plaga.jpg'>\
        <p>Mientras caminas por la playa, observas a lo lejos una gran nube negra que parece ser la plaga. \
        Te gusta ser el héroe siempre y decides lanzarte a derrotarla. </p>\
        <p>Cuando te acercas a ella, los mosquitos se abren paso y no te atacan. Parece que el efecto del talismán que llevas encima\
        hace que no se puedan acercar a tí. </p>\
        <p>Para terminar tu aventura no es primordial acabar con los mosquitos, así que decides <a href='./tienetraje'>continuar tu camino</a></p>",

        {

            enter: function (character, system, from) {
                ini.pause();
                inter.play();
            },

            actions: {

                "tienetraje": function (character, system, action) {
                   system.doLink("previoboss3")
                }
            }
        }

    ),

    previoboss3: new undum.SimpleSituation(
        "<p></p>",{
            enter: function (character, system, from) {
                system.write("<h1>Búsqueda </h1><p><img class='img-situation' src='./media/img/playa2.jpg'> Has llegado a la otra parte de la Isla y no has encontrado nada. Por ello llegas a la conclusión que la plaga ha salido del fondo del océano por lo que \
                decides explorar en el fondo del mar.</p>")
                if(character.qualities.traje == true){
                    system.write("<p><img class='img-situation' src='./media/img/ruinas.jpeg'>Tras mucho explorar consigues llegar a la entrada del templo. El templo estaba situado justamente a 65 metros de profundidad, que casualmente es la profundidad máxima del traje.\
                    Sin embargo, no todo iba a ser bueno, ya que debes de encontrar alguna manera de abrir esa gran puerta y acceder al escondite del mosquito.</p>\
                   <p>Tras buscar por la zona y con el oxígeno al mínimo, encuentras una muesca en la pared que tiene una forma muy familiar. !Eso es!, tiene la misma forma que el talisman, por lo que <a href='elegirrepelente'> decides colocarlo</a>. </p>")
                }else{
                    system.write("<p> Para poder realizar la búsqueda necesitas un traje de buceo. Recuerdas que viste uno en la playa por lo que decides \
                    <a class='once' href='buscatraje'>volver</a>.</p>")
                }
            },
         }

    ),

    buscatraje: new undum.SimpleSituation(
        "<h1> Playa de la Isla de Java </h1>\
        <img class='img-situation' src='./media/img/arena.jpg'>\
        <p>No recuerdas exactamente donde fue, así que haces una búsqueda que dura horas y parece interminable... \
        ¡Ahí está! Has encontrado el <a class='once' href='./encuentratraje'>traje de buceo</a></p>",
        {

            actions: {
                "encuentratraje": function (character, system, action) {
                    system.setQuality("traje", true);
                    system.setCharacterText("<p>Has obtenido un traje de buceo</p>");
                    system.write("<p>Debes <a href='buceo'>continuar</a>.</p>");
                }
            }
        }
    ),

    buceo: new undum.SimpleSituation(
        "<h1> Mosquito del Dengue </h1>\
        <img class='img-situation' src='./media/img/ruinas.jpeg'>\
	       <p>Tras mucho explorar consigues llegar a la entrada del templo. El templo estaba situado justamente a 65 metros de profundidad, que casualmente es la profundidad máxima del traje.\
            Sin embargo, no todo iba a ser bueno, ya que debes de encontrar alguna manera de abrir esa gran puerta y acceder al escondite del mosquito.</p>\
           <p>Tras buscar por la zona y con el oxígeno al mínimo, encuentras una muesca en la pared que tiene una forma muy familiar. !Eso es!, tiene la misma forma que el talisman, por lo que <a href='elegirrepelente'> decides colocarlo</a>. </p>\
           ",
        {
            enter: function (character, system, from) {
                boss.play();
                inter.pause();
                vid1.style.display = 'none';
                vid2.style.display = 'none';
                vid3.style.display = 'none';
                vid4.style.display = 'none';
                vid5.style.display = 'none';
                vid6.style.display = 'block';
            },

        }
    ),
    elegirrepelente: new undum.SimpleSituation(
        "<h1> Mosquito del Dengue </h1>\
        <img class='img-situation' src='./media/img/mzulft.jpg'>\
            <p>La  puerta se abre y una gran fuerza te absorbe hacia el interior.</p>\
            <p>Cuando recobras la conciencia, ves que estas en una gran sala la cual está totalmente vacía y sin inundar. Justamente a tu derecha, encuentras un cadáver con una túnica\
            Al abrir la túnica encuentras varios objetos, entre ellos un <a href='./repelente_sintetico'>repelente sintético</a>, <a href='./pulsera'>una pulsera de citronela</a>, <a href='./telefono'>un teléfono con la aplicacion antimosquitos</a>\
             y un <a href='./repelente_ultrasonidos'>repelente ultrasonidos</a>.Solo puedes seleccionar uno \
            de los objetos ya que no tienes mas espacio disponible asi que debes elegir con sabiduria.</p> \
            <p>Casualmente te viene el recuerdo de un <a href='https://www.youtube.com/watch?v=kiPqooccYmY&ab_channel=ElFuturoEsApasionantedeVodafone' class='raw' target='_new'> video chorra </a>\
            que viste en la madrugada sobre que es mejor para librarse de los mosquitos, por lo que decides hacer memoria y recordar el video</p >\
            \
           ",
        {
            actions: {
                "repelente_sintetico": function (character, system, action) {
                    system.setQuality("repelente_sintetico", true);
                    system.setCharacterText("<p>Has obtenido el repelente</p>");
                    system.doLink("bossmosquito");

                },
                "pulsera": function (character, system, action) {
                    system.setQuality("pulsera", true);
                    system.setCharacterText("<p>Has obtenido la pulsera de citronela</p>");
                    system.doLink("bossmosquito");

                },
                "telefono": function (character, system, action) {
                    system.setQuality("telefono", true);
                    system.setCharacterText("<p>Has obtenido un telefono con una aplicación ultrasonidos</p>");
                    system.doLink("bossmosquito");

                },
                "repelente_ultrasonidos": function (character, system, action) {
                    system.setQuality("repultrasonido", true);
                    system.setCharacterText("<p>Has obtenido un repelente ultrasonidos</p>");
                    system.doLink("bossmosquito");

                },
            }
        }
    ),
    bossmosquito: new undum.SimpleSituation(
        "<h1> Mosquito del Dengue </h1>\
        <img class='img-situation' src='./media/img/mosquito.jpg'>\
        <p>De pronto, un gran sonido hace retumbar la sala. De la nada, aparece el mosquito gigante dispuesto a clavar su prosbocide en tu pecho\
        y asi devorar toda tu sangre. Con gran habilidad consigues evadir el ataque y te diriges a <a href='atacamosquito'>atacarle</a>.</p>",
    ),
    atacamosquito: new undum.SimpleSituation(
        "",
        {
            enter: function (character, system, from) {
                if (character.qualities.repelente_sintetico == true) {
                    system.write("<p>En ese mismo instante,ves como el mosquito se hecha hacia atrás con cierto temor. No sabes exactamente el porque, pero sin pensarlo sigues intentando\
                    acertar un golpe en él. Tras mucho rato atacando en vano, recuerdas que recogiste del cadaver un repelente y que posiblemente esa\
                    sea la causa por la que el mosquito tiene miedo a acercarse.</p> <p>Con tu gran ingenio, se te ocurren 2 planes para poder acercarte al mosquito y derrotarlo.</p>\
                    <p><ul><li><a href='rociarse'>Rociarte de repelente</a></li><li><a href='rociarmosquito'>Rociar al mosquito de repelente</a></li></ul></p>");
                } else {
                    system.write("<h1>HAS MUERTO</h1><p><img class='img-situation' src='./media/img/muerte.jpeg'>  Tu ataque no surte efecto y el mosquito consigue atravesarte. Poco a poco ves como el mosquito va tragando tu sangre\
                        hasta que pierdes el conocimiento. Como era de esperar, has muerto y tu aventura a llegado a su fin :( </p>");
                }
            }
        }
    ),
    rociarse: new undum.SimpleSituation(
        "<p>Abres el bote y te rocias totalmente con el repelente. Como era de esperar el mosquito no se quiere acercar, por lo que intentas\
        durante varias horas darle un golpe pero te lo esquiva todo. Finalmente, el efecto de spray desaparece y el mosquito \
        se lanza a por ti, atravesandote y absorbiendo toda tu sangre, muriendo en el acto. !Qué pena!, tu aventura ha llegado a su fin.\
        </p>",
        {

        }
    ),
    rociarmosquito: new undum.SimpleSituation(
        "<p>Te acercas lo suficiente como para poder rociar al mosquito con el repelente provocando que el mosquito \
        no pueda soportar el olor y caiga desmayado al suelo. Te acercas despacio y <a href='./final'>arrancas su cabeza</a> con tus propias manos. Has conseguido\
        derrotar a este terrible enemigo de una manera muy ingeniosa y has conseguido salvar la isla y al mundo de este terrible enemigo.</p>",
        {

            actions: {
                "final": function (character, system, action) {
                    system.setQuality("mosquito", true);
                    system.setQuality("porcentaje", character.qualities.porcentaje + 34);
                    if(character.qualities.porcentaje < 100){
                        system.write("<h1>Aún queda trabajo por hacer. Asi que te diriges a Yambuku</h1>");
                        system.doLink("africa");
                    }else{
                    system.doLink("fin");
                    }
                }
            }
        }
    ),

    fin: new undum.SimpleSituation(
        "<h1> FIN </h1>\
	       <p>¡Enhorabuena! Has conseguido salvar a la humanidad de los distintos peligros que la acechaban.\
	        Serás reconocido como el héroe de la Tierra, todos te recordarán.</p>\
        <img class= 'img-situation' src = './media/img/heroe.jpg'>",
        {
            enter: function (character, system, from) {
                boss.pause();
                ini.play();
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
    pielmurcielago: new undum.OnOffQuality(
        "Piel Murciélago", { priority: "0006", group: 'inventario', onDisplay: "&#10003;" }
    ),

    cabezamurcielago: new undum.OnOffQuality(
        "Cabeza Murciélago", { priority: "0004", group: 'trofeos', onDisplay: "&#10003;" }
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
        "Cabeza Pangolín", { priority: "0004", group: 'trofeos', onDisplay: "&#10003;" }
    ),

    pangolines: new undum.NonZeroIntegerQuality(
        "Pangolines KO", { priority: "0004", group: 'inventario', onDisplay: "&#10003;" }
    ),

    porcentaje: new undum.IntegerQuality(
        "Progreso: ", { priority: "0001", group: 'trofeos', onDisplay: "&#10003;" }
    ),

    pala: new undum.OnOffQuality(
        "Pala de juguete", { priority: "0007", group: 'inventario', onDisplay: "&#10003;" }
    ),

    cubo: new undum.OnOffQuality(
        "Cubo de juguete", { priority: "0008", group: 'inventario', onDisplay: "&#10003;" }
    ),

    barco: new undum.OnOffQuality(
        "Barco de madera", { priority: "0009", group: 'inventario', onDisplay: "&#10003;" }
    ),

    libro: new undum.OnOffQuality(
        "Libro del Dengue", { priority: "0010", group: 'inventario', onDisplay: "&#10003;" }
    ),

    traje: new undum.OnOffQuality(
        "Traje de buceo", { priority: "0011", group: 'inventario', onDisplay: "&#10003;" }
    ),
    talisman: new undum.OnOffQuality(
        "Talismán", { priority: "0012", group: 'inventario', onDisplay: "&#10003;" }
    ),

    repelente_sintetico: new undum.OnOffQuality(
        "Repelente sintético", { priority: "0013", group: 'inventario', onDisplay: "&#10003;" }
    ),
    pulsera: new undum.OnOffQuality(
        "Pulsera de citronela", { priority: "0014", group: 'inventario', onDisplay: "&#10003;" }
    ),
    telefono: new undum.OnOffQuality(
        "Telefono", { priority: "0015", group: 'inventario', onDisplay: "&#10003;" }
    ),
    repelente_ultrasonidos: new undum.OnOffQuality(
        "Repelente ultrasonidos", { priority: "0015", group: 'inventario', onDisplay: "&#10003;" }
    ),
    mosquito: new undum.OnOffQuality(
        "Cabeza Mosquito", { priority: "0005", group: 'trofeos', onDisplay: "&#10003;" }
    ),
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    inventario: new undum.QualityGroup('Inventario', { priority: "0001" }),
    trofeos: new undum.QualityGroup('Trofeos', { priority: "0002" })
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function (character, system) {
    system.setQuality("pielmurcielago", false)
    system.setQuality("baston", false)
    system.setQuality("espada", false)
    system.setQuality("pangolin", false)
    system.setQuality("antorcha", false)
    system.setQuality("pala", false)
    system.setQuality("cubo", false)
    system.setQuality("traje", false)
    system.setQuality("libro", false)
    system.setQuality("barco", false)
    system.setQuality("talisman", false)
    system.setQuality("repelente_sintetico", false)
    system.setQuality("pulsera", false)
    system.setQuality("telefono", false)
    system.setQuality("repelente_ultrasonidos", false)
    system.setQuality("pangolines", 0)
    system.setQuality("porcentaje", 0)
    system.setQuality("mosquito", false)
    system.setCharacterText("<p>Comienzas tu fascinante aventura!</p>");
};
