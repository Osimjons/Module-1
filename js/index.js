"use stirict";
{
  /*Обязательный блок  */
  const product = "Imac";
  console.log(product);
  const quantityProduct = 12;
  console.log(quantityProduct);
  const categoryProduct = "laptop";
  console.log(categoryProduct);
  const priceProduct = 12500;
  console.log(priceProduct);
  /* Не обязательный блок  */
  const result = quantityProduct * priceProduct;
  console.log("Общая стоимость товаров " + result + "₽");
}
{
  const product = "Яндекс TV";
  const count = 8;
  const categoty = "TV";
  const price = 15000;
  console.log(
    `На складе ${count} шт ${product} на общую стоитмость: ${count * price}₽ `
  );
}
