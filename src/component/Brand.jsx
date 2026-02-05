import brand1 from "/src/assets/brands/brand_1.png"
import brand2 from "/src/assets/brands/brand_2.png"
import brand3 from "/src/assets/brands/brand_3.png" 
import brand4 from "/src/assets/brands/brand_4.png"
import brand5 from "/src/assets/brands/brand_5.png"
import brand6 from "/src/assets/brands/brand_6.png"
import brand7 from "/src/assets/brands/brand_7.png"
const Brand = () => {

    const brands = [
        {
            id: 1,
            image: brand1
        },
        {
            id: 2,
            image: brand2
        },
        {
            id: 3,
            image: brand3
        },
        {
            id: 4,
            image: brand4
        },
        {
            id: 5,
            image: brand5
        },
        {
            id: 6,
            image: brand6
        }, 
        {
            id: 7,
            image: brand7
        },
 
    ]

    return (
        <div className="lg:container mx-auto">
            <div className="grid grid-cols-7 items-center justify-center gap-5">
                {
                    brands?.map((brand) => (
                        <div key={brand?.id} className="brand_item">
                            <img className="w-auto h-auto" src={brand?.image} alt="brand" />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Brand;
