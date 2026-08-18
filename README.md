[English](README.md) | [Español](README.es.md)

# Express-Bebidas

Web application and API built with Express (Node.js) to consult a beverage catalog.
Academic project for UCompensar.

## Features

- REST API with JSON-formatted endpoints
- Visual search form (HTML/CSS) to look up a product by ID
- Product detail page with an information table
- Custom HTML error pages for 400 (bad request) and 404 (product not found)

## API Endpoints

- `GET /api/v1/status` - Server status
- `GET /api/v1/productos` - Full product list in JSON format

## Web Routes

- `/` - Beverage search form
- `/producto?id=X` - Detail page for a specific product

## Installation

```bash
npm install
npm start
```

The server runs by default at `http://localhost:3000`
