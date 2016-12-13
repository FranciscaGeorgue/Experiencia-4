-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-12-2016 a las 17:39:44
-- Versión del servidor: 10.1.16-MariaDB
-- Versión de PHP: 7.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `flockfuster`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pelicula`
--

CREATE TABLE `pelicula` (
  `idPelicula` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `sinopsis` text NOT NULL,
  `fechaEstreno` varchar(50) NOT NULL,
  `genero` varchar(50) NOT NULL,
  `arrendada` tinyint(1) NOT NULL,
  `unidades` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `pelicula`
--

INSERT INTO `pelicula` (`idPelicula`, `nombre`, `sinopsis`, `fechaEstreno`, `genero`, `arrendada`, `unidades`) VALUES
(1, 'El señor de los anillos, la comunidad del anillo', 'La Comunidad del Anillo comienza narrando la creación de los Anillos de Poder. «Tres anillos para los Reyes elfos bajo el cielo. Siete para los Señores Enanos en palacios de piedra. Nueve para los Hombres Mortales condenados a morir. Uno para el Señor Oscuro, sobre el trono oscuro». Sauron (Sala Baker), el Señor Oscuro, fue el creador de la mayor parte de ellos, y gracias a su ciencia se crearon también los Tres que conservaron los Elfos, si bien nunca los tocó o mancilló. Pero el resto de los anillos quedaron sojuzgados bajo el poder del Anillo Único, con el cual Sauron el Maia pretendía dominar la Tierra Media. Por medio de estos anillos Sauron corrompió a sus dueños, facilitando que sus ejércitos conquistaran la Tierra Media. Pero surgió la Última Alianza entre Hombres y elfos derrotando a las tropas del malvado Sauron. Es en el asedio final a Barad-dûr, la torre oscura, en Mordor, cuando Sauron pierde el Anillo a manos del hijo del rey de Gondor, Isildur (Harry Sinclair). Él pudo destruir el Anillo, arrojándolo al Monte del Destino, pero antes de hacerlo cambió de idea, y decidió conservarlo para sí. En realidad, se plantea que el Anillo tiene una voluntad propia y puede corromper a su dueño. Isildur fue asesinado por Orcos en un río, y el Anillo se perdió en el fondo del mismo, hasta que un hobbit llamado Sméagol (Andy Serkis) lo encontró 2500 años más tarde y se lo llevó a lo profundo de una montaña, guardándolo durante unos 500 años, aunque éste fue deformado y corrompido en mente y cuerpo por el poder del Anillo y lo convirtió en una criatura llamada Gollum (Serkis). Pero finalmente el Anillo lo abandonó para ser encontrado (aparentemente no era esta la «intención» del Anillo) por Bilbo Bolsón (Ian Holm), de la Comarca, un hobbit que se dirigía a la Montaña Solitaria, tal como se narra en la novela El hobbit, publicada anteriormente a El Señor de los Anillos.', '2001', 'Aventuras', 0, 4),
(2, 'El señor de los anillos, las dos torres', 'Tras internarse en Emyn Muil, Frodo Bolsón y Sam Gamyi se encuentran con la criatura Gollum, que intenta quitarles el Anillo por la fuerza pero, al verse vencido, promete a los hobbits guiarlos hasta Mordor. Tras sacarlos de Emyn Muil y atravesar la Ciénaga de los Muertos, llegan al Morannon, la «Puerta Negra» de Mordor. No obstante, la gran protección que tiene les imposibilita entrar por ahí y Gollum les propone tomar el camino secreto de Cirith Ungol. Durante el viaje, se encuentran con una tropa avanzada de montaraces de Gondor dirigida por Faramir, hijo del senescal de Gondor y hermano de Boromir, quien los toma como prisioneros y descubre que portan el Anillo Único. Faramir cuenta a los hobbits que Boromir ha muerto y que fue encontrado en un bote élfico. Esto hace pensar a Frodo, pues creía que Boromir solo quería el Anillo, y por su hermano descubre que murió protegiendo a la Compañía, tal y como habían jurado todos sus miembros al salir de Rivendel. Faramir decidió llevarlos ante su padre, pero, a su paso por la derruida ciudad de Osgiliath, los soldados gondorianos se encuentran combatiendo a las fuerzas de Sauron conducidas por algunos Nazgûl. Al darse cuenta del maligno poder del Anillo sobre Frodo, al que casi captura uno de los Nazgûl, Faramir decide liberarlos para que completen su misión.', '2002', 'Aventuras', 0, 5),
(3, 'El señor de los anillos, el retorno del rey', 'La historia comienza con un recuerdo de cómo el hobbit Smeagol llegó a poseer el Anillo de Poder, tras matar a su amigo Déagol, quien lo había encontrado en el fondo de un río (donde cayó muchos años antes, como se vio en la primera película, cuando unos orcos asesinaron a Isildur, quien había cortado el dedo a Sauron en el Sitio de Barad-dûr, que concluyó la Guerra de la Última Alianza, y había conservado el Anillo a pesar de las advertencias de Elrond). A partir de entonces continúa el relato en donde se dejó mientras Gollum lleva a Frodo y Sam a través de la entrada cercana a Minas Morgul, en donde ven a sus ejércitos partir a la guerra.', '2003', 'Aventuras', 0, 67);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
