/*
SQLyog Ultimate v11.11 (32 bit)
MySQL - 5.5.5-10.4.6-MariaDB : Database - product_management
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`product_management` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `product_management`;

/*Table structure for table `tbl_category_master` */

DROP TABLE IF EXISTS `tbl_category_master`;

CREATE TABLE `tbl_category_master` (
  `category_id` bigint(20) NOT NULL,
  `category_name` varchar(250) DEFAULT NULL,
  `category_create_date` datetime DEFAULT NULL,
  `category_update_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `category_active_flag` tinyint(2) DEFAULT 1 COMMENT '1 active || 2 Delect',
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `tbl_category_master` */

insert  into `tbl_category_master`(`category_id`,`category_name`,`category_create_date`,`category_update_date`,`category_active_flag`) values (61624294638948,'Men','2021-06-21 22:27:18','2021-06-21 22:27:18',1),(81624292352968,'Women','2021-06-21 21:49:12','2021-06-21 22:13:59',1);

/*Table structure for table `tbl_product_category_mapping` */

DROP TABLE IF EXISTS `tbl_product_category_mapping`;

CREATE TABLE `tbl_product_category_mapping` (
  `category_id` bigint(20) NOT NULL,
  `product_id` bigint(20) NOT NULL,
  `active_flag` tinyint(4) DEFAULT 1 COMMENT '1 Active| 2 Deleted',
  `createdon` datetime DEFAULT NULL,
  `updatedon` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT 'last updated on',
  PRIMARY KEY (`category_id`,`product_id`),
  KEY `userid` (`category_id`,`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `tbl_product_category_mapping` */

insert  into `tbl_product_category_mapping`(`category_id`,`product_id`,`active_flag`,`createdon`,`updatedon`) values (61624294638948,71624294662334,1,'2021-06-21 22:27:42','2021-06-21 22:27:42'),(81624292352968,21624292496688,1,'2021-06-21 21:51:36','2021-06-21 22:35:31'),(81624292352968,21624293815695,1,'2021-06-21 22:13:35','2021-06-21 22:35:35'),(81624292352968,71624293804928,1,'2021-06-21 22:13:24','2021-06-21 22:13:24');

/*Table structure for table `tbl_product_master` */

DROP TABLE IF EXISTS `tbl_product_master`;

CREATE TABLE `tbl_product_master` (
  `product_id` bigint(20) NOT NULL,
  `product_name` varchar(250) DEFAULT NULL,
  `product_create_date` datetime DEFAULT NULL,
  `product_update_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `product_active_flag` tinyint(2) DEFAULT 1 COMMENT '1 active || 2 Delect',
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `tbl_product_master` */

insert  into `tbl_product_master`(`product_id`,`product_name`,`product_create_date`,`product_update_date`,`product_active_flag`) values (21624292496688,'honey','2021-06-21 21:51:36','2021-06-21 22:35:42',1),(21624293815695,'nike','2021-06-21 22:13:35','2021-06-22 00:28:14',1),(71624293804928,'Honey','2021-06-21 22:13:24','2021-06-21 22:13:24',1),(71624294662334,'adidas','2021-06-21 22:27:42','2021-06-21 22:27:42',1);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
