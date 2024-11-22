function ConvertToCyrillic() {
    let latText = document.getElementById('latText').value;
    let cyrText = latText;

    // Digraphs
    cyrText = cyrText.replace(/CH/g, "Х").replace(/Ch/g, "Х").replace(/ch/g, "х");
    cyrText = cyrText.replace(/DD/g, "Ђ").replace(/Dd/g, "Ђ").replace(/dd/g, "ђ");
    cyrText = cyrText.replace(/LL/g, "Љ").replace(/Ll/g, "Љ").replace(/ll/g, "љ");
    cyrText = cyrText.replace(/RH/g, "Ҹ").replace(/Rh/g, "Ҹ").replace(/rh/g, "ҹ");
    cyrText = cyrText.replace(/TH/g, "Ћ").replace(/Th/g, "Ћ").replace(/th/g, "ћ");
    cyrText = cyrText.replace(/FF/g, "Ф").replace(/Ff/g, "Ф").replace(/ff/g, "ф");
    cyrText = cyrText.replace(/PH/g, "Ф'").replace(/Ph/g, "Ф'").replace(/ph/g, "ф'");
    cyrText = cyrText.replace(/SI/g, "Ш").replace(/Si/g, "Ш").replace(/si/g, "ш");

    // Single letters
    cyrText = cyrText.replace(/A/g, "А").replace(/a/g, "а");
    cyrText = cyrText.replace(/Y/g, "Ә").replace(/y/g, "ә")
    cyrText = cyrText.replace(/B/g, "Б").replace(/b/g, "б");
    cyrText = cyrText.replace(/C/g, "К").replace(/c/g, "к");
    cyrText = cyrText.replace(/D/g, "Д").replace(/d/g, "д");
    cyrText = cyrText.replace(/E/g, "Е").replace(/e/g, "е");
    cyrText = cyrText.replace(/F/g, "В").replace(/f/g, "в");
    cyrText = cyrText.replace(/G/g, "Г").replace(/g/g, "г");
    cyrText = cyrText.replace(/H/g, "Ґ").replace(/h/g, "ґ");
    cyrText = cyrText.replace(/I/g, "І").replace(/i/g, "і");
    cyrText = cyrText.replace(/J/g, "Ж").replace(/j/g, "ж");
    cyrText = cyrText.replace(/K/g, "К").replace(/k/g, "к");
    cyrText = cyrText.replace(/L/g, "Л").replace(/l/g, "л");
    cyrText = cyrText.replace(/M/g, "М").replace(/m/g, "м");
    cyrText = cyrText.replace(/N/g, "Н").replace(/n/g, "н");
    cyrText = cyrText.replace(/NG/g, "Ң").replace(/Ng/g, "Ң").replace(/ng/g, "ң");
    cyrText = cyrText.replace(/O/g, "О").replace(/o/g, "о");
    cyrText = cyrText.replace(/P/g, "П").replace(/p/g, "п");
    cyrText = cyrText.replace(/R/g, "Р").replace(/r/g, "р");
    cyrText = cyrText.replace(/S/g, "С").replace(/s/g, "с");
    cyrText = cyrText.replace(/T/g, "Т").replace(/t/g, "т");
    cyrText = cyrText.replace(/W/g, "У").replace(/w/g, "у");
    cyrText = cyrText.replace(/U/g, "Ы").replace(/u/g, "ы");

    document.getElementById('cyrText').value = cyrText;
}

function ConvertToLatin() {
    let cyrText = document.getElementById('cyrText').value;
    let latText = cyrText;

    // Digraphs
    latText = latText.replace(/Х/g, "Ch").replace(/х/g, "ch");
    latText = latText.replace(/Ђ/g, "Dd").replace(/ђ/g, "dd");
    latText = latText.replace(/Љ/g, "Ll").replace(/љ/g, "ll");
    latText = latText.replace(/Ҹ/g, "Rh").replace(/ҹ/g, "rh");
    latText = latText.replace(/Ћ/g, "Th").replace(/ћ/g, "th");
    latText = latText.replace(/Ф/g, "Ff").replace(/ф/g, "ff");
    latText = latText.replace(/Ф'/g, "Ph").replace(/ф'/g, "ph");
    latText = latText.replace(/Ш/g, "Si").replace(/ш/g, "si");

    // Single letters
    latText = latText.replace(/А/g, "A").replace(/а/g, "a");
    latText = latText.replace(/Ә/g, "Y").replace(/ә/g, "y");
    latText = latText.replace(/Б/g, "B").replace(/б/g, "b");
    latText = latText.replace(/К/g, "C").replace(/к/g, "c");
    latText = latText.replace(/Д/g, "D").replace(/д/g, "d");
    latText = latText.replace(/Е/g, "E").replace(/е/g, "e");
    latText = latText.replace(/В/g, "F").replace(/в/g, "f");
    latText = latText.replace(/Г/g, "G").replace(/г/g, "g");
    latText = latText.replace(/Ґ/g, "H").replace(/ґ/g, "h");
    latText = latText.replace(/І/g, "I").replace(/і/g, "i");
    latText = latText.replace(/Ж/g, "J").replace(/ж/g, "j");
    latText = latText.replace(/К/g, "K").replace(/к/g, "k");
    latText = latText.replace(/Л/g, "L").replace(/л/g, "l");
    latText = latText.replace(/М/g, "M").replace(/м/g, "m");
    latText = latText.replace(/Н/g, "N").replace(/н/g, "n");
    latText = latText.replace(/Ң/g, "Ng").replace(/ң/g, "ng");
    latText = latText.replace(/О/g, "O").replace(/о/g, "o");
    latText = latText.replace(/П/g, "P").replace(/п/g, "p");
    latText = latText.replace(/Р/g, "R").replace(/р/g, "r");
    latText = latText.replace(/С/g, "S").replace(/с/g, "s");
    latText = latText.replace(/Т/g, "T").replace(/т/g, "t");
    latText = latText.replace(/У/g, "w").replace(/у/g, "w");
    latText = latText.replace(/Ы/g, "U").replace(/ы/g, "u");

    document.getElementById('latText').value = latText;
}
