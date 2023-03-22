export default function Characters(props){
    const {characters} = props;
    console.log(characters);
    return (
        <div className="characters">
            <h1>Personajes</h1>
            <span className="back-home">Volver al home</span>
            <div className="containter-characters">
                {characters.map((character, index) => (
                    <div className="character-container" key={index}>
                    <p>{character.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}


