import '../css/about.css';
import '../css/global.css';

import Wallpaper from '../images/wallpaper.jpg'


function About(){
    return(
        <section className="about-content"> 
            <div className="image-content">
                <img src={Wallpaper} alt=""/>
            </div>
            <div className="creditos">
                <p>
                    Designed by <a href="https://www.freepik.com" target="_blank" rel="noopener noreferrer">Freepik</a>
                </p>
            </div>
            <div>
                <h2>Sobre a Clínica de Nutrição</h2>
                <p>
                    Bem-vindo à nossa Clínica de Nutrição! Aqui, nosso objetivo é ajudar você a alcançar uma vida mais saudável e equilibrada através de acompanhamento nutricional personalizado. Nossa equipe é dedicada a oferecer as melhores práticas de saúde para promover o bem-estar de todos os nossos pacientes.
                </p>
                <p>
                    Na nossa clínica, utilizamos ferramentas avançadas para monitorar indicadores importantes do seu corpo, como o Índice de Massa Corporal (IMC). O IMC é calculado a partir do peso e da altura, sendo uma métrica amplamente utilizada para avaliar se uma pessoa está em um peso ideal em relação à sua estatura. Além disso, analisamos a porcentagem de gordura corporal para oferecer uma visão mais abrangente da sua saúde.
                </p>
                <p>
                    
                </p>
            </div>
        </section>
    );
}

export default About;