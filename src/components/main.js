import React, { useState } from 'react';
import AddPatient from './addPatient.js';
import TablePatient from './tablePatient.js';
import '../css/global.css';
import '../css/main.css';

function Main() {
    const [showAddPatient, setShowAddPatient] = useState(false);
    const [patientsData, setPatientsData] = useState([]);

    // Função para abrir o modal de adicionar paciente
    const handleAddPatientClick = () => {
        setShowAddPatient(true);
    };

    // Função para fechar o modal
    const handleCloseModal = () => {
        setShowAddPatient(false);
    };

    //Adicionar um paciente
    const addPatient = (newPatient) => {
        setPatientsData((prevData) => [...prevData, newPatient]);  // Adiciona o novo paciente
    };

     // Função para buscar os dados XML
     const buscaDadosXML = async () => {
        const resposta = await fetch('./cd_pacientes.xml');
        const texto = await resposta.text();
        return new window.DOMParser().parseFromString(texto, 'application/xml');
    };

    // Função para processar os dados XML e atualizar a tabela
    const processXMLData = (xmlDoc) => {
        const cdItems = xmlDoc.getElementsByTagName("CD");

        if (cdItems.length === 0) {
            console.error("Nenhum dado encontrado no XML.");
            return;
        }

        const data = [];
        
        for (let i = 0; i < cdItems.length; i++) {
            const name = cdItems[i].getElementsByTagName("NAME")[0]?.childNodes[0]?.nodeValue || "N/A";
            const peso = cdItems[i].getElementsByTagName("PESO")[0]?.childNodes[0]?.nodeValue || "N/A";
            const altura = cdItems[i].getElementsByTagName("ALTURA")[0]?.childNodes[0]?.nodeValue || "N/A";
            const gordura = cdItems[i].getElementsByTagName("GORDURA")[0]?.childNodes[0]?.nodeValue || "N/A";
            const imc = cdItems[i].getElementsByTagName("IMC")[0]?.childNodes[0]?.nodeValue || "N/A";

            data.push({ name, peso, altura, gordura, imc });
        }

        // setPatientsData(data); // Atualiza os dados da tabela
        setPatientsData((prevData) => [...prevData, ...data]); // Adiciona os novos dados ao estado existente
        console.log(data); // Para verificação
    };

   

    const handleButtonClick = () => {
        //passando os dados para a função
        buscaDadosXML().then(xmlData => {
            processXMLData(xmlData);
        })
    }

    return (
        <main>
            <section className="first-section">
                <h1>Meus pacientes</h1>
                <button className="btn-add" id="btnGetCDCollection" onClick={handleButtonClick}>
                    Get my CD Collection
                </button>
                <button className="btn-add" id="btnAddPatient" onClick={handleAddPatientClick}>
                    Adicionar paciente
                </button>
            </section>

            {/* Modal para adicionar paciente */}
            {showAddPatient && (
                <div className="modal-overlayy" onClick={handleCloseModal}>
                    <div className="modal-contentt" onClick={(e) => e.stopPropagation()}>
                        <AddPatient onClose={handleCloseModal} onAddPatient={addPatient}/>
                    </div>
                </div>
            )}

            {/* Renderizando a tabela de pacientes */}
            <TablePatient data={patientsData} />
        </main>
    );
}

export default Main;
