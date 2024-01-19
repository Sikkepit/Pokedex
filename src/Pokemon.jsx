export default function Pokemon({id, name, icon, handleFocus}){

  function leadingZeros(id) {
    const formattedId = "000" + id;
    return formattedId.substring(formattedId.length - 3)
  }
 
    return (
        <button className="pokelist--entry" id={name} onFocus={() => handleFocus(id)}>
          <div className="pokelist--left">
            <img className="pokelist--icon" src={icon} alt={name} />
            <span className="pokelist--number">No. {leadingZeros(id)}</span>
          </div>
          <div className="pokelist--right">
            <h3 className="pokelist--name">{name}</h3>
            <img className="pokelist--pokeball" src="./src/assets/pokeball-black.png" title="Pokeball logo by icons8.com" alt="pokeball" />
          </div>
        </button>
    )
}