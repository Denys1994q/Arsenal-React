import { useState } from "react";
import Accordion from "../components/contact/contact_Accordion/Accordion";
import ContactForm from "../components/contact/contact_Form/ContactForm";

const Contact = () => {
    const [active, setActive] = useState("");

    return (
        <section className='contact'>
            <h2 className='contact__title'>Contact us</h2>
            <p className='contact__text'>
                Below are options for contacting us. If you have a general query it might be worth checking out our top
                FAQs below, as these may answer your query.
            </p>
            <h3 className='contact__subtitle'>TOP FAQ'S</h3>
            <div className='contact__body'>
                <div className='contact__accordionWrapper'>
                    <Accordion
                        title='Where is my order?'
                        text='Your order will be despatched from our warehouse as soon as possible. Delivery timings depend on the destination. You can track the your order if you are a registered user'
                        active={active}
                        setActive={setActive}
                    />
                    <Accordion
                        title='What are the UK delivery options and costs?'
                        text='UK delivery is £3.99 for Standard Delivery or Click and Collect and £5.99 for Express (next working day) Delivery'
                        active={active}
                        setActive={setActive}
                    />
                    <Accordion
                        title='I want to refund/exchange and item on my order, is this possible?'
                        text='You can send the item or entire order back for a refund as long as you do not have a personalised item that has been specifically made for you. You can exchange an item if it is faulty or you need a different size as long as it is the same product code. If this is not the case then a refund will be issues.'
                        active={active}
                        setActive={setActive}
                    />
                    <Accordion
                        title='Can I ammend my processed order?'
                        text='You cannot manually amend your order. You will have to immediately call 020 7619 5000 Monday-Friday 9.30am to 5pm or e-mail us with you order id number. Please enter "Urgent Order Amend" in the subject field. We cannot guarantee that we will be able to amend any orders placed.'
                        active={active}
                        setActive={setActive}
                    />
                    <Accordion
                        title='Can I have my order sent to an alternative address?'
                        text='Yes, your order can be sent to an alternative address. If you are a registered customer you can add multiple addresses to your account and use any of these as your default Shipping Address. Go to “My Account” and then “View Address Book”. Add in new addresses and set one as a default shipping address. If you are checking out without registering you can add an alternative Shipping Address after you have entered the Billing Address. At the bottom of the form there is a “Deliver To” section and you can click on “Different Address” and then enter the shipping details. It is very important to make sure your billing/invoice address is kept up to date with the billing/invoice address that you have registered at your bank or credit card company. If this is not done it may severely delay your order or end in cancellation as it will not pass security checks.'
                        active={active}
                        setActive={setActive}
                    />
                </div>
                <div>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default Contact;
