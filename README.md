Tomé como base el siguiente diseño: https://www.awwwards.com/inspiration/user-profile-time-republik, haciendo algunas modificaciones para el challenge. Las modificaciones incluyeron la adición de datos personales, publicaciones, comentarios y footer, y la eliminación de las secciones "Timebank" e "Invite your friends".

Añadí un nuevo apartado al inicio del proyecto para seleccionar los usuarios, junto con un botón para eliminar o generar los datos guardados. Utilicé la API pública https://jsonplaceholder.typicode.com/ para obtener datos de usuarios. Mi idea era usar también la API pública de Random User, pero me encontré con el inconveniente de que mi antivirus la bloqueaba. Por lo tanto, utilicé JSONPlaceholder, añadiendo los datos que me faltaban, como las fotos de perfil, foto de portada y biografía. Esta API pública no tiene relación con usuarios y publicaciones, así que creé una relación entre los usuarios existentes y las publicaciones junto con los comentarios. Para mantener la persistencia de datos, utilicé localStorage con el manejo de datos de Redux.
El usuario principal es uno llamado Admin.

## Funcionalidades:
    - Búsqueda de Usuarios: Se puede buscar a los usuarios utilizando el buscador en el header.
    - Crear Publicación: El admin puede crear publicaciones nuevas como si fuese el usuario en concreto.
    - Crear Comentario: El admin puede crear comentarios nuevos con su nombre.
    - Editar Perfil: Es posible editar la información del usuario.
    - Seguir Usuario: El admin puede seguir a los usuarios.

Para editar la información del usuario, se debe acceder al menú desplegable que se encuentra haciendo clic en la flecha o en el ícono de usuario en la parte superior derecha.

## Instalación
    1- Clona el repositorio.
    2- Ingresa a la carpeta del proyecto.
    3- Ejecuta npm install para instalar las dependencias.
    4- Para iniciar el proyecto, ejecuta npm run dev.

