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

INSERT INTO public.address(
	address_id, city, country, name, numb, postal_code, state, street, client_id)
	VALUES (1, 'Merida', 'Mexico', 'casa', '519', '97302', 'Yuc', '53-a', 1);

INSERT INTO public.address(
	address_id, city, country, name, numb, postal_code, state, street, client_id)
	VALUES (2, 'Merida', 'Mexico', 'Oficina', '874', '97300', 'Yuc', '53-b', 1);


INSERT INTO public.clients(
	client_id, client_type, email, name, phone)
	VALUES (1, 'admin', 'jorge_solis_619@hotmail.com', 'Jorge Solis', 9999992413);


INSERT INTO public.clients(
	client_id, client_type, email, name, phone)
	VALUES (2, 'admin', 'jorge_solis@hotmail.com', 'Raul Solis', 9999992413);


http://localhost:8080/products/allActiveProducts
http://localhost:8080/clients/allClients