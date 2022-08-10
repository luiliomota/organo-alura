import './Time.css'
import Colaborador from "../Colaborador";

const Time = (props) => {
    const css = { backgroundColor: props.corSecundaria }
    return (
        props.colaboradores.length > 0 ?
      <section className="time" style={css}>
          <h2 style={{ borderColor: props.corPrimaria }}>{props.nome}</h2>
          <div className="colaboradores">
              {props.colaboradores.map(colaborador =>
                  <Colaborador key={colaborador.nome} corDoFundo={props.corPrimaria} nome={colaborador.nome} cargo={colaborador.cargo} urlImagem={colaborador.imagem}/>)}
          </div>
      </section>
            : ""
    );
}

export default Time
