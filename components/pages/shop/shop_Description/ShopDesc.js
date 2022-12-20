import { useState } from "react"

const ShopDesc = () => {
    const [menu, setMenu] = useState([
        {title: 'description', body: 'Get ready for a ‘90s throwback in the Arsenal 22/23 Home Shirt. Striking the perfect balance between vintage class and modern aesthetics, this fan’s version Arsenal home shirt features a lightning trimmed polo collar, an embroidered Club crest at chest, and mesh underarm panels for enhanced comfort. Crafted from lightweight recycled polyester and armed with moisture-absorbing AEROREADY technology, you can always count on this home shirt to keep you dry and confident, on the pitch and beyond. This home shirt is made with Primegreen, a high-performance material obtained from recycled polyester, without the use of virgin plastic.Make it your own by having your chosen name and number printed on the back. Your shirt, your way. Colour: Red/White. Product code: MH35903. Material: 100% recycled polyester doubleknit'},
        {title: 'delivery', body: 'Delivery costs will be calculated at checkout.'},
        {title: 'return', body: 'We understand that sometimes things just don`t work out. If for any reason you are unhappy with your purchase, you can return it to us within 28 days of receipt. See how on our returns page. Please note that we are unable to accept returns for items that have been printed to your specification with a player’s name, a personalised name and/or squad number, so please ensure you have checked your personalisation details and size carefully before submitting your order. Other terms and conditions apply. For full details, see our terms and conditions page'},
    ])

    const [activeMenu, setActiveMenu] = useState(0);

    const titleContent = menu.map((item, i) => {
        return (
            <li onClick={() => changeActiveMenu(i)} className={i === activeMenu ? "shop-description-item shop-description-item-active" : "shop-description-item"}>{item.title}</li>
        )
    })

    const changeActiveMenu = (i) => {
        setActiveMenu(i)
    }

    return (
        <>
            <ul className="shop-description">
                {titleContent}
            </ul>
            <div className="shop-description-body">
                {menu[activeMenu].body}
            </div>
        </>
    )
}

export default ShopDesc