import Header from "../components/Header/Header";
import Products from "../components/Products/Products";

const dumpData = [
  {
    sku: "12345",
    name: "Product 1",
    price: "$10.00",
    attr: "Color: Red, Size: M",
  },
  {
    sku: "67890",
    name: "Product 2",
    price: "$20.00",
    attr: "Color: Blue, Size: L",
  },
  {
    sku: "11111",
    name: "Product 3",
    price: "$30.00",
    attr: "Color: Green, Size: XL",
  },
  {
    sku: "12345",
    name: "Product 1",
    price: "$10.00",
    attr: "Color: Red, Size: M",
  },
  {
    sku: "67890",
    name: "Product 2",
    price: "$20.00",
    attr: "Color: Blue, Size: L",
  },
  {
    sku: "11111",
    name: "Product 3",
    price: "$30.00",
    attr: "Color: Green, Size: XL",
  },
  {
    sku: "12345",
    name: "Product 1",
    price: "$10.00",
    attr: "Color: Red, Size: M",
  },
  {
    sku: "67890",
    name: "Product 2",
    price: "$20.00",
    attr: "Color: Blue, Size: L",
  },
  {
    sku: "11111",
    name: "Product 3",
    price: "$30.00",
    attr: "Color: Green, Size: XL",
  },
  {
    sku: "12345",
    name: "Product 1",
    price: "$10.00",
    attr: "Color: Red, Size: M",
  },
  {
    sku: "67890",
    name: "Product 2",
    price: "$20.00",
    attr: "Color: Blue, Size: L",
  },
  {
    sku: "11111",
    name: "Product 3",
    price: "$30.00",
    attr: "Color: Green, Size: XL",
  },
  {
    sku: "12345",
    name: "Product 1",
    price: "$10.00",
    attr: "Color: Red, Size: M",
  },
  {
    sku: "67890",
    name: "Product 2",
    price: "$20.00",
    attr: "Color: Blue, Size: L",
  },
  {
    sku: "11111",
    name: "Product 3",
    price: "$30.00",
    attr: "Color: Green, Size: XL",
  },
];

const ProductList = () => {
  return (
    <div>
      <Header text="Product List" home />
      <Products products={dumpData} />
    </div>
  );
};
export default ProductList;
