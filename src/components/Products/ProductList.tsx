import { IProduct } from '@/interfaces/product.interface';
import ProductCard from './ProductCard';
import fake_data from '@/utils/fake-store-data.json';

const ProductList = () => {
  return (
    <section
      id='products-section'
      className='bg-base-secondary'>
      <h1>Productos Destacados</h1>
      <div className='grid [grid-template-columns:repeat(3,fit-content(300px))] gap-8 justify-center'>
        {fake_data.map((product: IProduct, index: number) => (
          <ProductCard
            key={index}
            product={product}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
