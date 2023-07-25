import "./style.css"

export default function SecaoContato(){
    return (
        <section className="box-contato">
            <div className="limitar-largura">
                <h2>fale conosco</h2>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
                <div className="container-informacoes">
                    <div>
                        <h3>Contato</h3>
                        <figure>
                            <img src="../assets/imagens/local.png"/>
                            <figcaption>Nova Iguaçu, RJ</figcaption>
                        </figure>
                        <figure>
                            <img src="../assets/imagens/telefone.png"/>
                            <figcaption>(21) 99999-9999</figcaption>
                        </figure>
                        <figure>
                            <img src="../assets/imagens/email.png"/>
                            <figcaption>contato@oticavida.com</figcaption>
                        </figure>
                    </div>
                    <div>
                        <h3>Nossas Redes Sociais</h3>
                        <figure>
                            <img src="../assets/imagens/fb.png"/>
                            <figcaption>/OticaVida</figcaption>
                        </figure>
                        <figure>
                            <img src="../assets/imagens/ig.png"/>
                            <figcaption>@oticavidarj</figcaption>
                        </figure>
                        <figure>
                            <img src="../assets/imagens/tt.png"/>
                            <figcaption>@oricavidarj</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}