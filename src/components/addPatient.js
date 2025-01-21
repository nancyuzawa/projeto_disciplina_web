import '../css/global.css';
import '../css/addPatient.css';


function AddPatient({onClose}){
    return(
        <div className='add-patient-content'>
                <div className='svg-content-close'>
                <button className='btn-close' onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                </button>

                </div>
                <h1>Adicionar novo paciente</h1>
                <form className="form-add-patient" name="formulario">
                    <div className="input-dados">
                        <label className="label-add-patient long-label" htmlFor="nome">
                            Nome*
                            <input type="text" name="nome" id="nome" required/>
                        </label>
                        <div className="input-informacao">
                            <label className="label-add-patient" htmlFor="peso">
                                Peso*
                                <input type="text" name="peso" id="peso" required/>
                            </label>
                            <label className="label-add-patient" htmlFor="altura" required>
                                Altura*
                                <input type="text" name="altura" id="altura" />
                            </label>
                        </div>
                        <label className="label-add-patient long-label label-last-information" htmlFor="por-gordura">
                            % de Gordura
                            <input type="text" name="por-gordura" id="por-gordura" />
                        </label>
                </div>
                <div className="campo-botao">
                    <label className="label-add-patient" htmlFor="btnAdicionar">
                        <input type="submit" value="Adicionar" id="btnAdicionar" />
                    </label>
                    <label className="label-add-patient" htmlFor="btnGetCDCollection">
                        <input type="submit" value="Get my CD Collection" id="btnGetCDCollection" />
                    </label>
                </div>
            </form>
            </div>
    )
};

export default AddPatient;