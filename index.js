class Aluno {

    //ATRIBUTOS:
    nome;
    matricula;
    nota1;
    nota2;
    nota3;

    //CONSTRUTOR:
    constructor(nome, matricula, nota1, nota2, nota3){
        this.nome = nome
        this.matricula = matricula
        this.nota1 = Number(nota1) //Number construtor;
        this.nota2 = Number(nota2)
        this.nota3 = Number(nota3)
    }

    //METODOS:
    calculaMedia(nota1,nota2,nota3){
        var media = ((nota1 + nota2 + nota3) / 3).toFixed(2) //tofixed: arredonda;
        return media
    }
}
    
    //EVENTOS:
    var nome = document.getElementById("nome")
    var matricula = document.getElementById("matricula")
    var n1 = document.getElementById("nota1")
    var n2 = document.getElementById("nota2")
    var n3 = document.getElementById("nota3")
    var tabela = document.getElementById("tabela")
    var botao = document.getElementById("btnForm")


    botao.onclick = function(){
        if(nome.value.length == 0 || matricula.value.length == 0 || n1.value.length == 0 || n2.value.length == 0 || n3.value.length == 0){
            alert("Preenchimento incompleto! Faça-o novamente!")
        }else{
            var aluno = new Aluno()
            aluno.nome = nome.value
            aluno.matricula = matricula.value
            aluno.nota1 = Number(n1.value)
            aluno.nota2 = Number(n2.value)
            aluno.nota3 = Number(n3.value)
            aluno.calculaMedia(nota1,nota2,nota3)

            console.log(aluno)

            criarTabela()
        }
    }

    function criarTabela(){
        
        var nomeTabela = nome.value
        var matriculaTabela = matricula.value
        var nota1Tabela = Number(n1.value)
        var nota2Tabela = Number(n2.value)
        var nota3Tabela = Number(n3.value)
        var mediaTabela = ((nota1Tabela + nota2Tabela + nota3Tabela)/ 3).toFixed(2)


        var linha = document.createElement("tr")

        var coluna1 = document.createElement("td")
        var coluna2 = document.createElement("td")
        var coluna3 = document.createElement("td")
        var coluna4 = document.createElement("td")
        var coluna5 = document.createElement("td")
        var coluna6 = document.createElement("td")
        var coluna7 = document.createElement("td")

        var button = document.createElement("button")
        button.setAttribute("class","btnTabela excluir")
        button.textContent = "Excluir"

        linha.appendChild(coluna1).textContent = nomeTabela
        linha.appendChild(coluna2).textContent = matriculaTabela
        linha.appendChild(coluna3).textContent = nota1Tabela
        linha.appendChild(coluna4).textContent = nota2Tabela
        linha.appendChild(coluna5).textContent = nota3Tabela
        linha.appendChild(coluna6).textContent = mediaTabela
        coluna7.appendChild(button)
        linha.appendChild(coluna7)
        
        tabela.appendChild(linha)

        nome.value = ""
        matricula.value = ""
        n1.value = ""
        n2.value = ""
        n3.value = ""

        
    }

    tabela.onclick = (event) =>{
        if(event.target.classList.contains("excluir")){
            if(confirm("Deseja remover o aluno?")){
                event.target.parentElement.parentElement.remove()
            }
        }
    }
