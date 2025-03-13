import {
    FaFacebookSquare,
    FaInstagram,
    FaTwitterSquare,
    FaGithubSquare,
    FaDribbbleSquare
} from 'react-icons/fa'


export default function Footer() {
    return (
        <div className="w-full m-auto px-4 py-2 bg-[#24262b]">
            <div className="p-2 px-6 grid lg:grid-cols-3 gap-8 text-gray-300">
                <div>
                    <h1 className="w-full p-2 text-3xl font-bold text-brown-sugar">FeastTogether</h1>
                    <p className='leading-relaxed'>
                    Good food, good friends, and great memories—because every meal should be a feast!
                    Every recipe tells a story—of tradition, family, and creativity.
                    </p>
                    <div className="flex justify-between md:w-[75%] my-6 mt-14 ">
                        <FaFacebookSquare className="cursor-pointer text-tea-green" size={30} />
                        <FaInstagram className="cursor-pointer text-tea-green" size={30} />
                        <FaTwitterSquare className="cursor-pointer text-tea-green" size={30} />
                        <FaGithubSquare className="cursor-pointer text-tea-green" size={30} />
                        <FaDribbbleSquare className="cursor-pointer text-tea-green" size={30} />
                    </div>
                </div>

                <div className="lg:col-span-2 flex justify-between mt-6">
                    <div>
                        <h6 className="font-medium">Location</h6>
                        <ul>
                            <li className="py-2 text-sm">New York</li>
                            <li className="py-2 text-sm">USA</li>
                            <li className="py-2 text-sm">India</li>
                            <li className="py-2 text-sm">Canada</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="font-medium ">Location</h6>
                        <ul>
                            <li className="py-2 text-sm">New York</li>
                            <li className="py-2 text-sm">USA</li>
                            <li className="py-2 text-sm">India</li>
                            <li className="py-2 text-sm">Canada</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="font-medium ">Location</h6>
                        <ul>
                            <li className="py-2 text-sm">New York</li>
                            <li className="py-2 text-sm">USA</li>
                            <li className="py-2 text-sm">India</li>
                            <li className="py-2 text-sm">Canada</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="font-medium text-white">Location</h6>
                        <ul>
                            <li className="py-2 text-sm">New York</li>
                            <li className="py-2 text-sm">USA</li>
                            <li className="py-2 text-sm">India</li>
                            <li className="py-2 text-sm">Canada</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}