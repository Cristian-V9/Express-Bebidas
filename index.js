const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
 
app.use(express.json());
app.use(express.static('public'));
 
const PORT = process.env.PORT || 3000;
 
// BASE DE DATOS SIMULADA
const productos = [
  { id: 1, nombre: "Red Bull", marca: "Red Bull GmbH", categoria: "Energizante", precio: 6500, stock: 50, descripcion: "Bebida energizante con cafeina y taurina" },
  { id: 2, nombre: "Monster Energy", marca: "Monster Beverage", categoria: "Energizante", precio: 7000, stock: 40, descripcion: "Bebida energizante con alto contenido de cafeina" },
  { id: 3, nombre: "Agua Cristal", marca: "Postobon", categoria: "Agua", precio: 2000, stock: 100, descripcion: "Agua natural sin gas" },
  { id: 4, nombre: "Agua Manantial", marca: "CocaCola Company", categoria: "Agua", precio: 2200, stock: 90, descripcion: "Agua natural embotellada" },
  { id: 5, nombre: "CocaCola", marca: "CocaCola Company", categoria: "Gaseosa", precio: 3500, stock: 80, descripcion: "Bebida gaseosa sabor a cola" },
  { id: 6, nombre: "Pepsi", marca: "PepsiCo", categoria: "Gaseosa", precio: 3400, stock: 75, descripcion: "Bebida gaseosa sabor cola" },
  { id: 7, nombre: "Gatorade", marca: "PepsiCo", categoria: "Hidratante", precio: 4500, stock: 60, descripcion: "Bebida hidratante con electrolitos" },
  { id: 8, nombre: "Powerade", marca: "CocaCola Company", categoria: "Hidratante", precio: 4300, stock: 55, descripcion: "Bebida hidratante para deportistas" },
  { id: 9, nombre: "Jugo Hit Mango", marca: "Postobon", categoria: "Jugo", precio: 3000, stock: 45, descripcion: "Jugo de mango en caja" },
  { id: 10, nombre: "Jugo Del Valle Naranja", marca: "CocaCola Company", categoria: "Jugo", precio: 3200, stock: 42, descripcion: "Jugo de naranja natural" },
  { id: 11, nombre: "Te Fuze Tea", marca: "CocaCola Company", categoria: "Te", precio: 3800, stock: 38, descripcion: "Te frio sabor durazno" },
  { id: 12, nombre: "Te Lipton", marca: "PepsiCo", categoria: "Te", precio: 3700, stock: 35, descripcion: "Te frio sabor limon" },
  { id: 13, nombre: "Cafe Listo", marca: "Nestle", categoria: "Cafe", precio: 4000, stock: 30, descripcion: "Cafe frio listo para tomar" },
  { id: 14, nombre: "Speed Max", marca: "Ecuana", categoria: "Energizante", precio: 5000, stock: 48, descripcion: "Bebida energizante economica" },
  { id: 15, nombre: "Agua con Gas Cristal", marca: "Postobon", categoria: "Agua", precio: 2500, stock: 65, descripcion: "Agua con gas saborizada" }
];
 
// Endpoint 1: Verificación de estado del servidor
app.get('/api/v1/status', (req, res) => {
  res.status(200).json({
    status: "OK",
    mensaje: "Servidor Backend UCompensar ejecutándose correctamente",
    timestamp: new Date()
  });
});
 
// Endpoint 2: Obtener todos los productos
app.get('/api/v1/productos', (req, res) => {
  res.status(200).json({
    success: true,
    total: productos.length,
    data: productos
  });
});
 
// CREAR ENDPOINTS
 
app.get('/producto', (req, res) => {
  const id = req.query.id;

  if (!id || isNaN(id)) {
    return res.status(400).sendFile(path.join(__dirname, 'public/errores/400.html'));
  }

  const producto = productos.find(p => p.id === parseInt(id));

  if (!producto) {
    return res.status(404).sendFile(path.join(__dirname, 'public/errores/404.html'));
  }

  let html = fs.readFileSync(path.join(__dirname, 'public/producto.html'), 'utf-8');

  html = html
    .replace('{{id}}', producto.id)
    .replace('{{nombre}}', producto.nombre)
    .replace('{{marca}}', producto.marca)
    .replace('{{categoria}}', producto.categoria)
    .replace('{{precio}}', producto.precio)
    .replace('{{stock}}', producto.stock)
    .replace('{{descripcion}}', producto.descripcion);

  res.status(200).send(html);
});

// Levantar el servidor
app.listen(PORT, () => {
  console.log(` Servidor backend escuchando en el puerto ${PORT}`);
});
