let nombresExchange = [], todoPrecios = []


async function datosChart() {
    await obtenerDatos()

    const ctx = document.getElementById("myChart").getContext("2d");

    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: nombresExchange,
            datasets: [{
                label: 'Precios',
                backgroundColor: 'gray',
                borderColor: 'blblueviolet',
                data: todoPrecios
            }], 
        },
        options: {
            tooltips: {
                mode: 'index'
            }
        }
    })
}
datosChart()
// fetch('https://api.coinstats.app/public/v1/markets?coinId=bitcoin')
//     .then(response => response.json())
//     .then(data => printCharts(data))

// const labels = [ ex2change2s.map()
//     'Enero',
//     'Febrero',
//     'Marzo',
//     'Abril',
//     'Mayo',
//     'Junio',
//     'Julio',
//     'Agosto',
//   ];

//   const data = {
//     labels: labels,
//     datasets: [{
//       label: 'Comparativa de precios por exchange',
//       backgroundColor: 'rgb(255, 99, 132)',
//       borderColor: 'rgb(255, 99, 132)',
//       data: [0, 10, 5, 2, 20, 30, 45],
//     }]
//   };

//   const config = {
//     type: 'line',
//     data: data,
//     options: {}
//   };
//   const myChart = new Chart(
//     document.getElementById('myChart'),
//     config);

async function obtenerDatos() {
    const apiUrl = "https://api.coinstats.app/public/v1/markets?coinId=bitcoin"
    const respuesta = await fetch(apiUrl)
    const datosJson = await respuesta.json()
    console.log(datosJson) //price y exchange
    const ethBtc = datosJson.filter((f) => f.pair === "ETH/BTC")
    const prices = ethBtc.map((pr) => pr.price)
    const exchanges = ethBtc.map((ex) => ex.exchange)
    console.log(prices)


    //.filter((ZBcom)=>)

    // ZBcom, Xt, BinanceFutures,BigOne

    todoPrecios = prices
    nombresExchange = exchanges

}
obtenerDatos()
