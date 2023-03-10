import { Header } from "../components/header.component.js"

const root = document.getElementById('root')
const contactsDetails = document.createElement('div')
contactsDetails.setAttribute("id", "p-contact-details")

export const ContactDetails = () => {
    const header = Header()
    root.append(header)

    const contato = window.history.state

    contactsDetails.innerHTML = `

    <button style="width: 150px"><a href="/#contacts">Voltar para contatos</a></button>

        <br>
        <div class="dados-contato">
            <div>
                <h3>Informações:</h3>
                <p><b>Nome:</b>${contato.nome}</p>
                <p><b>Apelido:</b>${contato.apelido}</p>
                <p><b>E-mail:</b>${contato.email}</p>
                <p><b>Notas:</b>${contato.notas}</p>
            </div> <br>            

            <div>
                <h3>Endereço:</h3>
                <p><b>CEP:</b>${contato.endereco.cep}</p>
                <p><b>Logradouro:</b>${contato.endereco.logradouro}</p>
                <p><b>Cidade:</b>${contato.endereco.cidade}</p>
                <p><b>Estado:</b>${contato.endereco.estado}</p>
                <p><b>País:</b>${contato.endereco.pais}</p> 
            </div>
        </div> <br>       

        <h3>Telefone</h3>
        `

    contato.telefones.forEach((telefone) => {
        contactsDetails.innerHTML += `
            <hr>
            <p>${telefone.tipo}</p>        
            <p>${telefone.numero}</p>        
        `
    })

    return contactsDetails
}
