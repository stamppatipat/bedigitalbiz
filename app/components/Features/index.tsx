import Image from "next/image";
import Link from 'next/link';

interface datatype {
    imgSrc: string;
    heading: string;
    paragraph: string;
}

const Aboutdata: datatype[] = [
    {
        imgSrc: "https://www.bedigitalbiz.co.th/wp-content/uploads/2023/12/THK_LOGO.jpg",
        heading: "โรงเรียนธรรมศาสตร์คลองหลวงวิทยาคม",
        paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa',
        // button: "/",
    },
    {
        imgSrc: "https://www.bedigitalbiz.co.th/wp-content/uploads/2023/12/skr_logo-266x300-1.png",
        heading: "โรงเรียนสวนกุหลาบวิทยาลัย รังสิต",
        paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa',
        // button: "/",
    },
    {
        imgSrc: "https://www.bedigitalbiz.co.th/wp-content/uploads/2023/12/Skw-logo-01.png",
        heading: "โรงเรียนศรีสะเกษวิทยาลัย",
        paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa',
        // button: "/"
    },
    {
        imgSrc: "https://www.bedigitalbiz.co.th/wp-content/uploads/2022/08/%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%AA%E0%B8%B4%E0%B8%A3%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%A3.png",
        heading: "โรงเรียนสิรินธร",
        paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa',
        // button: "/"
    },
    {
        imgSrc: "/assets/logo/BD.png",
        heading: "โรงเรียนบดินทรเดชา (สิงห์ สิงหเสนี)",
        paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa',
        // button: "/"
    },
    
]

const Features = () => {
    return (
        
        <div className="bg-babyblue" id="Reference">
            
            <div className="mx-auto max-w-2xl  py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h3 className="text-4xl sm:text-4xl font-semibold text-black text-center m-10">Site Reference</h3>
                <h5 className="text-black opacity-60 text-lg font-normal text-center mx-10 ">ขอขอบคุณ ลูกค้าทุกท่าน ที่ได้ไว้วางใจในบริการ ด้วยดีเสมอมา เราจะพัฒนาบุคลากร และการให้บริการหลังการขาย ให้ดียิ่งขึ้นต่อไป</h5>
                <a href="commingsoon">
                            <div className="but1 text-center m-8">
                                <button>
                                    <div className="text">ดูเพิ่มเติม</div>
                                    <div className="blob"></div>
                                    <div className="blob"></div>
                                    <div className="blob"></div>
                                    <div className="blob"></div>
                                </button>
                                </div>
                        </a>
                <div className="scroll-container">
                <div className="scroll-content">
                        {/* ชุดการ์ดที่ 1 */}
                        {Aboutdata.map((item, i) => (
                        <div key={i} className="card bg-white rounded-2xl p-5 featureShadow ">
                            <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-2 mx-auto" />
                            <h3 className="text-sm  text-black mt-2 text-center">{item.heading}</h3>
                            {/* <Link href={item.button} target="_blank">
                            <div className="flex justify-center items-center mt-4">
                                <div className="text-electricblue text-xl font-medium flex items-center justify-center gap-2 w-12 h-12 bg-white rounded-full shadow-md">
                                <Image src="/assets/people/arrow-right.svg" alt="arrow-right" width={24} height={24} />
                                </div>
                            </div>
                            </Link> */}
                        </div>
                        ))}

                        {/* ชุดการ์ดที่ 2 (ซ้ำ) */}
                        {Aboutdata.map((item, i) => (
                        <div key={`${i}-duplicate`} className="card bg-white rounded-2xl p-5 featureShadow">
                            <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-2 mx-auto" />
                            <h3 className="text-sm  text-black mt-2 text-center">{item.heading}</h3>
                            {/* <Link href={item.button} target="_blank">
                            <div className="flex justify-center items-center mt-4">
                                <div className="text-electricblue text-xl font-medium flex items-center justify-center gap-2 w-12 h-12 bg-white rounded-full shadow-md">
                                <Image src="/assets/people/arrow-right.svg" alt="arrow-right" width={24} height={24} />
                                </div>
                            </div>
                            </Link> */}
                        </div>
                        ))}
                    </div>
                    </div>


            </div>
                
        </div>
    )
}

export default Features;
