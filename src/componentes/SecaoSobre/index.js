import "./style.css"

export default function SecaoSobre(){
    return (
        <section className="box-sobre">
            <div className="container-sobre limitar-secao">
                <h2>quem somos nós</h2>
                <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. </p>
                <div className="container-cards">
                    <img src="../assets/imagens/loja.png"/>
                    <div className="cards">
                        <h3>Nossas Filiais</h3>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>
                    <div className="cards">
                        <h3>Atendimento flexível</h3>
                        <p>Nossa equipe possui é treinada para te atender
</p>
                    </div>
                    <img src="../assets/imagens/atendimento.png"/>
                </div>
            </div>
        </section>
    )
}