let producto = {
  precio: 2000,
  descuento: 15,
  cantidad: 10,

  precioTotal: function () {
    console.log(((this.precio * this.descuento) / 100) * this.cantidad);
  },
};

producto.precioTotal(); //precioTotal es un método de producto
