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

export async function getGenero(){
        const url = 'http://localhost:8080/v2/acmeFilmes/genero'
    const response = await fetch(url)
    const data = await response.json()
    

    return data.filmes
}

export async function getGeneroId(id){
        const url = `http://localhost:8080/v2/acmeFilmes/genero/${id}`
    const response = await fetch(url)
    const data = await response.json()
    return data.filmes[0]
}

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

export async function selectAtorBySexo(sigla){
    const url = `http://localhost:8080/v2/acmeFilmes/sexo/Filtro?nome=${sigla}`
    const response = await fetch(url)
    const data = await response.json()
    return data.atores
}

// ---------------------------------------------- NACIONALIDADE ------------------------------------------//

export async function getNacionalidade(){}

export async function getNacionalidadeId(){}

export async function selectAtorByNacionalidade(){}

// ---------------------------------------------- DIRETOR ---------------------------------------------------//

export async function getDiretor(){
    const url = 'http://localhost:8080/v2/filmesAcme/diretores'
    const response = await fetch(url)
    const data = await response.json()
    

    return data.diretores
}

export async function getDiretorId(id){
    const url = `http://localhost:8080/v2/filmesAcme/diretores/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data.diretor[0]
}

export async function selectNamaDiretor(nome){}

export async function postDiretor(diretor){
    const url = 'http://localhost:8080/v2/filmesAcme/diretores'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(diretor)
    }

    const response = await fetch(url, options)
    console.log(response)

    return response.ok
}

export async function putDiretor(id, genero){}

export async function deleteDiretor(id){
    try{
        await fetch(`http://localhost:8080/v2/filmesAcme/deleteDiretor/${id}`,{
            method: 'DELETE'
        })
        console.log("Diretor excluído com sucesso")
    } catch (error){
        console.error('Erro ao excluir filme: ',error);
    }
}

export async function getDiretorIdPeloNome(nomeDiretor) {
    const url = `http://localhost:8080/v2/acmeFilmes/diretor/Filtro?nome=${nomeDiretor}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data && data.diretor && data.diretor.length > 0) {
        return data.diretor[0].id;
    } else {
        return null;
    }
}


// ------------------------------------------------- ATOR ----------------------------------------------------//

export async function getAtor(){
    const url = 'http://localhost:8080/v2/filmesAcme/atores'
    const response = await fetch(url)
    const data = await response.json()
    

    return data.ator
}

export async function getAtorId(id){
    const url = `http://localhost:8080/v2/filmesAcme/atores/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data.ator[0]
}

// export async function selectNamaDiretor(nome){}

export async function postAtor(ator){
    const url = 'http://localhost:8080/v2/filmesAcme/atores'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ator)
    }

    const response = await fetch(url, options)
    console.log(response)

    return response.ok 
}

// export async function putDiretor(id, genero){}

export async function deleteAtor(id){
    try{
        await fetch(`http://localhost:8080/v2/filmesAcme/deleteAtor/${id}`,{
            method: 'DELETE'
        })
        console.log("Ator excluído com sucesso")
    } catch (error){
        console.error('Erro ao excluir filme: ',error);
    }
}

export async function getAtorIdPeloNome(nomeAtor) {
    const url = `http://localhost:8080/v2/acmeFilmes/ator/Filtro?nome=${nomeAtor}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data && data.ator && data.ator.length > 0) {
        return data.ator[0].id;
    } else {
        return null;
    }
}
