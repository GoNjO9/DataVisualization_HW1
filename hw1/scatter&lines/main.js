async function main() {
    var datas = await loadData();
    let lineGraph = document.getElementById('lineGraph');

    // All

    let trace1 = {};
    trace1.mode = "markers+text+lines";
    trace1.type = "scatter";
    trace1.name = "Men's deaths(all)";
    trace1.marker = {
        size: 5
    };
    trace1.x = [];
    trace1.y = [];
    trace1.text = [];
    trace1.textposition = "bottom center";
    trace1.textfont = {
        family: "Raleway, sans_serif",
        size: 30
    }

    for (let i = 0; i < datas.count_all_m.size; ++i) {
        var j = i + 1996;
        trace1.x[i] = j;
        trace1.y[i] = datas.count_all_m.get(j.toString());
    }

    trace1.visible = true;

    let trace2 = {};
    trace2.mode = "markers+text+lines";
    trace2.type = "scatter";
    trace2.name = "Women's deaths(all)";
    trace2.marker = {
        size: 5
    };
    trace2.x = [];
    trace2.y = [];
    trace2.text = [];
    trace2.textposition = "bottom center";
    trace2.textfont = {
        family: "Raleway, sans_serif",
        size: 30
    }

    for (let i = 0; i < datas.count_all_w.size; ++i) {
        var j = i + 1996;
        trace2.x[i] = j;
        trace2.y[i] = datas.count_all_w.get(j.toString());
    }

    trace2.visible = true;

    // Prostate & Cervix

    let trace3 = {};
    trace3.mode = "markers+text+lines";
    trace3.type = "scatter";
    trace3.name = "Men's deaths(prostate)";
    trace3.marker = {
        size: 5
    };
    trace3.x = [];
    trace3.y = [];
    trace3.text = [];
    trace3.textposition = "bottom center";
    trace3.textfont = {
        family: "Raleway, sans_serif",
        size: 30
    }

    for (let i = 0; i < datas.count_pro_m.size; ++i) {
        var j = i + 1996;
        trace3.x[i] = j;
        trace3.y[i] = datas.count_pro_m.get(j.toString());
    }

    trace3.visible = false;

    let trace3a = {};
    trace3a.mode = "markers+text+lines";
    trace3a.type = "scatter";
    trace3a.name = "Women's deaths(Cervix)";
    trace3a.marker = {
        size: 5
    };
    trace3a.x = [];
    trace3a.y = [];
    trace3a.text = [];
    trace3a.textposition = "bottom center";
    trace3a.textfont = {
        family: "Raleway, sans_serif",
        size: 30
    }

    for (let i = 0; i < datas.count_cer_w.size; ++i) {
        var j = i + 1996;
        trace3a.x[i] = j;
        trace3a.y[i] = datas.count_cer_w.get(j.toString());
    }

    trace3a.visible = false;

    //Breast

    let trace4 = {};
    trace4.mode = "markers+text+lines";
    trace4.type = "scatter";
    trace4.name = "Men's deaths(Breast)";
    trace4.marker = {
        size: 5
    };
    trace4.x = [];
    trace4.y = [];
    trace4.text = [];
    trace4.textposition = "bottom center";
    trace4.textfont = {
        family: "Raleway, sans_serif",
        size: 30
    }

    for (let i = 0; i < datas.count_bre_m.size; ++i) {
        var j = i + 1996;
        trace4.x[i] = j;
        trace4.y[i] = datas.count_bre_m.get(j.toString());
    }

    trace4.visible = false;

    let trace5 = {};
    trace5.mode = "markers+text+lines";
    trace5.type = "scatter";
    trace5.name = "Women's deaths(Breast)";
    trace5.marker = {
        size: 5
    };
    trace5.x = [];
    trace5.y = [];
    trace5.text = [];
    trace5.textposition = "bottom center";
    trace5.textfont = {
        family: "Raleway, sans_serif",
        size: 30
    }

    for (let i = 0; i < datas.count_bre_w.size; ++i) {
        var j = i + 1996;
        trace5.x[i] = j;
        trace5.y[i] = datas.count_bre_w.get(j.toString());
    }

    trace5.visible = false

    //lung

    let trace6 = {};
    trace6.mode = "markers+text+lines";
    trace6.type = "scatter";
    trace6.name = "Men's deaths(Lung)";
    trace6.marker = {
        size: 5
    };
    trace6.x = [];
    trace6.y = [];
    trace6.text = [];
    trace6.textposition = "bottom center";
    trace6.textfont = {
        family: "Raleway, sans_serif",
        size: 30
    }

    for (let i = 0; i < datas.count_lun_m.size; ++i) {
        var j = i + 1996;
        trace6.x[i] = j;
        trace6.y[i] = datas.count_lun_m.get(j.toString());
    }

    trace6.visible = false;

    let trace7 = {};
    trace7.mode = "markers+text+lines";
    trace7.type = "scatter";
    trace7.name = "Women's deaths(Lung)";
    trace7.marker = {
        size: 5
    };
    trace7.x = [];
    trace7.y = [];
    trace7.text = [];
    trace7.textposition = "bottom center";
    trace7.textfont = {
        family: "Raleway, sans_serif",
        size: 30
    }

    for (let i = 0; i < datas.count_lun_w.size; ++i) {
        var j = i + 1996;
        trace7.x[i] = j;
        trace7.y[i] = datas.count_lun_w.get(j.toString());
    }

    trace7.visible = false;

    //Liver
    let trace8 = {};
    trace8.mode = "markers+text+lines";
    trace8.type = "scatter";
    trace8.name = "Men's deaths(Liver)";
    trace8.marker = {
        size: 5
    };
    trace8.x = [];
    trace8.y = [];
    trace8.text = [];
    trace8.textposition = "bottom center";
    trace8.textfont = {
        family: "Raleway, sans_serif",
        size: 30
    }

    for (let i = 0; i < datas.count_liv_m.size; ++i) {
        var j = i + 1996;
        trace8.x[i] = j;
        trace8.y[i] = datas.count_liv_m.get(j.toString());
    }

    trace8.visible = false;

    let trace9 = {};
    trace9.mode = "markers+text+lines";
    trace9.type = "scatter";
    trace9.name = "Women's deaths(Liver)";
    trace9.marker = {
        size: 5
    };
    trace9.x = [];
    trace9.y = [];
    trace9.text = [];
    trace9.textposition = "bottom center";
    trace9.textfont = {
        family: "Raleway, sans_serif",
        size: 30
    }

    for (let i = 0; i < datas.count_liv_w.size; ++i) {
        var j = i + 1996;
        trace9.x[i] = j;
        trace9.y[i] = datas.count_liv_w.get(j.toString());
    }

    trace9.visible = false;

    

    let data = [];
    data.push(trace1);
    data.push(trace2);
    data.push(trace3);
    data.push(trace3a);
    data.push(trace4);
    data.push(trace5);
    data.push(trace6);
    data.push(trace7);
    data.push(trace8);
    data.push(trace9);

    let layout = {
        margin: {
            t: 50
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
                            ]],
                        label: "All cancers sums"
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
                            ]],
                        label: "Prostate & Cervix"
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
                            ]],
                        label: "Breast"
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
                            ]],
                        label: "Lung & Trachea"
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
                            ]],
                        label: "Liver and intrahepatic bile ducts"
                    },
                    {
                        method: 'restyle',
                        args: [
                            'visible', [
                                false, false,
                                true, true,
                                true, true,
                                true, true,
                                true, true,
                            ]],
                        label: "Display All"
                    },
                ]
            }
        ],
        title: "Cancer caused deaths between 1996~2016"
    };

    Plotly.newPlot(lineGraph, data, layout);
}

main();