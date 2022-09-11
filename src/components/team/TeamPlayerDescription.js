
const TeamPlayerDescription = (props) => {
    const {activeHero, cardImgs} = props;

    const contentDescription = cardImgs[activeHero].description === "" ? 
  <>
    <div className='char__info-img'>
      <img src={cardImgs[activeHero].img} alt='' />
    </div>
    <div className='char__info-text'>
    <div className='char__info-text-title'>
      {cardImgs[activeHero].name}
    </div>
    <div>
      No description for this character
      <a className='btn team-btn' href={cardImgs[activeHero].homepage} target='_blank' > homepage </a>
      <a className='btn team-btn' href={cardImgs[activeHero].wiki} target='_blank' > wiki </a>              
    </div>
  </div>
  </> : 
  <>
    <div className='char__info-img'>
        <img src={cardImgs[activeHero].img} alt='' />
        <div>
          <a className='btn team-btn' href={cardImgs[activeHero].homepage} target='_blank' > homepage </a>
          <a className='btn team-btn' href={cardImgs[activeHero].wiki} target='_blank' > wiki </a>        
        </div>
      </div>
    <div className='char__info-text'>
        <div className='char__info-text-title'>{cardImgs[activeHero].name}</div>
        <div>{cardImgs[activeHero].description}</div>   
    </div>
  </>

    return (contentDescription)
}

export default TeamPlayerDescription;