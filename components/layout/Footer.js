import Image from "next/image";

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <ul className='footer-logos'>
                    <li>
                        <Image width={80} height={40} src='/imgs/adidas.png' alt='adidas' />
                    </li>
                    <li>
                        <Image width={80} height={40} src='/imgs/emirates.png' alt='emirates' />
                    </li>
                    <li>
                        <Image width={80} height={40} src='/imgs/visit-rwanda.png' alt='visit-rwanda' />
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Footer;
