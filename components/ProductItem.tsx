import Image from "next/image";
import { Product } from "../pages";
import AddRemoveButton from "./AddRemoveButton";

const ProductItem = ({ product }: { product:Product}) => {
    return (
        <div className="col col-12 col-md-4 col-lg-3">
            <div className="border rounded mb-3 p-3">
                <div className="fw-bold header">{product.title}</div>
                <div className="image-container tex-center">
                    <Image 
                        src={product.image}
                        width={100}
                        height={150}
                        className="d-block"
                    />
                </div>
                <div className="text-truncate">
                    {product.description}
                </div>
                <div className="fw-bold">
                    ${product.price}
                </div>
                <div>
                    <AddRemoveButton product={product}/>
                </div>
            </div>
            <style jsx>
                {`
                    .header {
                        height: 50px;
                    }
                    .image-container {
                        height: 200px;
                    }
                `}
            </style>
        </div>
    )
}

export default ProductItem;