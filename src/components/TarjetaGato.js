import "./TarjetaGato.css"


const TarjetaGato = ({nombre, descripcion, imagen})=>{

    return(
        <div className="card">
            <h2>{nombre}</h2>
            <p>{descripcion}</p>
            <div className="contenedor-img">
                <img src={imagen}></img>
            </div>
            
        </div>
    )
   
    
}

export default TarjetaGato;