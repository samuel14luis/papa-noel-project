-- MySQL Script generated by MySQL Workbench
-- Thu Jul 18 21:16:11 2019
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema papanoel-store
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema papanoel-store
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `papanoel-store` DEFAULT CHARACTER SET utf8 ;
USE `papanoel-store` ;

-- -----------------------------------------------------
-- Table `papanoel-store`.`Product_Category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `papanoel-store`.`Product_Category` (
  `idCategory` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(150) NOT NULL,
  `iconURL` VARCHAR(250) NOT NULL,
  PRIMARY KEY (`idCategory`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `papanoel-store`.`Carrito`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `papanoel-store`.`Carrito` (
  `idCarrito` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`idCarrito`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `papanoel-store`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `papanoel-store`.`User` (
  `idUser` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(150) NOT NULL,
  `email` VARCHAR(150) NOT NULL,
  `password` VARCHAR(150) NOT NULL,
  `beginDate` DATE NOT NULL,
  `lastLogIn` DATE NOT NULL,
  `Carrito_idCarrito` INT NOT NULL,
  PRIMARY KEY (`idUser`, `Carrito_idCarrito`),
  INDEX `fk_User_Carrito1_idx` (`Carrito_idCarrito` ASC) VISIBLE,
  CONSTRAINT `fk_User_Carrito1`
    FOREIGN KEY (`Carrito_idCarrito`)
    REFERENCES `papanoel-store`.`Carrito` (`idCarrito`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `papanoel-store`.`User_Roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `papanoel-store`.`User_Roles` (
  `idRole` INT NOT NULL AUTO_INCREMENT,
  `roleName` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idRole`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `papanoel-store`.`Roles_has_User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `papanoel-store`.`Roles_has_User` (
  `Roles_idRole` INT NOT NULL,
  `User_idUser` INT NOT NULL,
  PRIMARY KEY (`Roles_idRole`, `User_idUser`),
  INDEX `fk_Roles_has_User_User1_idx` (`User_idUser` ASC) VISIBLE,
  INDEX `fk_Roles_has_User_Roles_idx` (`Roles_idRole` ASC) VISIBLE,
  CONSTRAINT `fk_Roles_has_User_Roles`
    FOREIGN KEY (`Roles_idRole`)
    REFERENCES `papanoel-store`.`User_Roles` (`idRole`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Roles_has_User_User1`
    FOREIGN KEY (`User_idUser`)
    REFERENCES `papanoel-store`.`User` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `papanoel-store`.`Product_Brands`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `papanoel-store`.`Product_Brands` (
  `idBrand` INT NOT NULL AUTO_INCREMENT,
  `brandName` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`idBrand`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `papanoel-store`.`Products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `papanoel-store`.`Products` (
  `idProduct` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(150) NOT NULL,
  `img` VARCHAR(250) NOT NULL,
  `description` VARCHAR(250) NOT NULL,
  `Product_Brands_idBrand` INT NOT NULL,
  `Product_Category_idCategory` INT NOT NULL,
  PRIMARY KEY (`idProduct`),
  INDEX `fk_Products_Product_Brands1_idx` (`Product_Brands_idBrand` ASC) VISIBLE,
  INDEX `fk_Products_Product_Category1_idx` (`Product_Category_idCategory` ASC) VISIBLE,
  CONSTRAINT `fk_Products_Product_Brands1`
    FOREIGN KEY (`Product_Brands_idBrand`)
    REFERENCES `papanoel-store`.`Product_Brands` (`idBrand`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Products_Product_Category1`
    FOREIGN KEY (`Product_Category_idCategory`)
    REFERENCES `papanoel-store`.`Product_Category` (`idCategory`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `papanoel-store`.`Labels`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `papanoel-store`.`Labels` (
  `idLabel` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idLabel`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `papanoel-store`.`TypeOf_Feature`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `papanoel-store`.`TypeOf_Feature` (
  `idTypeOf_Feature` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idTypeOf_Feature`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `papanoel-store`.`ValueOf_Feature`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `papanoel-store`.`ValueOf_Feature` (
  `idValueOf_Feature` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `TypeOf_Feature_idTypeOf_Feature` INT NOT NULL,
  `Product_Features_idFeature` INT NOT NULL,
  PRIMARY KEY (`idValueOf_Feature`),
  INDEX `fk_ValueOf_Feature_TypeOf_Feature1_idx` (`TypeOf_Feature_idTypeOf_Feature` ASC) VISIBLE,
  CONSTRAINT `fk_ValueOf_Feature_TypeOf_Feature1`
    FOREIGN KEY (`TypeOf_Feature_idTypeOf_Feature`)
    REFERENCES `papanoel-store`.`TypeOf_Feature` (`idTypeOf_Feature`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `papanoel-store`.`Labels_has_Products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `papanoel-store`.`Labels_has_Products` (
  `Labels_idLabel` INT NOT NULL,
  `Products_idProduct` INT NOT NULL,
  PRIMARY KEY (`Labels_idLabel`, `Products_idProduct`),
  INDEX `fk_Labels_has_Products_Products1_idx` (`Products_idProduct` ASC) VISIBLE,
  INDEX `fk_Labels_has_Products_Labels1_idx` (`Labels_idLabel` ASC) VISIBLE,
  CONSTRAINT `fk_Labels_has_Products_Labels1`
    FOREIGN KEY (`Labels_idLabel`)
    REFERENCES `papanoel-store`.`Labels` (`idLabel`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Labels_has_Products_Products1`
    FOREIGN KEY (`Products_idProduct`)
    REFERENCES `papanoel-store`.`Products` (`idProduct`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `papanoel-store`.`Product_Feature`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `papanoel-store`.`Product_Feature` (
  `idProduct_Feature` INT NOT NULL AUTO_INCREMENT,
  `Products_idProduct` INT NOT NULL,
  PRIMARY KEY (`idProduct_Feature`),
  INDEX `fk_Product_Feature_Products1_idx` (`Products_idProduct` ASC) VISIBLE,
  CONSTRAINT `fk_Product_Feature_Products1`
    FOREIGN KEY (`Products_idProduct`)
    REFERENCES `papanoel-store`.`Products` (`idProduct`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `papanoel-store`.`Product_Feature_has_ValueOf_Feature`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `papanoel-store`.`Product_Feature_has_ValueOf_Feature` (
  `Product_Feature_idProduct_Feature` INT NOT NULL,
  `ValueOf_Feature_idValueOf_Feature` INT NOT NULL,
  PRIMARY KEY (`Product_Feature_idProduct_Feature`, `ValueOf_Feature_idValueOf_Feature`),
  INDEX `fk_Product_Feature_has_ValueOf_Feature_ValueOf_Feature1_idx` (`ValueOf_Feature_idValueOf_Feature` ASC) VISIBLE,
  INDEX `fk_Product_Feature_has_ValueOf_Feature_Product_Feature1_idx` (`Product_Feature_idProduct_Feature` ASC) VISIBLE,
  CONSTRAINT `fk_Product_Feature_has_ValueOf_Feature_Product_Feature1`
    FOREIGN KEY (`Product_Feature_idProduct_Feature`)
    REFERENCES `papanoel-store`.`Product_Feature` (`idProduct_Feature`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Product_Feature_has_ValueOf_Feature_ValueOf_Feature1`
    FOREIGN KEY (`ValueOf_Feature_idValueOf_Feature`)
    REFERENCES `papanoel-store`.`ValueOf_Feature` (`idValueOf_Feature`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `papanoel-store`.`Inventory`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `papanoel-store`.`Inventory` (
  `idInventory` INT NOT NULL AUTO_INCREMENT,
  `stock` INT NOT NULL,
  `receptiondate` DATE NOT NULL,
  `nostockdate` DATE NULL,
  `Product_Feature_idProduct_Feature` INT NOT NULL,
  `unitReceptionPrize` DECIMAL(10,2) NOT NULL,
  `unitProfit` DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (`idInventory`),
  INDEX `fk_Inventory_Product_Feature1_idx` (`Product_Feature_idProduct_Feature` ASC) VISIBLE,
  CONSTRAINT `fk_Inventory_Product_Feature1`
    FOREIGN KEY (`Product_Feature_idProduct_Feature`)
    REFERENCES `papanoel-store`.`Product_Feature` (`idProduct_Feature`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `papanoel-store`.`Product_Feature_has_Carrito`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `papanoel-store`.`Product_Feature_has_Carrito` (
  `Product_Feature_idProduct_Feature` INT NOT NULL,
  `Carrito_idCarrito` INT NOT NULL,
  `Quantity` INT NOT NULL,
  `selected` TINYINT(1) NOT NULL,
  PRIMARY KEY (`Product_Feature_idProduct_Feature`, `Carrito_idCarrito`),
  INDEX `fk_Product_Feature_has_Carrito_Carrito1_idx` (`Carrito_idCarrito` ASC) VISIBLE,
  INDEX `fk_Product_Feature_has_Carrito_Product_Feature1_idx` (`Product_Feature_idProduct_Feature` ASC) VISIBLE,
  CONSTRAINT `fk_Product_Feature_has_Carrito_Product_Feature1`
    FOREIGN KEY (`Product_Feature_idProduct_Feature`)
    REFERENCES `papanoel-store`.`Product_Feature` (`idProduct_Feature`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Product_Feature_has_Carrito_Carrito1`
    FOREIGN KEY (`Carrito_idCarrito`)
    REFERENCES `papanoel-store`.`Carrito` (`idCarrito`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `papanoel-store`.`Factura`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `papanoel-store`.`Factura` (
  `idFactura` INT NOT NULL AUTO_INCREMENT,
  `User_idUser` INT NOT NULL,
  `totalAmount` DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (`idFactura`),
  INDEX `fk_Factura_User1_idx` (`User_idUser` ASC) VISIBLE,
  CONSTRAINT `fk_Factura_User1`
    FOREIGN KEY (`User_idUser`)
    REFERENCES `papanoel-store`.`User` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `papanoel-store`.`Product_Feature_has_Factura`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `papanoel-store`.`Product_Feature_has_Factura` (
  `Product_Feature_idProduct_Feature` INT NOT NULL,
  `Factura_idFactura` INT NOT NULL,
  `quantity` INT NOT NULL,
  `unitPrize` DECIMAL(10,2) NOT NULL,
  `Inventory_idInventory` INT NOT NULL,
  `unitDiscount` DECIMAL(10,2) NULL,
  PRIMARY KEY (`Product_Feature_idProduct_Feature`, `Factura_idFactura`),
  INDEX `fk_Product_Feature_has_Factura_Factura1_idx` (`Factura_idFactura` ASC) VISIBLE,
  INDEX `fk_Product_Feature_has_Factura_Product_Feature1_idx` (`Product_Feature_idProduct_Feature` ASC) VISIBLE,
  CONSTRAINT `fk_Product_Feature_has_Factura_Product_Feature1`
    FOREIGN KEY (`Product_Feature_idProduct_Feature`)
    REFERENCES `papanoel-store`.`Product_Feature` (`idProduct_Feature`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Product_Feature_has_Factura_Factura1`
    FOREIGN KEY (`Factura_idFactura`)
    REFERENCES `papanoel-store`.`Factura` (`idFactura`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `papanoel-store`.`Banner`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `papanoel-store`.`Banner` (
  `idBanner` INT NOT NULL AUTO_INCREMENT,
  `imgURL` VARCHAR(250) NOT NULL,
  `active` TINYINT(1) NOT NULL DEFAULT 1,
  `state` TINYINT(1) NOT NULL DEFAULT 1,
  `registrationDate` DATE NOT NULL,
  PRIMARY KEY (`idBanner`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
