import { entrar } from "../services/auth.service.js"

const login = document.createElement('form')
login.setAttribute("id", "p-login")

const events = () => {
    login.addEventListener('submit', async (e) => {
        e.preventDefault()

        const fd = new FormData(login)
        const data = Object.fromEntries(fd)

        entrar(data)
            .then((response) => {
                sessionStorage.setItem('@user', JSON.stringify(response.data))
                sessionStorage.setItem("@token", response.data.token)

                history.replaceState(null, "", "/#contacts")// modifica a rota sem reload
                window.location.reload() // força o reload da página com a nova hash
            })
    })
}

export const Login = () => {
    login.innerHTML = `
        <h2>Faça seu login</h2>
        <div>
            <label for="email">Usuário</label>
            <input id="email" name="email" type="email" placeholder="nome do usuário"/>

            <label for="senha">Senha</label>
            <input id="senha" name="senha" type="password" placeholder="sua senha" />
        </div>

        <fildset>
            <label for="salvar">Salvar</label>
            <input name="salvar" id="salvar" type="radio" value="true" checked="checked"/>
            <label for="nao-salvar">Não salvar</label>
            <input name="salvar" id="nao-salvar" type="radio" value="false" />
        </fildset>

        <div>
            <button id="btn-entrar">Fazer login</button>
        </div>
        <p>Não tem conta? <a href="/#signup">Crie agora!</a></p>
    `
    events()
    return login
}
