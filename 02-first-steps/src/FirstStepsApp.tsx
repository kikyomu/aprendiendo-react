import ItemCounter from "./shoping-cart/ItemCounter";
interface ItemInCart {
  productName: string;
  quantity: number;
}

const ItemsInCart: ItemInCart[] = [
  {productName: 'Nintendo Switch 2', quantity: 1},
  {productName: 'Pro controller', quantity: 2},
  {productName: 'Super Smash', quantity: 6}, 
]

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de compras</h1> 
      {
        ItemsInCart.map(({productName, quantity}) => (
          <ItemCounter key={productName} name={productName} quantity={quantity}/>
        ))}

      {/*<ItemCounter name= "Nintendo Switch 2" quantity={1}/>
      <ItemCounter name= "Pro controller" quantity={2}/>
      <ItemCounter name= "Super Smash" quantity={3}/>*/}
    </>
  );
}