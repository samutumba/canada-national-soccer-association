USE DATABASE cnsa;

INSERT INTO HealthRecord (cardNumber, issueDate, expiryDate)
VALUES ('5453c09c-f24d-46f3-97a0-b1130a78fb15', '0784-711-822-AG', '2021-11-16T15:33:24+00:00', '2023-11-17T15:33:24+00:00');
VALUES ('ba51ebe8-37b4-47e1-906a-8dfad97de948', '9251 305 885 GA', '2020-05-16T15:33:24+00:00', '2027-05-01T15:33:24+00:00');
VALUES ('8f2350b9-a42b-4e58-b756-1a17a37d9e7e', '5406651124JG', '2021-01-05T15:33:24+00:00', '2025-01-30T15:33:24+00:00');
VALUES ('991a064f-8876-48c2-8806-31126178a04a', '3476-378-345-ST', '2021-01-05T15:33:24+00:00', '2025-01-30T15:33:24+00:00');

--Player
INSERT INTO Player (name, dob, isDomestic, gender, position, healthRecordphone, streetAddress, city, country, postalCode)
VALUES ('Cristiano Ronaldo', '2001-11-17T15:33:24', true, 'male', 'striker', '5453c09c-f24d-46f3-97a0-b1130a78fb15' , '+12896007691', '234 Lorenzo Rd', 'Oshawa', 'ca', 'L1G 4Y1'),
('Lionel Messi', '2000-06-01T00:00:00', true, 'male', 'winger', 'ba51ebe8-37b4-47e1-906a-8dfad97de948' , '+12786009601', '435 Province St.', 'Whitby', 'ca', 'L67 9Y1'),
('Marcus Mbappe', '2002-10-31T15:33:24', false, 'male', 'defensive_midfielder', '8f2350b9-a42b-4e58-b756-1a17a37d9e7e' , '+18766007691', '234 Lorenzo Rd', 'Oshawa', 'ca', 'L1G 4Y1')
,('Jordyn Huitema', '1999-09-17T15:33:24', true, 'female', 'attacking_midfielder', '991a064f-8876-48c2-8806-31126178a04a' , '+12895675678', '234 Davies Rd', 'Vancouver', 'ca', 'L1G 4Y1'),
('Crystal Cross', 1999-01-13, 1, Male, POSITION, HEALTH_RECORD_437-565-6764, 43 Princetown Rd, Scarborough, Canada, M2L 5Y7), 
(Geo Oliver, 2000-02-14, 1, Male, POSITION, HEALTH_RECORD_437-508-6765, 200 Markham Rd, Scarborough, Canada, M2N 4K1),
(Cassandra Dufour, 2003-05-16, 0, Female, POSITION, HEALTH_RECORD_437-456-6768, 1233 Crist Views, Vaughn, Canada, K4J 3D6),
(Jerome Rogers, 2001-03-15, 1, Male, POSITION, HEALTH_RECORD_437-509-6766, 6919 Torphy Terrace, Oshawa, Canada, M4L 2I9),
( Gouda Whitehaven , 2003-09-6, 0, Female, defensive_midfielder, HEALTH_RECORD_ID, 289-545-90469, 556 Andover St, Keswick, Canada, L4P4E1); 

INSERT INTO STAFF (name, dob, phone, role, streetAddress, city, country, postalCode)
VALUES ('Samuel Mutumba', '', '+1290033455', 'head_coach', '1 Rememberance Ave', 'Oshawa', 'ca', 'L1G 4Z3', '1'),
('Ken Holmes', 1998-02-18, 905-234-709, 'Coach', '2023 Simcoe St N', 'Oshawa', 'Canada', L1G 0C6),
('Mary Frat', 1990-12-02, 289-777-2032, 'Therapist', '34 Times Rd', 'Vaughan', 'Canada', L3T 0C6),
('Colette Sharp', 1989, 705-234-4566, 'Recruiter', 112 Connection St E, Kitchener, Canada, B7T 3H8),
('Simon Lautner', 2002-09-25, 289-786-2019, 'Referee', 89 Calmer Rd, Toronto, Canada, MH9 1K5, ACCOUNT_ID);

INSERT INTO INSTITUTION(name, address, city, province, phone, caterogy)
VALUES('Durham College', '12 Simcoe St N', 'Oshawa', 'ON', 'S2H 1Y9', 'college'), 
(Clemson College, 67 Mills Rd, North York, Ontario, M9R 6H4, College),
(Roberts Canada Soccer Academy, 89 Maplewoods Rd, Vancouver, British Columbia, V0G 1M9, High_school),
(Global Satellite Soccer Academy, 24 Westney Heights St N, Ajax, Ontario, L6P 4K4, University);

INSERT INTO LOCATION (name, STREET_ADDRESS, CITY, COUNTRY, POSTAL_CODE)  
VALUES (12 Blue Jays Way, Toronto, Canada, M5V 7G9),
('Canada First Academy for Soccer Excellence', '628 Milverton Boulevard', 'Toronto', 'Canada', 'M4C 1X7'),
('Seaforth Fort','672 Mill St', Seaforth, Canada, N0K 1WK),
('Mega Stadium', '4178 Brew Creek Rd', Port Hardy, Canada, V0N 2P0),
('Impact Stadium','3791 Sherbrooke Ouest', Montreal, Canada,H4A 4A1),
('', 3600 Speers Road, Oakville, Canada, M5H 1PH),
('BMO Field', 525 King Street East, Bolton, Canada, L7C 2Z4),
('Toronto Argonauts Football Club', 10 Lower Spadina Avenue Suite 500, Toronto, Canada, M5V 2Z2),
('Toronto FC', 170 Princes Boulevard, Toronto, Canada, M6K 3C3),
('Rogers Centre', 1 Blue Jays Way, Toronto, Canada, M5V 1J1),
('132 Donge Ave', 'St. Catherines', 'Canada', 'L12 341'),
('Mary Frat', 34 Times Rd, Vaughan, Canada, L3T 0C6, ACCOUNT_ID),
('12 Blue Jays Way', Toronto, Canada, M5V 7G9);  



INSERT INTO Team (formation, shirt_color, squad_game_id)
VALUES ('F4_4_2', '#214122', '', ''),
('F3_5_2', 'Blue', SQUAD_ID, GAME_ID), 
('F3_4_3', 'Yellow', '1', '32454354-1234132-1234asdvfrw-3');


INSERT INTO COMPETITION(NAME, SPONSOR, TYPE, SEASON_ID)  
VALUES (Pre-season, Qatar, Friendly, SEASON_ID);  

INSERT INTO COMPETITION(NAME, SPONSOR, TYPE, SEASON_ID)  
VALUES (American Championship, Nike, League, SEASON_ID);  

INSERT INTO COMPETITION(NAME, SPONSOR, TYPE, SEASON_ID)
VALUES (Juniors Cup, Adidas, Tournament, SEASON_ID);

INSERT INTO COMPETITION(NAME, SPONSOR, TYPE, SEASON_ID)  
VALUES(League Cup, Carlsberg Group, League, SEASON_ID);  

INSERT INTO COMPETITION(NAME, SPONSOR, TYPE, SEASON_ID) 
VALUES (State Cup, Emirates, League, SEASON_ID);

INSERT INTO HEALTHRECORD (CARD_NUMBER, ISSUE_DATE, EXPIRY_DATE)  
VALUES (108976435, 2015-12-08,2025-12-08 );  

INSERT INTO HEALTHRECORD (CARD_NUMBER, ISSUE_DATE, EXPIRY_DATE)  
VALUES (1907896547, 2013-03-03,2023-03-03);  

INSERT INTO HEALTHRECORD (CARD_NUMBER, ISSUE_DATE, EXPIRY_DATE)  
VALUES (2367877777, 2016-12-23, 2026-12-23);  

INSERT INTO HEALTHRECORD (CARD_NUMBER, ISSUE_DATE, EXPIRY_DATE)  
VALUES (1349876789, 2015-07-19,2025-07-19);  

INSERT INTO HEALTHRECORD (CARD_NUMBER, ISSUE_DATE, EXPIRY_DATE)  
VALUES (1331781678, 2018-09-27, 2028-09-27);

INSERT INTO GAME (UPDATED_AT, ATTENDANCE, LOCATION_ID, COMPETION_ID)  
VALUES (4:10 2022-09-22, 23, LOCATION_ID, COMPETION_ID);  

INSERT INTO GAME ( UPDATED_AT, ATTENDANCE, LOCATION_ID, COMPETION_ID)  
VALUES (4:13 2021-12-14, 20, LOCATION_ID, COMPETION_ID);  

INSERT INTO GAME (UPDATED_AT, ATTENDANCE, LOCATION_ID, COMPETION_ID)  
VALUES (23:39 2022-09-05, 21, LOCATION_ID, COMPETION_ID);  

INSERT INTO GAME (UPDATED_AT, ATTENDANCE, LOCATION_ID, COMPETION_ID)  
VALUES (12:09 2022-10-09, 18, LOCATION_ID, COMPETION_ID);  

INSERT INTO GAME (ATTENDANCE, LOCATION_ID, COMPETION_ID)  
VALUES (23, LOCATION_ID, COMPETION_ID);  


INSERT INTO SCHOLARSHIP (NAME, DESCRIPTION, INSTITUTION_ID, PLAYER_ID)  
VALUES (CCU Athletics Scholarship program, 'Designed for undergraduate students', '5453c09c-f24d-46f3-97a0-b1130a78fb15', '5453c09c-f24d-46f3-97a0-b1130a78fb15');  

INSERT INTO SCHOLARSHIP ( NAME, DESCRIPTION, INSTITUTION_ID, PLAYER_ID)  
VALUES ('Fort Lewis Men’s Soccer program', 'Designed for college students', '5453c09c-f24d-46f3-97a0-b1130a78fbsadfa', '5453c09c-f24d-46f3-97a0-b1130a78fb15');  

INSERT INTO ACCOUNT (USERNAME, PASSWORD)  
VALUES ('MLong555', '$2a$10$IWDdIrrlD4cxmismIDU2C.r.KdD5PE4GMEECBeb3rIuOayUnoXGny'),
('afdds232', '$2a$10$IWDdIrrlD4cxmismIDU2C.r.KdD5PE4GMEECBeb3rIuOayUnoXGny');  


INSERT INTO SEASON ( START_DATE, END_DATE)
VALUES (  2021-09-27, 2022-09-27);
