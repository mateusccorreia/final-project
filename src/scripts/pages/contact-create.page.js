import { criarContato } from "../services/contact.service"

const createContact = document.createElement('form')
createContact.setAttribute("id", "p-create-contact")

const events = () => {
    createContact.addEventListener('submit', (e) => {
        e.preventDefault()

        const fd = new FormData(createContact)
        console.log(fd)
        const data = Object.fromEntries(fd)
        console.log(data)

        const telefones = [
            {tipo: data['tipo-telefone-1'], numero: data['numero-1']},
            {tipo: data['tipo-telefone-2'], numero: data['numero-2']},
            {tipo: data['tipo-telefone-3'], numero: data['numero-3']},
        ]

        data.telefones = telefones
        delete data.numero-1
        delete data.numero-2
        delete data.numero-3

        console.log(data)

        criarContato(data)
            .then((response) => {
                const retorno = createContact.querySelector("#retorno")

                if(response.status === 409) {
                    retorno.innerText = response.mensagem
                }
                
                if(response.status === 200) {
                    window.location.href = "/#contacts"
                }
            })
            .catch((error) => {
                console.error(error)
            })
    })
}

export const CreateContact = () => {

    createContact.innerHTML = `
        <h3 id="novo-contato">Novo contato</h3>
        <div id="label-cadastro">
            <label for="nome">Nome</label>
            <input id="nome" name="nome" type="text" placeholder="Insira o nome"/>
            <label for="email">E-mail</label>
            <input id="email" name="email" type="text" placeholder="Insira o e-mail"/>

            <h4>Telefones</h4>

            <fieldset>
                <select name="tipo-telefone-1" style="display: block;">
                    <option value="casa">Casa</option>
                    <option value="trabalho">Trabalho</option>
                    <option value="celular">Celular</option>
                </select>
                <input name="numero-1" type="phone" placeholder="insira o número">
            
                <select name="tipo-telefone-2" style="display: block;">
                    <option value="casa">Casa</option>
                    <option value="trabalho">Trabalho</option>
                    <option value="celular">Celular</option>
                </select>
                <input name="numero-2" type="phone" placeholder="insira o número">
            
                <select name="tipo-telefone-3" style="display: block";>
                    <option value="casa">Casa</option>
                    <option value="trabalho">Trabalho</option>
                    <option value="celular">Celular</option>
                </select>
                <input name="numero-3" type="phone" placeholder="insira o número">
            </fieldset>

        </div>

        <button id="btn-criar" style="width: 150px">Salvar</button>

        <br>

        <label id="retorno"></label>
    `
    events()
    return createContact
}
