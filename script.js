//var prekeBe = 100.898
//var pvm = 0.21
//var prekeSu = prekeBe + prekeBe * pvm

//console.log(prekeSu.toFixed(2))

//var names = ["Jon Snow", "Cersei Lannister", "Daenerys Targaryen", "Theon Greyjoy", "Tyrion Lannister", "Arya Stark"]

//console.log(names[0])
//console.log(names[5])
//console.log(names[prompt("vardas")])


//var pvm = 0.21
//var kainaBe = +prompt("kiek kainuoja")
//var kaina = kainaBe * pvm + kainaBe
//kainaBe = Number(kainaBe)

//do {
    //var pvm = 0.21
    //var kainaBe = +prompt("kiek kainuoja")
   // var kaina = kainaBe * pvm + kainaBe
   // kainaBe = Number(kainaBe)
//} while(isNaN(kainaBe))

//console.log("kainuoja " + kaina.toFixed(2) + " evriukus meu meu")


// 1 uzduotis
/*
var salis = ["China", "India", "Brazil", "Indonesia", "Pakistan"]
var plotas = [9562910, 3287263, 8514215, 1904569, 796095]
var pop = [1439323776, 1415051674, 212559417, 280987427, 231965962]
*/
/*
var salis1 = {
    salis: "China",
    plotas: 9562910,
    pop: 1439323776
}

var salis1 = {
    salis: "India",
    plotas: 3287263,
    pop: 1415051674
}

var salis1 = {
    salis: "Brazil",
    plotas: 8514215,
    pop: 212559417
}
var salis1 = {
    salis: "Indonesia",
    plotas: 1904569,
    pop: 280987427
}

var salis1 = {
    salis: "Pakistan",
    plotas: 796095,
    pop: 231965962
}
*/

var salys = [
    {salis: "China", plotas: 9562910, pop: 1439323776},
    {salis: "India", plotas: 3287263, pop: 1415051674},
    {salis: "Brazil", plotas: 8514215, pop: 212559417},
    {salis: "Indonesia", plotas: 1904569, pop: 280987427},
    {salis: "Pakistan", plotas: 796095, pop: 231965962}
]

var total = 0 

salys.forEach(item => {
    total = item.plotas * 1000000 / item.pop;
})

for (var i = 0; i < salys.length; i++) {
    console.log("Salis: " + salys[i].salis + ", joje gyvena " + salys[i].pop + " mln. gyventoju"  + "\nValstybes plotas: " + salys[i].plotas + "km², valstybes plotas vienam gyventojui: " + total.toFixed(2) + "m²")
}