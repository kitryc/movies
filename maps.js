const map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
}).addTo(map);

const present = [
    {name: "Your Name Engraved Herein", coords: [23.762953155592168, 121.00154085792512]},
    {name: "You Should Meet My Son!", coords: [34.09568552869755, -118.2842589916929]},
    {name: "You Should Meet My Son 2!", coords: [34.09571808862219, -118.28428580420683]},
    {name: "4th Man Out", coords: [43.16604479330412, -75.17042302137735]},
    {name: "Brokeback Mountain", coords: [43.03046275132087, -108.38067948933539]},
    {name: "Is It Just Me?", coords: [34.090590368172265, -118.37412217533493]},
    {name: "Fight Club", coords: [39.748533591736546, -75.54644098465155]},
    {name: "The Outcasts", coords: [40.806637601966784, -73.7017633045]},
    {name: "West Side Story", coords: [40.786553579849766, -73.97812289511555]},
    {name: "Now You See Me", coords: [36.10371878092133, -115.1674555520402]},
    {name: "Now You See Me 2", coords: [22.191674085988137, 113.55492776089184]},
    {name: "The Assassin", coords: [31.482804751827295, 109.97448935116212]},
    {name: "Moonlight", coords: [25.833555788685004, -80.2219263382951]},
    {name: "Mascarpone", coords: [41.90090420825453, 12.478483500335834]},
    {name: "In Between Seasons", coords: [36.34199634151113, 127.39324585207981]},
    {name: "Inception", coords: [33.94512643960585, -118.40032991899325]},
    {name: "Steve", coords: [51.38415677248285, -2.36156308163257]},
    {name: "A Nice Indian Boy", coords: [37.591597114170064, -122.08380200564297]},
    {name: "Interstellar", coords: [38.74497423449665, -104.81098801571957]},
    {name: "Ocean's Eleven", coords: [36.11307048422321, -115.17719402863136]},
    {name: "Madres", coords: [34.3194713399544, -118.61124712071138]},
    {name: "The 10 Year Plan", coords: [34.09374293859291, -118.34133579852416]},
    {name: "The Woman in Cabin 10", coords: [62.27500854313106, 6.441338582001798]},
    {name: "Donnie Darko", coords: [37.584509052101296, -75.80982666023408]},
    {name: "Manchester By The Sea", coords: [42.57539470313189, -70.77173202796949]},
    {name: "Hocus Pocus", coords: [42.521890350181124, -70.89318581744062]},
    {name: "Road House", coords: [24.562606030427908, -81.76626015426788]},
];

let markers = [];
let extraMarkers = [];
function update() {
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];
    const radio = document.querySelector('input[name="choice"]:checked').value

    extraMarkers.forEach(marker => map.removeLayer(marker));
    extraMarkers = [];

    let cities = [];
    if (radio == "documentaries") {
        cities = [
            {name: "The City of God Kings", coords: [13.412578878006862, 103.86701800217574]}
        ];
        
        document.getElementById("mapstitle").textContent = "maps"
        document.getElementById("text1").textContent = "this is where all my documentaries go. so i can see what parts of the earth i have a little bit more historical knowledge on."
        document.getElementById("text2").textContent = "this probably won't be as extensive as my movies list, but whatever🏹"
        document.getElementById("time").textContent = "6:45 a.m. september 10, 2025"

    } else if (radio == "movies") {
        cities = [
            {name: "Fruitvale Station", coords: [37.77478356742716, -122.22420513851388]},
            {name: "Bros", coords: [40.764615071749965, -73.98573630038909]},
            {name: "The Lost Bus", coords: [39.759388483231234, -121.61185795271837]},
            {name: "Good Will Hunting", coords: [42.3600857008431, -71.09413895382156]},
            {name: "Sauvage", coords: [48.62214888587943, 7.723044201225263]},
            {name: "Ferris Bueller's Day Off", coords: [42.17349947191428, -87.78526726102879]},
            {name: "The Medium", coords: [17.498696215977223, 101.7200953348481]},
            {name: "Honey Don't!", coords: [35.37321742084238, -119.01636200125112]},
            {name: "Emilia Peréz", coords: [19.446456136954488, -99.1301475774555]},
            {name: "Bad Genius", coords: [13.753278883284583, 100.42720428323646]},
            {name: "One Flew Over The Cuckoo's Nest", coords: [44.939302533799605, -123.00403164422622]},
            {name: "Lights Out", coords:[34.10915296229908, -118.19413132130423]},
            {name: "The Greatest Showman", coords:[40.70311452585964, -73.95307856880228]},
            {name: "Ballad Of A Small Player", coords:[22.147597397953316, 113.57119579111017]},
            {name: "The Life Ahead", coords:[41.140790788594394, 16.871286413339877]},
            {name: "Queens Of The Qing Dynasty", coords:[46.11295573012972, -60.17442041904222]},
            {name: "Magic Mike", coords:[27.800081770018206, -82.63890937820699]},
            {name: "The Banshees Of Inisherin", coords:[53.96770356804773, -10.192937552954731]},
            {name: "Freakier Friday", coords:[34.061512672652064, -118.30892088575496]},
            {name: "Dead Of Winter", coords:[47.97597802926883, -95.04780400347917]},
            {name: "Clouds", coords: [45.20148493104747, -92.77080809858164]},
            {name: "All We Imagine As Light", coords:[16.995392655375515, 73.2733082508404]},
            {name: "Little Forest", coords:[36.17972892498421, 128.6644884318947]},
            {name: "Frankenstein", coords:[52.64249464380286, -0.4525356261405251]},
            {name: "Beautiful Boy", coords:[37.774871402129804, -122.43305621460804]},
            {name: "The Black Phone", coords:[39.7679422798767, -105.07628608320084]},
            {name: "A Christmas Reunion", coords:[37.82103329415592, -122.28082677294543]},
            {name: "Flee", coords:[34.55715574400195, 69.15625865911855]},
            {name: "Five Nights At Freddy's 2", coords:[44.81000086955091, -95.55101669405379]},
            {name: "The Outsiders", coords:[36.16547653551487, -95.97029042967989]},
            {name: "The Holiday Sitters", coords:[42.17033833612143, -75.85676890695753]},
            {name: "The Prestige", coords:[51.51958394391154, -0.09382540756685291]},
            {name: "Elf", coords:[40.74842783396609, -73.9856752037261]},
            {name: "Train Dreams", coords:[47.53921776709018, -121.83261400816491]},
            {name: "Twilight", coords:[47.955256619198344, -124.37587415533478]},
            {name: "Big Boys", coords:[34.264149238825, -117.16976480637584]},
            {name: "Single All The Way", coords:[43.65863895731586, -71.76095139505185]},
            {name: "Parasite", coords:[37.55665207425827, 126.96141151922797]},
            {name: "Speech and Debate", coords:[44.94445169391217, -123.02169547489423]},
            {name: "The Wedding Banquet", coords:[40.7376598441906, -74.00233751152174]},
            {name: "Hunger", coords:[13.7558039987593, 100.50635060190122]},
            {name: "Past Lives", coords:[40.72394899676385, -73.98954887519751]},
            {name: "Dead Poets Society", coords:[43.31256081897934, -72.78085814382214]},
            {name: "The Perks Of Being A Wallflower", coords:[40.27652316489451, -80.10451374284048]},
            {name: "Role Models", coords:[34.376799515954, -118.48455721180834]},
            {name: "Aftersun", coords:[36.5688895675035, 29.135929841563883]},
            {name: "The Broken Hearts Club", coords:[34.090653016554974, -118.36444129205405]},
            {name: "Latter Days", coords:[34.18540811858038, -118.447104445798]}
                ];
        
        document.getElementById("mapstitle").textContent = "maps (movies)"
        document.getElementById("text1").textContent = "thought i'd put the locations of movies i've watched as well"
        document.getElementById("text2").textContent = "obviously this isn't gonna have every movie, but i'll try to put the ones i can🦈"
        document.getElementById("time").textContent = "5:17 p.m. october 17, 2025"

    }
    
    cities.forEach(city => {
        const marker = L.marker(city.coords).addTo(map).bindPopup(`<b>${city.name}</b>`);
        markers.push(marker);
    });

    const check = document.getElementById("present");
    if (check.checked) {
        present.forEach(city => {
            const marker = L.marker(city.coords).addTo(map).bindPopup(`<b>${city.name}</b>`);
            extraMarkers.push(marker);
        });
    }
}

update();
document.querySelectorAll('input[name="choice"]').forEach(radio => {
   radio.addEventListener('change', update); 
});
document.getElementById("present").addEventListener("change", update);