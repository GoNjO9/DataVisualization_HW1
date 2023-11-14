async function main() {
    var datas = await loadData();
    let pieGraph = document.getElementById('pieGraph');

    let trace1 = {};
    trace1.type = "pie";
    trace1.title = "All people's weight range at 18y";
    trace1.labels = [];
    trace1.values = [];
    trace1.domain = {
        row: 0,
        column: 0
    };

    for (let x = 0; x < 4; x++) {
        trace1.labels[x] = datas.name[x];
        trace1.values[x] = datas.number_of_weight[x];
    }

    let trace2 = {};
    trace2.type = "pie";
    trace2.title = "below 165cm";
    trace2.labels = [];
    trace2.values = [];
    trace2.domain = {
        row: 0,
        column: 1
    };
    for (let x = 0; x < 4; x++) {
        trace2.labels[x] = datas.name[x];
        trace2.values[x] = 80
    }
    for (let x = 0; x<datas.height_below_165.length;x++){
        let weight = parseFloat(datas.height_below_165[x]) * 0.45359237
        if(weight<50){
            trace2.values[0] = trace2.values[0]+1;
        }
        else if(weight<60){
            trace2.values[1]++;
        }
        else if(weight<70){
            trace2.values[2]++;
        }
        else {
            trace2.values[3]++;
        }
    }

    let trace3 = {};
    trace3.type = "pie";
    trace3.title = "below 175cm";
    trace3.labels = [];
    trace3.values = [];
    trace3.domain = {
        row: 1,
        column: 0
    };
    for (let x = 0; x < 4; x++) {
        trace3.labels[x] = datas.name[x];
        trace3.values[x] = 80
    }
    for (let x = 0; x<datas.height_below_175.length;x++){
        let weight = parseFloat(datas.height_below_175[x]) * 0.45359237
        if(weight<50){
            trace3.values[0] = trace3.values[0]+1;
        }
        else if(weight<60){
            trace3.values[1]++;
        }
        else if(weight<70){
            trace3.values[2]++;
        }
        else {
            trace3.values[3]++;
        }
    }

    let trace4 = {};
    trace4.type = "pie";
    trace4.title = "above 175cm";
    trace4.labels = [];
    trace4.values = [];
    trace4.domain = {
        row: 1,
        column: 1
    };
    for (let x = 0; x < 4; x++) {
        trace4.labels[x] = datas.name[x];
        trace4.values[x] = 80
    }
    for (let x = 0; x<datas.height_above_175.length;x++){
        let weight = parseFloat(datas.height_above_175[x]) * 0.45359237
        if(weight<50){
            trace4.values[0] = trace4.values[0]+1;
        }
        else if(weight<60){
            trace4.values[1]++;
        }
        else if(weight<70){
            trace4.values[2]++;
        }
        else {
            trace4.values[3]++;
        }
    }
    

    //     let traceA = {};
    // traceA.type = "pie";
    // traceA.title = "All people weight"
    // traceA.title = "所有人的體重比例";
    // traceA.labels = [];
    // traceA.values = [];
    // traceA.hole = 0.5;
    // for (let x = 0; x < 4; x++) {
    //     traceA.labels[x] = datas.name[x];
    //     traceA.values[x] = datas.number_of_weight[x];
    // }


    var data = [{
        type: "pie",
        textinfo: "label+percent",
        insidetextorientation: "radial"
      }];
    data.push(trace1);
    data.push(trace2);
    data.push(trace3);
    data.push(trace4);

    let layout = {
        height: 600,

        margin: {
            t: 80,
            l: 0,
        },
        grid: {
            rows: 2,
            columns: 2
        },
        title: '18yr people\'sweight range at different height ranges',
        
    };

    Plotly.newPlot(pieGraph, data, layout);
}
main();