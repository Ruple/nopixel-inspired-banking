


CREATE DATABASE IF NOT EXISTS `es_extended`
USE `es_extended`;

CREATE TABLE IF NOT EXISTS `account_recent` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `identifier` varchar(40) NOT NULL,
  `sender` varchar(50) NOT NULL,
  `target` varchar(50) NOT NULL,
  `label` varchar(255) NOT NULL DEFAULT '',
  `amount` int(11) NOT NULL,
  `iden` varchar(50) NOT NULL DEFAULT '',
  `type` varchar(50) NOT NULL DEFAULT 'income',
  `date` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=93 DEFAULT CHARSET=utf8mb4;

ALTER TABLE `users` ADD COLUMN `bankid` int(5) NULL DEFAULT NULL;