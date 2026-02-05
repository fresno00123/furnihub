import { useState } from "react";
import SectionTitle from "../../component/SectionTitle";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext";
import product1 from "/src/assets/products/product_5.png"
import product2 from "/src/assets/Banner/57.jpg"
import product3 from "/src/assets/Banner/64.jpg"
import product4 from "/src/assets/Banner/5.jpg"
import product5 from "/src/assets/Banner/9.jpg"
import product6 from "/src/assets/Banner/c.jpg"
import product7 from "/src/assets/Banner/72.jpg"
import product8 from "/src/assets/products/product_8.png"
import product9 from "/src/assets/Banner/64.jpg"
import product10 from "/src/assets/Banner/m.jpg"
import product11 from "/src/assets/Banner/17.jpg"
import product12 from "/src/assets/Banner/22.jpg"
import product13 from "/src/assets/Banner/58.jpg"
import product14 from "/src/assets/Banner/a.jpg"
import product15 from "/src/assets/Banner/d.jpg"
import product16 from "/src/assets/Banner/68.jpg"
import product17 from "/src/assets/Banner/10.jpg"
import product18 from "/src/assets/Banner/59.jpg"
import product19 from "/src/assets/Banner/60.jpg"
import product20 from "/src/assets/Banner/66.jpg"
import product21 from "/src/assets/Banner/13.jpg"
import product22 from "/src/assets/Banner/15.jpg"
import product23 from "/src/assets/Banner/12.jpg"
import product24 from "/src/assets/Banner/6.jpg"
const Product = () => {
    const {addToCart} = useCart();
    const [active, setActive] = useState({
        id: 0,
        product: 'all'
    });

    const productTitle = [
        {
            id: 0,
            title: "all",
            product: 'all'
        },
        {
            id: 1,
            title: "newest",
            product: 'newest'
        },
        {
            id: 2,
            title: "trending",
            product: 'trending'
        },
        {
            id: 3,
            title: "best seller",
            product: 'best_seller'
        },
    ];



    const products = [
        {
            title: 'Night Lamp',
            status: 'New',
            price: '$80',
            image: product1,
            currentPrice: '$100',
            product: 'newest',
        },
        {
            title: 'Modern Queen Bed',
            status: 'Sales',
            price: '$580',
            image: product2,
            product: 'newest',
        },
        {
            title: 'Deluxe Queen Bed',
            status: 'New',
            price: '$610',
            image: product3,
            currentPrice: '$600',
            product: 'newest',
        },
        {
            title: 'Glass Center Table',
            status: 'Sales',
            price: '$260',
            image: product4,
            product: 'newest',
        },

        {
            title: 'Office Work Desk',
            status: 'Sales',
            price: '$280',
            image: product5,
            product: 'trending',
        },
        {
            title: 'Classic Wooden Chair',
            status: 'New',
            price: '$180',
            image: product6,
            currentPrice: '$200',
            product: 'trending',
        },
        {
            title: 'Minimal Wooden Bed',
            status: 'Sales',
            price: '$550',
            image: product7,
            product: 'trending',
        },
        {
            title: 'Premium Designer Bed',
            status: 'Sales',
            price: '$980',
            image: product8,
            product: 'trending',
        },
        {
            title: 'Modern Storage King Bed',
            status: 'New',
            price: '$900',
            image: product9,
            currentPrice: '$200',
            product: 'best_seller',
        },
        {
            title: 'Scandinavian Chair',
            status: 'Sales',
            price: '$175',
            image: product10,
            product: 'best_seller',
        },
        {
            title: 'Modern Pendant Light',
            status: 'Sales',
            price: '$120',
            image: product11,
            product: 'best_seller',
        },
        {
            title: 'Industrial Hanging Light',
            status: 'Sales',
            price: '$200',
            image: product12,
            product: 'best_seller',
        },
        {
            title: 'Elegant Guest Room Bed',
            status: 'Sales',
            price: '$480',
            image: product13,
            product: 'featured',
        },
        {
            title: 'Comfort Stool Chair',
            status: 'Sales',
            price: '$150',
            image: product14,
            product: 'featured',
        },
        {
            title: 'Luxury Lounge Chair',
            status: 'Sales',
            price: '$220',
            image: product15,
            product: 'featured',
        },
        {
            title: 'Designer Bed Set',
            status: 'Sales',
            price: '$930',
            image: product16,
            product: 'featured',
        },
        {
            title: 'Compact Laptop Table',
            status: 'Sales',
            price: '$160',
            image: product17,
            product: 'all',
        },
        {
            title: 'Minimal Platform Bed',
            status: 'Sales',
            price: '$480',
            image: product18,
            product: 'all',
        },
        {
            title: 'Upholstered Bed Frame',
            status: 'Sales',
            price: '$720',
            image: product19,
            product: 'all',
        },
        {
            title: 'Modern King Platform Bed',
            status: 'Sales',
            price: '$250',
            image: product20,
            product: 'all',
        },
        {
            title: "Scandinavian Table",
            status: 'Sales',
            price: '$370',
            image:  product21,
            product: 'all',
        },
        {
            title: "Marble Coffee Table",
            status: 'Sales',
            price: '$420',
            image: product22,
            product: 'all',
        },
        {
            title: "Luxury Conference Table",
            status: 'Sales',
            price: '$620',
            image: product23,
            product: 'all',
        },
        {
            title: 'Round Dining Table',
            status: 'Sales',
            price: '$390',
            image: product24,
            product: 'all',
        },


    ];


    const productFilter = products.filter(product => product.product === active?.product);
    console.log(productFilter);


    return (
        <div className="lg:container mx-auto">
            <div className="flex flex-col items-center justify-center">
                <SectionTitle title={'our product'} textAlign={'center'} mb={'mb-5'}></SectionTitle>


                <div className="flex items-center justify-center gap-6 mb-11">
                    {
                        productTitle?.map((title, indx) => (
                            <button key={title?.id}

                                onClick={() => setActive({
                                    id: title?.id,
                                    product: title?.product
                                })}
                                className={`text-base font-black uppercase font-inter cursor-pointer ${active?.id === indx ? 'text-[#272343]' : 'tex t-[#9a9caa]'
                                    }`}>
                                {title?.title}
                            </button>
                        ))
                    }
                </div>
            </div>


            <div className="grid grid-cols-4 items-center gap-6">
                {

                    productFilter?.map((product, index) => (
                        <div key={index} className="p-4">
                            <div className="feature_image mb-4 relative">
                                <img className="w-full max-h-[312px] rounded-lg object-cover" src={product?.image} alt={product?.title} />
                                {
                                    product?.status && (
                                        <div className="absolute top-4 left-4 bg-[#007580] text-white px-2 py-1 rounded-lg">
                                            <button className="text-sm font-inter font-normal">{product?.status}</button>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="feature_content">
                                <div className="flex items-center justify-between">
                                    <h4 className="text-base text-[#007580] capitalize font-inter font-normal mb-4">{product?.title}</h4>
                                    <span onClick={() => addToCart(product)} className="bg-[#007580] h-[44px] w-[44px] rounded-lg flex items-center justify-center"><ShoppingCart size='1.5rem' color="#fff" /></span>
                                </div>
                                <p className="text-xl flex items-center gap-2 text-[#272343] font-semibold font-inter ">
                                    {product?.price}
                                    {
                                        product?.currentPrice && (
                                            <span className="text-sm text-[#9a9caa] font-inter font-normal">{product?.currentPrice}</span>
                                        )
                                    }
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Product;
