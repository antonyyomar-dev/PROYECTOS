# Generador de Contraseñas Web

Una aplicación web sencilla y elegante para generar contraseñas seguras de manera aleatoria. Permite personalizar la longitud y los tipos de caracteres incluidos.

## Características

- **Interfaz elegante**: Diseño moderno con gradientes, sombras y responsive.
- **Personalización**: Elige longitud (8-50 caracteres) e incluye mayúsculas, números y símbolos.
- **Generación segura**: Usa JavaScript para crear contraseñas aleatorias.
- **Copia fácil**: Botón para copiar la contraseña al portapapeles.
- **Sin backend**: Funciona completamente en el navegador, sin servidor.

## Instalación y Ejecución

1. **Requisitos**: Solo un navegador web moderno (Chrome, Firefox, etc.).
2. **Ejecutar**:
   - Abre el archivo `fronted.html` en tu navegador (doble clic o arrastra el archivo).
   - La página se carga automáticamente con los estilos y la lógica.

No necesitas instalar nada más. Es una aplicación estática.

## Estructura de Archivos

```
APP/
├── fronted.html      # Página principal HTML con la estructura de la web
├── diseño.css        # Estilos CSS para el diseño elegante
├── logica.js         # JavaScript para la lógica de generación de contraseñas
├── READMI.md         # Este archivo de documentación
└── SRC/              # Carpeta adicional (si tienes más archivos)
```

## Uso

1. Abre `fronted.html` en el navegador.
2. Ajusta las opciones:
   - **Longitud**: Número de caracteres (mínimo 8, máximo 50).
   - **Mayúsculas**: Incluir letras A-Z.
   - **Números**: Incluir dígitos 0-9.
   - **Símbolos**: Incluir caracteres especiales (!@#$%^&* etc.).
3. Haz clic en "Generar Contraseña".
4. La contraseña aparecerá en pantalla.
5. Haz clic en "Copiar" para guardarla en el portapapeles.

## Tecnologías Usadas

- **HTML5**: Estructura de la página.
- **CSS3**: Estilos y diseño responsive.
- **JavaScript (ES6)**: Lógica de generación y copia.

## Notas de Seguridad

- Las contraseñas se generan en el cliente (navegador), no se envían a ningún servidor.
- Usa `Math.random()` para aleatoriedad; para mayor seguridad, considera usar `crypto.getRandomValues()` en entornos críticos.
- No almacena contraseñas; todo es temporal en la memoria del navegador.

## Contribución

Si quieres mejorar el proyecto:
1. Haz un fork del repositorio.
2. Crea una rama para tus cambios.
3. Envía un pull request.

Ideas para mejoras:
- Agregar fortaleza de contraseña (baja/media/alta).
- Opción para excluir caracteres similares (ej. 0 y O).
- Integrar con un backend para guardar contraseñas (con encriptación).

## Licencia

Este proyecto es de código abierto. Úsalo libremente para fines personales o educativos.

---

Creado  para aprender desarrollo web.