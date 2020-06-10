const customExpress = require('./src/config/customExpress')
const conexao = require('./src/infraestrutura/conexao')
const Tabelas = require('./src/infraestrutura/Tabelas')


conexao.connect((erro) => {
  if(erro){
    console.log(erro)
  }else{
    console.log('Conectado com sucesso.')

    Tabelas.init(conexao)
    const app = customExpress()

    app.listen(3000, () => console.log('App rodando!'))
  }
})

