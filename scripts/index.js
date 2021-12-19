console.log('JS working');
var i = 0;

function count_var() {
    i += 1;
    console.log(`"${i}"`);
}

function clear_var() {
    i = 0;
    console.log(`"${i}"`);
}

function change_map(mapName) {
    // return `"/images/csgo_maps/${mapName}.png)"`
    console.log('TT')
    document.getElementById("mapImage").style.backgroundColor = "white";
    // document.getElementById("mapImage").style.content = "/images/csgo_maps/inferno.png)";
    // document.getElementById("mapImage").style.content = url(`"/images/csgo_maps/${mapName}.png)"`);
}
// console.log(change_map("nuke"));