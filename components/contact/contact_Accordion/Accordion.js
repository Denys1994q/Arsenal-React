
const Accordion = (props) => {
    const {title, text, active, setActive} = props;

    const clickChangeActive = () => {
        if (active === title) {
            setActive('')
        } else {
            setActive(title)
        }
    }

    return (
        <>
            <div className="accordionHeader">
                <p>{title}</p>
                <span style={{'cursor': 'pointer'}} onClick={() => clickChangeActive()}>
                    {active === title ? 'X' : 'III'}
                </span>
            </div>

            <div className={(title === active ? 'show' : '') + ' accordionContent'} >
                <p>{text}</p>
            </div>
        </>
    )
}

export default Accordion;