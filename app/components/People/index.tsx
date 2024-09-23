"use client";

import Image from 'next/image';
import { useState } from 'react';

const names = [
    {
        heading: "Lite",
        imgSrc: 'https://www.bedigitalbiz.co.th/wp-content/uploads/elementor/thumbs/snapedit_1702801713069-qgxqmwo3gttkozyc5fcrcfp01hjh5e3ske2vn1z580.png',
    },
    {
        heading: "Basic",
        imgSrc: 'https://www.bedigitalbiz.co.th/wp-content/uploads/elementor/thumbs/snapedit_1702698356219-qgvnihcvyzo0mga63f98dvz6xfb4nzq2qq89orurlc.png',
    },
    {
        heading: "Plus",
        imgSrc: 'https://www.bedigitalbiz.co.th/wp-content/uploads/elementor/thumbs/snapedit_1702698460187-qgvnjbfq1ot6xz2h7s9alodxxr6vib1hiv3t1mm628.png',
    },
    {
        heading: "Plus",
        imgSrc: 'https://www.bedigitalbiz.co.th/wp-content/uploads/elementor/thumbs/snapedit_1702698535339-qgvnkynk09299eoglzusgrfzd12zz8kkr07ea26d68.png',
    },
    {
        heading: "Plus",
        imgSrc: 'https://www.bedigitalbiz.co.th/wp-content/uploads/elementor/thumbs/snapedit_1702698480919-qgvnk4kpxjx2xvw5hmuq8z18cp794x95yvbux7eypc.png',
    },
    {
        heading: "Plus",
        imgSrc: 'https://www.bedigitalbiz.co.th/wp-content/uploads/elementor/thumbs/snapedit_1702801713069-qgxqmwo3gttkozyc5fcrcfp01hjh5e3ske2vn1z580.png',
    },
    {
        heading: "Plus",
        imgSrc: 'https://www.bedigitalbiz.co.th/wp-content/uploads/elementor/thumbs/14-qgxqniadu0n6412xn6p6fs8lpckx2fhmbd31of338w.jpg',
    },
 
];


const People = () => {
    const [selectedImage, setSelectedImage] = useState<string>(names[0].imgSrc); // ตั้งค่าเริ่มต้นเป็นภาพแรก

    return (
        <div id="pp" className='pp-bg relative py-10'>
            <div className='mx-auto max-w-7xl sm:py-0 lg:px-8 my-16'>
                <h3 className='text-center text-2xl sm:text-65xl font-black m-10'>ผลงานการให้บริการทั้งหมด</h3>

                 {/* ภาพใหญ่ที่แสดงตามสัดส่วนจริง */}
                 <div className="flex justify-center items-center mb-8">
                    <Image 
                        src={selectedImage} 
                        alt="Selected Image" 
                        width={600} // ค่ากว้างสมมุติ
                        height={400} // ค่าสูงสมมุติ เพื่อคำนวณอัตราส่วนของภาพ
                        className="h-auto max-w-full rounded-lg"
                    />
                </div>

                {/* ภาพเล็กที่ใช้เลือก */}
                <div className="grid grid-cols-7 gap-4">
                    {names.map((item, index) => (
                        <div key={index}>
                            <Image
                                src={item.imgSrc}
                                alt={item.heading}
                                width={120}
                                height={50}
                                className="h-auto max-w-full rounded-lg cursor-pointer"
                                // เมื่อเอาเคอร์เซอร์ไปวางจะเปลี่ยนภาพที่แสดง
                                onMouseEnter={() => setSelectedImage(item.imgSrc)}
                                // เมื่อคลิกจะเปลี่ยนภาพที่แสดง
                                onClick={() => setSelectedImage(item.imgSrc)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default People;
