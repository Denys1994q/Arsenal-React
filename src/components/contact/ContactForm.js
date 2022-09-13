import { useEffect, useState } from "react";

const ContactForm = () => {
    const [nameValue, setNameValue] = useState('');
    const [mailValue, setMailValue] = useState('');
    const [selectValue, setSelectValue] = useState('');
    const [numberValue, setNumberValue] = useState('');
    const [textValue, setTextValue] = useState('');

    const [showModal, setShowModal] = useState(false);

    const [focusEmptyName, setFocusEmptyName] = useState(false);
    const [focusEmptyEmail, setFocusEmptyEmail] = useState(false);
    const [focusEmptyNumber, setFocusEmptyNumber] = useState(false);
    const [focusEmptySelect, setFocusEmptySelect] = useState(false);

    const [disable, setDisable] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowModal(false)
        }, 4000)

        return () => clearTimeout(timer)
    }, [showModal])

    const sendForm = (e) => {
        e.preventDefault();
        if (nameValue !== '' && mailValue !== '' && selectValue !== '' && numberValue !== '') {
            setShowModal(true);

            const obj = {};
            obj.name = nameValue;
            obj.email = mailValue;
            obj.selectSubject = selectValue;
            obj.number = +numberValue;
            obj.text = textValue;
    
            setNameValue('')
            setMailValue('')
            setSelectValue('')
            setNumberValue(0)
            setTextValue('')
        }
    }

    const checkEmpty = (type, e) => {
        switch(type) {
            case 'name': {
                setNameValue(e.target.value)
                if (e.target.value.length < 1) {
                    setFocusEmptyName(true)
                } else {
                    setFocusEmptyName(false)
                }
                break;
            }
            case 'email': {
                setMailValue(e.target.value)
                if (e.target.value.length < 1) {
                    setFocusEmptyEmail(true)
                } else {
                    setFocusEmptyEmail(false)
                } 
                break;
            }
            case 'number': {
                setNumberValue(e.target.value)
                if (e.target.value.length < 1) {
                    setFocusEmptyNumber(true)
                } else {
                    setFocusEmptyNumber(false)
                } 
                break;
            }
            case 'select': {
                setSelectValue(e.target.value)
                if (e.target.value.length < 1) {
                    setFocusEmptySelect(true)
                } else {
                    setFocusEmptySelect(false)
                } 
                break;
            }
        }
    }

    useEffect(() => {
        if (nameValue !== '' && mailValue !== '' && selectValue !== '' && numberValue !== '') {
            setDisable(false)
        } else if (nameValue !== '' || mailValue !== '' || selectValue !== '' || numberValue !== '') {
            setDisable(true)
        }
    }, [nameValue, numberValue, selectValue, numberValue])

    return (
        <>
            <p>Please fill the form below to contact Arsenal Retail by Email:</p>
            <form action="" className="contactForm">
                <div className="contactForm-left">
                    <div className="contactForm-input">
                        <input 
                            value={nameValue} 
                            onChange={e => checkEmpty('name', e)} 
                            style={{'border': focusEmptyName ? '2px solid #bb1f1f' : '1px solid #837e7e'}}
                            className="browser-default" 
                            type="text" 
                            placeholder="Enter Name" />
                    </div>
                    <div className="contactForm-input">
                        <input 
                            value={mailValue} 
                            onChange={e => checkEmpty('email', e)} 
                            style={{'border': focusEmptyEmail ? '2px solid #bb1f1f' : '1px solid #837e7e'}}
                            className="browser-default" 
                            type="email" 
                            placeholder="Enter Email" />
                    </div>
                    <div className="contactForm-input">
                        <input 
                            className="browser-default" 
                            value={numberValue} 
                            onChange={e => checkEmpty('number', e)}  
                            style={{'border': focusEmptyNumber ? '2px solid #bb1f1f' : '1px solid #837e7e'}}
                            type="number" 
                            placeholder="Enter Order Number" />
                    </div>
                </div>
                <div className="contactForm-right">
                    <div className="selectWrapper">
                    <select 
                        className="contactForm-select browser-default" 
                        value={selectValue} 
                        style={{'border': focusEmptySelect ? '2px solid #bb1f1f' : '1px solid #837e7e'}}
                        onChange={e => checkEmpty('select', e)} >
                            <option value="">Select Subject</option>
                            <option value="amend/cancel">I need to amend/cancel my order</option>
                            <option value="damaged/faulty">I have a damaged/faulty item</option>
                            <option value="notReceived">I still have not received my order</option>
                            <option value="other">Other</option>
                    </select>
                    </div>
                    <div>
                        <textarea 
                            className="contactForm-input contactForm-textArea" 
                            value={textValue} 
                            placeholder='Free text description'
                            onChange={e => setTextValue(e.target.value)}>
                        </textarea>
                    </div>
                </div>
                <div>
                    <input 
                            type="submit" 
                            disabled={disable}
                            className="contactForm-btn btn" 
                            onClick={(e) => sendForm(e)} 
                            value='Send' 
                        />
                </div>
            </form>
            <div className={showModal ? 'form-message show' : 'form-message'}>Thanks! Form was succesfully sent.</div>
        </>
    )
}

export default ContactForm