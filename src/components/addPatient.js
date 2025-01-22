import '../css/global.css';
import '../css/addPatient.css';
import { useState } from 'react';

function AddPatient({onClose, onAddPatient }){
    const [name, setName] = useState('');    
    const [peso, setPeso] = useState('');    
    const [altura, setAltura] = useState('');    
    const [gordura, setGordura] = useState('');    
    const [imc, setImc] = useState('');    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isNaN(peso)){
            window.alert("PESO INVÁLISO!\nPor favor, insira um número válido. O número pode ser decimal.");
        }
        else if(isNaN(altura)){
            window.alert("ALTURA INVÁLIDA\nPor favor, insira um número válido. O número pode ser decimal.");
        }
        else if (gordura !== "" && isNaN(gordura)){
            window.alert("% GORDURA INVÁLIDA\nPor favor, insira um número válido. O número pode ser decimal.");
        }
        else{
            const pesoNum = parseFloat(peso);
            const alturaNum = parseFloat(altura);
            const calculaImc = pesoNum / (alturaNum * alturaNum);
            const imcInformado = calculaImc.toFixed(2);
            setImc(calculaImc);
            const newPatient = { name, peso: pesoNum, altura: alturaNum, gordura, imc: imcInformado};
                onAddPatient(newPatient);
                onClose();
        }
    };

    return(
        <div className='add-patient-content'>
                <div className='svg-content-close'>
                <button className='btn-closee' onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                </button>

                </div>
                <h1>Adicionar novo paciente</h1>
                <form onSubmit={handleSubmit} className="form-add-patient" name="formulario">
                    <div className="input-dados">
                        <div className="col-md-12 bg-white">
                        <label className="label-add-patient long-label bg-white" htmlFor="nome">
                            Nome*</label>
                            <input type="text" name="nome" id="nome" required onChange={(e) => setName(e.target.value)}/>
                            </div>
                        <div className="input-informacao col-md-12">
                            <div className="bg-white">
                                <label className="label-add-patient bg-white" htmlFor="peso" >
                                    Peso*
                                </label>
                                <input type="text" name="peso" id="peso" required onChange={(e) => setPeso(e.target.value)}/>
                            </div>
                            <div className="bg-white">
                            <label className="label-add-patient bg-white" htmlFor="altura" required>
                                Altura*
                                
                            </label>
                            <input type="text" name="altura" id="altura" required onChange={(e) => setAltura(e.target.value)}/>
                            </div>
                        </div>
                        <div className="col-md-12 bg-white">
                        <label className="label-add-patient long-label label-last-information bg-white" htmlFor="por-gordura">
                            % de Gordura
                        </label>
                        <input type="text" name="por-gordura" id="por-gordura" onChange={(e) => setGordura(e.target.value)}/>
                        </div>
                </div>
                <div className="campo-botao">
                    <label className="label-add-patient" htmlFor="btnAdicionar">
                        <input type="submit" value="Adicionar" id="btnAdicionar" />
                    </label>
                    {/* <label className="label-add-patient" htmlFor="btnGetCDCollection">
                        <input type="submit" value="Get my CD Collection" id="btnGetCDCollection" />
                    </label> */}
                </div>
            </form>
            </div>
    )
};

export default AddPatient;