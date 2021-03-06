/*
alter user 'root'@'localhost'
identified WITH mysql_native_password by 'root'
use news_portal;select * from news;
*/
###############
show databases;
use `papanoel-store` ;
drop database `papanoel-store` ;
SELECT p.idProduct, p.name, p.img, p.description, b.brandName
FROM PRODUCTS p INNER JOIN PRODUCT_BRANDS b
ON p.PRODUCT_BRANDS_idBrand = b.idBrand
WHERE Product_Category_idCategory=4
show tables;
############################################################
insert into product_brands (brandName) values 
('Faber Castell'),
('Stanford'),
('Alpha'),
('College'),
('Sin Marca');

select * from product_brands;
############################################################
insert into product_category (name,iconURL) values 
('Juguetes','https://img.icons8.com/color/100/000000/plush.svg'), 
('Mochilas','https://img.icons8.com/color/100/000000/school-backpack.png'),
('Regalos','https://img.icons8.com/color/100/000000/gift.svg'),
('Útiles','https://img.icons8.com/clouds/100/000000/math-book.png');

select * from product_category;
############################################################
insert into Products (name, img, description, Product_Brands_idBrand, Product_Category_idCategory) 
values 
('Colores Bicolor x12','https://http2.mlstatic.com/lapices-faber-castell-bicolor-x-12-lapices-24-colores-microc-D_NQ_NP_880915-MLA29060690424_122018-Q.jpg',
'lapices de colores bicolor x12, vienen x24 colores en total',1,4),
('Cuaderno A4 82 hojas','https://practistore.com/wp-content/uploads/2018/02/CUADENO-SOY-LUNA.png',
'Cuaderno A4 82 hojas, peso 45gr, extra duración, tapa dura',2,4);

select * from Products;
select p.idproduct, p.name, p.description, b.brandname, c.name
from Products p 
inner join product_brands b 
on p.product_brands_idbrand = b.idbrand
inner join product_category c
on p.product_category_idcategory = c.idcategory;
############################################################
insert into labels (name) values ('Cuadernos'), ('colores'), ('x12'), ('bicolor'),('soyluna');

select * from labels;
############################################################
insert into Labels_has_Products (labels_idlabel, products_idproduct) 
values (2,1), (3,1), (4,1),
(1,2),(5,2);

select * from Labels_has_Products;
select idlabel,name from labels_has_products h
inner join labels l
on h.labels_idlabel = l.idlabel
where h.products_idproduct = 1 #etiquetas de un producto buscado mediante su idproduct
############################################################
############################################################
insert into TypeOf_Feature (name) values ('Color'), ('Talla'), ('Diseño');

select * from TypeOf_Feature;
############################################################
insert into Product_Features (name) values ();

select * from Product_Features;
############################################################
insert into ValueOf_Feature (name) values ();

select * from ValueOf_Feature;
############################################################
Product_Features_has_Products
insert into labels (name) values ();

select * from labels;
############################################################
Products
insert into labels (name) values ('Cuadernos'), ('colores'), ('x12'), ('bicolor');

select * from Products p inner join labels_has_products h
on p.idProduct = h.Products_idProduct

select idlabel,name from labels_has_products h
inner join labels l
on h.labels_idlabel = l.idlabel
where h.products_idproduct = 1
############################################################
select * from banner;
INSERT INTO BANNER (imgURL, active,state,registrationDate) values('imgurl.png',1,1,current_date());
SELECT * FROM BANNER WHERE idBanner = 2 and state=1

SELECT p.idProduct, p.name, p.img, p.description,  b.brandName, (p.unitPrize + p.unitProfit) as prize, p.stock '+
        'FROM PRODUCTS p INNER JOIN PRODUCT_BRANDS b '+
        'ON p.PRODUCT_BRANDS_idBrand = b.idBrand '+
        'WHERE Product_Category_idCategory=?

SELECT c.User_idUser, c.Products_idProduct, p.name, p.img, p.description, b.brandName, (p.unitPrize + p.unitProfit) as prize, p.stock, c.quantity, c.selected
FROM CART c 
INNER JOIN PRODUCTS p ON c.Products_idProduct = p.idProduct 
INNER JOIN PRODUCT_BRANDS b ON p.PRODUCT_BRANDS_idBrand = b.idBrand
WHERE User_idUser=1

SELECT f.User_idUser, p.idProduct, p.name, p.img, p.description,  
b.brandName, (p.unitPrize + p.unitProfit) as prize, p.stock
FROM PRODUCTS_FAV f INNER JOIN PRODUCTS p
on f.Products_idProduct = p.idProduct INNER JOIN PRODUCT_BRANDS b
ON p.PRODUCT_BRANDS_idBrand = b.idBrand
WHERE User_idUser=1

insert into user(name, email, password, beginDate, lastLogIn) 
values("Sam", "luismendoza.samuel@gmail.com", "1234", now(), now())