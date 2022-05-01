import Image from "next/image";
import { Button } from "react-bootstrap";
import { Product } from "../pages";
import AddRemoveButton from "./AddRemoveButton";

const ProductItem = ({ product }: { product:Product}) => {
    return (
        <div className="col col-12 col-md-4 col-lg-3">
            <div className="border rounded mb-3 p-3">
                <div className="fw-bold header">{product.title}</div>
                <div className="d-flex image-container justify-content-center">
                    <Image 
                        src={product.image}
                        width={100}
                        height={150}
                    />
                </div>
                <div className="text-truncate">
                    {product.description}
                </div>
                <div>
                    {product.price}
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