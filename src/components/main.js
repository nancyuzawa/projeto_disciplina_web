import '../css/global.css';
import '../css/main.css';
import AddPatient from './addPatient.js';

import { useState } from 'react';


function Main(){
    const [ShowAddPatient, setShowAddPAtient] = useState(false);

    //Abrir o modal add Paciente
    const handleAddPatientClick = () => {
        setShowAddPAtient(true);
    };

    //Para fechar
    const handleCloseModal = () => {
        setShowAddPAtient(false);
    }

    return(
        <main>
            <section className="first-section">
                <h1>Meus pacientes</h1>
                <button className="btn-add" onClick={handleAddPatientClick}>Adicionar paciente</button>
            </section>

            {/* Modal para add paciente */}
            {ShowAddPatient && (
                <div className='modal-overlay' onClick={handleCloseModal}>
                    <div className='modal-content' onClick={(e) => e.stopPropagation()}> {/* Evita que o clique no modal feche o componente */}
                        <AddPatient onClose={handleCloseModal}/>
                    </div>

                </div>
            )}

        </main>
    )
};

export default Main;