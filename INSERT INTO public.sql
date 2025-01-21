INSERT INTO public.products(
	product_id, active, code, description, image_path, name, price)
	VALUES (
	3, 
	'0', 
	'003', 
	'Playera Nueva ideaal para el trabajo o una salida casual, 100% algodon', 
	'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg', 
	'Playera 3', 86
	);

INSERT INTO public.addresses(
	address_id, city, country, name, numb, postal_code, state, street, client_id)
	VALUES (1, 'Merida', 'Mexico', 'casa', '519', '97302', 'Yuc', '53-a', 1);

INSERT INTO public.addresses(
	address_id, city, country, name, numb, postal_code, state, street, client_id)
	VALUES (2, 'Merida', 'Mexico', 'Oficina', '874', '97300', 'Yuc', '53-b', 1);


INSERT INTO public.clients(
	client_id, client_type, email, name, phone)
	VALUES (1, 'admin', 'jorge_solis_619@hotmail.com', 'Jorge Solis', 9999992413);


INSERT INTO public.clients(
	client_id, client_type, email, name, phone)
	VALUES (2, 'admin', 'jorge_solis@hotmail.com', 'Raul Solis', 9999992413);


select * from addresses

delete from address where address_id = 2 commit;

select * from clients;

insert into clients (id, active, client_type, email, name,phone) 
	select client_id, active, client_type, email, name,phone from client where client_id = 2;


drop table clients;

drop table address;

select * from products;

insert into products (active, price,id,code,description,image_path,name)
select active, price,product_id,code,description,image_path,name from product;


http://localhost:8080/api/products/product
http://localhost:8080/api/clients/2/addresses
http://localhost:8080/api/products/allActiveProducts
http://localhost:8080/api/clients/allClients
http://localhost:8080/api/clients/allActiveClients