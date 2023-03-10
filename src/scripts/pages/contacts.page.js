import { CardContact } from "../components/card-contact.component.js"
import { Header } from "../components/header.component.js"
import { buscarContatos } from "../services/contact.service.js"

const root = document.getElementById('root')
const contacts = document.createElement('div')
contacts.setAttribute("id", "p-contacts")

const events = () => {
    buscarContatos()
        .then((contatos) => {
            const cards = contacts.querySelector('#cards')

            contatos.data.forEach((item) => {
                const cardContact = CardContact(item)
                cards.append(cardContact)
            })
        })
}

export const Contacts = () => {
    const header = Header()
    root.append(header)

    contacts.innerHTML = `
        <h1>Contatos</h1>
        <div class="search-box">
            <input type="text" id="search-input" placeholder="Buscar contato">
            <button id="search-button" style="width: 100px">Buscar</button>
        </div>
        <div id="cards"></div>
        <button id="btn-cadastrar"> <a href="/#create-contact">Criar contato</a></button>
    `
    events()
    return contacts
}
