var filmovi = [
    {
        sifra: "m01",
        naziv: "Top Gun Maverick",
        reditelj: "Joseph Kosinski",
        datumPremijere: new Date(27, 4, 2022),
        zemljaPorekla: "Sjedinjene Americke Drzave",
        datumPremijereSrbija: new Date(6, 6, 2022),
        ocene: new Array(8, 7, 10)
    },
    {
        sifra: "m02",
        naziv: "Pijanista",
        reditelj: "Roman Polanski",
        datumPremijere: new Date(29, 11, 2002),
        zemljaPorekla: "Ujedinjeno Kraljevstvo",
        datumPremijereSrbija: new Date(5, 1, 2003),
        ocene: new Array(9, 8, 9)
    },
    {
        sifra: "m03",
        naziv: "The Banshees of Inisherin",
        reditelj: "Martin McDonagh",
        datumPremijere: new Date(21, 9, 2022),
        zemljaPorekla: "Irska",
        datumPremijereSrbija: null,
        ocene: new Array(8, 9, 8)
    },
    {
        sifra: "m04",
        naziv: "Crni Panter: Vakanda zauvek",
        reditelj: "Ryan Coogler",
        datumPremijere: new Date(11, 10, 2022),
        zemljaPorekla: "Sjedinjene Americke Drzave",
        datumPremijereSrbija: null,
        ocene: new Array(8, 6, 7)
    },
    {
        sifra: "m05",
        naziv: "Lyle, Lyle, Crocodile",
        reditelj: "Josh Gordon",
        datumPremijere: new Date(7, 9, 2022),
        zemljaPorekla: "Sjedinjene Americke Drzave",
        datumPremijereSrbija: null,
        ocene: new Array(5, 10, 6)
    },
    {
        sifra: "m06",
        naziv: "Sve u isto vreme",
        reditelj: "Dan Kwan",
        datumPremijere: null,
        zemljaPorekla: "",
        datumPremijereSrbija: null,
        ocene: new Array(8, 8, 7)
    },
    {
        sifra: "m07",
        naziv: "Vera",
        reditelj: "Nedeljko Kovacic",
        datumPremijere: new Date(10, 10, 2022),
        zemljaPorekla: "Srbija",
        datumPremijereSrbija: new Date(10, 10, 2022),
        ocene: new Array(9, 9, 7)
    }
]

function izracunaj_prosecnu_ocenu(film=String){
    for(let i in filmovi){
        if(filmovi[i].naziv == film){
            var prosecna_ocena = 0;
            for(let j in filmovi[i].ocene) prosecna_ocena += filmovi[i].ocene[j];
            prosecna_ocena /= 3;
            return prosecna_ocena;
        }
    }
}

function izracunaj_prosecnu_ocenu_svih_filmova(filmovi){
    var prosecna_ocena = 0;
    for(let i in filmovi){
        prosecna_ocena += izracunaj_prosecnu_ocenu(filmovi[i].naziv);
    }
    prosecna_ocena /= filmovi.length;
    return prosecna_ocena;
}

function generisi_html(filmovi){
    var table = "<table>"

    table += "<tr>";

    for(let i in filmovi[0]){
        table += "<td>";
        table += formatiraj_ime_promenljive(i);
        table += "</td>";
    }

    table += "<td>Prosecna ocena filma</td>"
    table += "<td>Prosecna ocena svih filmova</td>"

    table += "</tr>";

    for(let i in filmovi){
        table += "<tr>";

        filmovi[i].prosecna_ocena = izracunaj_prosecnu_ocenu(filmovi[i].naziv);

        for(let j in filmovi[i]){
            table += "<td>";
            if(filmovi[i][j] !== null && filmovi[i][j] !== undefined)
                if(j == "prosecna_ocena") table += filmovi[i][j].toFixed(2)
                else table += filmovi[i][j];
            table += "</td>";
        }
        if(i == 0){
            table += "<td rowspan=";
            table += filmovi.length;
            table += ">";
            table += izracunaj_prosecnu_ocenu_svih_filmova(filmovi).toFixed(2);
            table += "</td>"
        }

        table += "</tr>";
    }

    

    table += "</table>";
    return table;
}

function formatiraj_ime_promenljive(promenljiva=String){
    var formatirano_ime = "" + promenljiva[0].toUpperCase();
    for(let i = 1; i < promenljiva.length; i++){
        var c = promenljiva[i];
        if(c.toUpperCase() == c) formatirano_ime += " ";
        formatirano_ime += c;
    }
    return formatirano_ime;
}

// function odaberi_film(film_id){

// }

// function izmena_podataka_filma(naziv_podatka, vrednost_podatka){

// }

document.getElementById("filmovi").innerHTML = generisi_html(filmovi);
