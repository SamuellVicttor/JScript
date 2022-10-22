const pais = document.getElementById('nacionalidade')

console.log('rodando....')

function resposta(){
    if(pais.title.toUpperCase=='BRASIL'){
        console.log('nacionalidade: Brasileiro')
    }
    console.log('digite um pais valido.')
}