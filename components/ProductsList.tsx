import { Product } from "../pages";
import { useCart } from "../utils/useCart";
import ProductItem from "./ProductItem";

const ProductsList = () => {
    const { products } = useCart();
    return(
        <div className="row mx-0 px-3">
            {
                products.map((product: Product, index: number)=>(
                    <ProductItem key={index} product={product} />
                ))
            }
        </div>
    )
}

export default ProductsList;