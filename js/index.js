"use stirict";
{
  /*Тема 1*/
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
/*Тема 2*/
{
  const product = "Яндекс TV";
  const count = 8;
  const categoty = "TV";
  const price = 15000;
  console.log(
    `На складе ${count} шт ${product} на общую стоитмость: ${count * price}₽ `
  );
}
/*Тема 3*/
{
  const product = prompt(`Введите наименование товара `);
  const count = +prompt(`Введите количество товара `);
  const category = prompt(`Название категории `);
  const price = +prompt(`Введите цену товара `);
  console.log(
    `На складе у нас ${count} шт ${product} что входит в категорию ${category} на сумму ${
      price * count
    } ₽ `
  );
}
