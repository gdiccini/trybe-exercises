DROP SCHEMA IF EXISTS ZOO;
CREATE DATABASE IF NOT EXISTS ZOO;
USE ZOO;

CREATE TABLE `Manager` (
	`Manager_Id` INT AUTO_INCREMENT PRIMARY KEY,
    `Manager_Name` VARCHAR(100) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE `Cuidador` (
	`Cuidador_Id` INT AUTO_INCREMENT PRIMARY KEY,
    `Cuidador_Name` VARCHAR(100) NOT NULL,
    `Manager_Id` INT NOT NULL,
    FOREIGN KEY (`Manager_Id`) REFERENCES `Manager` (`Manager_Id`)
) ENGINE=InnoDB;

CREATE TABLE `Animals` (
	`animal_id` INT AUTO_INCREMENT PRIMARY KEY,
    `animal_name` VARCHAR(50) NOT NULL,
    `animal_sex` VARCHAR(50) NOT NULL,
    `animal_age` INT NOT NULL,
    `animal_location` VARCHAR(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `Animal/Cuidador` (
	`animal_id` INT NOT NULL,
    `Cuidador_Id` INT NOT NULL,
    FOREIGN KEY (`animal_Id`) REFERENCES `Animals` (`animal_id`),
    FOREIGN KEY (`Cuidador_Id`) REFERENCES `Cuidador` (`Cuidador_Id`)
) ENGINE=InnoDB;