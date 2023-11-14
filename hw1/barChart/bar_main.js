async function main() {

    const datas = await loadData();

    let barGraph = document.getElementById('barGraph');

    let trace1 = {};
    trace1.type = "bar";
    trace1.name = "International Tourists Arrivals 2018 (millions)";
    trace1.x = [];
    trace1.y = [];

    for (let i = 0; i < datas.destination.length; i++) {
        trace1.x[i] = datas.destination[i];
        trace1.y[i] = datas.arrivals_2018[i];
    }

    let trace2 = {};
    trace2.type = "bar";
    trace2.name = "International Tourists Arrivals 2019 (millions)";
    trace2.x = [];
    trace2.y = [];

    for (let i = 0; i < datas.destination.length; i++) {
        trace2.x[i] = datas.destination[i];
        trace2.y[i] = datas.arrivals_2019[i];
    }

    // Africa

    let trace3 = {};
    trace3.type = "bar";
    trace3.name = "International Tourists Arrivals 2018 (millions)";
    trace3.x = [];
    trace3.y = [];

    for (let i = 0; i < datas.af_destination.length; i++) {
        trace3.x[i] = datas.af_destination[i];
        trace3.y[i] = datas.af_arrivals_2018[i];
    }
    trace3.visible = false;

    let trace4 = {};
    trace4.type = "bar";
    trace4.name = "International Tourists Arrivals 2019 (millions)";
    trace4.x = [];
    trace4.y = [];

    for (let i = 0; i < datas.af_destination.length; i++) {
        trace4.x[i] = datas.af_destination[i];
        trace4.y[i] = datas.af_arrivals_2019[i];
    }
    trace4.visible = false;

    // America

    let trace5 = {};
    trace5.type = "bar";
    trace5.name = "International Tourists Arrivals 2018 (millions)";
    trace5.x = [];
    trace5.y = [];

    for (let i = 0; i < datas.am_destination.length; i++) {
        trace5.x[i] = datas.am_destination[i];
        trace5.y[i] = datas.am_arrivals_2018[i];
    }
    trace5.visible = false;

    let trace6 = {};
    trace6.type = "bar";
    trace6.name = "International Tourists Arrivals 2019 (millions)";
    trace6.x = [];
    trace6.y = [];

    for (let i = 0; i < datas.am_destination.length; i++) {
        trace6.x[i] = datas.am_destination[i];
        trace6.y[i] = datas.am_arrivals_2019[i];
    }
    trace6.visible = false;

    // Asia & Pacific

    let trace7 = {};
    trace7.type = "bar";
    trace7.name = "International Tourists Arrivals 2018 (millions)";
    trace7.x = [];
    trace7.y = [];

    for (let i = 0; i < datas.ap_destination.length; i++) {
        trace7.x[i] = datas.ap_destination[i];
        trace7.y[i] = datas.ap_arrivals_2018[i];
    }
    trace7.visible = false;

    let trace8 = {};
    trace8.type = "bar";
    trace8.name = "International Tourists Arrivals 2019 (millions)";
    trace8.x = [];
    trace8.y = [];

    for (let i = 0; i < datas.ap_destination.length; i++) {
        trace8.x[i] = datas.ap_destination[i];
        trace8.y[i] = datas.ap_arrivals_2019[i];
    }
    trace8.visible = false;

    // Europe

    let trace9 = {};
    trace9.type = "bar";
    trace9.name = "International Tourists Arrivals 2018 (millions)";
    trace9.x = [];
    trace9.y = [];

    for (let i = 0; i < datas.eu_destination.length; i++) {
        trace9.x[i] = datas.eu_destination[i];
        trace9.y[i] = datas.eu_arrivals_2018[i];
    }
    trace9.visible = false;

    let trace10 = {};
    trace10.type = "bar";
    trace10.name = "International Tourists Arrivals 2019 (millions)";
    trace10.x = [];
    trace10.y = [];

    for (let i = 0; i < datas.eu_destination.length; i++) {
        trace10.x[i] = datas.eu_destination[i];
        trace10.y[i] = datas.eu_arrivals_2019[i];
    }
    trace10.visible = false;

    // West Asia

    let trace11 = {};
    trace11.type = "bar";
    trace11.name = "International Tourists Arrivals 2018 (millions)";
    trace11.x = [];
    trace11.y = [];

    for (let i = 0; i < datas.wa_destination.length; i++) {
        trace11.x[i] = datas.wa_destination[i];
        trace11.y[i] = datas.wa_arrivals_2018[i];
    }
    trace11.visible = false;

    let trace12 = {};
    trace12.type = "bar";
    trace12.name = "International Tourists Arrivals 2019 (millions)";
    trace12.x = [];
    trace12.y = [];

    for (let i = 0; i < datas.wa_destination.length; i++) {
        trace12.x[i] = datas.wa_destination[i];
        trace12.y[i] = datas.wa_arrivals_2019[i];
    }
    trace12.visible = false;

    let data = [];
    data.push(trace1);
    data.push(trace2);
    data.push(trace3);
    data.push(trace4);
    data.push(trace5);
    data.push(trace6);
    data.push(trace7);
    data.push(trace8);
    data.push(trace9);
    data.push(trace10);
    data.push(trace11);
    data.push(trace12);

    let layout = {
        margin: {
            t: 50
        },
        xaxis: {
            tickangle: -45,
            tickfont: {
                size: 8,
            }
        },
        updatemenus: [
            {
                y: 1.65,
                x: 0.3,

                yanchor: 'top',
                buttons: [
                    {
                        method: 'restyle',
                        args: [
                            'visible', [
                                true, true,
                                false, false,
                                false, false,
                                false, false,
                                false, false,
                                false, false,
                            ]],
                        label: "All countries"
                    },
                    {
                        method: 'restyle',
                        args: [
                            'visible', [
                                false, false,
                                true, true,
                                false, false,
                                false, false,
                                false, false,
                                false, false,
                            ]],
                        label: "Africa"
                    },
                    {
                        method: 'restyle',
                        args: [
                            'visible', [
                                false, false,
                                false, false,
                                true, true,
                                false, false,
                                false, false,
                                false, false,
                            ]],
                        label: "America"
                    },
                    {
                        method: 'restyle',
                        args: [
                            'visible', [
                                false, false,
                                false, false,
                                false, false,
                                true, true,
                                false, false,
                                false, false,
                            ]],
                        label: "Asia & The Pacific"
                    },
                    {
                        method: 'restyle',
                        args: [
                            'visible', [
                                false, false,
                                false, false,
                                false, false,
                                false, false,
                                true, true,
                                false, false,
                            ]],
                        label: "Europe"
                    },
                    {
                        method: 'restyle',
                        args: [
                            'visible', [
                                false, false,
                                false, false,
                                false, false,
                                false, false,
                                false, false,
                                true, true,
                            ]],
                        label: "West Asia"
                    },
                ]
            }
        ],
        title: "International Tourists Arrivals At every Country 2018 & 2019",
        legend: {
            x: -0.05,
            y: -0.3,
            traceorder: 'normal',
            orientation: 'h',
        }
    };


    Plotly.newPlot(barGraph, data, layout);
}

main();
