[English](README.md) | [Español](README.es.md)

# Express-Bebidas

Aplicacion web y API construida con Express (Node.js) para consultar un catalogo de bebidas.
Proyecto academico para UCompensar.

## Funcionalidades

- API REST con endpoints en formato JSON
- Buscador visual (HTML/CSS) para consultar un producto por ID
- Pagina de detalle de producto con tabla de informacion
- Manejo de errores 400 (solicitud incorrecta) y 404 (producto no encontrado) con paginas HTML personalizadas

## Endpoints de la API

- `GET /api/v1/status` - Estado del servidor
- `GET /api/v1/productos` - Lista completa de productos en formato JSON

## Rutas web

- `/` - Buscador de bebidas
- `/producto?id=X` - Detalle de un producto especifico

## Instalacion

```bash
npm install
npm start
```

El servidor corre por defecto en `http://localhost:3000`

