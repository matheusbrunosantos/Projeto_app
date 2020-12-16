const dummyID = '78351fd5498445c9ad0063abdf2ff83e';

const getNoticias = async (callback) => {

    var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=78351fd5498445c9ad0063abdf2ff83e';

    /* const cabecalho = {
        method: "GET",
        headers:{
            'Content-Type': "application/json"
        }
        cabecalho
    } */

    const feedHTTP = await(fetch(url));
    const respostaJson = await feedHTTP.json();
    console.log(respostaJson.articles)
    callback(respostaJson.articles);

}

export default getNoticias;