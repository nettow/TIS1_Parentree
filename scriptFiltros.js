// var filtros = document.getElementsByClassName('checkboxFiltros');
var filtrosCat = document.getElementsByClassName('filtroCategoria');
var filtrosLuz = document.getElementsByClassName('filtroSol');
var filtrosAgua = document.getElementsByClassName('filtroAgua');

// Varre o DB, seleciona e adiciona na página web todos as plantas que correspondem
//aos filtros selecionados
function comparaFiltroDB(){
    var filtrosSelec = pegaFiltros();

    if(filtrosSelec.length != 0){
        document.getElementById('catalogoPlantas').innerHTML = "";
    }

    db.plantas.forEach(item => {

        if(contemTodos(item.tags, filtrosSelec)) {
            imprime(item);
        }
        // if(filtrosSelec.includes(item.categoria)){
        //     if(filtrosSelec.includes(item.agua)) {
        //         if(filtrosSelec.includes(item.luz) ){
        //             console.log(item.nomePlanta);
        //             imprime(item);
        //         }
        //     }
        // }

    });

    console.log(filtrosSelec);
}

function contemTodos(tags, filtrosSelec){
    var result = false;

    if( filtrosSelec.cat.length > 0 ){
        filtrosSelec.cat.forEach(item => {
            if( tags.includes(item) ){
                result = true;
            }
        });
    }

    if( filtrosSelec.luz.length > 0 ){
        filtrosSelec.luz.forEach(item => {
            if( tags.includes(item) ){
                result = true;
            }
        });
    }

    if( filtrosSelec.agua.length > 0 ){
        filtrosSelec.agua.forEach(item => {
            if( tags.includes(item) ){
                result = true;
            }
        });
    }
    // filtrosSelec.forEach(item => {
    //     if( !tags.includes(item) ) {
    //         result = false;
    //     }
    // });

    return result;
}

// Adiciona a planta passada como parametro dentro da div 'catalogoPlantas'
//de acordo com a formatação do card de plantas
function imprime(planta) {
    document.getElementById('catalogoPlantas').innerHTML += 
    
    `<div class="plantaSubInfo">
        <img class="fotoPlanta" src="${planta.linkImagem}" alt="Foto da planta">
        <ul id="listaIconesPlanta">
            <li id="iconeSol"><img src="" alt=""></li>
            <li id="iconeAgua"><img src="" alt=""></li>
            <li id="iconeDificuldade"><img src="" alt=""></li>
        </ul>
        <h3 class="nomePlanta"> ${planta.nomePlanta} </h3>
        <p class="resumoDescricao"> ${planta.resumo} </p>
    </div>`;
}

// Verifica todos os filtros e pega o nome daqueles que estão marcados e os coloca no vetor
//de filtros selecionados
function pegaFiltros(){

    var filtrosSelec = {
        'cat': [],
        'luz': [],
        'agua': []
    };

    var j = 0;
    // for(var i = 0; i < filtros.length; i++){
    //     if(filtros[i].checked){
    //         filtrosSelec[j] = filtros[i].name;
    //         j++;
    //     }
    // }

    for(var i = 0; i < filtrosCat.length; i++){
        if(filtrosCat[i].checked){
            filtrosSelec.cat[j] = filtrosCat[i].name;
            j++;
        }
    }
    j=0;
   for(var i = 0; i < filtrosLuz.length; i++){
        if(filtrosLuz[i].checked){
            filtrosSelec.luz[j] = filtrosLuz[i].name;
            j++;
        }
    }
    j=0;
    for(var i = 0; i < filtrosAgua.length; i++){
        if(filtrosAgua[i].checked){
            filtrosSelec.agua[j] = filtrosAgua[i].name;
            j++;
        }
    }

    return filtrosSelec;
}