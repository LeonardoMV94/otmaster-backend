-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema OTmaster
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema OTmaster
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `OTmaster` DEFAULT CHARACTER SET utf8 ;
USE `OTmaster` ;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'toor';
flush privileges;

-- -----------------------------------------------------
-- Table `OTmaster`.`Roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `OTmaster`.`Roles` (
  `ID_Rol` INT NOT NULL AUTO_INCREMENT,
  `nombre_rol` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`ID_Rol`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OTmaster`.`Colaboradores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `OTmaster`.`Colaboradores` (
  `rut_colaborador` INT(8) NOT NULL,
  `password_colaborador` VARCHAR(45) NOT NULL,
  `nombre_colaborador` VARCHAR(20) NOT NULL,
  `apmat_colaborador` VARCHAR(20) NOT NULL,
  `appat_colaborador` VARCHAR(20) NOT NULL,
  `Roles_ID_Rol` INT NOT NULL,
  PRIMARY KEY (`rut_colaborador`),
  INDEX `fk_Colaboradores_Roles1_idx` (`Roles_ID_Rol` ASC) VISIBLE,
  UNIQUE INDEX `rut_colaborador_UNIQUE` (`rut_colaborador` ASC) VISIBLE,
  CONSTRAINT `fk_Colaboradores_Roles1`
    FOREIGN KEY (`Roles_ID_Rol`)
    REFERENCES `OTmaster`.`Roles` (`ID_Rol`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OTmaster`.`Clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `OTmaster`.`Clientes` (
  `rut_cliente` INT(8) NOT NULL,
  `nombre_cliente` VARCHAR(20) NOT NULL,
  `apmat_cliente` VARCHAR(20) NOT NULL,
  `appat_cliente` VARCHAR(20) NOT NULL,
  `correo_cliente` VARCHAR(40) NOT NULL,
  `tel_cliente` INT NOT NULL,
  PRIMARY KEY (`rut_cliente`),
  UNIQUE INDEX `rut_cliente_UNIQUE` (`rut_cliente` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OTmaster`.`comunas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `OTmaster`.`comunas` (
  `id_comunas` INT NOT NULL AUTO_INCREMENT,
  `comuna` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_comunas`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OTmaster`.`Direcciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `OTmaster`.`Direcciones` (
  `ID_Direccion` INT NOT NULL AUTO_INCREMENT,
  `comuna` INT NOT NULL,
  `calle` VARCHAR(45) NOT NULL,
  `numero_calle` INT NOT NULL,
  PRIMARY KEY (`ID_Direccion`),
  INDEX `fk_direcciones_comiuna_idx` (`comuna` ASC) VISIBLE,
  CONSTRAINT `fk_direcciones_comiuna`
    FOREIGN KEY (`comuna`)
    REFERENCES `OTmaster`.`comunas` (`id_comunas`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OTmaster`.`Marcas_Dispositivos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `OTmaster`.`Marcas_Dispositivos` (
  `ID_Marcas` INT NOT NULL AUTO_INCREMENT,
  `nombre_marca` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`ID_Marcas`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OTmaster`.`Tipos_Dispositivos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `OTmaster`.`Tipos_Dispositivos` (
  `ID_Tipos` INT NOT NULL AUTO_INCREMENT,
  `nombre_tipo` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`ID_Tipos`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OTmaster`.`Dispositivo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `OTmaster`.`Dispositivo` (
  `ID_Dispositivo` INT NOT NULL AUTO_INCREMENT,
  `num_serie_dispositivo` INT NOT NULL,
  `modelo` VARCHAR(45) NOT NULL,
  `Marcas_Dispositivos_ID_Marcas` INT NOT NULL,
  `Tipos_Dispositivos_ID_Tipos` INT NOT NULL,
  PRIMARY KEY (`ID_Dispositivo`),
  INDEX `fk_Dispositivo_Marcas_Dispositivos_idx` (`Marcas_Dispositivos_ID_Marcas` ASC) VISIBLE,
  INDEX `fk_Dispositivo_Tipos_Dispositivos1_idx` (`Tipos_Dispositivos_ID_Tipos` ASC) VISIBLE,
  CONSTRAINT `fk_Dispositivo_Marcas_Dispositivos`
    FOREIGN KEY (`Marcas_Dispositivos_ID_Marcas`)
    REFERENCES `OTmaster`.`Marcas_Dispositivos` (`ID_Marcas`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Dispositivo_Tipos_Dispositivos1`
    FOREIGN KEY (`Tipos_Dispositivos_ID_Tipos`)
    REFERENCES `OTmaster`.`Tipos_Dispositivos` (`ID_Tipos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OTmaster`.`estado_ticket`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `OTmaster`.`estado_ticket` (
  `id_estado_ticket` INT NOT NULL AUTO_INCREMENT,
  `estado` VARCHAR(45) NULL,
  PRIMARY KEY (`id_estado_ticket`),
  UNIQUE INDEX `estado_UNIQUE` (`estado` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OTmaster`.`Ticket`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `OTmaster`.`Ticket` (
  `ID_Ticket` INT NOT NULL AUTO_INCREMENT,
  `diagnostico_ticket` VARCHAR(80) NOT NULL,
  `resolucion_ticket` VARCHAR(80) NOT NULL,
  `estado_ticket` INT NOT NULL,
  `Dispositivo_ID_Dispositivo` INT NOT NULL,
  `Clientes_ID_Cliente` INT NOT NULL,
  `Colaboradores_ID_Colaborador` INT NOT NULL,
  PRIMARY KEY (`ID_Ticket`),
  INDEX `fk_Ticket_Dispositivo1_idx` (`Dispositivo_ID_Dispositivo` ASC) VISIBLE,
  INDEX `fk_Ticket_Clientes1_idx` (`Clientes_ID_Cliente` ASC) VISIBLE,
  INDEX `fk_Ticket_Colaboradores1_idx` (`Colaboradores_ID_Colaborador` ASC) VISIBLE,
  INDEX `fk_Ticket_estado_idx` (`estado_ticket` ASC) VISIBLE,
  CONSTRAINT `fk_Ticket_Dispositivo1`
    FOREIGN KEY (`Dispositivo_ID_Dispositivo`)
    REFERENCES `OTmaster`.`Dispositivo` (`ID_Dispositivo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Ticket_Clientes1`
    FOREIGN KEY (`Clientes_ID_Cliente`)
    REFERENCES `OTmaster`.`Clientes` (`rut_cliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Ticket_Colaboradores1`
    FOREIGN KEY (`Colaboradores_ID_Colaborador`)
    REFERENCES `OTmaster`.`Colaboradores` (`rut_colaborador`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Ticket_estado`
    FOREIGN KEY (`estado_ticket`)
    REFERENCES `OTmaster`.`estado_ticket` (`id_estado_ticket`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OTmaster`.`Direcciones_de_Colaboradores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `OTmaster`.`Direcciones_de_Colaboradores` (
  `Colaboradores_ID_Colaborador` INT NOT NULL,
  `Direcciones_ID_Direccion` INT NOT NULL,
  PRIMARY KEY (`Colaboradores_ID_Colaborador`, `Direcciones_ID_Direccion`),
  INDEX `fk_Colaboradores_has_Direcciones_Direcciones1_idx` (`Direcciones_ID_Direccion` ASC) VISIBLE,
  INDEX `fk_Colaboradores_has_Direcciones_Colaboradores1_idx` (`Colaboradores_ID_Colaborador` ASC) VISIBLE,
  CONSTRAINT `fk_Colaboradores_has_Direcciones_Colaboradores1`
    FOREIGN KEY (`Colaboradores_ID_Colaborador`)
    REFERENCES `OTmaster`.`Colaboradores` (`rut_colaborador`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Colaboradores_has_Direcciones_Direcciones1`
    FOREIGN KEY (`Direcciones_ID_Direccion`)
    REFERENCES `OTmaster`.`Direcciones` (`ID_Direccion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

/* para quitar error de uso de contraseña */
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'toor';
flush privileges;