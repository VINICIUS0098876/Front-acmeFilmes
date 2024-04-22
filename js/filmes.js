export async function getFilmes(){
    const url = 'http://localhost:8080/v2/acmeFilmes/filme'
    const response = await fetch(url)
    const data = await response.json()
    

    return data.filmes
}

export async function getFilmesId(id){
    const url = `http://localhost:8080/v2/acmeFilmes/filme/${id}`
    const response = await fetch(url)
    const data = await response.json()
    return data.filmes[0]
}

export async function selectNameFilmes(nome){
    const url = `http://localhost:8080/v2/acmeFilmes/Filmes/Filtro?nome=${nome}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export async function postFilme(filme){
    const url = 'http://localhost:8080/v2/acmeFilmes/filme'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(filme)
    }

    const response = await fetch(url, options)

    return response.ok
}

export async function putFilme(id, filme){
    const url = `http://localhost:8080/v2/acmeFilmes/filme/${id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(filme)
    }

    const response = await fetch(url, options)

    return response.ok
}

export async function deleteFilme(id){
    try{
        await fetch(`http://localhost:8080/v2/acmeFilmes/filme/${id}`,{
            method: 'DELETE'
        })
        console.log("Filme excluído com sucesso")
    } catch (error){
        console.error('Erro ao excluir filme: ',error);
    }
}

// ----------------------------------------------- GÊNERO -----------------------------------------------//

export async function getGenero(){}

export async function getGeneroId(id){}

export async function selectNameGenero(nome){}

export async function postGenero(genero){}

export async function putGenero(id, genero){}

export async function deleteGenero(id){}

// ----------------------------------------------- CLASSIFICAÇÃO -----------------------------------------//

export async function getClassificacao(){}

export async function getClassificacaoId(){}

export async function selectNameClassificacao(){}

export async function postClassificacao(){}

export async function putClassificacao(){}

export async function deleteClassificacao(){}

// ---------------------------------------------- SEXO ---------------------------------------------------//

export async function getSexo(){}

export async function getSexoId(){}

export async function selectAtorBySexo(){}

// ---------------------------------------------- NACIONALIDADE ------------------------------------------//

export async function getNacionalidade(){}

export async function getNacionalidadeId(){}

export async function selectAtorByNacionalidade(){}

// ---------------------------------------------- ATOR ---------------------------------------------------//
