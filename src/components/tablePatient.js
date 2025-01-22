import 'bootstrap/dist/css/bootstrap.min.css';  // Importa o estilo do Bootstrap
import '../css/tablePatient.css'

function TablePatient({ data }) {
    return (
        <section className="table-content">
            <table className="table table-hover table-striped">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Peso</th>
                        <th scope="col">Altura</th>
                        <th scope="col">Gordura</th>
                        <th scope="col">IMC</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Passando os dados para renderizar dentro do <tbody> */}
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.peso}</td>
                            <td>{item.altura}</td>
                            <td>{item.gordura}</td>
                            <td>{item.imc}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

export default TablePatient;
