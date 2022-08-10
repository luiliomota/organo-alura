import './Colaborador.css'

const Colaborador = ({nome, cargo, urlImagem, corDoFundo}) => {
    return (
        <div className="colaborador">
            <div className="cabecalho" style={{backgroundColor: corDoFundo}}>
                <img src={urlImagem} alt={nome}/>
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}
export default Colaborador
