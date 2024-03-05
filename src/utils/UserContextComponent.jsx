import React, { Children, useState } from 'react'

export const UserContext = React.createContext()

function UserContextComponent({ children }) {
    const [product, setProduct] = useState([
        {
            "id": 1,
            "title": "iPhone 9",
            "description": "An apple mobile which is nothing like apple",
            "price": 549,
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 94,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://media.istockphoto.com/id/497451902/photo/isolated-woman-hand-holding-iphone-6s-rose-gold.jpg?s=612x612&w=0&k=20&c=WRkUlJiPJclONrooQQHODaNYuMR8iJS0MjZrhW4uVuw=",
            "image": "https://media.istockphoto.com/id/497451902/photo/isolated-woman-hand-holding-iphone-6s-rose-gold.jpg?s=612x612&w=0&k=20&c=WRkUlJiPJclONrooQQHODaNYuMR8iJS0MjZrhW4uVuw=",
        },
        {
            "id": 2,
            "title": "iPhone X",
            "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            "price": 899,
            "discountPercentage": 17.94,
            "rating": 4.44,
            "stock": 34,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://www.unitelle.com/wp-content/uploads/2022/02/Untitled-design-2-4.jpg",
            "image": "https://www.unitelle.com/wp-content/uploads/2022/02/Untitled-design-2-4.jpg",
        },
        {
            "id": 3,
            "title": "Samsung Universe 9",
            "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
            "price": 1249,
            "discountPercentage": 15.46,
            "rating": 4.09,
            "stock": 36,
            "brand": "Samsung",
            "category": "smartphones",
            "thumbnail": "https://www.91-img.com/gallery_images_uploads/8/e/8eb79304801d6aefc7e0d77b077adaffc1af1959.jpg?tr=h-630,c-at_max,q-80",
            "image": "https://www.91-img.com/gallery_images_uploads/8/e/8eb79304801d6aefc7e0d77b077adaffc1af1959.jpg?tr=h-630,c-at_max,q-80",
        },
        {
            "id": 4,
            "title": "OPPOF19",
            "description": "OPPO F19 is officially announced on April 2021.",
            "price": 280,
            "discountPercentage": 17.91,
            "rating": 4.3,
            "stock": 123,
            "brand": "OPPO",
            "category": "smartphones",
            "thumbnail": "https://d2xamzlzrdbdbn.cloudfront.net/products/2a77a6d5-7b07-4dce-a34d-296802ee094a_416x416.jpg",
            "image": "https://d2xamzlzrdbdbn.cloudfront.net/products/2a77a6d5-7b07-4dce-a34d-296802ee094a_416x416.jpg",
        },
        {
            "id": 5,
            "title": "Huawei P30",
            "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
            "price": 499,
            "discountPercentage": 10.58,
            "rating": 4.09,
            "stock": 32,
            "brand": "Huawei",
            "category": "smartphones",
            "thumbnail": "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-p30-1.jpg",
            "image": "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-p30-1.jpg",
        }
    ])
    return <>
        <UserContext.Provider value={{ product, setProduct }}>
            {children}
        </UserContext.Provider>
    </>
}

export default UserContextComponent