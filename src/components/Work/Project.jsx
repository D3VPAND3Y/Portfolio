import "./Project.scss"
import { products } from "./DataFile";
import Card from "./Card";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's Dev</h1>
        <p className="pl-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          necessitatibus quasi, quos, voluptate voluptatem fugiat, quod
          voluptatibus voluptates consequatur quibusdam doloribus. Quisquam
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Card key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

