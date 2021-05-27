# Angular 8 y Nebular - Frontend Backoffice Starter

Arquetipo básico para generar un panel de administración con Angular 8+ y Nebular 4.1.2

Incluye:

- Estructura base de organización de componentes
- Navegacion y routing de login a inicio básica
- Sistema de gestion del token jwt obtenido en la autenticacion mediante un Interceptor
- Almacenamiento en servicios del token obtenido
- Securizacion de las rutas con los respectivos Guards en base a si se ha obtenido el token de autenticación.
- Sistema de conteo de peticiones para la gestion de componentes indicadores de carga u otros que lo requieran.
- Utilidades para el formateo de fechas, conteo de páginas de tablas.
- Servicio base para simplificar las llamadas a la API y poder gestionar mejor errores.
