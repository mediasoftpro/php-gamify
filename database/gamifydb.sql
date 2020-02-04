-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jan 31, 2015 at 02:48 AM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `gamifydb`
--

-- --------------------------------------------------------

--
-- Table structure for table `ga_badges`
--

CREATE TABLE IF NOT EXISTS `ga_badges` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `description` text,
  `icon` varchar(150) DEFAULT NULL,
  `icon_sm` varchar(150) DEFAULT NULL,
  `icon_lg` varchar(150) DEFAULT NULL,
  `category_id` smallint(6) NOT NULL,
  `type` tinyint(4) NOT NULL DEFAULT '0',
  `icon_css` varchar(200) DEFAULT NULL,
  `priority` smallint(6) NOT NULL DEFAULT '0',
  `credits` int(11) NOT NULL DEFAULT '0',
  `xp` int(11) NOT NULL DEFAULT '0',
  `price` double NOT NULL DEFAULT '0',
  `notification` text,
  `isdeduct` tinyint(4) NOT NULL DEFAULT '0',
  `ilevel` smallint(6) NOT NULL DEFAULT '0',
  `ishide` tinyint(4) NOT NULL DEFAULT '0',
  `ismultiple` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=43 ;

-- --------------------------------------------------------

--
-- Table structure for table `ga_badge_events`
--

CREATE TABLE IF NOT EXISTS `ga_badge_events` (
  `event_id` int(11) NOT NULL,
  `badge_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ga_badge_events`
--

INSERT INTO `ga_badge_events` (`event_id`, `badge_id`) VALUES
(1, 37),
(1, 36);

-- --------------------------------------------------------

--
-- Table structure for table `ga_categories`
--

CREATE TABLE IF NOT EXISTS `ga_categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `shorttitle` varchar(50) DEFAULT NULL,
  `description` text,
  `type` tinyint(4) NOT NULL DEFAULT '0',
  `priority` smallint(6) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- Dumping data for table `ga_categories`
--

-- --------------------------------------------------------

--
-- Table structure for table `ga_events`
--

CREATE TABLE IF NOT EXISTS `ga_events` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `description` text,
  `event_key` varchar(40) DEFAULT NULL,
  `category_id` smallint(6) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `ga_events`
--

-- --------------------------------------------------------

--
-- Table structure for table `ga_level_associate`
--

CREATE TABLE IF NOT EXISTS `ga_level_associate` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `levelid` int(11) NOT NULL,
  `rewardid` int(11) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `ga_level_associate`
--

-- --------------------------------------------------------

--
-- Table structure for table `ga_users`
--

CREATE TABLE IF NOT EXISTS `ga_users` (
  `userid` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(15) NOT NULL,
  `email` varchar(50) NOT NULL,
  `firstname` varchar(50) DEFAULT NULL,
  `lastname` varchar(50) DEFAULT NULL,
  `added_date` datetime DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '0',
  `avator` varchar(150) NOT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `ga_users`
--

INSERT INTO `ga_users` (`userid`, `username`, `email`, `firstname`, `lastname`, `added_date`, `status`, `avator`) VALUES
(1, 'mediasoftpro', 'support@mediasoftpro.com', 'shane', 'michael', '0000-00-00 00:00:00', 1, 'sample.png');

-- --------------------------------------------------------

--
-- Table structure for table `ga_user_achievements`
--

CREATE TABLE IF NOT EXISTS `ga_user_achievements` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NOT NULL,
  `description` text,
  `added_date` datetime NOT NULL,
  `type` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=18 ;

--
-- Dumping data for table `ga_user_achievements`
--

-- --------------------------------------------------------

--
-- Table structure for table `ga_user_badges`
--

CREATE TABLE IF NOT EXISTS `ga_user_badges` (
  `userid` int(11) NOT NULL,
  `badge_id` int(11) NOT NULL,
  `type` tinyint(4) NOT NULL DEFAULT '0',
  `added_date` datetime NOT NULL,
  `repeated` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`userid`,`badge_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ga_user_badges`
--

-- --------------------------------------------------------

--
-- Table structure for table `ga_user_levels`
--

CREATE TABLE IF NOT EXISTS `ga_user_levels` (
  `userid` int(11) NOT NULL,
  `levels` int(11) NOT NULL DEFAULT '0',
  `points` int(11) NOT NULL DEFAULT '0',
  `credits` int(11) NOT NULL DEFAULT '0',
  `init_points` int(11) NOT NULL DEFAULT '0',
  `max_points` int(11) NOT NULL DEFAULT '0',
  `level_id` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ga_user_levels`
--

INSERT INTO `ga_user_levels` (`userid`, `levels`, `points`, `credits`, `init_points`, `max_points`, `level_id`) VALUES
(1, 1, 0, 0, 0, 0, 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
