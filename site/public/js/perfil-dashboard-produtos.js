
/*Script do gráfico de pizza que indica o estado atual das gôndolas do mercado (em tempo real)*/
const data_donut_fluxo_categorias = {
    labels: [
        'Frios e congelados',
        'Mercearia',
        'Hortifruti',
        'Cuidados pessoais',
        'Bebidas'
    ],
    datasets: [{
        label: 'Giro dos produtos por categoria',
        data: [188, 230, 210, 162, 265],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(41, 41, 207)',
            'purple'
        ],
        hoverOffset: 4
    }]
};

const config_donut_fluxo_categorias = {
    type: 'doughnut',
    data: data_donut_fluxo_categorias,
};

const grafico_donut_fluxo_categorias = new Chart(
    document.getElementById('donut_fluxo_categorias'),
    config_donut_fluxo_categorias
);

/*Script do gráfico de linha que indica o fluxo do giro dos produtos no mercado, por hora*/


var labels_horas = [];

var qtd_prateleiras = [];

var idEmpresa = sessionStorage.ID_EMPRESA;

function limparDiv() {
    console.log("limpando div");
    var limparDiv = document.getElementById("linha_fluxo_produtos_div");
    limparDiv.innerHTML = "";
}


obterDadosGrafico();

function obterDadosGrafico() {
    labels_horas = [];
    qtd_prateleiras = [];
    console.log("chamando função obter dados gráfico");
    fetch(`/medidas/listarPorEmpresa/${idEmpresa}`).then(function (resposta) {
        if (resposta.ok) {

            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));
                for (let i = 0; i < resposta.length; i++) {
                    labels_horas.push(resposta[i].hora);
                    qtd_prateleiras.push(resposta[i].status_falta)
                }
                
                limparDiv();
                criarGrafico();
            });

        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
    });
}

function criarGrafico() {
    var div = document.getElementById("linha_fluxo_produtos_div");
    var canvas = document.createElement('canvas');
    canvas.className = 'graficos-canvas';
    canvas.id = 'linha_fluxo_produtos';
    div.appendChild(canvas);

    const data_linha_fluxo_produtos = {
        labels: labels_horas,
        datasets: [{
            label: 'Quantidade de vezes houve falta de produtos nas prateleiras',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: qtd_prateleiras,
        }
        ]
    };
    
    const config_linha_fluxo_produtos = {
        type: 'line',
        data: data_linha_fluxo_produtos,
        options: {}
    };
    
    const grafico_linha_fluxo_produtos = new Chart(
        document.getElementById('linha_fluxo_produtos'),
        config_linha_fluxo_produtos
    );

    setTimeout(() => obterDadosGrafico(), 7000);
}

/*Script do gráfico de barras que indica o fluxo do giro dos produtos no mercado, por semana*/

const labels_barra_fluxo_produtos_semana = [
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sabado',
    'Domingo'
];

const data_barra_fluxo_produtos_semana = {
    labels: labels_barra_fluxo_produtos_semana,
    datasets: [{
        label: 'Quantidade de vezes houve falta de produtos nas gôndolas',
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgb(54, 162, 235)',
        data: [18, 23, 2, 4, 6, 13, 13],
    }
    ]
};

const config_barra_fluxo_produtos_semana = {
    type: 'bar',
    data: data_barra_fluxo_produtos_semana,
    options: {}
};

const grafico_barra_fluxo_produtos_semana = new Chart(
    document.getElementById('barra_fluxo_produtos_semana'),
    config_barra_fluxo_produtos_semana
);

/*Script do gráfico de barras que indica o fluxo do giro dos produtos no mercado, por mês*/

const labels_barra_fluxo_produtos_mes = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
];

const data_barra_fluxo_produtos_mes = {
    labels: labels_barra_fluxo_produtos_mes,
    datasets: [{
        label: 'Quantidade de vezes houve falta de produtos nas gôndolas',
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgb(54, 162, 235)',
        data: [57, 78, 140, 84, 66, 103, 138, 70, 57, 91, 105, 211],
    }
    ]
};

const config_barra_fluxo_produtos_mes = {
    type: 'bar',
    data: data_barra_fluxo_produtos_mes,
    options: {}
};

const grafico_barra_fluxo_produtos_mes = new Chart(
    document.getElementById('barra_fluxo_produtos_mes'),
    config_barra_fluxo_produtos_mes
);