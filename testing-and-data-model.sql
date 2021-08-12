drop database plan;

-- The demo data for testing

CREATE DATABASE IF NOT EXISTS `plan`;
USE `plan`;

CREATE TABLE `plan_info` (
  `plan_id` int unsigned NOT NULL AUTO_INCREMENT,
  `plan_name` varchar(45) NOT NULL,
  `general` boolean NOT NULL,
  `specialist` boolean NOT NULL,
  `physiotherapy` boolean NOT NULL,
  `SYMPTOM_n` boolean NOT NULL,
  `plan_desc` text,
  `plan_month_price` float NOT NULL,
  PRIMARY KEY (`plan_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

insert  into `plan_info`(`plan_id`,`plan_name`,`general`,`specialist`,`physiotherapy`,`SYMPTOM_n`,`plan_desc`,`plan_month_price`) values
(1,'standard',1,0,0,0,'this is standard plan description.',0),
(2,'premium',1,1,1,1,'this is premium plan description',388);

