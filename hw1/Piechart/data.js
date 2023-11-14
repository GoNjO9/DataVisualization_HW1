async function loadData() {
    let weight_below_50 = [];
    let weight_below_60 = [];
    let weight_below_70 = [];
    let weight_above_70 = [];
    let height_below_165 = [];
    let height_below_175 = [];
    let height_above_175 = [];
    let name = ["below 50kg", "50~60kg", "60~70kg", "above 70kg"]
    let number_of_weight = [];
    await d3.csv('hw1/piechart/data/HeightWeight.csv').then(
        function (res) {
            for (let i = 0; i < res.length; i++) {
                var weight = parseFloat(res[i]["Weight(Pounds)"]) * 0.45359237
                if (weight < 50) {
                    weight_below_50.push(res[i]['Height(Inches)']);
                }
                else if (weight < 60) {
                    weight_below_60.push(res[i]['Height(Inches)']);
                }
                else if (weight < 70) {
                    weight_below_70.push(res[i]['Height(Inches)']);
                }
                else {
                    weight_above_70.push(res[i]['Height(Inches)']);
                }
                var height = parseFloat(res[i]["Height(Inches)"]) * 2.54
                if (height < 165) {
                    height_below_165.push(res[i]['Weight(Pounds)']);
                }
                else if (height < 175) {
                    height_below_175.push(res[i]['Weight(Pounds)']);
                }
                else {
                    height_above_175.push(res[i]['Weight(Pounds)']);
                }
            }

            number_of_weight.push(
                weight_below_50.length,
                weight_below_60.length,
                weight_below_70.length,
                weight_above_70.length,);
        }
    )
    return {
        weight_below_50,
        weight_below_60,
        weight_below_70,
        weight_above_70,
        height_below_165,
        height_below_175,
        height_above_175,
        name,
        number_of_weight,
    };
}