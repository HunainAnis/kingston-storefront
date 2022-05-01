import Image from "next/image";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { Product } from "../pages";
import AddRemoveButton from "./AddRemoveButton";

const ProductItem = ({ product }: { product:Product}) => {
    const [ showMore, setShowMore ] = useState(false)
    return (
        <div className="col col-12 col-md-4 col-lg-3 mb-3 px-0">
            <Card className="mx-2">
                <Card.Body>
                    <div className="fw-bold header">{product.title}</div>
                    <div className="d-flex justify-content-center image-container tex-center">
                        <div>
                            <Image 
                                src={product.image}
                                width={200}
                                height={150}
                                // layout="fill"
                                className="d-block mx-auto"
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className={showMore ? "" : "text-truncate"}>
                            {product.description}
                        </div>
                        <span className="fw-bold cursor-pointer" onClick={()=>setShowMore(!showMore)}>show {showMore ? "less":"more"}</span>
                    </div>
                    <div className="fw-bold h3">
                        ${product.price}
                    </div>
                    <div>
                        <AddRemoveButton product={product}/>
                    </div>
                </Card.Body>
            </Card>
            <style jsx>
                {`
                    .header {
                        min-height: 60px;
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