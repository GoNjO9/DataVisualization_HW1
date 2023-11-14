async function loadData() {
    let count_all_m = new Map ();
    let count_all_w = new Map ();
    let count_pro_m = new Map (); //前列腺癌
    let count_bre_m = new Map (); //乳癌
    let count_bre_w = new Map ();
    let count_lun_m = new Map (); //肺癌
    let count_lun_w = new Map ();
    let count_cer_w = new Map (); //子宮頸癌
    let count_liv_m = new Map (); //肝癌
    let count_liv_w = new Map ();
    await d3.csv("hw1/scatter&lines/data/cancer_data.csv").then(
        function (res) {
            console.log(res);
            for(let i=0; i<res.length; i++){
                if(res[i]['type']=='deaths'){
                    if(res[i]['cancer_category']=='All cancers'){
                        if(res[i]['sex']=='Male'){
                            count_all_m.set(res[i]['year'], parseInt(res[i]['numbers']))
                        }
                        else if(res[i]['sex']=='Female'){
                            count_all_w.set(res[i]['year'], parseInt(res[i]['numbers']))
                        }
                    }
                    if(res[i]['cancer_category']=='Prostate'){
                        if(res[i]['sex']=='Male'){
                            count_pro_m.set(res[i]['year'], parseInt(res[i]['numbers']))
                        }
                    }
                    if(res[i]['cancer_category']=='Breast'){
                        if(res[i]['sex']=='Male'){
                            count_bre_m.set(res[i]['year'], parseInt(res[i]['numbers']))
                        }
                        else if(res[i]['sex']=='Female'){
                            count_bre_w.set(res[i]['year'], parseInt(res[i]['numbers']))
                        }
                    }
                    if(res[i]['cancer_category']=='Lung & Trachea'){
                        if(res[i]['sex']=='Male'){
                            count_lun_m.set(res[i]['year'], parseInt(res[i]['numbers']))
                        }
                        else if(res[i]['sex']=='Female'){
                            count_lun_w.set(res[i]['year'], parseInt(res[i]['numbers']))
                        }
                    }
                    if(res[i]['cancer_category']=='Liver and intrahepatic bile ducts'){
                        if(res[i]['sex']=='Male'){
                            count_liv_m.set(res[i]['year'], parseInt(res[i]['numbers']))
                        }
                        else if(res[i]['sex']=='Female'){
                            count_liv_w.set(res[i]['year'], parseInt(res[i]['numbers']))
                        }
                    }
                    if(res[i]['cancer_category']=='Cervix'){
                        if(res[i]['sex']=='Female'){
                            count_cer_w.set(res[i]['year'], parseInt(res[i]['numbers']))
                        }
                    }
                }
            }
            
        }
    )
    let b = "2015"
    console.log(count_all_m.get('2015'))
    return {
        count_all_m,
        count_all_w,
        count_bre_m,
        count_bre_w,
        count_cer_w,
        count_liv_m,
        count_liv_w,
        count_lun_m,
        count_lun_w,
        count_pro_m,
    }
}
