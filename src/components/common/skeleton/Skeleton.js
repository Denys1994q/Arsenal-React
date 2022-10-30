const Skeleton = () => {
  return (
    <>
        <p class='char__select'></p>
        <div class='skeleton'>
          <div class='pulses skeleton__header'>
            <div class='pulses skeleton__circle'></div>
            <div class='pulses skeleton__mini'></div>
          </div>
          <div class='pulses skeleton__block'></div>
          <div class='pulses skeleton__block'></div>
          <div class='pulses skeleton__block'></div>
        </div>
    </>
  );
};

export default Skeleton;
