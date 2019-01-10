-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:3306
-- Généré le :  Mar 04 Décembre 2018 à 19:25
-- Version du serveur :  5.5.62-0ubuntu0.14.04.1
-- Version de PHP :  5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `miw`
--

-- --------------------------------------------------------

--
-- Structure de la table `livre`
--

CREATE TABLE `livre` (
  `id` int(11) NOT NULL,
  `titre` varchar(255) NOT NULL,
  `isbn` varchar(75) NOT NULL,
  `nb_pages` int(9) NOT NULL,
  `resume` text NOT NULL,
  `id_type` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `livre`
--

INSERT INTO `livre` (`id`, `titre`, `isbn`, `nb_pages`, `resume`, `id_type`) VALUES
(1, 'Le Signal', '978-2226319487', 752, 'La famille Spencer vient de s\'installer Ã  Mahingan Falls.\r\nUn havre de paix.\r\nDu moins c\'est ce qu\'ils pensaient....\r\nMeurtres sordides, conversations tÃ©lÃ©phoniques brouillÃ©es par des hurlements inhumains et puis ces vieilles rumeurs de sorcellerie et ce quelque chose d\'effrayant dans la forÃªt qui pourchasse leurs adolescents...\r\nComment le shÃ©rif dÃ©passÃ© va-t-il gÃ©rer cette situation inÃ©dite?\r\nIls ne le savent pas encore mais Ã§a n\'est que le dÃ©but...\r\n \r\nAvez-vous dÃ©jÃ  eu vraiment peur en lisant un livre ?', 1),
(2, 'Par accident', '978-2714475367', 360, 'Gardez votre sang-froid, la nuit sera longue.\r\nIl y a quinze ans, la vie de Nap Dumas a basculÃ© : derniÃ¨re annÃ©e de lycÃ©e, son frÃ¨re jumeau et la petite amie de celui-ci ont Ã©tÃ© retrouvÃ©s morts sur la voie ferrÃ©e. \r\nDouble suicide d\'amoureux ? \r\nNap n\'y a jamais cru. \r\nDÃ©sormais flic, Nap voit ressurgir le passÃ© : Rex, leur ami d\'enfance, vient d\'Ãªtre sauvagement assassinÃ©. Sur les lieux du crime, les empreintes d\'une femme que Nap pensait disparue : Maura, son amour de jeunesse, dont il Ã©tait sans nouvelles depuis quinze ans. \r\nLe choc est total pour le policier. Celle qu\'il aimait serait-elle une dangereuse psychopathe ? OÃ¹ est Maura ? Et s\'il Ã©tait le prochain sur sa liste ? \r\nLa vÃ©ritÃ© est proche. Si proche. Bien plus terrible et dangereuse que tout ce que Nap imagine... \r\nPuisant dans les lÃ©gendes urbaines de la ville oÃ¹ il a grandi, le boss du thriller livre un jeu de fausses pistes effroyable', 1),
(3, 'AstÃ©rix - AstÃ©rix le gaulois - nÂ°1', '978-2012101333', 48, 'La toute premiÃ¨re histoire d\'AstÃ©rix, pour faire connaissance avec la troupe des irrÃ©ductibles Gaulois.', 2),
(4, 'AstÃ©rix - La serpe d\'Or - nÂ°2', '978-2012101340', 48, 'AstÃ©rix et ObÃ©lix partent pour LutÃ¨ce acheter une nouvelle serpe au druide Panoramix. Mais sur place, ils se rendent compte que la contrebande de serpes fait rage.', 2),
(5, 'AstÃ©rix - AstÃ©rix et la Transitalique - nÂ°37', '978-2864973270', 48, 'Les personnages crÃ©Ã©s par les deux gÃ©nies du 9e art Albert Uderzo et RenÃ© Goscinny sont de retour !\r\nAprÃ¨s AstÃ©rix chez les Pictes et Le Papyrus de CÃ©sar, AstÃ©rix et ObÃ©lix reviennent dans AstÃ©rix et la Transitalique, le nouvel album signÃ© par les talentueux Jean-Yves Ferri et Didier Conrad.\r\nN\'en dÃ©plaise Ã  ObÃ©lix, les Italiques, les habitants de l\'Italie, ne sont pas tous des Romains, au contraire !', 2);

-- --------------------------------------------------------

--
-- Structure de la table `type`
--

CREATE TABLE `type` (
  `id` int(11) NOT NULL,
  `libelle` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `type`
--

INSERT INTO `type` (`id`, `libelle`) VALUES
(1, 'Roman'),
(2, 'BD');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `livre`
--
ALTER TABLE `livre`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `type`
--
ALTER TABLE `type`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `livre`
--
ALTER TABLE `livre`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT pour la table `type`
--
ALTER TABLE `type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
