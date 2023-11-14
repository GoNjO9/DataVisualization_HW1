async function loadData() {
    let number = [];
    let destination = []
    let arrivals_2018 = [];
    let arrivals_2019 = [];
    let af_destination = []
    let af_arrivals_2018 = [];
    let af_arrivals_2019 = [];
    let am_destination = []
    let am_arrivals_2018 = [];
    let am_arrivals_2019 = [];
    let ap_destination = []
    let ap_arrivals_2018 = [];
    let ap_arrivals_2019 = [];
    let wa_destination = []
    let wa_arrivals_2018 = [];
    let wa_arrivals_2019 = [];
    let eu_destination = []
    let eu_arrivals_2018 = [];
    let eu_arrivals_2019 = [];
    let region = [];

    await d3.csv('hw1/barChart/data/Most_Visited_Destination_in_2018_and_2019.csv').then(
        function (res) {
            for (let i = 0; i < res.length; i++) {
                destination.push(res[i]["Destination"]);
                str = res[i]["International  tourist  arrivals  (2018)"].replace("million", "")
                arrivals_2018.push(Number(str));
                str = res[i]["International  tourist  arrivals  (2019)"].replace("million", "")
                arrivals_2019.push(Number(str));
                if (res[i]["Region"] == "Africa") {
                    af_destination.push(res[i]["Destination"]);
                    str = res[i]["International  tourist  arrivals  (2018)"].replace("million", "")
                    af_arrivals_2018.push(Number(str));
                    str = res[i]["International  tourist  arrivals  (2019)"].replace("million", "")
                    af_arrivals_2019.push(Number(str));
                }
                if (res[i]["Region"] == "America") {
                    am_destination.push(res[i]["Destination"]);
                    str = res[i]["International  tourist  arrivals  (2018)"].replace("million", "")
                    am_arrivals_2018.push(Number(str));
                    str = res[i]["International  tourist  arrivals  (2019)"].replace("million", "")
                    am_arrivals_2019.push(Number(str));
                }
                if (res[i]["Region"] == "Asia & The Pacific") {
                    ap_destination.push(res[i]["Destination"]);
                    str = res[i]["International  tourist  arrivals  (2018)"].replace("million", "")
                    ap_arrivals_2018.push(Number(str));
                    str = res[i]["International  tourist  arrivals  (2019)"].replace("million", "")
                    ap_arrivals_2019.push(Number(str));
                }
                if (res[i]["Region"] == "West Asia") {
                    wa_destination.push(res[i]["Destination"]);
                    str = res[i]["International  tourist  arrivals  (2018)"].replace("million", "")
                    wa_arrivals_2018.push(Number(str));
                    str = res[i]["International  tourist  arrivals  (2019)"].replace("million", "")
                    wa_arrivals_2019.push(Number(str));
                }
                if (res[i]["Region"] == "Europe") {
                    eu_destination.push(res[i]["Destination"]);
                    str = res[i]["International  tourist  arrivals  (2018)"].replace("million", "")
                    eu_arrivals_2018.push(Number(str));
                    str = res[i]["International  tourist  arrivals  (2019)"].replace("million", "")
                    eu_arrivals_2019.push(Number(str));
                }
            }
        });
    return { 
        destination, 
        arrivals_2018, 
        arrivals_2019,
        af_destination, 
        af_arrivals_2018, 
        af_arrivals_2019,
        am_destination, 
        am_arrivals_2018, 
        am_arrivals_2019,
        ap_destination, 
        ap_arrivals_2018, 
        ap_arrivals_2019,
        wa_destination, 
        wa_arrivals_2018, 
        wa_arrivals_2019,
        eu_destination, 
        eu_arrivals_2018, 
        eu_arrivals_2019,
        region,
         };
}
