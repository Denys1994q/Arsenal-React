import { useEffect, useState } from "react";

const ContactForm = () => {
    const [nameValue, setNameValue] = useState("");
    const [mailValue, setMailValue] = useState("");
    const [selectValue, setSelectValue] = useState("");
    const [numberValue, setNumberValue] = useState("");
    const [textValue, setTextValue] = useState("");

    const [showModal, setShowModal] = useState(false);

    const [focusEmptyName, setFocusEmptyName] = useState(false);
    const [focusEmptyEmail, setFocusEmptyEmail] = useState(false);
    const [focusEmptyNumber, setFocusEmptyNumber] = useState(false);
    const [focusEmptySelect, setFocusEmptySelect] = useState(false);

    const [disable, setDisable] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowModal(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, [showModal]);

    const sendForm = e => {
        e.preventDefault();
        if (nameValue !== "" && mailValue !== "" && selectValue !== "" && numberValue !== "") {
            setShowModal(true);

            const obj = {};
            obj.name = nameValue;
            obj.email = mailValue;
            obj.selectSubject = selectValue;
            obj.number = +numberValue;
            obj.text = textValue;

            setNameValue("");
            setMailValue("");
            setSelectValue("");
            setNumberValue(0);
            setTextValue("");
        }
    };

    const checkEmpty = (type, e) => {
        switch (type) {
            case "name": {
                setNameValue(e.target.value);
                if (e.target.value.length < 1) {
                    setFocusEmptyName(true);
                } else {
                    setFocusEmptyName(false);
                }
                break;
            }
            case "email": {
                setMailValue(e.target.value);
                if (e.target.value.length < 1) {
                    setFocusEmptyEmail(true);
                } else {
                    setFocusEmptyEmail(false);
                }
                break;
            }
            case "number": {
                setNumberValue(e.target.value);
                if (e.target.value.length < 1) {
                    setFocusEmptyNumber(true);
                } else {
                    setFocusEmptyNumber(false);
                }
                break;
            }
            case "select": {
                setSelectValue(e.target.value);
                if (e.target.value.length < 1) {
                    setFocusEmptySelect(true);
                } else {
                    setFocusEmptySelect(false);
                }
                break;
            }
        }
    };

    useEffect(() => {
        if (nameValue !== "" && mailValue !== "" && selectValue !== "" && numberValue !== "") {
            setDisable(false);
        } else if (nameValue !== "" || mailValue !== "" || selectValue !== "" || numberValue !== "") {
            setDisable(true);
        }
    }, [nameValue, numberValue, selectValue, numberValue]);

    return (
        <>
            <form action='' className='contactForm'>
                <input
                    type='text'
                    placeholder='Name'
                    value={nameValue}
                    onChange={e => checkEmpty("name", e)}
                    style={{ border: focusEmptyName ? "2px solid #bb1f1f" : "1px solid #dddddd" }}
                    className='contactForm__input browser-default'
                />
                <input
                    type='email'
                    placeholder='Email'
                    value={mailValue}
                    onChange={e => checkEmpty("email", e)}
                    style={{ border: focusEmptyEmail ? "2px solid #bb1f1f" : "1px solid #dddddd" }}
                    className='contactForm__input browser-default'
                />
                <input
                    type='number'
                    placeholder='Order Number'
                    className='contactForm__input browser-default'
                    value={numberValue}
                    onChange={e => checkEmpty("number", e)}
                    style={{ border: focusEmptyNumber ? "2px solid #bb1f1f" : "1px solid #dddddd" }}
                />
                <select
                    value={selectValue}
                    onChange={e => checkEmpty("select", e)}
                    className='contactForm__select browser-default'
                    style={{ border: focusEmptySelect ? "2px solid #bb1f1f" : "1px solid #dddddd" }}>
                    <option value=''>Select Subject</option>
                    <option value='amend/cancel'>I need to amend/cancel my order</option>
                    <option value='damaged/faulty'>I have a damaged/faulty item</option>
                    <option value='notReceived'>I still have not received my order</option>
                    <option value='other'>Other</option>
                </select>
                <textarea
                    value={textValue}
                    placeholder='Free text description'
                    onChange={e => setTextValue(e.target.value)}
                    className='contactForm__textArea'></textarea>
                <input
                    type='submit'
                    value='Send'
                    onClick={e => sendForm(e)}
                    disabled={disable}
                    className='contactForm__btn btn'
                />
            </form>
            <div className={showModal ? "form-message show" : "form-message"}>Thanks! Form was succesfully sent.</div>
        </>
    );
};

export default ContactForm;
