-- -----------------------------------------------------
-- Articles
-- -----------------------------------------------------
INSERT INTO ARTICLE(NAME, PRICE, PICTURE) VALUES ('Adidas Stan Smith sneakers', 650.00, 'assets/pictures/articles/Adidas Stan Smith sneakers.jpg');
INSERT INTO ARTICLE(NAME, PRICE, PICTURE) VALUES ('Adidas Baskets Stan Smith', 559.00, 'assets/pictures/articles/Adidas Baskets Stan Smith Vulc.jpg');
INSERT INTO ARTICLE(NAME, PRICE, PICTURE) VALUES ('Adidas Chaussures CAFLAIRE LO BLEU', 499.00, 'assets/pictures/articles/Adidas Chaussures CAFLAIRE LO BLEU.jpg');
INSERT INTO ARTICLE(NAME, PRICE, PICTURE) VALUES ('Adidas BASKETS STAN SMITH AVEC UN IMPRIMÉ ANIMAL F37018', 745.00, 'assets/pictures/articles/Adidas BASKETS STAN SMITH AVEC UN IMPRIMÉ ANIMAL F37018.jpg');
INSERT INTO ARTICLE(NAME, PRICE, PICTURE) VALUES ('Chaussure de sport pour homme - Gris foncé', 135.00, 'assets/pictures/articles/Chaussure de sport pour homme - Gris foncé.jpg');
INSERT INTO ARTICLE(NAME, PRICE, PICTURE) VALUES ('New Balance Mousse fraîche Cruz v2 Knit Chaussure Homme MCRUZ-KW2', 525.00, 'assets/pictures/articles/New Balance Mousse fraîche Cruz v2 Knit Chaussure Homme MCRUZ-KW2.jpg');
INSERT INTO ARTICLE(NAME, PRICE, PICTURE) VALUES ('Adidas CHAUSSURES DE TENNIS UBERSONIC 3M CP8852', 800.00, 'assets/pictures/articles/Adidas CHAUSSURES DE TENNIS UBERSONIC 3M CP8852.jpg');
INSERT INTO ARTICLE(NAME, PRICE, PICTURE) VALUES ('Reebok chaussure Homme hybride ASTRORIDE FOREVER CM8820', 575.00, 'assets/pictures/articles/Reebok chaussure Homme hybride ASTRORIDE FOREVER CM8820.jpg');
INSERT INTO ARTICLE(NAME, PRICE, PICTURE) VALUES ('Le Coq Sportif chaussures Zepp monochrome bbr 1910462 BLEBLE', 505.00, 'assets/pictures/articles/Le Coq Sportif chaussures Zepp monochrome bbr 1910462 BLEBLE.jpg');
INSERT INTO ARTICLE(NAME, PRICE, PICTURE) VALUES ('Fashion Men Casual Fashion Sneakers Running Shoes', 400.00, 'assets/pictures/articles/Fashion Men Casual Fashion Sneakers Running Shoes.jpg');


-- -----------------------------------------------------
-- Orders
-- -----------------------------------------------------
INSERT INTO ORDER (DATE, REFERENCE) VALUES (NOW(), 'cLB8JM');
INSERT INTO ORDER (DATE, REFERENCE) VALUES (NOW(), 'DNPvI2');
INSERT INTO ORDER (DATE, REFERENCE) VALUES (NOW(), '7sCj2g');
INSERT INTO ORDER (DATE, REFERENCE) VALUES (NOW(), 'Iryw9b');
INSERT INTO ORDER (DATE, REFERENCE) VALUES (NOW(), '2SGuiL');

-- -----------------------------------------------------
-- ARTICLE_ORDER RELATIONS
-- -----------------------------------------------------
INSERT INTO ARTICLE_ORDER_RELATION (ORDER_ID, ARTICLE_ID) VALUES (1, 1);
INSERT INTO ARTICLE_ORDER_RELATION (ORDER_ID, ARTICLE_ID) VALUES (1, 3);
INSERT INTO ARTICLE_ORDER_RELATION (ORDER_ID, ARTICLE_ID) VALUES (1, 5);
INSERT INTO ARTICLE_ORDER_RELATION (ORDER_ID, ARTICLE_ID) VALUES (2, 1);
INSERT INTO ARTICLE_ORDER_RELATION (ORDER_ID, ARTICLE_ID) VALUES (2, 4);
INSERT INTO ARTICLE_ORDER_RELATION (ORDER_ID, ARTICLE_ID) VALUES (3, 2);
INSERT INTO ARTICLE_ORDER_RELATION (ORDER_ID, ARTICLE_ID) VALUES (3, 5);
INSERT INTO ARTICLE_ORDER_RELATION (ORDER_ID, ARTICLE_ID) VALUES (4, 6);
INSERT INTO ARTICLE_ORDER_RELATION (ORDER_ID, ARTICLE_ID) VALUES (4, 7);
INSERT INTO ARTICLE_ORDER_RELATION (ORDER_ID, ARTICLE_ID) VALUES (5, 9);
INSERT INTO ARTICLE_ORDER_RELATION (ORDER_ID, ARTICLE_ID) VALUES (5, 8);