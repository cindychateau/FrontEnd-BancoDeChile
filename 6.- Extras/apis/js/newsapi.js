const API_KEY = "9d6694e3855549bdb32d90553e1d56eb";

async function buscarNoticias() {
    //URL: https://newsapi.org/v2/everything?apiKey=LLAVE&q=TERMINOBUSCAR&pageSize=CANTIDAD

    var busqueda = document.querySelector('#busqueda').value; //Valor que usuario ingresó
    var cantidad = document.querySelector('#cantidad').value;

    var response = await fetch(`https://newsapi.org/v2/everything?apiKey=${API_KEY}&q=${busqueda}&pageSize=${cantidad}`);

    var responseJson = await response.json();
    console.log(responseJson);

    /*responseJson = {
        articles = [ //Lista de articulos
            { //Obj articulo
                author:
                content:
                description:
                title:
                urlToImage:
            }
        ]
    } */

    //lista con textos -> etiquetas article 
    var articulos = responseJson['articles'].map(article => 
                            `<article>
                                <h2>${article['title']}</h2>
                                <u>${article['author']}</u>
                                <p>
                                    ${article['description']}
                                </p>
                                <img src="${article['urlToImage']}" style="width:200px"> 
                            </article>`);

    
    console.log(articulos);

    //JOIN
    var textoArticulos = articulos.join('');

    var nombres = ["Elena", "Juan", "Juana", "Pablo"];
    var nombres_texto = nombres.join('!'); //Elena!Juan!Juana!Pablo


    document.querySelector(".articulos").innerHTML = textoArticulos;
    
}