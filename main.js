const dropArea = document.getElementById("dropArea");
const fileInput = document.getElementById("fileInput");
const dropStatus = document.getElementById("dropStatus");
const generateButton = document.getElementById("generateButton");
const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
const progressDialog = document.getElementById("progressDialog");
const progressArea = document.getElementById("progressArea");
const progressBar = document.getElementById("progressBar");
const progressLabel = document.getElementById("progressLabel");
const downloadDialog = document.getElementById("downloadDialog");
const confirmDownloadButton = document.getElementById("confirmDownloadButton");
const cancelDownloadButton = document.getElementById("cancelDownloadButton");
const siteHeading = document.getElementById("siteHeading");
const mainContent = document.getElementById("mainContent");
const specification = document.getElementById("specification");
const specificationIndex = document.getElementById("specificationIndex");
const specificationDescription = document.getElementById("specificationDescription");


const romaNum = ["X", "L", "C", "D", "M"];
const addRomaNum = ["I", "V"];
const enNum = ["ten","twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety", "hundred", "thousand","million","billion","trillion", "quadrillion", "quintillion", "sextillion", "septillion", "octillion", "nonillion", "decillion", "undecillion", "duodecillion", "tredecillion", "quattuordecillion", "quindecillion", "sexdecillion", "septendecillion", "octodecillion", "novemdecillion", "vigintillion", "unvigintillion", "duovigintillion", "tresvigintillion", "quattuorvigintillion", "quinvigintillion", "sesvigintillion", "septemvigintillion", "octovigintillion", "novemvigintillion", "trigintillion", "untrigintillion", "duotrigintillion", "trestrigintillion", "quattuortrigintillion", "quintrigintillion", "sestrigintillion", "septentrigintillion", "octotrigintillion", "novemtrigintillion", "quadragintillion", "unquadragintillion", "duoquadragintillion", "tresquadragintillion", "quattuorquadragintillion", "quinquadragintillion", "sesquadragintillion", "septenquadragintillion", "octoquadragintillion", "novemquadragintillion", "quinquagintillion", "unquinquagintillion", "duoquinquagintillion", "tresquinquagintillion", "quattuorquinquagintillion", "quinquinquagintillion", "sesquinquagintillion", "septenquinquagintillion", "octoquinquagintillion", "novemquinquagintillion", "sexagintillion", "unsexagintillion", "duosexagintillion", "tresexagintillion", "quattuorsexagintillion", "quinsexagintillion", "sessexagintillion", "septensexagintillion", "octosexagintillion", "novemsexagintillion", "septuagintillion", "unseptuagintillion", "duoseptuagintillion", "treseptuagintillion", "quattuorseptuagintillion", "quinseptuagintillion", "sesseptuagintillion", "septenseptuagintillion", "octoseptuagintillion", "novemseptuagintillion", "octogintillion", "unoctogintillion", "duooctogintillion", "tresoctogintillion", "quattuoroctogintillion", "quinoctogintillion", "sexoctogintillion", "septemoctogintillion", "octooctogintillion", "novemoctogintillion", "nonagintillion", "unnonagintillion", "duononagintillion", "tresnonagintillion", "quattuornonagintillion", "quinnonagintillion", "sexnonagintillion", "septennonagintillion", "octononagintillion", "novemnonagintillion", "centillion"];

const addEnNum = ["one","eleven"];

const jaMonth = ["神無月", "霜月"];
const enMonthLarge = ["October", "November"];
const enMonthSmall = ["Oct", "Nov"];
const enOrdinalNum = ["zeroth", "tenth", "twentieth", "thirtieth", "fortieth", "fiftieth", "sixtieth", "seventieth", "eightieth","ninetieth","hundredth","thousandth", "millionth", "billionth", "trillionth", "quadrillionth", "quintillionth", "sextillionth", "septillionth", "octillionth", "nonillionth", "decillionth", "undecillionth", "duodecillionth", "tredecillionth", "quattuordecillionth", "quindecillionth", "sexdecillionth", "septendecillionth", "octodecillionth", "novemdecillionth", "vigintillionth", "unvigintillionth", "duovigintillionth", "tresvigintillionth", "quattuorvigintillionth", "quinvigintillionth", "sesvigintillionth", "septemvigintillionth", "octovigintillionth", "novemvigintillionth", "trigintillionth", "untrigintillionth", "duotrigintillionth", "trestrigintillionth", "quattuortrigintillionth", "quintrigintillionth", "sestrigintillionth", "septentrigintillionth", "octotrigintillionth", "novemtrigintillionth", "quadragintillionth", "unquadragintillionth", "duoquadragintillionth", "tresquadragintillionth", "quattuorquadragintillionth", "quinquadragintillionth", "sesquadragintillionth", "septenquadragintillionth", "octoquadragintillionth", "novemquadragintillionth", "quinquagintillionth", "unquinquagintillionth", "duoquinquagintillionth", "tresquinquagintillionth", "quattuorquinquagintillionth", "quinquinquagintillionth", "sesquinquagintillionth", "septenquinquagintillionth", "octoquinquagintillionth", "novemquinquagintillionth", "sexagintillionth", "unsexagintillionth", "duosexagintillionth", "tresexagintillionth", "quattuorsexagintillionth", "quinsexagintillionth", "sessexagintillionth", "septensexagintillionth", "octosexagintillionth", "novemsexagintillionth", "septuagintillionth", "unseptuagintillionth", "duoseptuagintillionth", "treseptuagintillionth", "quattuorseptuagintillionth", "quinseptuagintillionth", "sesseptuagintillionth", "septenseptuagintillionth", "octoseptuagintillionth", "novemseptuagintillionth", "octogintillionth", "unoctogintillionth", "duooctogintillionth", "tresoctogintillionth", "quattuoroctogintillionth", "quinoctogintillionth", "sexoctogintillionth", "septemoctogintillionth", "octooctogintillionth", "novemoctogintillionth", "nonagintillionth", "unnonagintillionth", "duononagintillionth", "tresnonagintillionth", "quattuornonagintillionth", "quinnonagintillionth", "sexnonagintillionth", "septennonagintillionth", "octononagintillionth", "novemnonagintillionth", "centillionth"];

const SI_PREFIXES = {
    q: { exponent: -30, name: "クエクト" },
    r: { exponent: -27, name: "ロント" },
    y: { exponent: -24, name: "ヨクト" },
    z: { exponent: -21, name: "ゼプト" },
    a: { exponent: -18, name: "アト" },
    f: { exponent: -15, name: "フェムト" },
    p: { exponent: -12, name: "ピコ" },
    n: { exponent: -9, name: "ナノ" },
    "μ": { exponent: -6, name: "マイクロ", canonical: "μ" },
    "µ": { exponent: -6, name: "マイクロ", canonical: "μ" },
    u: { exponent: -6, name: "マイクロ", canonical: "μ" },
    m: { exponent: -3, name: "ミリ" },
    c: { exponent: -2, name: "センチ" },
    d: { exponent: -1, name: "デシ" },
    da: { exponent: 1, name: "デカ" },
    h: { exponent: 2, name: "ヘクト" },
    k: { exponent: 3, name: "キロ" },
    M: { exponent: 6, name: "メガ" },
    G: { exponent: 9, name: "ギガ" },
    T: { exponent: 12, name: "テラ" },
    P: { exponent: 15, name: "ペタ" },
    E: { exponent: 18, name: "エクサ" },
    Z: { exponent: 21, name: "ゼタ" },
    Y: { exponent: 24, name: "ヨタ" },
    R: { exponent: 27, name: "ロナ" },
    Q: { exponent: 30, name: "クエタ" }
};

// 誤検出を避けるため、接頭辞との組み合わせを許可する基本単位を明示する。
// kgも k + g として厳密に基本単位gへ換算する。
const SI_BASE_UNITS = {
    m: { name: "メートル" },
    g: { name: "グラム" }
};

const siNum = Object.keys(SI_PREFIXES);

const jaNum = ["十", "百", "千", "万", "億", "兆", "京", "垓", "𥝱", "穣", "溝", "澗", "正", "載", "極", "恒河沙", "阿僧祇", "那由他", "不可思議", "無量大数"];
const addJaNum = ["一"];

const jaNumOld = ["零", "拾", "廿", "卅", "卌", "陌", "佰", "仟", "阡","萬"];
const addJaNumOld = ["壱"];

const jaNumHiragana = ["じゅう", "ひゃく", "せん", "まん", "おく", "ちょう", "けい", "がい", "じょ", "じょう", "こう", "かん", "せい", "さい", "ごく", "こうがしゃ", "あそうぎ", "なゆた", "ふかしぎ", "むりょうたいすう"];
const addJaNumHiragana = ["いち"];
const jaDigitWords = ["〇", "零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
const jaDaijiDigitWords = ["零", "壱", "壹", "弐", "貳", "参", "參"];
const jaHiraganaDigitWords = ["ぜろ", "れい", "いち", "に", "さん", "よん", "し", "ご", "ろく", "なな", "しち", "はち", "きゅう", "く"];
const jaHiraganaSoundDigitWords = ["ろっ", "はっ"];
const jaHiraganaSoundSmallUnitWords = ["びゃく", "ぴゃく", "ぜん", "っせん"];
const hiraganaDigitSequenceVocabulary = {
    "ぜろ": "0",
    "れい": "0",
    "まる": "0",
    "いち": "1",
    "に": "2",
    "さん": "3",
    "よん": "4",
    "し": "4",
    "ご": "5",
    "ろく": "6",
    "なな": "7",
    "しち": "7",
    "はち": "8",
    "きゅう": "9",
    "く": "9"
};
const hiraganaDigitSequenceZeroWords = new Set(["ぜろ", "れい", "まる"]);
const canonicalHiraganaDigits = {
    "0": "ぜろ",
    "1": "いち",
    "2": "に",
    "3": "さん",
    "4": "よん",
    "5": "ご",
    "6": "ろく",
    "7": "なな",
    "8": "はち",
    "9": "きゅう"
};

const englishCardinalUnderTwenty = [
    { value: "0", canonical: "zero", aliases: [] },
    { value: "1", canonical: "one", aliases: [] },
    { value: "2", canonical: "two", aliases: [] },
    { value: "3", canonical: "three", aliases: [] },
    { value: "4", canonical: "four", aliases: [] },
    { value: "5", canonical: "five", aliases: [] },
    { value: "6", canonical: "six", aliases: [] },
    { value: "7", canonical: "seven", aliases: [] },
    { value: "8", canonical: "eight", aliases: [] },
    { value: "9", canonical: "nine", aliases: [] },
    { value: "10", canonical: "ten", aliases: [] },
    { value: "11", canonical: "eleven", aliases: [] },
    { value: "12", canonical: "twelve", aliases: [] },
    { value: "13", canonical: "thirteen", aliases: [] },
    { value: "14", canonical: "fourteen", aliases: [] },
    { value: "15", canonical: "fifteen", aliases: [] },
    { value: "16", canonical: "sixteen", aliases: [] },
    { value: "17", canonical: "seventeen", aliases: [] },
    { value: "18", canonical: "eighteen", aliases: [] },
    { value: "19", canonical: "nineteen", aliases: [] }
];

const irregularOrdinals = {
    zero: "zeroth",
    one: "first",
    two: "second",
    three: "third",
    four: "fourth",
    five: "fifth",
    eight: "eighth",
    nine: "ninth",
    twelve: "twelfth"
};

const englishOrdinalUnderTwenty = englishCardinalUnderTwenty.map((entry) => ({
    value: entry.value,
    cardinal: entry.canonical,
    canonical: irregularOrdinals[entry.canonical] || `${entry.canonical}th`,
    aliases: []
}));

const englishTens = enNum.slice(0, 9).map((word, index) => ({
    value: String((index + 1) * 10),
    canonical: word,
    aliases: []
}));

const englishTensOrdinals = enOrdinalNum.slice(1, 10).map((word, index) => ({
    value: String((index + 1) * 10),
    cardinal: englishTens[index].canonical,
    canonical: word,
    aliases: []
}));

function uniqueValues(values) {
    return [...new Set(values.filter(Boolean))];
}

function createEnglishLargeUnitAliases(canonical) {
    const aliases = [];

    if (canonical === "sexdecillion") {
        aliases.push("sedecillion");
    }

    if (canonical === "novemdecillion") {
        aliases.push("novendecillion");
    }

    if (canonical.startsWith("ses")) {
        aliases.push(`sex${canonical.slice(3)}`);
    } else if (canonical.startsWith("sex") && canonical !== "sexdecillion") {
        aliases.push(`ses${canonical.slice(3)}`);
    }

    if (canonical.startsWith("septen")) {
        aliases.push(`septem${canonical.slice(6)}`);
    } else if (canonical.startsWith("septem")) {
        aliases.push(`septen${canonical.slice(6)}`);
    }

    if (canonical.startsWith("tres")) {
        aliases.push(`tre${canonical.slice(4)}`);
    } else if (canonical.startsWith("tre") && !canonical.startsWith("tres")) {
        aliases.push(`tres${canonical.slice(3)}`);
    }

    if (canonical.startsWith("un") && !canonical.startsWith("uno")) {
        aliases.push(`uno${canonical.slice(2)}`);
    } else if (canonical.startsWith("uno")) {
        aliases.push(`un${canonical.slice(3)}`);
    }

    return uniqueValues(aliases);
}

const englishLargeUnitStems = enNum.slice(10).map((word, index) => {
    const aliases = createEnglishLargeUnitAliases(word);

    return {
        index: index + 1,
        exponent: (index + 1) * 3,
        canonical: word,
        aliases,
        ordinalCanonical: `${word}th`,
        ordinalAliases: aliases.map((alias) => `${alias}th`)
    };
});

const englishLargeUnitNamingConvention = {
    scale: "short",
    system: "Conway-Wechsler-compatible",
    canonicalPolicy: "preserve-current-project-spellings",
    acceptsAliases: true
};

const englishLargeUnitAliases = Object.fromEntries(
    englishLargeUnitStems
        .filter((unit) => unit.aliases.length > 0)
        .map((unit) => [unit.canonical, unit.aliases])
);

const englishOrdinalLargeUnitAliases = Object.fromEntries(
    englishLargeUnitStems
        .filter((unit) => unit.ordinalAliases.length > 0)
        .map((unit) => [unit.ordinalCanonical, unit.ordinalAliases])
);

const englishLargeUnits = englishLargeUnitStems.map((unit) => ({
    index: unit.index,
    exponent: unit.exponent,
    canonical: unit.canonical,
    aliases: [unit.canonical, ...unit.aliases]
}));

const englishOrdinalLargeUnits = englishLargeUnitStems.map((unit) => ({
    index: unit.index,
    exponent: unit.exponent,
    canonical: unit.ordinalCanonical,
    aliases: [unit.ordinalCanonical, ...unit.ordinalAliases],
    cardinalCanonical: unit.canonical
}));

const japaneseLargeUnits = jaNum.slice(3).map((word, index) => ({
    index: index + 1,
    exponent: (index + 1) * 4,
    canonical: word,
    aliases: word === "𥝱" ? ["秭"] : [],
    acceptedForms: word === "𥝱" ? ["𥝱", "秭"] : [word],
    reading: word === "𥝱" ? "じょ" : jaNumHiragana[index + 3],
    standaloneAllowed: false,
    requiresNumericPrefix: true,
    collisionRisk: new Set(["京", "兆", "正", "載", "極"]).has(word) ? "high" : word.length > 1 ? "low" : "medium"
}));

const japaneseHiraganaLargeUnits = jaNumHiragana.slice(3).map((word, index) => ({
    exponent: (index + 1) * 4,
    canonical: word,
    aliases: [word],
    standaloneAllowed: false,
    requiresNumericPrefix: true
}));

const notationSystems = {
    roman: {
        id: "roman",
        label: "Roman numerals",
        groupSize: null,
        caseHandling: "preserveUppercase",
        priority: 20,
        digits: {
            one: { value: "1", canonical: "I", aliases: ["I"] },
            five: { value: "5", canonical: "V", aliases: ["V"] },
            ten: { value: "10", canonical: "X", aliases: ["X"] },
            fifty: { value: "50", canonical: "L", aliases: ["L"] },
            hundred: { value: "100", canonical: "C", aliases: ["C"] },
            fiveHundred: { value: "500", canonical: "D", aliases: ["D"] },
            thousand: { value: "1000", canonical: "M", aliases: ["M"] }
        },
        sourceArrays: ["romaNum", "addRomaNum"],
        smallUnits: [],
        largeUnits: [],
        specialForms: [
            { value: "4", canonical: "IV", aliases: ["IV"] },
            { value: "9", canonical: "IX", aliases: ["IX"] },
            { value: "40", canonical: "XL", aliases: ["XL"] },
            { value: "90", canonical: "XC", aliases: ["XC"] },
            { value: "400", canonical: "CD", aliases: ["CD"] },
            { value: "900", canonical: "CM", aliases: ["CM"] }
        ],
        regexVocabulary: [...addRomaNum, ...romaNum]
    },
    englishCardinal: {
        id: "englishCardinal",
        label: "English cardinal numbers",
        groupSize: 3,
        caseHandling: "caseInsensitivePreserveMatchedStyle",
        priority: 30,
        namingConvention: englishLargeUnitNamingConvention,
        conversionCandidatePolicy: "parseDecimalStringThenCheckForZero",
        digits: {
            one: { value: "1", canonical: "one", aliases: ["one"] },
            eleven: { value: "11", canonical: "eleven", aliases: ["eleven"] }
        },
        parserVocabulary: {
            underTwenty: englishCardinalUnderTwenty,
            tens: englishTens,
            smallUnits: ["hundred"],
            largeUnitStems: englishLargeUnitStems,
            aliases: englishLargeUnitAliases
        },
        formatterVocabulary: {
            underTwenty: englishCardinalUnderTwenty,
            tens: englishTens,
            smallUnits: ["hundred"],
            largeUnitStems: englishLargeUnitStems,
            aliases: englishLargeUnitAliases
        },
        aliases: englishLargeUnitAliases,
        tens: enNum.slice(0, 9).map((word, index) => ({
            value: String((index + 1) * 10),
            canonical: word,
            aliases: [word]
        })),
        smallUnits: [
            { value: "100", canonical: "hundred", aliases: ["hundred"] }
        ],
        largeUnits: englishLargeUnits,
        largeUnitStems: englishLargeUnitStems,
        specialForms: [],
        sourceArrays: ["enNum", "addEnNum"],
        regexVocabulary: uniqueValues([
            ...englishCardinalUnderTwenty.map((entry) => entry.canonical),
            ...englishTens.map((entry) => entry.canonical),
            "hundred",
            ...englishLargeUnits.flatMap((unit) => unit.aliases)
        ])
    },
    englishOrdinal: {
        id: "englishOrdinal",
        label: "English ordinal numbers",
        groupSize: 3,
        caseHandling: "caseInsensitivePreserveMatchedStyle",
        priority: 31,
        namingConvention: englishLargeUnitNamingConvention,
        conversionCandidatePolicy: "parseDecimalStringThenCheckForZero",
        digits: {
            zeroth: { value: "0", canonical: "zeroth", aliases: ["zeroth"] }
        },
        parserVocabulary: {
            underTwenty: englishOrdinalUnderTwenty,
            tens: englishTensOrdinals,
            smallUnits: ["hundredth"],
            largeUnitStems: englishLargeUnitStems,
            aliases: englishOrdinalLargeUnitAliases
        },
        formatterVocabulary: {
            underTwenty: englishOrdinalUnderTwenty,
            tens: englishTensOrdinals,
            smallUnits: ["hundredth"],
            largeUnitStems: englishLargeUnitStems,
            aliases: englishOrdinalLargeUnitAliases
        },
        irregularForms: irregularOrdinals,
        aliases: englishOrdinalLargeUnitAliases,
        tens: enOrdinalNum.slice(1, 10).map((word, index) => ({
            value: String((index + 1) * 10),
            canonical: word,
            aliases: [word]
        })),
        smallUnits: [
            { value: "100", canonical: "hundredth", aliases: ["hundredth"] }
        ],
        largeUnits: englishOrdinalLargeUnits,
        largeUnitStems: englishLargeUnitStems,
        specialForms: [],
        sourceArrays: ["enOrdinalNum"],
        regexVocabulary: uniqueValues([
            ...englishOrdinalUnderTwenty.map((entry) => entry.canonical),
            ...englishTensOrdinals.map((entry) => entry.canonical),
            "hundredth",
            ...englishOrdinalLargeUnits.flatMap((unit) => unit.aliases)
        ])
    },
    japaneseKanji: {
        id: "japaneseKanji",
        label: "Japanese kanji numerals",
        groupSize: 4,
        caseHandling: "none",
        priority: 40,
        digits: {
            one: { value: "1", canonical: "一", aliases: addJaNum }
        },
        smallUnits: jaNum.slice(0, 3).map((word, index) => ({
            value: String(10 ** (index + 1)),
            canonical: word,
            aliases: [word]
        })),
        largeUnits: japaneseLargeUnits,
        specialForms: [],
        sourceArrays: ["jaNum", "addJaNum"],
        regexVocabulary: uniqueValues([...jaDigitWords, ...addJaNum, ...jaNum, "秭"])
    },
    japaneseDaiji: {
        id: "japaneseDaiji",
        label: "Japanese old and formal numerals",
        groupSize: 4,
        caseHandling: "none",
        priority: 41,
        digits: {
            zero: { value: "0", canonical: "零", aliases: ["零"] },
            one: { value: "1", canonical: "壱", aliases: addJaNumOld }
        },
        smallUnits: [
            { value: "10", canonical: "拾", aliases: ["拾"] },
            { value: "20", canonical: "廿", aliases: ["廿"] },
            { value: "30", canonical: "卅", aliases: ["卅"] },
            { value: "40", canonical: "卌", aliases: ["卌"] },
            { value: "100", canonical: "佰", aliases: ["佰", "陌"] },
            { value: "1000", canonical: "仟", aliases: ["仟", "阡"] }
        ],
        largeUnits: [
            { value: "10000", canonical: "萬", aliases: ["萬"] }
        ],
        specialForms: [],
        sourceArrays: ["jaNumOld", "addJaNumOld"],
        regexVocabulary: uniqueValues([...jaDaijiDigitWords, ...addJaNumOld, ...jaNumOld])
    },
    japaneseHiragana: {
        id: "japaneseHiragana",
        label: "Japanese hiragana numerals",
        groupSize: 4,
        caseHandling: "none",
        priority: 42,
        digits: {
            one: { value: "1", canonical: "いち", aliases: addJaNumHiragana }
        },
        smallUnits: jaNumHiragana.slice(0, 3).map((word, index) => ({
            value: String(10 ** (index + 1)),
            canonical: word,
            aliases: [word]
        })),
        largeUnits: japaneseHiraganaLargeUnits,
        specialForms: [],
        sourceArrays: ["jaNumHiragana", "addJaNumHiragana"],
        regexVocabulary: uniqueValues([
            ...jaHiraganaDigitWords,
            ...jaHiraganaSoundDigitWords,
            ...addJaNumHiragana,
            ...jaNumHiragana,
            ...jaHiraganaSoundSmallUnitWords
        ])
    },
    japaneseMonthName: {
        id: "japaneseMonthName",
        label: "Japanese traditional month names",
        groupSize: null,
        caseHandling: "none",
        priority: 50,
        digits: {},
        smallUnits: [],
        largeUnits: [],
        specialForms: [
            { value: "10", canonical: "神無月", aliases: ["神無月"] },
            { value: "11", canonical: "霜月", aliases: ["霜月"] }
        ],
        sourceArrays: ["jaMonth"],
        regexVocabulary: jaMonth
    },
    englishMonthName: {
        id: "englishMonthName",
        label: "English month names",
        groupSize: null,
        caseHandling: "caseSensitiveWithAliases",
        priority: 51,
        digits: {},
        smallUnits: [],
        largeUnits: [],
        specialForms: [
            { value: "10", canonical: "October", aliases: ["October", "Oct"] },
            { value: "11", canonical: "November", aliases: ["November", "Nov"] }
        ],
        sourceArrays: ["enMonthLarge", "enMonthSmall"],
        regexVocabulary: [...enMonthLarge, ...enMonthSmall]
    },
    siPrefix: {
        id: "siPrefix",
        label: "SI prefixes",
        groupSize: 3,
        caseHandling: "caseSensitive",
        priority: 60,
        digits: {},
        smallUnits: [],
        largeUnits: siNum.map((symbol) => ({
            exponent: SI_PREFIXES[symbol].exponent,
            canonical: SI_PREFIXES[symbol].canonical || symbol,
            aliases: [symbol]
        })),
        specialForms: [],
        sourceArrays: ["siNum"],
        regexVocabulary: siNum
    }
};

const detectionPriority = {
    japaneseMonthName: 100,
    englishMonthName: 100,
    englishOrdinal: 90,
    romanSuffix: 88,
    japaneseHiraganaDigitSequence: 85,
    englishCardinal: 80,
    japaneseMixedNumber: 78,
    si: 75,
    japaneseDaiji: 70,
    japaneseKanji: 65,
    japaneseHiragana: 60,
    romanUnicode: 55,
    roman: 40,
    romanAscii: 40,
    arabic: 30
};

function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function sortByLongestFirst(values) {
    return uniqueValues(values).sort((a, b) => b.length - a.length);
}

function createToken(start, end, source, type, confidence = 1, metadata = {}) {
    return { start, end, source, type, confidence, metadata };
}

function isAsciiLetter(value) {
    return /[A-Za-z]/.test(value);
}

function isEnglishBoundary(text, start, end) {
    return !isAsciiLetter(text[start - 1] || "") && !isAsciiLetter(text[end] || "");
}

function isTokenOverlap(a, b) {
    return a.start < b.end && b.start < a.end;
}

function getTokenPriority(token) {
    if (token.type === "roman" && token.metadata.alphabet === "unicode") {
        return detectionPriority.romanUnicode;
    }

    if (token.type === "roman" && token.metadata.alphabet === "ascii") {
        return detectionPriority.romanAscii;
    }

    return detectionPriority[token.type] || 0;
}

function resolveCandidateOverlaps(candidates) {
    const sortedCandidates = [...candidates].sort((a, b) => {
        if (a.start !== b.start) return a.start - b.start;

        const lengthDifference = (b.end - b.start) - (a.end - a.start);
        if (lengthDifference !== 0) return lengthDifference;

        const priorityDifference = getTokenPriority(b) - getTokenPriority(a);
        if (priorityDifference !== 0) return priorityDifference;

        return b.confidence - a.confidence;
    });
    const resolved = [];

    for (const candidate of sortedCandidates) {
        if (!resolved.some((token) => isTokenOverlap(token, candidate))) {
            resolved.push(candidate);
        }
    }

    return resolved.sort((a, b) => a.start - b.start);
}

function detectArabic(text) {
    const tokens = [];
    // 符号と小数点は数値表現の一部として扱い、-100 や 10.50 を1候補にまとめます。
    const arabicPattern = /[-−]?(?:[0-9０-９]+(?:[.．][0-9０-９]+)?)/g;

    for (const match of text.matchAll(arabicPattern)) {
        tokens.push(createToken(match.index, match.index + match[0].length, match[0], "arabic", 1, {
            hasSign: /^[-−]/.test(match[0]),
            hasDecimal: /[.．]/.test(match[0])
        }));
    }

    return tokens;
}

function detectRoman(text) {
    const tokens = [];
    const asciiPattern = /\b[IVXLCDM]+\b/g;
    const unicodePattern = /[ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫⅬⅭⅮⅯ]+/g;

    for (const match of text.matchAll(asciiPattern)) {
        const source = match[0];
        tokens.push(createToken(match.index, match.index + source.length, source, "roman", source.length === 1 ? 0.45 : 0.8, {
            alphabet: "ascii",
            requiresValidation: true,
            singleSymbol: source.length === 1
        }));
    }

    for (const match of text.matchAll(unicodePattern)) {
        tokens.push(createToken(match.index, match.index + match[0].length, match[0], "roman", 0.9, {
            alphabet: "unicode",
            requiresValidation: true
        }));
    }

    return tokens;
}

function isStandardAsciiRoman(value) {
    return /^(?=.)M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/.test(value);
}

function detectRomanSuffix(text) {
    const tokens = [];
    const identifierPattern = /[A-Z0-9]+/g;

    for (const match of text.matchAll(identifierPattern)) {
        const source = match[0];

        if (/^[0-9]/.test(source) || /^[IVXLCDM]+$/.test(source)) {
            continue;
        }

        for (let suffixStart = 0; suffixStart < source.length; suffixStart++) {
            const prefix = source.slice(0, suffixStart);
            const romanSource = source.slice(suffixStart);

            if (!prefix || !/[^IVXLCDM]/.test(prefix) || !/^[IVXLCDM]+$/.test(romanSource)) {
                continue;
            }

            if (isStandardAsciiRoman(romanSource)) {
                tokens.push(createToken(match.index, match.index + source.length, source, "romanSuffix", 0.9, {
                    prefix,
                    romanSource,
                    matchStrategy: "uppercaseIdentifierRomanSuffix"
                }));
                break;
            }
        }
    }

    return tokens;
}

function createEnglishNumberPattern(words) {
    const escapedWords = sortByLongestFirst(words).map(escapeRegExp);
    const wordPattern = `(?:${escapedWords.join("|")})`;
    const inlineSeparatorPattern = "(?:[ \\t]+|-)";

    return new RegExp(`${wordPattern}(?:${inlineSeparatorPattern}${wordPattern})*`, "gi");
}

function detectEnglishCardinal(text) {
    const system = notationSystems.englishCardinal;
    const words = system.regexVocabulary;
    const pattern = createEnglishNumberPattern(words);
    const tokens = [];

    for (const match of text.matchAll(pattern)) {
        if (isEnglishBoundary(text, match.index, match.index + match[0].length)) {
            tokens.push(createToken(match.index, match.index + match[0].length, match[0], "englishCardinal", 0.78, {
                wordCount: match[0].split(/\s+|-/).length,
                caseInsensitive: true,
                requiresSyntaxValidation: true
            }));
        }
    }

    return tokens;
}

function detectEnglishOrdinal(text) {
    const system = notationSystems.englishOrdinal;
    const cardinalWords = notationSystems.englishCardinal.regexVocabulary;
    const ordinalWords = system.regexVocabulary;
    const words = uniqueValues([...cardinalWords, ...ordinalWords]);
    const pattern = createEnglishNumberPattern(words);
    const tokens = [];

    for (const match of text.matchAll(pattern)) {
        const source = match[0];
        const parts = source.toLowerCase().split(/\s+|-/);
        const lastPart = parts[parts.length - 1];
        const isOrdinalEnding = ordinalWords.map((word) => word.toLowerCase()).includes(lastPart);

        if (isOrdinalEnding && isEnglishBoundary(text, match.index, match.index + source.length)) {
            tokens.push(createToken(match.index, match.index + source.length, source, "englishOrdinal", 0.85, {
                wordCount: parts.length,
                caseInsensitive: true,
                requiresSyntaxValidation: true
            }));
        }
    }

    return tokens;
}

function detectEnglishMonth(text) {
    const tokens = [];
    const monthForms = notationSystems.englishMonthName.specialForms.flatMap((entry) => {
        return entry.aliases.map((alias) => ({
            canonical: entry.canonical,
            sourceForm: alias,
            form: alias.length <= 3 ? "abbreviated" : "full"
        }));
    });
    const words = sortByLongestFirst(monthForms.map((entry) => entry.sourceForm));
    const pattern = new RegExp(`\\b(?:${words.map(escapeRegExp).join("|")})\\b`, "gi");

    for (const match of text.matchAll(pattern)) {
        const form = monthForms.find((entry) => entry.sourceForm.toLowerCase() === match[0].toLowerCase());

        if (form && isEnglishBoundary(text, match.index, match.index + match[0].length)) {
            tokens.push(createToken(match.index, match.index + match[0].length, match[0], "englishMonthName", 1, {
                form: form.form,
                canonical: form.canonical
            }));
        }
    }

    return tokens;
}

function detectJapaneseMonth(text) {
    const tokens = [];
    const words = sortByLongestFirst(notationSystems.japaneseMonthName.regexVocabulary);
    const pattern = new RegExp(words.map(escapeRegExp).join("|"), "g");

    for (const match of text.matchAll(pattern)) {
        tokens.push(createToken(match.index, match.index + match[0].length, match[0], "japaneseMonthName", 1, {
            matchStrategy: "longest"
        }));
    }

    return tokens;
}

function detectJapaneseKanji(text) {
    const fractionWords = japaneseFractionUnits.map((unit) => unit.kanji);
    const fractionPattern = new RegExp(`(?:[0-9０-９〇零一二三四五六七八九](?:${sortByLongestFirst(fractionWords).map(escapeRegExp).join("|")}))+`, "g");
    const words = sortByLongestFirst(notationSystems.japaneseKanji.regexVocabulary);
    const charClass = words.map(escapeRegExp).join("|");
    const pattern = new RegExp(`(?:${charClass})+`, "g");
    const tokens = [];

    for (const match of text.matchAll(fractionPattern)) {
        tokens.push(createToken(match.index, match.index + match[0].length, match[0], "japaneseKanji", 0.9, {
            matchStrategy: "japaneseFractionUnitRun",
            requiresSyntaxValidation: true
        }));
    }

    for (const match of text.matchAll(pattern)) {
        if (!isValidJapaneseKanjiCandidate(match[0])) {
            continue;
        }

        const confidence = match[0].length === 1 ? 0.45 : 0.8;
        tokens.push(createToken(match.index, match.index + match[0].length, match[0], "japaneseKanji", confidence, {
            matchStrategy: "longestVocabularyRun",
            requiresSyntaxValidation: true
        }));
    }

    return tokens;
}

function isStandaloneBlockedJapaneseLargeUnit(source) {
    const unit = japaneseLargeUnits.find((entry) => {
        return entry.canonical === source || (entry.aliases || []).includes(source);
    });

    return Boolean(unit && !unit.standaloneAllowed && unit.requiresNumericPrefix);
}

function isValidJapaneseKanjiCandidate(source) {
    if (isStandaloneBlockedJapaneseLargeUnit(source)) {
        return false;
    }

    return true;
}

function detectJapaneseMixedNumber(text) {
    const tokens = [];
    const largeWords = sortByLongestFirst(japaneseLargeUnits.flatMap((unit) => [unit.canonical, ...(unit.aliases || [])]));
    const largePattern = `(?:${largeWords.map(escapeRegExp).join("|")})`;
    const kanjiSmallPattern = "[〇零一二三四五六七八九十百千]+";
    const arabicPattern = "[0-9０-９]+";
    const segmentPattern = `(?:${arabicPattern}|${kanjiSmallPattern})`;
    const mixedPattern = new RegExp(`${segmentPattern}${largePattern}(?:${segmentPattern}${largePattern})*(?:${segmentPattern})?`, "g");

    for (const match of text.matchAll(mixedPattern)) {
        const source = match[0];

        if (!/[0-9０-９]/.test(source)) {
            continue;
        }

        tokens.push(createToken(match.index, match.index + source.length, source, "japaneseMixedNumber", 0.98, {
            matchStrategy: "arabicAndJapaneseLargeUnits",
            requiresSyntaxValidation: true
        }));
    }

    return tokens;
}

function detectJapaneseDaiji(text) {
    const words = sortByLongestFirst(notationSystems.japaneseDaiji.regexVocabulary);
    const pattern = new RegExp(`(?:${words.map(escapeRegExp).join("|")})+`, "g");
    const tokens = [];

    for (const match of text.matchAll(pattern)) {
        if (match[0] === "萬") {
            continue;
        }

        const hasOldOrFormalUnit = /[拾廿卅卌陌佰仟阡萬壱]/.test(match[0]);
        tokens.push(createToken(match.index, match.index + match[0].length, match[0], "japaneseDaiji", hasOldOrFormalUnit ? 0.9 : 0.55, {
            mixedWithStandardKanji: /[一十百千万億兆京垓𥝱秭穣溝澗正載極]/.test(match[0]),
            requiresSyntaxValidation: true
        }));
    }

    return tokens;
}

function detectJapaneseHiragana(text) {
    const standaloneAmbiguousUnits = new Set([
        "れい",
        "に",
        "し",
        "ご",
        "く",
        ...japaneseHiraganaLargeUnits.map((unit) => unit.canonical)
    ]);
    const words = sortByLongestFirst(notationSystems.japaneseHiragana.regexVocabulary);
    const pattern = new RegExp(`(?:${words.map(escapeRegExp).join("|")})+`, "g");
    const tokens = [];

    for (const match of text.matchAll(pattern)) {
        const source = match[0];

        if (standaloneAmbiguousUnits.has(source)) {
            continue;
        }

        tokens.push(createToken(match.index, match.index + source.length, source, "japaneseHiragana", source.length <= 2 ? 0.55 : 0.75, {
            matchStrategy: "longestVocabularyRun",
            ambiguousStandaloneUnitsSkipped: [...standaloneAmbiguousUnits],
            requiresSyntaxValidation: true
        }));
    }

    return tokens;
}

function readHiraganaDigitSequenceAt(text, start, words) {
    const readings = [];
    let index = start;

    while (index < text.length) {
        const word = words.find((entry) => text.startsWith(entry, index));

        if (!word) {
            break;
        }

        readings.push(word);
        index += word.length;
    }

    return {
        readings,
        end: index,
        source: text.slice(start, index)
    };
}

function detectJapaneseHiraganaDigitSequence(text) {
    const tokens = [];
    const words = sortByLongestFirst(Object.keys(hiraganaDigitSequenceVocabulary));

    for (let index = 0; index < text.length; index++) {
        const matched = readHiraganaDigitSequenceAt(text, index, words);

        if (matched.readings.length < 2) {
            continue;
        }

        if (!matched.readings.some((reading) => hiraganaDigitSequenceZeroWords.has(reading))) {
            continue;
        }

        const previousMatched = index > 0
            ? readHiraganaDigitSequenceAt(text, index - 1, words).end > index
            : false;

        if (previousMatched) {
            continue;
        }

        tokens.push(createToken(index, matched.end, matched.source, "japaneseHiraganaDigitSequence", 0.92, {
            matchStrategy: "zeroReadingDigitSequence",
            digitReadings: matched.readings,
            zeroReadings: matched.readings.filter((reading) => hiraganaDigitSequenceZeroWords.has(reading))
        }));

        index = matched.end - 1;
    }

    return tokens;
}

function detectSI(text) {
    const tokens = [];
    const prefixes = sortByLongestFirst(Object.keys(SI_PREFIXES));
    const baseUnits = sortByLongestFirst(Object.keys(SI_BASE_UNITS));
    const prefixPattern = prefixes.map(escapeRegExp).join("|");
    const baseUnitPattern = baseUnits.map(escapeRegExp).join("|");
    const siPattern = new RegExp(`[-−]?(?:[0-9０-９]+(?:[.．][0-9０-９]+)?)(${prefixPattern})(${baseUnitPattern})(?![A-Za-zμµ])`, "g");

    for (const match of text.matchAll(siPattern)) {
        const source = match[0];
        const numericPart = source.slice(0, source.length - match[1].length - match[2].length);
        const prefixSource = match[1];
        const prefixDefinition = SI_PREFIXES[prefixSource];
        const baseUnit = match[2];

        tokens.push(createToken(match.index, match.index + source.length, source, "si", 0.95, {
            numericPart,
            prefix: prefixDefinition.canonical || prefixSource,
            prefixSource,
            prefixAlias: prefixSource !== (prefixDefinition.canonical || prefixSource) ? prefixSource : null,
            baseUnit
        }));
    }

    return tokens;
}

function detectAllNotationCandidates(text) {
    const candidates = [
        ...detectJapaneseMixedNumber(text),
        ...detectRomanSuffix(text),
        ...detectArabic(text),
        ...detectRoman(text),
        ...detectEnglishCardinal(text),
        ...detectEnglishOrdinal(text),
        ...detectEnglishMonth(text),
        ...detectJapaneseMonth(text),
        ...detectJapaneseKanji(text),
        ...detectJapaneseDaiji(text),
        ...detectJapaneseHiraganaDigitSequence(text),
        ...detectJapaneseHiragana(text),
        ...detectSI(text)
    ];

    return resolveCandidateOverlaps(candidates);
}

const notationDetectionTests = [
    {
        input: "10月とOctoberとX",
        expectedTypes: ["arabic", "englishMonthName", "roman"]
    },
    {
        input: "one hundred ten",
        expectedSources: ["one hundred ten"]
    },
    {
        input: "one hundred tenth",
        expectedTypes: ["englishOrdinal"]
    },
    {
        input: "MMCC",
        expectedTypes: ["roman"]
    },
    {
        input: "FFX",
        expectedTypes: ["romanSuffix"]
    },
    {
        input: "October",
        mustNotContain: [
            { type: "roman", source: "C" }
        ]
    },
    {
        input: "無量大数",
        expectedTokenCount: 0
    },
    {
        input: "万",
        expectedTokenCount: 0
    },
    {
        input: "一万",
        expectedSources: ["一万"]
    },
    {
        input: "一無量大数",
        expectedSources: ["一無量大数"]
    },
    {
        input: "まん",
        expectedTokenCount: 0
    },
    {
        input: "いちまん",
        expectedSources: ["いちまん"]
    },
    {
        input: "記載",
        mustNotContain: [
            { type: "japaneseKanji", source: "載" }
        ]
    },
    {
        input: "掲載",
        expectedTokenCount: 0
    },
    {
        input: "連載",
        expectedTokenCount: 0
    },
    {
        input: "一載",
        expectedSources: ["一載"]
    },
    {
        input: "十載",
        expectedSources: ["十載"]
    },
    {
        input: "載",
        expectedTokenCount: 0
    },
    {
        input: "100万本",
        expectedSources: ["100万"]
    },
    {
        input: "一億千百十一万",
        expectedTypes: ["japaneseKanji"]
    },
    {
        input: "拾萬",
        expectedTypes: ["japaneseDaiji"]
    },
    {
        input: "じゅうといちおく",
        expectedTypes: ["japaneseHiragana"]
    },
    {
        input: "ぜろいちにぜろ",
        expectedTypes: ["japaneseHiraganaDigitSequence"]
    },
    {
        input: "いちにさん",
        mustNotContain: [
            { type: "japaneseHiraganaDigitSequence", source: "いちにさん" }
        ]
    },
    {
        input: "ここに置いておく",
        mustNotContain: [
            { type: "japaneseHiragana", source: "おく" }
        ]
    },
    {
        input: "見た目がとてもきれいなんですよね",
        mustNotContain: [
            { type: "japaneseHiragana", source: "れい" }
        ]
    },
    {
        input: "10kgと10mm",
        expectedTypes: ["si", "si"]
    },
    {
        input: "10mmHg 10ms 10mol 10万円 10m先",
        mustNotContain: [
            { type: "si", source: "10mmHg" },
            { type: "si", source: "10ms" },
            { type: "si", source: "10mol" },
            { type: "si", source: "10m" }
        ]
    },
    {
        input: "million October MMCC 2020",
        expectedTypes: ["englishCardinal", "englishMonthName", "roman", "arabic"]
    },
    {
        input: "今回の目標はone million個の0を処理し、進捗をhundredthまで記録することです。",
        expectedSources: ["one million", "0", "hundredth"]
    }
];

function runNotationDetectionTests() {
    return notationDetectionTests.map((test) => {
        const tokens = detectAllNotationCandidates(test.input);
        const types = tokens.map((token) => token.type);
        const sources = tokens.map((token) => token.source);
        const rangesAreValid = tokens.every((token) => test.input.slice(token.start, token.end) === token.source);
        const expectedTypesPass = !test.expectedTypes || test.expectedTypes.every((type, index) => types[index] === type);
        const expectedSourcesPass = !test.expectedSources || test.expectedSources.every((source, index) => sources[index] === source);
        const expectedTokenCountPass = test.expectedTokenCount == null || tokens.length === test.expectedTokenCount;
        const mustNotContainPass = !test.mustNotContain || test.mustNotContain.every((blocked) => {
            return !tokens.some((token) => token.type === blocked.type && token.source === blocked.source);
        });

        return {
            input: test.input,
            pass: rangesAreValid && expectedTypesPass && expectedSourcesPass && expectedTokenCountPass && mustNotContainPass,
            tokens
        };
    });
}

function createParseResult(token, valid, representation, style = {}, errors = []) {
    return {
        ...token,
        valid,
        representation,
        style,
        errors
    };
}

function parseArabicNumericString(source) {
    const fullWidthDigits = "０１２３４５６７８９";
    let digitWidth = "half";
    let hasHalfWidth = false;
    let hasFullWidth = false;
    let normalized = "";

    for (const character of source) {
        const fullWidthIndex = fullWidthDigits.indexOf(character);

        if (fullWidthIndex >= 0) {
            hasFullWidth = true;
            normalized += String(fullWidthIndex);
        } else if (/[0-9]/.test(character)) {
            hasHalfWidth = true;
            normalized += character;
        } else if (character === "−") {
            normalized += "-";
        } else if (character === "．") {
            normalized += ".";
        } else {
            normalized += character;
        }
    }

    if (hasHalfWidth && hasFullWidth) {
        digitWidth = "mixed";
    } else if (hasFullWidth) {
        digitWidth = "full";
    }

    const match = normalized.match(/^(-)?([0-9]+)(?:\.([0-9]+))?$/);

    if (!match) {
        return {
            valid: false,
            representation: null,
            style: { digitWidth },
            errors: ["Invalid Arabic numeric token"]
        };
    }

    return {
        valid: true,
        representation: {
            kind: "decimalString",
            sign: match[1] || "",
            integerDigits: match[2],
            fractionDigits: match[3] || "",
            decimalSeparator: match[3] == null ? null : "."
        },
        style: {
            digitWidth,
            originalDigits: source
        },
        errors: []
    };
}

function parseArabicToken(token) {
    const parsed = parseArabicNumericString(token.source);
    return createParseResult(token, parsed.valid, parsed.representation, parsed.style, parsed.errors);
}

const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

const unicodeRomanToAscii = {
    "Ⅰ": "I",
    "Ⅱ": "II",
    "Ⅲ": "III",
    "Ⅳ": "IV",
    "Ⅴ": "V",
    "Ⅵ": "VI",
    "Ⅶ": "VII",
    "Ⅷ": "VIII",
    "Ⅸ": "IX",
    "Ⅹ": "X",
    "Ⅺ": "XI",
    "Ⅻ": "XII",
    "Ⅼ": "L",
    "Ⅽ": "C",
    "Ⅾ": "D",
    "Ⅿ": "M"
};

function romanToInteger(roman) {
    let total = 0;

    for (let index = 0; index < roman.length; index++) {
        const current = romanValues[roman[index]];
        const next = romanValues[roman[index + 1]] || 0;

        total += current < next ? -current : current;
    }

    return total;
}

function integerToRoman(value) {
    const pairs = [
        [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
        [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
        [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]
    ];
    let rest = value;
    let result = "";

    for (const [amount, symbol] of pairs) {
        while (rest >= amount) {
            result += symbol;
            rest -= amount;
        }
    }

    return result;
}

function parseRomanToken(token) {
    const source = token.source;
    const hasUnicode = /[ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫⅬⅭⅮⅯ]/.test(source);
    const hasAscii = /[IVXLCDMivxlcdm]/.test(source);

    if (hasUnicode && hasAscii) {
        return createParseResult(token, false, null, { alphabet: "mixed" }, ["Unicode and ASCII Roman numerals are mixed"]);
    }

    const normalized = hasUnicode
        ? [...source].map((character) => unicodeRomanToAscii[character]).join("")
        : source.toUpperCase();

    if (!normalized || normalized.includes("undefined")) {
        return createParseResult(token, false, null, { alphabet: hasUnicode ? "unicode" : "ascii" }, ["Unsupported Unicode Roman numeral"]);
    }

    const standardRomanPattern = /^(?=.)M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

    if (!standardRomanPattern.test(normalized)) {
        return createParseResult(token, false, null, {
            alphabet: hasUnicode ? "unicode" : "ascii",
            normalized
        }, ["Roman numeral is not a standard 1-3999 form"]);
    }

    const value = romanToInteger(normalized);
    const regenerated = integerToRoman(value);

    if (regenerated !== normalized) {
        return createParseResult(token, false, null, {
            alphabet: hasUnicode ? "unicode" : "ascii",
            normalized
        }, ["Roman numeral regeneration did not match input"]);
    }

    return createParseResult(token, true, {
        kind: "decimalString",
        sign: "",
        integerDigits: String(value),
        fractionDigits: "",
        decimalSeparator: null
    }, {
        alphabet: hasUnicode ? "unicode" : "ascii",
        casePattern: source === source.toUpperCase() ? "upper" : source === source.toLowerCase() ? "lower" : "mixed",
        normalized
    });
}

function getEnglishCasePattern(source) {
    const letters = source.replace(/[^A-Za-z]/g, "");

    if (letters === letters.toLowerCase()) return "lower";
    if (letters === letters.toUpperCase()) return "upper";
    if (source.split(/\s+|-/).every((word) => word[0] === word[0]?.toUpperCase())) return "title";
    return "mixed";
}

const englishUnderTwentyMap = Object.fromEntries(englishCardinalUnderTwenty.map((entry) => [entry.canonical, Number(entry.value)]));
const englishTensMap = Object.fromEntries(englishTens.map((entry) => [entry.canonical, Number(entry.value)]));
const englishLargeUnitMap = new Map();

for (const unit of englishLargeUnitStems) {
    englishLargeUnitMap.set(unit.canonical, unit.index);
    for (const alias of unit.aliases) {
        englishLargeUnitMap.set(alias, unit.index);
    }
}

const englishOrdinalToCardinalMap = new Map();

for (const entry of englishOrdinalUnderTwenty) {
    englishOrdinalToCardinalMap.set(entry.canonical, entry.cardinal);
}

for (const entry of englishTensOrdinals) {
    englishOrdinalToCardinalMap.set(entry.canonical, entry.cardinal);
}

englishOrdinalToCardinalMap.set("hundredth", "hundred");
for (const unit of englishLargeUnitStems) {
    englishOrdinalToCardinalMap.set(unit.ordinalCanonical, unit.canonical);
    for (let index = 0; index < unit.ordinalAliases.length; index++) {
        englishOrdinalToCardinalMap.set(unit.ordinalAliases[index], unit.aliases[index]);
    }
}

function normalizeEnglishWords(source) {
    return source.toLowerCase().replace(/-/g, " ").split(/\s+/).filter((word) => word && word !== "and");
}

function parseEnglishUnderHundred(words) {
    if (words.length === 0) return { valid: false, value: 0, errors: ["Empty under-hundred segment"] };

    if (words.length === 1 && englishUnderTwentyMap[words[0]] != null) {
        return { valid: true, value: englishUnderTwentyMap[words[0]], errors: [] };
    }

    if (words.length === 1 && englishTensMap[words[0]] != null) {
        return { valid: true, value: englishTensMap[words[0]], errors: [] };
    }

    if (words.length === 2 && englishTensMap[words[0]] != null && englishUnderTwentyMap[words[1]] >= 1 && englishUnderTwentyMap[words[1]] <= 9) {
        return { valid: true, value: englishTensMap[words[0]] + englishUnderTwentyMap[words[1]], errors: [] };
    }

    return { valid: false, value: 0, errors: [`Invalid under-hundred segment: ${words.join(" ")}`] };
}

function parseEnglishUnderThousand(words) {
    if (words.length === 0) {
        return { valid: false, value: 0, errors: ["Empty three-digit group"] };
    }

    const hundredIndex = words.indexOf("hundred");

    if (hundredIndex >= 0) {
        if (words.indexOf("hundred", hundredIndex + 1) >= 0) {
            return { valid: false, value: 0, errors: ["Repeated hundred"] };
        }

        const before = words.slice(0, hundredIndex);
        const after = words.slice(hundredIndex + 1);
        let value = 100;

        if (before.length > 0) {
            if (before.length !== 1 || englishUnderTwentyMap[before[0]] == null || englishUnderTwentyMap[before[0]] < 1 || englishUnderTwentyMap[before[0]] > 9) {
                return { valid: false, value: 0, errors: [`Invalid hundred multiplier: ${before.join(" ")}`] };
            }

            value = englishUnderTwentyMap[before[0]] * 100;
        }

        if (after.length > 0) {
            const parsedAfter = parseEnglishUnderHundred(after);
            if (!parsedAfter.valid) return parsedAfter;
            value += parsedAfter.value;
        }

        return { valid: true, value, errors: [] };
    }

    return parseEnglishUnderHundred(words);
}

function buildGroupedInteger(groupMap, groupSize) {
    const maxUnitIndex = Math.max(...groupMap.keys());
    const groups = [];

    for (let unitIndex = maxUnitIndex; unitIndex >= 0; unitIndex--) {
        if (groupMap.has(unitIndex)) {
            const rawDigits = String(groupMap.get(unitIndex));
            groups.push({
                unitIndex,
                digits: unitIndex === maxUnitIndex ? rawDigits : rawDigits.padStart(groupSize, "0"),
                explicitLength: rawDigits.length
            });
        } else {
            groups.push({
                unitIndex,
                digits: "0".repeat(groupSize),
                explicitLength: groupSize,
                omitted: true
            });
        }
    }

    const decimalString = groups.map((group, index) => {
        return index === 0 ? group.digits : group.digits.padStart(groupSize, "0");
    }).join("");

    return {
        kind: "groupedInteger",
        groupSize,
        groups,
        decimalString
    };
}

function parseEnglishCardinalWords(words) {
    const groups = new Map();
    let segment = [];
    let lastLargeIndex = Infinity;
    let sawLargeUnit = false;

    for (const word of words) {
        const largeIndex = englishLargeUnitMap.get(word);

        if (largeIndex != null) {
            if (largeIndex >= lastLargeIndex) {
                return { valid: false, representation: null, errors: ["Large units must be in descending order and cannot repeat"] };
            }

            const segmentWords = segment.length === 0 ? ["one"] : segment;
            const parsedSegment = parseEnglishUnderThousand(segmentWords);
            if (!parsedSegment.valid) return { valid: false, representation: null, errors: parsedSegment.errors };

            groups.set(largeIndex, parsedSegment.value);
            lastLargeIndex = largeIndex;
            sawLargeUnit = true;
            segment = [];
        } else {
            segment.push(word);
        }
    }

    if (segment.length > 0) {
        const parsedSegment = parseEnglishUnderThousand(segment);
        if (!parsedSegment.valid) return { valid: false, representation: null, errors: parsedSegment.errors };
        groups.set(0, parsedSegment.value);
    } else if (!sawLargeUnit) {
        return { valid: false, representation: null, errors: ["No English cardinal content"] };
    }

    const representation = buildGroupedInteger(groups, 3);

    return { valid: true, representation, errors: [] };
}

function parseEnglishCardinalToken(token) {
    const words = normalizeEnglishWords(token.source);
    const parsed = parseEnglishCardinalWords(words);

    return createParseResult(token, parsed.valid, parsed.representation, {
        casePattern: getEnglishCasePattern(token.source),
        usesHyphen: token.source.includes("-"),
        usesAnd: /\band\b/i.test(token.source)
    }, parsed.errors);
}

function parseEnglishOrdinalToken(token) {
    const words = normalizeEnglishWords(token.source);
    const ordinalIndexes = words
        .map((word, index) => englishOrdinalToCardinalMap.has(word) ? index : -1)
        .filter((index) => index >= 0);

    if (ordinalIndexes.length !== 1 || ordinalIndexes[0] !== words.length - 1) {
        return createParseResult(token, false, null, {
            casePattern: getEnglishCasePattern(token.source),
            usesHyphen: token.source.includes("-"),
            usesAnd: /\band\b/i.test(token.source)
        }, ["Ordinal form must appear exactly once at the end"]);
    }

    const cardinalWords = [...words];
    cardinalWords[cardinalWords.length - 1] = englishOrdinalToCardinalMap.get(cardinalWords[cardinalWords.length - 1]);
    const parsed = parseEnglishCardinalWords(cardinalWords);

    return createParseResult(token, parsed.valid, parsed.representation, {
        casePattern: getEnglishCasePattern(token.source),
        usesHyphen: token.source.includes("-"),
        usesAnd: /\band\b/i.test(token.source),
        ordinalWord: words[words.length - 1]
    }, parsed.errors);
}

function parseEnglishMonthToken(token) {
    const sourceLower = token.source.toLowerCase();
    const entry = notationSystems.englishMonthName.specialForms.find((item) => {
        return item.aliases.some((alias) => alias.toLowerCase() === sourceLower);
    });

    if (!entry) {
        return createParseResult(token, false, null, {}, ["Unknown English month"]);
    }

    return createParseResult(token, true, {
        kind: "mappedValue",
        numericValue: entry.value,
        sourceKey: token.source,
        targetKey: entry.value === "10" ? "November" : null
    }, {
        form: token.metadata.form,
        casePattern: getEnglishCasePattern(token.source)
    });
}

function parseJapaneseMonthToken(token) {
    const entry = notationSystems.japaneseMonthName.specialForms.find((item) => item.aliases.includes(token.source));

    if (!entry) {
        return createParseResult(token, false, null, {}, ["Unknown Japanese month"]);
    }

    return createParseResult(token, true, {
        kind: "mappedValue",
        numericValue: entry.value,
        sourceKey: token.source,
        targetKey: entry.value === "10" ? "霜月" : null
    }, {
        form: "traditionalJapaneseMonth"
    });
}

function makeJapaneseLexicon({ digits, smallUnits, largeUnits, fixedValues }) {
    const entries = [];

    for (const [word, value] of Object.entries(digits)) entries.push({ word, type: "digit", value });
    for (const [word, power] of Object.entries(smallUnits)) entries.push({ word, type: "smallUnit", power });
    for (const unit of largeUnits) {
        entries.push({ word: unit.canonical, type: "largeUnit", unitIndex: unit.index, exponent: unit.exponent, canonical: unit.canonical });
        for (const alias of unit.aliases || []) {
            entries.push({ word: alias, type: "largeUnit", unitIndex: unit.index, exponent: unit.exponent, canonical: unit.canonical, alias });
        }
    }
    for (const [word, value] of Object.entries(fixedValues || {})) entries.push({ word, type: "fixed", value });

    return entries.sort((a, b) => b.word.length - a.word.length);
}

const japaneseKanjiLexicon = makeJapaneseLexicon({
    digits: { "〇": 0, "零": 0, "一": 1, "二": 2, "三": 3, "四": 4, "五": 5, "六": 6, "七": 7, "八": 8, "九": 9 },
    smallUnits: { "十": 1, "百": 2, "千": 3 },
    largeUnits: japaneseLargeUnits,
    fixedValues: {}
});

const japaneseDaijiLexicon = makeJapaneseLexicon({
    digits: { "零": 0, "壱": 1, "壹": 1, "弐": 2, "貳": 2, "参": 3, "參": 3 },
    smallUnits: { "拾": 1, "佰": 2, "陌": 2, "仟": 3, "阡": 3 },
    largeUnits: [{ index: 1, exponent: 4, canonical: "萬", aliases: [] }],
    fixedValues: { "廿": 20, "卅": 30, "卌": 40 }
});

const japaneseHiraganaLexicon = makeJapaneseLexicon({
    digits: { "ぜろ": 0, "れい": 0, "いち": 1, "に": 2, "さん": 3, "よん": 4, "し": 4, "ご": 5, "ろく": 6, "ろっ": 6, "なな": 7, "しち": 7, "はち": 8, "はっ": 8, "きゅう": 9, "く": 9 },
    smallUnits: { "じゅう": 1, "ひゃく": 2, "びゃく": 2, "ぴゃく": 2, "せん": 3, "ぜん": 3, "っせん": 3 },
    largeUnits: japaneseHiraganaLargeUnits.map((unit, index) => ({ ...unit, index: index + 1, aliases: [] })),
    fixedValues: {}
});

function tokenizeJapaneseNumber(source, lexicon) {
    const tokens = [];
    let index = 0;

    while (index < source.length) {
        const entry = lexicon.find((item) => source.startsWith(item.word, index));

        if (!entry) {
            return { valid: false, tokens, errors: [`Unknown Japanese number part at index ${index}`] };
        }

        tokens.push(entry);
        index += entry.word.length;
    }

    return { valid: true, tokens, errors: [] };
}

function parseJapaneseSmallBlock(tokens) {
    if (tokens.length === 0) return { valid: false, value: 0, errors: ["Empty Japanese group"] };

    let total = 0;
    let pendingDigits = "";
    let previousPower = Infinity;

    for (const token of tokens) {
        if (token.type === "fixed") {
            if (pendingDigits) return { valid: false, value: 0, errors: ["Fixed value cannot follow pending digits"] };
            total += token.value;
        } else if (token.type === "digit") {
            pendingDigits += String(token.value);
        } else if (token.type === "smallUnit") {
            if (token.power >= previousPower) {
                return { valid: false, value: 0, errors: ["Small units must be in descending order"] };
            }

            const multiplier = pendingDigits ? Number(pendingDigits) : 1;
            if (multiplier > 9) {
                return { valid: false, value: 0, errors: ["Small unit multiplier must be a single digit"] };
            }

            total += multiplier * (10 ** token.power);
            pendingDigits = "";
            previousPower = token.power;
        } else {
            return { valid: false, value: 0, errors: ["Large unit cannot appear inside a small block"] };
        }
    }

    if (pendingDigits) {
        total += Number(pendingDigits);
    }

    if (total >= 10000) {
        return { valid: false, value: 0, errors: ["Japanese group exceeds four digits"] };
    }

    return { valid: true, value: total, errors: [] };
}

function parseJapaneseInteger(source, lexicon, groupSize) {
    const tokenized = tokenizeJapaneseNumber(source, lexicon);
    if (!tokenized.valid) return { valid: false, representation: null, style: {}, errors: tokenized.errors };

    const groups = new Map();
    let segment = [];
    let lastLargeIndex = Infinity;
    let sawLargeUnit = false;
    const usedAliases = [];

    for (const token of tokenized.tokens) {
        if (token.type === "largeUnit") {
            if (token.unitIndex >= lastLargeIndex) {
                return { valid: false, representation: null, style: { usedAliases }, errors: ["Large units must be in descending order and cannot repeat"] };
            }

            if (segment.length === 0) {
                return { valid: false, representation: null, style: { usedAliases }, errors: ["Large unit requires an explicit coefficient block"] };
            }

            const parsedSegment = parseJapaneseSmallBlock(segment);

            if (!parsedSegment.valid) return { valid: false, representation: null, style: { usedAliases }, errors: parsedSegment.errors };

            groups.set(token.unitIndex, parsedSegment.value);
            if (token.alias) usedAliases.push({ source: token.word, canonical: token.canonical });
            lastLargeIndex = token.unitIndex;
            sawLargeUnit = true;
            segment = [];
        } else {
            segment.push(token);
        }
    }

    if (segment.length > 0) {
        const parsedSegment = parseJapaneseSmallBlock(segment);
        if (!parsedSegment.valid) return { valid: false, representation: null, style: { usedAliases }, errors: parsedSegment.errors };
        groups.set(0, parsedSegment.value);
    } else if (!sawLargeUnit) {
        return { valid: false, representation: null, style: { usedAliases }, errors: ["No Japanese numeric content"] };
    }

    const representation = buildGroupedInteger(groups, groupSize);

    return { valid: true, representation, style: { usedAliases }, errors: [] };
}

function normalizeArabicIntegerDigits(source) {
    return source.replace(/[０-９]/g, (digit) => String("０１２３４５６７８９".indexOf(digit)));
}

function getJapaneseLargeUnitEntry(source, index) {
    return sortByLongestFirst(japaneseLargeUnits.flatMap((unit) => [unit.canonical, ...(unit.aliases || [])]))
        .map((word) => {
            const unit = japaneseLargeUnits.find((entry) => entry.canonical === word || (entry.aliases || []).includes(word));
            return { word, unit };
        })
        .find((entry) => source.startsWith(entry.word, index));
}

function parseJapaneseMixedSegment(segment) {
    if (/^[0-9０-９]+$/.test(segment)) {
        const digits = normalizeArabicIntegerDigits(segment);
        const value = Number(digits);

        if (!Number.isInteger(value) || value >= 10000) {
            return { valid: false, value: 0, errors: ["Mixed Japanese segment must be a four-digit block"] };
        }

        return { valid: true, value, errors: [] };
    }

    const parsed = parseJapaneseInteger(segment, japaneseKanjiLexicon, 4);

    if (!parsed.valid || parsed.representation.groups.length !== 1 || parsed.representation.groups[0].unitIndex !== 0) {
        return { valid: false, value: 0, errors: parsed.errors.length ? parsed.errors : ["Mixed Japanese segment must not contain large units"] };
    }

    return { valid: true, value: Number(parsed.representation.groups[0].digits), errors: [] };
}

function parseJapaneseMixedNumberToken(token) {
    const groups = new Map();
    let index = 0;
    let segment = "";
    let sawLargeUnit = false;
    let lastLargeIndex = Infinity;

    while (index < token.source.length) {
        const largeEntry = getJapaneseLargeUnitEntry(token.source, index);

        if (largeEntry) {
            if (!segment) {
                return createParseResult(token, false, null, {}, ["Japanese mixed number is missing a segment before a large unit"]);
            }

            if (largeEntry.unit.index >= lastLargeIndex) {
                return createParseResult(token, false, null, {}, ["Mixed Japanese large units must be in descending order and cannot repeat"]);
            }

            const parsedSegment = parseJapaneseMixedSegment(segment);
            if (!parsedSegment.valid) {
                return createParseResult(token, false, null, {}, parsedSegment.errors);
            }

            groups.set(largeEntry.unit.index, parsedSegment.value);
            lastLargeIndex = largeEntry.unit.index;
            sawLargeUnit = true;
            segment = "";
            index += largeEntry.word.length;
        } else {
            segment += token.source[index];
            index += token.source[index].length;
        }
    }

    if (!sawLargeUnit) {
        return createParseResult(token, false, null, {}, ["Japanese mixed number must contain a large unit"]);
    }

    if (segment) {
        const parsedSegment = parseJapaneseMixedSegment(segment);
        if (!parsedSegment.valid) {
            return createParseResult(token, false, null, {}, parsedSegment.errors);
        }
        groups.set(0, parsedSegment.value);
    }

    return createParseResult(token, true, {
        ...buildGroupedInteger(groups, 4),
        outputStyle: "arabic-with-japanese-large-units"
    }, {
        outputStyle: "arabic-with-japanese-large-units"
    });
}

function parseJapaneseDigitCharacter(character) {
    const kanjiDigits = { "〇": 0, "零": 0, "一": 1, "二": 2, "三": 3, "四": 4, "五": 5, "六": 6, "七": 7, "八": 8, "九": 9 };
    const fullWidthDigits = "０１２３４５６７８９";

    if (kanjiDigits[character] != null) return kanjiDigits[character];
    if (/[0-9]/.test(character)) return Number(character);

    const fullWidthIndex = fullWidthDigits.indexOf(character);
    if (fullWidthIndex >= 0) return fullWidthIndex;

    return null;
}

function getJapaneseFractionCoefficientSystem(character) {
    if (/[0-9]/.test(character)) return "arabic";
    if (/[０-９]/.test(character)) return "fullwidth-arabic";
    return "kanji";
}

function parseJapaneseFractionalToken(source) {
    const unitMap = new Map(japaneseFractionUnits.map((unit, index) => [unit.kanji, index + 1]));
    const sortedUnits = sortByLongestFirst(japaneseFractionUnits.map((unit) => unit.kanji));
    let index = 0;
    const fractionDigits = [];
    const coefficientSystems = [];

    while (index < source.length) {
        const coefficient = source[index];
        const digit = parseJapaneseDigitCharacter(source[index]);

        if (digit == null) {
            return { valid: false, representation: null, style: {}, errors: [`Expected fraction digit at index ${index}`] };
        }

        coefficientSystems.push(getJapaneseFractionCoefficientSystem(coefficient));
        index += source[index].length;

        const unit = sortedUnits.find((word) => source.startsWith(word, index));
        if (!unit) {
            return { valid: false, representation: null, style: {}, errors: [`Expected fraction unit at index ${index}`] };
        }

        const position = unitMap.get(unit);
        fractionDigits[position - 1] = String(digit);
        index += unit.length;
    }

    const maxPosition = fractionDigits.length;
    const normalizedFractionDigits = Array.from({ length: maxPosition }, (_, position) => fractionDigits[position] || "0").join("");

    return {
        valid: true,
        representation: {
            kind: "decimalString",
            sign: "",
            integerDigits: "0",
            fractionDigits: normalizedFractionDigits,
            decimalSeparator: "."
        },
        style: {
            numericSystem: "japaneseFraction",
            fractionUnitSystem: "kanji",
            coefficientNumeralSystem: coefficientSystems[0] || "kanji",
            mixedCoefficientStyle: new Set(coefficientSystems).size > 1
        },
        errors: []
    };
}

function parseJapaneseKanjiToken(token) {
    if (japaneseFractionUnits.some((unit) => token.source.includes(unit.kanji))) {
        const parsedFraction = parseJapaneseFractionalToken(token.source);
        return createParseResult(token, parsedFraction.valid, parsedFraction.representation, parsedFraction.style, parsedFraction.errors);
    }

    const parsed = parseJapaneseInteger(token.source, japaneseKanjiLexicon, 4);
    return createParseResult(token, parsed.valid, parsed.representation, parsed.style, parsed.errors);
}

function parseJapaneseDaijiToken(token) {
    const parsed = parseJapaneseInteger(token.source, japaneseDaijiLexicon, 4);
    return createParseResult(token, parsed.valid, parsed.representation, {
        ...parsed.style,
        usesFormalNumerals: true
    }, parsed.errors);
}

function parseJapaneseHiraganaToken(token) {
    if (new Set(["れい", "おく", "じょう", "こう", "せい", "さい", "に", "し", "ご", "く"]).has(token.source)) {
        return createParseResult(token, false, null, {}, ["Standalone ambiguous hiragana large unit is not parsed"]);
    }

    const parsed = parseJapaneseInteger(token.source, japaneseHiraganaLexicon, 4);
    return createParseResult(token, parsed.valid, parsed.representation, parsed.style, parsed.errors);
}

function parseJapaneseHiraganaDigitSequenceToken(token) {
    const readings = token.metadata.digitReadings || readHiraganaDigitSequenceAt(
        token.source,
        0,
        sortByLongestFirst(Object.keys(hiraganaDigitSequenceVocabulary))
    ).readings;

    if (readings.length < 2 || !readings.some((reading) => hiraganaDigitSequenceZeroWords.has(reading))) {
        return createParseResult(token, false, null, {}, ["Hiragana digit sequence must contain at least two readings and one zero reading"]);
    }

    const digits = readings.map((reading) => hiraganaDigitSequenceVocabulary[reading]).join("");

    if (digits.length !== readings.length || /undefined/.test(digits)) {
        return createParseResult(token, false, null, {}, ["Unknown hiragana digit sequence reading"]);
    }

    return createParseResult(token, true, {
        kind: "digitSequence",
        digits
    }, {
        zeroReadings: readings.filter((reading) => hiraganaDigitSequenceZeroWords.has(reading)),
        digitReadings: readings
    });
}

function parseRomanSuffixToken(token) {
    const romanToken = createToken(token.start + token.metadata.prefix.length, token.end, token.metadata.romanSource, "roman", token.confidence, {
        alphabet: "ascii",
        requiresValidation: true
    });
    const parsed = parseRomanToken(romanToken);

    return createParseResult(token, parsed.valid, parsed.representation, {
        ...parsed.style,
        prefix: token.metadata.prefix,
        romanSource: token.metadata.romanSource,
        identifierStyle: "uppercaseRomanSuffix"
    }, parsed.errors);
}

function parseSIToken(token) {
    const prefixEntry = SI_PREFIXES[token.metadata.prefixSource];
    const baseUnitEntry = SI_BASE_UNITS[token.metadata.baseUnit];

    if (!prefixEntry || !baseUnitEntry) {
        return createParseResult(token, false, null, {}, [`Unknown SI prefix: ${token.metadata.prefix}`]);
    }

    const parsedNumber = parseArabicNumericString(token.metadata.numericPart);
    if (!parsedNumber.valid) {
        return createParseResult(token, false, null, parsedNumber.style, parsedNumber.errors);
    }

    return createParseResult(token, true, {
        kind: "siValue",
        numericPart: {
            sign: parsedNumber.representation.sign,
            integerDigits: parsedNumber.representation.integerDigits,
            fractionDigits: parsedNumber.representation.fractionDigits
        },
        prefix: {
            source: token.metadata.prefixSource,
            canonical: token.metadata.prefix,
            exponent: prefixEntry.exponent
        },
        baseUnit: token.metadata.baseUnit
    }, {
        digitWidth: parsedNumber.style.digitWidth,
        prefixAlias: token.metadata.prefixAlias,
        deterministicSplit: true
    });
}

const parserRegistry = {
    arabic: parseArabicToken,
    roman: parseRomanToken,
    romanSuffix: parseRomanSuffixToken,
    englishCardinal: parseEnglishCardinalToken,
    englishOrdinal: parseEnglishOrdinalToken,
    englishMonthName: parseEnglishMonthToken,
    japaneseMonthName: parseJapaneseMonthToken,
    japaneseMixedNumber: parseJapaneseMixedNumberToken,
    japaneseKanji: parseJapaneseKanjiToken,
    japaneseDaiji: parseJapaneseDaijiToken,
    japaneseHiraganaDigitSequence: parseJapaneseHiraganaDigitSequenceToken,
    japaneseHiragana: parseJapaneseHiraganaToken,
    si: parseSIToken
};

function parseNotationToken(token) {
    const parser = parserRegistry[token.type];

    if (!parser) {
        return {
            ...token,
            valid: false,
            representation: null,
            style: {},
            errors: [`Unsupported token type: ${token.type}`]
        };
    }

    try {
        return parser(token);
    } catch (error) {
        return {
            ...token,
            valid: false,
            representation: null,
            style: {},
            errors: [error.message]
        };
    }
}

function parseAllNotationCandidates(text) {
    return detectAllNotationCandidates(text).map(parseNotationToken);
}

function getDecimalForTest(parsed) {
    if (!parsed.valid || !parsed.representation) return null;

    if (parsed.representation.kind === "decimalString") {
        return `${parsed.representation.sign}${parsed.representation.integerDigits}${parsed.representation.fractionDigits ? `.${parsed.representation.fractionDigits}` : ""}`;
    }

    if (parsed.representation.kind === "groupedInteger") {
        return parsed.representation.decimalString;
    }

    if (parsed.representation.kind === "mappedValue") {
        return parsed.representation.numericValue;
    }

    return null;
}

const notationParsingTests = [
    ["10", true, "10"],
    ["0010", true, "0010"],
    ["２０２０", true, "2020"],
    ["X", true, "10"],
    ["MMCC", true, "2200"],
    ["MCMX", true, "1910"],
    ["IIII", false, null],
    ["VX", false, null],
    ["ten", true, "10"],
    ["eighteen", true, "18"],
    ["one hundred ten", true, "110"],
    ["hundred", true, "100"],
    ["thousand", true, "1000"],
    ["hundred hundred", false, null],
    ["tenth", true, "10"],
    ["eighteenth", true, "18"],
    ["hundredth", true, "100"],
    ["one hundred eleventh", true, "111"],
    ["十", true, "10"],
    ["十二", true, "12"],
    ["百", true, "100"],
    ["一億", true, null],
    ["三億五万", true, null],
    ["百億万", false, null],
    ["拾", true, "10"],
    ["廿", true, "20"],
    ["壱佰", true, "100"],
    ["じゅう", true, "10"],
    ["じゅうに", true, "12"],
    ["いちおく", true, null],
    ["おく", false, null],
    ["October", true, "10"],
    ["Oct", true, "10"],
    ["神無月", true, "10"],
    ["10kg", true, null],
    ["10mm", true, null]
];

function runNotationParsingTests() {
    return notationParsingTests.map(([input, expectedValid, expectedDecimal]) => {
        const detected = detectAllNotationCandidates(input);
        const parsed = detected.length > 0
            ? parseNotationToken(detected[0])
            : createParseResult(createToken(0, input.length, input, "none", 0, {}), false, null, {}, ["No token detected"]);
        const decimal = getDecimalForTest(parsed);
        const groupedExpectationPass = expectedDecimal !== null || !expectedValid || parsed.representation?.kind === "groupedInteger" || parsed.representation?.kind === "siValue";

        return {
            input,
            pass: parsed.valid === expectedValid && (expectedDecimal === null || decimal === expectedDecimal) && groupedExpectationPass,
            parsed
        };
    });
}

function runNotationParsingEdgeTests() {
    const juubun = parseAllNotationCandidates("十分です");
    const oku = parseAllNotationCandidates("ここに置いておく");
    const october = parseAllNotationCandidates("October");
    const million = parseAllNotationCandidates("million");
    const mixedRoman = parseRomanToken(createToken(0, 2, "ⅠX", "roman", 0.5, { alphabet: "mixed" }));
    const milli = parseAllNotationCandidates("10mm")[0];
    const mega = parseAllNotationCandidates("10Mm")[0];

    return [
        {
            input: "十分です",
            pass: juubun.length === 1 && juubun[0].source === "十" && juubun[0].valid === true && getDecimalForTest(juubun[0]) === "10",
            parsed: juubun
        },
        {
            input: "ここに置いておく",
            pass: oku.length === 0,
            parsed: oku
        },
        {
            input: "October",
            pass: october.length === 1 && october[0].type === "englishMonthName" && !october.some((token) => token.type === "roman"),
            parsed: october
        },
        {
            input: "million",
            pass: million.length === 1 && million[0].type === "englishCardinal" && !million.some((token) => token.type === "roman"),
            parsed: million
        },
        {
            input: "ⅠX",
            pass: mixedRoman.valid === false,
            parsed: mixedRoman
        },
        {
            input: "10mm / 10Mm",
            pass: milli?.representation?.prefix?.exponent === -3 && mega?.representation?.prefix?.exponent === 6,
            parsed: [milli, mega]
        }
    ];
}

function replaceZeroDigits(value) {
    return value.replaceAll("0", "1");
}

function transformDecimalString(representation) {
    const integerDigits = replaceZeroDigits(representation.integerDigits);
    const fractionDigits = replaceZeroDigits(representation.fractionDigits || "");
    const hasReplaceableZero = integerDigits !== representation.integerDigits || fractionDigits !== (representation.fractionDigits || "");

    return {
        hasReplaceableZero,
        representation: {
            ...representation,
            integerDigits,
            fractionDigits
        }
    };
}

function transformGroupedInteger(representation) {
    let hasReplaceableZero = false;
    const groups = representation.groups.map((group) => {
        const digits = replaceZeroDigits(group.digits);
        hasReplaceableZero = hasReplaceableZero || digits !== group.digits;

        return {
            ...group,
            digits,
            omitted: false,
            transformedFromOmitted: group.omitted === true
        };
    });
    const decimalString = groups.map((group, index) => {
        return index === 0 ? group.digits : group.digits.padStart(representation.groupSize, "0");
    }).join("");

    return {
        hasReplaceableZero,
        representation: {
            ...representation,
            groups,
            decimalString
        }
    };
}

function transformDigitSequence(representation) {
    const digits = replaceZeroDigits(representation.digits);

    return {
        hasReplaceableZero: digits !== representation.digits,
        representation: {
            ...representation,
            digits
        }
    };
}

function transformMappedValue(representation) {
    const numericValue = replaceZeroDigits(representation.numericValue);

    return {
        hasReplaceableZero: numericValue !== representation.numericValue,
        representation: {
            ...representation,
            numericValue
        }
    };
}

function decimalPartsToString(parts) {
    return `${parts.sign || ""}${parts.integerDigits}${parts.fractionDigits ? `.${parts.fractionDigits}` : ""}`;
}

function normalizeDecimalDigits(integerDigits, fractionDigits = "") {
    const digits = `${integerDigits}${fractionDigits}` || "0";
    return {
        digits,
        decimalPos: integerDigits.length
    };
}

function decimalFromDigitsAndPosition(digits, decimalPos) {
    let nextDigits = digits;
    let nextDecimalPos = decimalPos;

    while (nextDecimalPos < 0) {
        nextDigits = `0${nextDigits}`;
        nextDecimalPos++;
    }

    while (nextDecimalPos > nextDigits.length) {
        nextDigits = `${nextDigits}0`;
    }

    const integerDigits = nextDigits.slice(0, nextDecimalPos) || "0";
    const fractionDigits = nextDigits.slice(nextDecimalPos);

    return {
        integerDigits,
        fractionDigits
    };
}

function trimFractionTrailingZeros(fractionDigits) {
    return fractionDigits.replace(/0+$/g, "");
}

function normalizeDecimalString(parts) {
    const integerDigits = (parts.integerDigits || "0").replace(/^0+(?=\d)/, "") || "0";
    const fractionDigits = trimFractionTrailingZeros(parts.fractionDigits || "");

    return {
        sign: parts.sign || "",
        integerDigits,
        fractionDigits
    };
}

function convertToBaseUnitDecimal(numericPart, exponent) {
    const normalized = normalizeDecimalDigits(numericPart.integerDigits, numericPart.fractionDigits);
    const shifted = decimalFromDigitsAndPosition(normalized.digits, normalized.decimalPos + exponent);

    return normalizeDecimalString({
        sign: numericPart.sign,
        integerDigits: shifted.integerDigits,
        fractionDigits: shifted.fractionDigits
    });
}

function transformDigits(decimalParts) {
    return {
        ...decimalParts,
        integerDigits: replaceZeroDigits(decimalParts.integerDigits),
        fractionDigits: replaceZeroDigits(decimalParts.fractionDigits)
    };
}

function formatConvertedQuantity(decimalParts, baseUnit) {
    return `${decimalPartsToString(decimalParts)}${baseUnit}`;
}

function transformSIValue(representation) {
    const baseUnitDecimal = convertToBaseUnitDecimal(representation.numericPart, representation.prefix.exponent);
    const transformedBaseUnitDecimal = transformDigits(baseUnitDecimal);
    const hasReplaceableZero = decimalPartsToString(transformedBaseUnitDecimal) !== decimalPartsToString(baseUnitDecimal)
        || representation.prefix.exponent !== 0;

    return {
        hasReplaceableZero,
        representation: {
            ...representation,
            transformedNumericPart: transformedBaseUnitDecimal,
            actualDecimal: baseUnitDecimal,
            transformedActualDecimal: transformedBaseUnitDecimal
        }
    };
}

function transformParsedToken(parsedToken) {
    if (!parsedToken.valid || !parsedToken.representation) {
        return {
            ...parsedToken,
            transformed: false,
            transformedRepresentation: null,
            hasReplaceableZero: false
        };
    }

    const transformer = {
        decimalString: transformDecimalString,
        groupedInteger: transformGroupedInteger,
        digitSequence: transformDigitSequence,
        mappedValue: transformMappedValue,
        siValue: transformSIValue
    }[parsedToken.representation.kind];

    if (!transformer) {
        return {
            ...parsedToken,
            transformed: false,
            transformedRepresentation: parsedToken.representation,
            hasReplaceableZero: false,
            transformErrors: [`Unsupported representation kind: ${parsedToken.representation.kind}`]
        };
    }

    const transformed = transformer(parsedToken.representation);

    return {
        ...parsedToken,
        transformed: transformed.hasReplaceableZero,
        transformedRepresentation: transformed.representation,
        hasReplaceableZero: transformed.hasReplaceableZero
    };
}

function toFullWidthDigits(value) {
    return value.replace(/[0-9]/g, (digit) => "０１２３４５６７８９"[Number(digit)]).replace("-", "−").replace(".", "．");
}

function formatArabic(transformedToken) {
    const representation = transformedToken.transformedRepresentation || transformedToken.representation;
    let output = decimalPartsToString(representation);

    if (transformedToken.style.digitWidth === "full") {
        output = toFullWidthDigits(output);
    }

    return { success: true, output, errors: [] };
}

function decimalRepresentationToIntegerString(representation) {
    if (representation.kind === "decimalString") {
        if (representation.fractionDigits) return null;
        return `${representation.sign || ""}${representation.integerDigits}`;
    }

    if (representation.kind === "groupedInteger") {
        return representation.decimalString;
    }

    return null;
}

const asciiToUnicodeRoman = Object.fromEntries(
    Object.entries(unicodeRomanToAscii).map(([unicode, ascii]) => [ascii, unicode])
);

function formatRoman(transformedToken) {
    if (!transformedToken.hasReplaceableZero) {
        return { success: true, output: transformedToken.source, errors: [] };
    }

    const representation = transformedToken.transformedRepresentation;
    const integerString = decimalRepresentationToIntegerString(representation);
    const value = Number(integerString);

    if (!Number.isInteger(value) || value < 1 || value > 3999) {
        return {
            success: false,
            output: transformedToken.source,
            errors: ["Transformed value exceeds standard Roman numeral range"]
        };
    }

    const roman = integerToRoman(value);

    if (transformedToken.style.alphabet === "unicode") {
        const unicode = asciiToUnicodeRoman[roman];

        if (!unicode) {
            return {
                success: false,
                output: transformedToken.source,
                errors: ["No registered Unicode Roman numeral for transformed value"]
            };
        }

        return { success: true, output: unicode, errors: [] };
    }

    return { success: true, output: roman, errors: [] };
}

function formatRomanSuffix(transformedToken) {
    if (!transformedToken.hasReplaceableZero) {
        return { success: true, output: transformedToken.source, errors: [] };
    }

    const representation = transformedToken.transformedRepresentation;
    const integerString = decimalRepresentationToIntegerString(representation);
    const value = Number(integerString);

    if (!Number.isInteger(value) || value < 1 || value > 3999) {
        return {
            success: false,
            output: transformedToken.source,
            errors: ["Transformed suffix exceeds standard Roman numeral range"]
        };
    }

    return { success: true, output: `${transformedToken.style.prefix}${integerToRoman(value)}`, errors: [] };
}

const englishUnderTwentyWords = englishCardinalUnderTwenty.map((entry) => entry.canonical);
const englishTensWords = englishTens.map((entry) => entry.canonical);

function formatEnglishUnderHundred(value) {
    if (value < 20) return englishUnderTwentyWords[value];

    const tens = Math.floor(value / 10);
    const ones = value % 10;
    const tensWord = englishTensWords[tens - 1];

    return ones === 0 ? tensWord : `${tensWord}-${englishUnderTwentyWords[ones]}`;
}

function formatEnglishUnderThousand(value) {
    if (value === 0) return "";

    const hundreds = Math.floor(value / 100);
    const rest = value % 100;
    const parts = [];

    if (hundreds > 0) {
        parts.push(`${englishUnderTwentyWords[hundreds]} hundred`);
    }

    if (rest > 0) {
        parts.push(formatEnglishUnderHundred(rest));
    }

    return parts.join(" ");
}

function applyEnglishCase(output, casePattern) {
    if (casePattern === "upper") return output.toUpperCase();
    if (casePattern === "title") {
        return output.replace(/\b[a-z]/g, (letter) => letter.toUpperCase());
    }
    return output;
}

function getEnglishLargeUnitName(unitIndex) {
    return englishLargeUnitStems.find((unit) => unit.index === unitIndex)?.canonical || null;
}

function formatEnglishGroupedInteger(representation, casePattern = "lower") {
    const parts = [];

    for (const group of representation.groups) {
        const value = Number(group.digits);

        if (value === 0) continue;

        const groupWords = formatEnglishUnderThousand(value);
        const unitName = group.unitIndex > 0 ? getEnglishLargeUnitName(group.unitIndex) : null;

        parts.push(unitName ? `${groupWords} ${unitName}` : groupWords);
    }

    const output = parts.length > 0 ? parts.join(" ") : "zero";
    return applyEnglishCase(output, casePattern);
}

function formatEnglishCardinal(transformedToken) {
    const representation = transformedToken.transformedRepresentation || transformedToken.representation;
    const output = transformedToken.hasReplaceableZero
        ? formatEnglishGroupedInteger(representation, transformedToken.style.casePattern)
        : transformedToken.source;

    return { success: true, output, errors: [] };
}

const cardinalToOrdinalWord = {
    zero: "zeroth",
    one: "first",
    two: "second",
    three: "third",
    four: "fourth",
    five: "fifth",
    six: "sixth",
    seven: "seventh",
    eight: "eighth",
    nine: "ninth",
    ten: "tenth",
    eleven: "eleventh",
    twelve: "twelfth",
    thirteen: "thirteenth",
    fourteen: "fourteenth",
    fifteen: "fifteenth",
    sixteen: "sixteenth",
    seventeen: "seventeenth",
    eighteen: "eighteenth",
    nineteen: "nineteenth"
};

function cardinalPhraseToOrdinal(phrase) {
    const words = phrase.split(" ");
    const lastPhrase = words.pop();
    const hyphenParts = lastPhrase.split("-");
    const lastWord = hyphenParts.pop();
    const ordinalLast = cardinalToOrdinalWord[lastWord]
        || (lastWord.endsWith("y") ? `${lastWord.slice(0, -1)}ieth` : `${lastWord}th`);

    hyphenParts.push(ordinalLast);
    words.push(hyphenParts.join("-"));

    return words.join(" ");
}

function formatEnglishOrdinal(transformedToken) {
    if (!transformedToken.hasReplaceableZero) {
        return { success: true, output: transformedToken.source, errors: [] };
    }

    const cardinal = formatEnglishGroupedInteger(transformedToken.transformedRepresentation, "lower");
    const ordinal = cardinalPhraseToOrdinal(cardinal);

    return { success: true, output: applyEnglishCase(ordinal, transformedToken.style.casePattern), errors: [] };
}

function applyMonthCase(output, casePattern) {
    if (casePattern === "upper") return output.toUpperCase();
    if (casePattern === "lower") return output.toLowerCase();
    return output;
}

function formatEnglishMonth(transformedToken) {
    if (!transformedToken.hasReplaceableZero) {
        return { success: true, output: transformedToken.source, errors: [] };
    }

    const output = transformedToken.style.form === "abbreviated" ? "Nov" : "November";
    return { success: true, output: applyMonthCase(output, transformedToken.style.casePattern), errors: [] };
}

function formatJapaneseMonth(transformedToken) {
    if (!transformedToken.hasReplaceableZero) {
        return { success: true, output: transformedToken.source, errors: [] };
    }

    return { success: true, output: "霜月", errors: [] };
}

const japaneseFractionUnits = [
    { exponent: -1, kanji: "割", daiji: "割", hiragana: "わり" },
    { exponent: -2, kanji: "分", daiji: "分", hiragana: "ぶ" },
    { exponent: -3, kanji: "厘", daiji: "厘", hiragana: "りん" },
    { exponent: -4, kanji: "毛", daiji: "毛", hiragana: "もう" },
    { exponent: -5, kanji: "糸", daiji: "糸", hiragana: "し" },
    { exponent: -6, kanji: "忽", daiji: "忽", hiragana: "こつ" },
    { exponent: -7, kanji: "微", daiji: "微", hiragana: "び" },
    { exponent: -8, kanji: "繊", daiji: "繊", hiragana: "せん" },
    { exponent: -9, kanji: "沙", daiji: "沙", hiragana: "しゃ" },
    { exponent: -10, kanji: "塵", daiji: "塵", hiragana: "じん" },
    { exponent: -11, kanji: "埃", daiji: "埃", hiragana: "あい" },
    { exponent: -12, kanji: "渺", daiji: "渺", hiragana: "びょう" },
    { exponent: -13, kanji: "漠", daiji: "漠", hiragana: "ばく" },
    { exponent: -14, kanji: "模糊", daiji: "模糊", hiragana: "もこ" },
    { exponent: -15, kanji: "逡巡", daiji: "逡巡", hiragana: "しゅんじゅん" },
    { exponent: -16, kanji: "須臾", daiji: "須臾", hiragana: "しゅゆ" },
    { exponent: -17, kanji: "瞬息", daiji: "瞬息", hiragana: "しゅんそく" },
    { exponent: -18, kanji: "弾指", daiji: "弾指", hiragana: "だんし" },
    { exponent: -19, kanji: "刹那", daiji: "刹那", hiragana: "せつな" },
    { exponent: -20, kanji: "六徳", daiji: "六徳", hiragana: "りっとく" },
    { exponent: -21, kanji: "虚空", daiji: "虚空", hiragana: "こくう" },
    { exponent: -22, kanji: "清浄", daiji: "清浄", hiragana: "しょうじょう" },
    { exponent: -23, kanji: "阿頼耶", daiji: "阿頼耶", hiragana: "あらや" },
    { exponent: -24, kanji: "阿摩羅", daiji: "阿摩羅", hiragana: "あまら" },
    { exponent: -25, kanji: "涅槃寂静", daiji: "涅槃寂静", hiragana: "ねはんじゃくじょう" }
];

function formatJapaneseSmallBlock(value, dictionary) {
    if (value === 0) return "";

    const thousands = Math.floor(value / 1000);
    const hundreds = Math.floor((value % 1000) / 100);
    const tens = Math.floor((value % 100) / 10);
    const ones = value % 10;
    let output = "";
    const writeSmallUnit = (digit, unitValue) => {
        if (digit === 1) return dictionary.smallUnits[unitValue](digit);
        if (dictionary.composeSmallUnit) return dictionary.composeSmallUnit(digit, unitValue);
        return `${dictionary.digits[digit]}${dictionary.smallUnits[unitValue](digit)}`;
    };

    if (thousands > 0) output += writeSmallUnit(thousands, 1000);
    if (hundreds > 0) output += writeSmallUnit(hundreds, 100);
    if (tens > 0) output += writeSmallUnit(tens, 10);
    if (ones > 0) output += dictionary.digits[ones];

    return output;
}

const kanjiOutputDictionary = {
    digits: ["", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
    smallUnits: {
        10: () => "十",
        100: () => "百",
        1000: () => "千"
    },
    largeUnit: (unitIndex) => japaneseLargeUnits.find((unit) => unit.index === unitIndex)?.canonical || "",
    fractionUnit: (index) => japaneseFractionUnits[index]?.kanji || ""
};

const daijiOutputDictionary = {
    digits: ["", "壱", "弐", "参", "四", "五", "六", "七", "八", "九"],
    smallUnits: {
        10: () => "拾",
        100: () => "佰",
        1000: () => "仟"
    },
    largeUnit: (unitIndex) => unitIndex === 1 ? "萬" : kanjiOutputDictionary.largeUnit(unitIndex),
    fractionUnit: (index) => japaneseFractionUnits[index]?.daiji || ""
};

const hiraganaOutputDictionary = {
    digits: ["", "いち", "に", "さん", "よん", "ご", "ろく", "なな", "はち", "きゅう"],
    smallUnits: {
        10: () => "じゅう",
        100: (digit) => ({ 3: "びゃく", 6: "っぴゃく", 8: "っぴゃく" }[digit] || "ひゃく"),
        1000: (digit) => ({ 3: "ぜん", 8: "っせん" }[digit] || "せん")
    },
    composeSmallUnit: (digit, unitValue) => {
        if (unitValue === 100 && digit === 6) return "ろっぴゃく";
        if (unitValue === 100 && digit === 8) return "はっぴゃく";
        if (unitValue === 1000 && digit === 8) return "はっせん";
        return `${hiraganaOutputDictionary.digits[digit]}${hiraganaOutputDictionary.smallUnits[unitValue](digit)}`;
    },
    largeUnit: (unitIndex) => japaneseHiraganaLargeUnits[unitIndex - 1]?.canonical || "",
    fractionUnit: (index) => japaneseFractionUnits[index]?.hiragana || ""
};

function formatJapaneseGroupedInteger(representation, dictionary) {
    const parts = [];

    for (const group of representation.groups) {
        const value = Number(group.digits);

        if (value === 0) continue;

        const smallBlock = formatJapaneseSmallBlock(value, dictionary);
        const unit = group.unitIndex > 0 ? dictionary.largeUnit(group.unitIndex) : "";
        const needsExplicitOneBeforeLargeUnit = group.unitIndex > 0 && value === 1;

        parts.push(`${needsExplicitOneBeforeLargeUnit ? dictionary.digits[1] : smallBlock}${unit}`);
    }

    return parts.join("") || "零";
}

function formatJapaneseMixedGroupedInteger(representation) {
    const parts = [];

    for (const group of representation.groups) {
        const value = Number(group.digits);

        if (value === 0) continue;

        const unit = group.unitIndex > 0 ? kanjiOutputDictionary.largeUnit(group.unitIndex) : "";
        parts.push(`${value}${unit}`);
    }

    return parts.join("") || "0";
}

function formatFractionCoefficient(digit, dictionary, coefficientNumeralSystem = "kanji") {
    if (coefficientNumeralSystem === "arabic") return String(digit);
    if (coefficientNumeralSystem === "fullwidth-arabic") return "０１２３４５６７８９"[digit];
    return dictionary.digits[digit];
}

function formatJapaneseFractionInteger(integerValue, dictionary, coefficientNumeralSystem = "kanji") {
    if (integerValue === 0) return "";
    if (coefficientNumeralSystem === "arabic") return String(integerValue);
    if (coefficientNumeralSystem === "fullwidth-arabic") return toFullWidthDigits(String(integerValue));
    return formatJapaneseSmallBlock(integerValue, dictionary);
}

function formatJapaneseFraction(integerOutput, fractionDigits, dictionary, coefficientNumeralSystem = "kanji") {
    let fractionOutput = "";

    for (let index = 0; index < fractionDigits.length; index++) {
        const digit = Number(fractionDigits[index]);

        if (digit !== 0) {
            fractionOutput += `${formatFractionCoefficient(digit, dictionary, coefficientNumeralSystem)}${dictionary.fractionUnit(index)}`;
        }
    }

    if (!fractionOutput) return integerOutput;
    if (!integerOutput || integerOutput === "零") return fractionOutput;
    return `${integerOutput}と${fractionOutput}`;
}

function formatJapaneseKanji(transformedToken) {
    if (!transformedToken.hasReplaceableZero) {
        return { success: true, output: transformedToken.source, errors: [] };
    }

    const representation = transformedToken.transformedRepresentation;

    if (representation.kind === "decimalString") {
        const integerValue = Number(representation.integerDigits);
        const coefficientNumeralSystem = transformedToken.style.coefficientNumeralSystem || "kanji";
        const integerOutput = formatJapaneseFractionInteger(integerValue, kanjiOutputDictionary, coefficientNumeralSystem);
        return {
            success: true,
            output: formatJapaneseFraction(integerOutput, representation.fractionDigits, kanjiOutputDictionary, coefficientNumeralSystem),
            errors: []
        };
    }

    return { success: true, output: formatJapaneseGroupedInteger(representation, kanjiOutputDictionary), errors: [] };
}

function formatJapaneseMixedNumber(transformedToken) {
    if (!transformedToken.hasReplaceableZero) {
        return { success: true, output: transformedToken.source, errors: [] };
    }

    return { success: true, output: formatJapaneseMixedGroupedInteger(transformedToken.transformedRepresentation), errors: [] };
}

function formatJapaneseDaiji(transformedToken) {
    if (!transformedToken.hasReplaceableZero) {
        return { success: true, output: transformedToken.source, errors: [] };
    }

    return { success: true, output: formatJapaneseGroupedInteger(transformedToken.transformedRepresentation, daijiOutputDictionary), errors: [] };
}

function formatJapaneseHiragana(transformedToken) {
    if (!transformedToken.hasReplaceableZero) {
        return { success: true, output: transformedToken.source, errors: [] };
    }

    return { success: true, output: formatJapaneseGroupedInteger(transformedToken.transformedRepresentation, hiraganaOutputDictionary), errors: [] };
}

function formatJapaneseHiraganaDigitSequence(transformedToken) {
    if (!transformedToken.hasReplaceableZero) {
        return { success: true, output: transformedToken.source, errors: [] };
    }

    const representation = transformedToken.transformedRepresentation;
    const output = [...representation.digits].map((digit) => canonicalHiraganaDigits[digit]).join("");

    return { success: true, output, errors: [] };
}

function formatSI(transformedToken) {
    const numeric = transformedToken.transformedRepresentation.transformedNumericPart;
    return {
        success: true,
        output: formatConvertedQuantity(numeric, transformedToken.representation.baseUnit),
        errors: []
    };
}

const formatterRegistry = {
    arabic: formatArabic,
    roman: formatRoman,
    romanSuffix: formatRomanSuffix,
    englishCardinal: formatEnglishCardinal,
    englishOrdinal: formatEnglishOrdinal,
    englishMonthName: formatEnglishMonth,
    japaneseMonthName: formatJapaneseMonth,
    japaneseMixedNumber: formatJapaneseMixedNumber,
    japaneseKanji: formatJapaneseKanji,
    japaneseDaiji: formatJapaneseDaiji,
    japaneseHiraganaDigitSequence: formatJapaneseHiraganaDigitSequence,
    japaneseHiragana: formatJapaneseHiragana,
    si: formatSI
};

function formatTransformedToken(transformedToken) {
    const formatter = formatterRegistry[transformedToken.type];

    if (!formatter) {
        return {
            success: false,
            output: transformedToken.source,
            errors: [`Unsupported formatter: ${transformedToken.type}`]
        };
    }

    try {
        return formatter(transformedToken);
    } catch (error) {
        return {
            success: false,
            output: transformedToken.source,
            errors: [error.message]
        };
    }
}

function transformAndFormatToken(parsedToken) {
    const transformed = transformParsedToken(parsedToken);
    const formatted = formatTransformedToken(transformed);

    return {
        parsedToken,
        transformedToken: transformed,
        formatted
    };
}

function transformAndFormatFirstCandidate(text) {
    const parsedTokens = parseAllNotationCandidates(text);

    if (parsedTokens.length === 0) {
        return {
            success: false,
            output: text,
            errors: ["No candidate detected"]
        };
    }

    return transformAndFormatToken(parsedTokens[0]).formatted;
}

const notationTransformFormatTests = [
    ["10", "11"],
    ["2020", "2121"],
    ["0010", "1111"],
    ["２０２０", "２１２１"],
    ["X", "XI"],
    ["C", "CXI"],
    ["MMCC", "MMCCXI"],
    ["MCMX", "MCMXI"],
    ["XII", "XII"],
    ["ten", "eleven"],
    ["twenty", "twenty-one"],
    ["hundred", "one hundred eleven"],
    ["thousand", "one thousand one hundred eleven"],
    ["eighteen", "eighteen"],
    ["tenth", "eleventh"],
    ["twentieth", "twenty-first"],
    ["hundredth", "one hundred eleventh"],
    ["eighteenth", "eighteenth"],
    ["October", "November"],
    ["october", "november"],
    ["Oct", "Nov"],
    ["神無月", "霜月"],
    ["十", "十一"],
    ["十二", "十二"],
    ["百", "百十一"],
    ["万", "万"],
    ["億", "億"],
    ["兆", "兆"],
    ["載", "載"],
    ["無量大数", "無量大数"],
    ["一億", "一億千百十一万千百十一"],
    ["拾", "拾壱"],
    ["萬", "萬"],
    ["壱萬", "壱萬仟佰拾壱"],
    ["廿", "弐拾壱"],
    ["じゅう", "じゅういち"],
    ["じゅうに", "じゅうに"],
    ["ひゃく", "ひゃくじゅういち"],
    ["まん", "まん"],
    ["おく", "おく"],
    ["ちょう", "ちょう"],
    ["むりょうたいすう", "むりょうたいすう"],
    ["いちまん", "いちまんせんひゃくじゅういち"],
    ["いちおく", "いちおくせんひゃくじゅういちまんせんひゃくじゅういち"],
    ["3厘8糸", "1と1割1分3厘1毛8糸"],
    ["三厘八糸", "一と一割一分三厘一毛八糸"],
    ["3分8毛", "1と1割3分1厘8毛"],
    ["三分八毛", "一と一割三分一厘八毛"],
    ["３厘８糸", "１と１割１分３厘１毛８糸"],
    ["10mm", "1.11m"],
    ["10kg", "11111g"]
];

function runNotationTransformFormatTests() {
    return notationTransformFormatTests.map(([input, expectedOutput]) => {
        const formatted = transformAndFormatFirstCandidate(input);

        return {
            input,
            expectedOutput,
            output: formatted.output,
            pass: formatted.output === expectedOutput,
            formatted
        };
    });
}

function runNotationTransformEdgeTests() {
    const oneCentillion = parseAllNotationCandidates("one centillion")[0];
    const transformedOneCentillion = transformParsedToken(oneCentillion);
    const centillion = parseAllNotationCandidates("centillion")[0];
    const transformedCentillion = transformParsedToken(centillion);
    const muryotaisuCandidates = parseAllNotationCandidates("無量大数");
    const ichiMuryotaisu = parseAllNotationCandidates("一無量大数")[0];
    const transformedIchiMuryotaisu = transformParsedToken(ichiMuryotaisu);
    const romanOverflow = formatRoman({
        source: "MMMCMXCIX",
        type: "roman",
        hasReplaceableZero: true,
        transformedRepresentation: {
            kind: "decimalString",
            sign: "",
            integerDigits: "4000",
            fractionDigits: "",
            decimalSeparator: null
        },
        representation: null,
        style: { alphabet: "ascii" }
    });
    const milli = transformAndFormatFirstCandidate("10mm");
    const mega = transformAndFormatFirstCandidate("10Mm");

    return [
        {
            input: "one centillion",
            pass: transformedOneCentillion.transformedRepresentation.groups.length === 102
                && transformedOneCentillion.transformedRepresentation.groups.at(-1).digits === "111",
            transformed: transformedOneCentillion
        },
        {
            input: "centillion",
            pass: transformedCentillion.transformedRepresentation.groups.length === 102
                && transformedCentillion.transformedRepresentation.groups[0].digits === "1",
            transformed: transformedCentillion
        },
        {
            input: "無量大数",
            pass: muryotaisuCandidates.length === 0 && convertText("無量大数").output === "無量大数",
            candidates: muryotaisuCandidates
        },
        {
            input: "一無量大数",
            pass: transformedIchiMuryotaisu.transformedRepresentation.groups.length === 18
                && transformedIchiMuryotaisu.transformedRepresentation.groups[0].digits === "1",
            transformed: transformedIchiMuryotaisu
        },
        {
            input: "roman overflow",
            pass: romanOverflow.success === false && romanOverflow.output === "MMMCMXCIX",
            formatted: romanOverflow
        },
        {
            input: "10mm / 10Mm",
            pass: milli.output === "1.11m" && mega.output === "11111111m",
            formatted: [milli, mega]
        }
    ];
}

const defaultConvertOptions = {
    includeDebugData: false,
    keepFailedTokens: true,
    enabledSystems: [
        "arabic",
        "roman",
        "romanSuffix",
        "englishCardinal",
        "englishOrdinal",
        "englishMonthName",
        "japaneseMonthName",
        "japaneseMixedNumber",
        "japaneseKanji",
        "japaneseDaiji",
        "japaneseHiraganaDigitSequence",
        "japaneseHiragana",
        "si"
    ]
};

function createTokenId(token, index) {
    return `${token.type}-${token.start}-${token.end}-${index}`;
}

function countZerosInString(value) {
    return (value.match(/0/g) || []).length;
}

function countReplaceableZerosInRepresentation(representation) {
    if (!representation) return 0;

    if (representation.kind === "decimalString") {
        return countZerosInString(representation.integerDigits) + countZerosInString(representation.fractionDigits || "");
    }

    if (representation.kind === "groupedInteger") {
        return representation.groups.reduce((sum, group) => sum + countZerosInString(group.digits), 0);
    }

    if (representation.kind === "digitSequence") {
        return countZerosInString(representation.digits);
    }

    if (representation.kind === "mappedValue") {
        return countZerosInString(representation.numericValue);
    }

    if (representation.kind === "siValue") {
        const actualDecimal = convertToBaseUnitDecimal(representation.numericPart, representation.prefix.exponent);

        return countZerosInString(actualDecimal.integerDigits) + countZerosInString(actualDecimal.fractionDigits);
    }

    return 0;
}

function createTransformationRecord(token, tokenId) {
    return {
        id: tokenId,
        start: token.start,
        end: token.end,
        source: token.source,
        type: token.type,
        detected: true,
        parsed: false,
        hasReplaceableZero: false,
        transformed: false,
        formatted: false,
        output: token.source,
        status: "skipped-unsupported",
        errors: []
    };
}

function processTokenForConversion(token, tokenId, inputText, includeDebugData = false) {
    const record = createTransformationRecord(token, tokenId);
    const errors = [];
    const debug = {};

    try {
        if (inputText.slice(token.start, token.end) !== token.source) {
            record.status = "skipped-invalid";
            record.errors = ["Token range does not match source text"];
            return includeDebugData ? { ...record, debug } : record;
        }

        const parsedToken = parseNotationToken(token);
        debug.parsedToken = parsedToken;
        record.parsed = parsedToken.valid;

        if (!parsedToken.valid) {
            record.status = "skipped-invalid";
            record.errors = parsedToken.errors;
            return includeDebugData ? { ...record, debug } : record;
        }

        const transformedToken = transformParsedToken(parsedToken);
        debug.transformedToken = transformedToken;
        record.hasReplaceableZero = transformedToken.hasReplaceableZero;
        record.replacedZeroCount = transformedToken.hasReplaceableZero
            ? countReplaceableZerosInRepresentation(parsedToken.representation)
            : 0;

        if (!transformedToken.hasReplaceableZero) {
            record.status = "unchanged-no-zero";
            record.output = token.source;
            return includeDebugData ? { ...record, debug } : record;
        }

        const formattedResult = formatTransformedToken(transformedToken);
        debug.formattedResult = formattedResult;

        if (!formattedResult.success) {
            record.status = "skipped-format-error";
            record.errors = formattedResult.errors;
            record.output = token.source;
            return includeDebugData ? { ...record, debug } : record;
        }

        record.transformed = true;
        record.formatted = true;
        record.status = "transformed";
        record.output = formattedResult.output;
        return includeDebugData ? { ...record, debug } : record;
    } catch (error) {
        errors.push({
            tokenId,
            source: token.source,
            type: token.type,
            stage: "process",
            message: error.message
        });
        record.status = "skipped-invalid";
        record.errors = errors;
        return includeDebugData ? { ...record, debug } : record;
    }
}

function applyReplacementsFromEnd(originalText, replacements) {
    const sorted = [...replacements].sort((a, b) => b.start - a.start);
    let output = originalText;
    const errors = [];

    for (const replacement of sorted) {
        if (originalText.slice(replacement.start, replacement.end) !== replacement.source) {
            errors.push({
                tokenId: replacement.id,
                source: replacement.source,
                type: replacement.type,
                stage: "apply",
                message: "Replacement range does not match original text"
            });
            continue;
        }

        output = `${output.slice(0, replacement.start)}${replacement.output}${output.slice(replacement.end)}`;
    }

    return { output, errors };
}

function buildConversionStatistics(transformations) {
    const initialTotal = {
        detected: transformations.length,
        transformed: 0,
        unchanged: 0,
        failed: 0
    };
    const statistics = {
        total: initialTotal,
        byType: {},
        replacedZeroCount: 0
    };

    for (const transformation of transformations) {
        if (!statistics.byType[transformation.type]) {
            statistics.byType[transformation.type] = {
                detected: 0,
                transformed: 0,
                unchanged: 0,
                failed: 0,
                replacedZeroCount: 0
            };
        }

        const typeStats = statistics.byType[transformation.type];
        typeStats.detected++;

        if (transformation.status === "transformed") {
            statistics.total.transformed++;
            typeStats.transformed++;
            statistics.replacedZeroCount += transformation.replacedZeroCount || 0;
            typeStats.replacedZeroCount += transformation.replacedZeroCount || 0;
        } else if (transformation.status === "unchanged-no-zero") {
            statistics.total.unchanged++;
            typeStats.unchanged++;
        } else {
            statistics.total.failed++;
            typeStats.failed++;
        }
    }

    return statistics;
}

function rangesDoNotOverlap(tokens) {
    return tokens.every((token, index) => {
        return index === 0 || tokens[index - 1].end <= token.start;
    });
}

function convertText(inputText, options = {}) {
    const mergedOptions = {
        ...defaultConvertOptions,
        ...options,
        enabledSystems: options.enabledSystems || defaultConvertOptions.enabledSystems
    };
    const errors = [];

    try {
        const detectedTokens = detectAllNotationCandidates(inputText)
            .filter((token) => mergedOptions.enabledSystems.includes(token.type));
        const tokens = detectedTokens.map((token, index) => ({
            ...token,
            id: createTokenId(token, index)
        }));
        const transformations = tokens.map((token) => {
            const transformation = processTokenForConversion(token, token.id, inputText, mergedOptions.includeDebugData);

            if (mergedOptions.includeDebugData) {
                transformation.debug = {
                    detectedToken: token,
                    ...(transformation.debug || {})
                };
            }

            return transformation;
        });
        const replacements = transformations.filter((transformation) => transformation.status === "transformed");
        const applied = applyReplacementsFromEnd(inputText, replacements);

        errors.push(...applied.errors);

        for (const transformation of transformations) {
            if (transformation.errors?.length) {
                errors.push(...transformation.errors);
            }
        }

        const statistics = buildConversionStatistics(transformations);

        return {
            success: true,
            partialSuccess: statistics.total.failed > 0,
            input: inputText,
            output: applied.output,
            detectedCount: tokens.length,
            transformedCount: statistics.total.transformed,
            unchangedCount: statistics.total.unchanged,
            failedCount: statistics.total.failed,
            replacedZeroCount: statistics.replacedZeroCount,
            tokens,
            transformations: mergedOptions.keepFailedTokens
                ? transformations
                : transformations.filter((transformation) => transformation.status === "transformed"),
            statistics,
            invariants: {
                inputUnchanged: true,
                rangesMatch: tokens.every((token) => inputText.slice(token.start, token.end) === token.source),
                nonOverlapping: rangesDoNotOverlap(tokens),
                sourceDetectionOnly: true
            },
            errors
        };
    } catch (error) {
        return {
            success: false,
            partialSuccess: false,
            input: inputText,
            output: inputText,
            detectedCount: 0,
            transformedCount: 0,
            unchangedCount: 0,
            failedCount: 0,
            replacedZeroCount: 0,
            tokens: [],
            transformations: [],
            statistics: buildConversionStatistics([]),
            errors: [{ stage: "convertText", message: error.message }]
        };
    }
}

function explainConversion(inputText) {
    return convertText(inputText, {
        includeDebugData: true
    });
}

const notationIntegrationTests = [
    {
        input: "10月、October、X、one hundred、百、じゅう、10kg",
        expected: "11月、November、XI、one hundred eleven、百十一、じゅういち、11111g"
    },
    {
        input: "12、eighteen、XII、十二、じゅうに",
        expected: "12、eighteen、XII、十二、じゅうに"
    },
    {
        input: "10と10とOctoberとOctober",
        expected: "11と11とNovemberとNovember"
    },
    {
        input: "hundred X 10",
        expected: "one hundred eleven XI 11"
    },
    {
        input: "October one hundred tenth",
        expected: "November one hundred eleventh"
    },
    {
        input: "one million と 一億",
        expected: "one million one hundred eleven thousand one hundred eleven と 一億千百十一万千百十一"
    },
    {
        input: "3厘8糸",
        expected: "1と1割1分3厘1毛8糸"
    },
    {
        input: "10 Ⅽ 100",
        expected: "11 Ⅽ 111",
        failedTokenPreserved: true
    },
    {
        input: "十分です",
        expected: "十一分です"
    },
    {
        input: "ここに置いておく",
        expected: "ここに置いておく"
    },
    {
        input: "見た目がとてもきれいなんですよね",
        expected: "見た目がとてもきれいなんですよね"
    }
];

function runNotationIntegrationTests() {
    return notationIntegrationTests.map((test) => {
        const original = test.input;
        const result = convertText(test.input, { includeDebugData: true });
        const deterministicResult = convertText(test.input, { includeDebugData: true });
        const failedTokenPreservedPass = !test.failedTokenPreserved
            || result.transformations.some((transformation) => transformation.status === "skipped-format-error" && result.output.includes(transformation.source));

        return {
            input: test.input,
            expected: test.expected,
            output: result.output,
            pass: result.output === test.expected
                && original === test.input
                && result.invariants.rangesMatch
                && result.invariants.nonOverlapping
                && convertText("10").output === "11"
                && JSON.stringify(result.output) === JSON.stringify(deterministicResult.output)
                && failedTokenPreservedPass,
            result
        };
    });
}

const finalNotationSystemTests = [
    { system: "arabic", input: "0", expected: "1" },
    { system: "arabic", input: "10", expected: "11" },
    { system: "arabic", input: "100", expected: "111" },
    { system: "arabic", input: "2020", expected: "2121" },
    { system: "arabic", input: "12", expected: "12" },
    { system: "arabic", input: "0010", expected: "1111" },
    { system: "arabic", input: "10.00", expected: "11.11" },
    { system: "arabic", input: "-100", expected: "-111" },
    { system: "arabic", input: "０", expected: "１" },
    { system: "arabic", input: "２０２０", expected: "２１２１" },
    { system: "englishCardinal", input: "ten", expected: "eleven" },
    { system: "englishCardinal", input: "twenty", expected: "twenty-one" },
    { system: "englishCardinal", input: "hundred", expected: "one hundred eleven" },
    { system: "englishCardinal", input: "one hundred", expected: "one hundred eleven" },
    { system: "englishCardinal", input: "one hundred ten", expected: "one hundred eleven" },
    { system: "englishCardinal", input: "thousand", expected: "one thousand one hundred eleven" },
    { system: "englishCardinal", input: "one million", expected: "one million one hundred eleven thousand one hundred eleven" },
    { system: "englishCardinal", input: "eighteen", expected: "eighteen" },
    { system: "englishOrdinal", input: "zeroth", expected: "first" },
    { system: "englishOrdinal", input: "tenth", expected: "eleventh" },
    { system: "englishOrdinal", input: "twentieth", expected: "twenty-first" },
    { system: "englishOrdinal", input: "hundredth", expected: "one hundred eleventh" },
    { system: "englishOrdinal", input: "thousandth", expected: "one thousand one hundred eleventh" },
    { system: "englishOrdinal", input: "eighteenth", expected: "eighteenth" },
    { system: "englishMonthName", input: "October", expected: "November" },
    { system: "englishMonthName", input: "october", expected: "november" },
    { system: "englishMonthName", input: "OCTOBER", expected: "NOVEMBER" },
    { system: "englishMonthName", input: "Oct", expected: "Nov" },
    { system: "englishMonthName", input: "oct", expected: "nov" },
    { system: "englishMonthName", input: "OCT", expected: "NOV" },
    { system: "japaneseMonthName", input: "神無月", expected: "霜月" },
    { system: "roman", input: "X", expected: "XI" },
    { system: "roman", input: "C", expected: "CXI" },
    { system: "roman", input: "M", expected: "MCXI" },
    { system: "roman", input: "MMCC", expected: "MMCCXI" },
    { system: "roman", input: "MCMX", expected: "MCMXI" },
    { system: "roman", input: "XII", expected: "XII" },
    { system: "romanSuffix", input: "FFX", expected: "FFXI" },
    { system: "romanSuffix", input: "FFXX", expected: "FFXXI" },
    { system: "romanSuffix", input: "FFXII", expected: "FFXII" },
    { system: "romanSuffix", input: "GAMEC", expected: "GAMECXI" },
    { system: "romanSuffix", input: "mix", expected: "mix" },
    { system: "roman", input: "IIII", expected: "IIII" },
    { system: "roman", input: "VX", expected: "VX" },
    { system: "roman", input: "IC", expected: "IC" },
    { system: "roman", input: "MMMM", expected: "MMMM" },
    { system: "japaneseKanji", input: "十", expected: "十一" },
    { system: "japaneseKanji", input: "十二", expected: "十二" },
    { system: "japaneseKanji", input: "百", expected: "百十一" },
    { system: "japaneseKanji", input: "千", expected: "千百十一" },
    { system: "japaneseKanji", input: "万", expected: "万" },
    { system: "japaneseKanji", input: "億", expected: "億" },
    { system: "japaneseKanji", input: "兆", expected: "兆" },
    { system: "japaneseKanji", input: "載", expected: "載" },
    { system: "japaneseKanji", input: "無量大数", expected: "無量大数" },
    { system: "japaneseKanji", input: "一万", expected: "一万千百十一" },
    { system: "japaneseKanji", input: "一億", expected: "一億千百十一万千百十一" },
    { system: "japaneseKanji", input: "一無量大数", expected: "一無量大数千百十一不可思議千百十一那由他千百十一阿僧祇千百十一恒河沙千百十一極千百十一載千百十一正千百十一澗千百十一溝千百十一穣千百十一𥝱千百十一垓千百十一京千百十一兆千百十一億千百十一万千百十一" },
    { system: "japaneseKanji", input: "三億五万", expected: "三億千百十五万千百十一" },
    { system: "japaneseKanji", input: "記載", expected: "記載" },
    { system: "japaneseKanji", input: "掲載", expected: "掲載" },
    { system: "japaneseKanji", input: "連載", expected: "連載" },
    { system: "japaneseKanji", input: "転載", expected: "転載" },
    { system: "japaneseKanji", input: "東京", expected: "東京" },
    { system: "japaneseKanji", input: "正常", expected: "正常" },
    { system: "japaneseKanji", input: "極端", expected: "極端" },
    { system: "japaneseKanji", input: "一億載", expected: "一億載" },
    { system: "japaneseKanji", input: "一万億", expected: "一万億" },
    { system: "japaneseKanji", input: "一億兆", expected: "一億兆" },
    { system: "japaneseKanji", input: "一兆京", expected: "一兆京" },
    { system: "japaneseKanji", input: "一正載", expected: "一正載" },
    { system: "japaneseKanji", input: "一載極", expected: "一載極" },
    { system: "japaneseMixedNumber", input: "100万本", expected: "111万1111本" },
    { system: "japaneseMixedNumber", input: "20億円", expected: "21億1111万1111円" },
    { system: "japaneseMixedNumber", input: "3兆円", expected: "3兆1111億1111万1111円" },
    { system: "japaneseMixedNumber", input: "12万円", expected: "12万1111円" },
    { system: "japaneseMixedNumber", input: "100万2000人", expected: "111万2111人" },
    { system: "japaneseMixedNumber", input: "3兆5000億", expected: "3兆5111億1111万1111" },
    { system: "japaneseMixedNumber", input: "12億3456万7000", expected: "12億3456万7111" },
    { system: "japaneseKanji", input: "百億万", expected: "百億万" },
    { system: "japaneseKanji", input: "万億", expected: "万億" },
    { system: "japaneseKanji", input: "十百", expected: "十百" },
    { system: "japaneseKanji", input: "千百百", expected: "千百百" },
    { system: "japaneseKanjiFraction", input: "3厘8糸", expected: "1と1割1分3厘1毛8糸" },
    { system: "japaneseKanjiFraction", input: "三厘八糸", expected: "一と一割一分三厘一毛八糸" },
    { system: "japaneseKanjiFraction", input: "3分8毛", expected: "1と1割3分1厘8毛" },
    { system: "japaneseKanjiFraction", input: "三分八毛", expected: "一と一割三分一厘八毛" },
    { system: "japaneseKanjiFraction", input: "３厘８糸", expected: "１と１割１分３厘１毛８糸" },
    { system: "japaneseKanjiFraction", input: "3割5分", expected: "1と3割5分" },
    { system: "japaneseKanjiFraction", input: "三割五分", expected: "一と三割五分" },
    { system: "japaneseDaiji", input: "拾", expected: "拾壱" },
    { system: "japaneseDaiji", input: "佰", expected: "佰拾壱" },
    { system: "japaneseDaiji", input: "仟", expected: "仟佰拾壱" },
    { system: "japaneseDaiji", input: "萬", expected: "萬" },
    { system: "japaneseDaiji", input: "壱萬", expected: "壱萬仟佰拾壱" },
    { system: "japaneseDaiji", input: "廿", expected: "弐拾壱" },
    { system: "japaneseHiragana", input: "じゅう", expected: "じゅういち" },
    { system: "japaneseHiragana", input: "じゅうに", expected: "じゅうに" },
    { system: "japaneseHiragana", input: "ひゃく", expected: "ひゃくじゅういち" },
    { system: "japaneseHiragana", input: "まん", expected: "まん" },
    { system: "japaneseHiragana", input: "おく", expected: "おく" },
    { system: "japaneseHiragana", input: "ちょう", expected: "ちょう" },
    { system: "japaneseHiragana", input: "むりょうたいすう", expected: "むりょうたいすう" },
    { system: "japaneseHiragana", input: "いちまん", expected: "いちまんせんひゃくじゅういち" },
    { system: "japaneseHiragana", input: "いちおく", expected: "いちおくせんひゃくじゅういちまんせんひゃくじゅういち" },
    { system: "japaneseHiragana", input: "さんびゃく", expected: "さんびゃくじゅういち" },
    { system: "japaneseHiragana", input: "ろっぴゃく", expected: "ろっぴゃくじゅういち" },
    { system: "japaneseHiragana", input: "はっぴゃく", expected: "はっぴゃくじゅういち" },
    { system: "japaneseHiragana", input: "さんぜん", expected: "さんぜんひゃくじゅういち" },
    { system: "japaneseHiragana", input: "はっせん", expected: "はっせんひゃくじゅういち" },
    { system: "japaneseHiragana", input: "十分です", expected: "十一分です" },
    { system: "japaneseHiragana", input: "ここに置いておく", expected: "ここに置いておく" },
    { system: "japaneseHiragana", input: "見た目がとてもきれいなんですよね", expected: "見た目がとてもきれいなんですよね" },
    { system: "japaneseHiraganaDigitSequence", input: "ぜろいちにぜろ", expected: "いちいちにいち" },
    { system: "japaneseHiraganaDigitSequence", input: "れいいちにれい", expected: "いちいちにいち" },
    { system: "japaneseHiraganaDigitSequence", input: "まるきゅうぜろ", expected: "いちきゅういち" },
    { system: "japaneseHiraganaDigitSequence", input: "ぜろぜろ", expected: "いちいち" },
    { system: "japaneseHiraganaDigitSequence", input: "いちにさん", expected: "いちにさん" },
    { system: "japaneseHiraganaDigitSequence", input: "まる", expected: "まる" },
    { system: "japaneseHiraganaDigitSequence", input: "れい", expected: "れい" },
    { system: "japaneseHiragana", input: "せんにひゃく", expected: "せんにひゃくじゅういち" },
    { system: "si", input: "10mm", expected: "1.11m" },
    { system: "si", input: "10mg", expected: "1.11g" },
    { system: "si", input: "1mm", expected: "1.111m" },
    { system: "si", input: "1000mm", expected: "1m" },
    { system: "si", input: "10cm", expected: "1.1m" },
    { system: "si", input: "10μm", expected: "1.11111m" },
    { system: "si", input: "10µm", expected: "1.11111m" },
    { system: "si", input: "10um", expected: "1.11111m" },
    { system: "si", input: "-10mm", expected: "-1.11m" },
    { system: "si", input: "−10mm", expected: "-1.11m" },
    { system: "si", input: "10kg", expected: "11111g" },
    { system: "si-regression", input: "10m", expected: "11m" },
    { system: "si-regression", input: "10mmHg 10ms 10mol", expected: "11mmHg 11ms 11mol" }
];

const finalMixedTextTests = [
    {
        input: "10月、October、X、one hundred、百、じゅう、10kg",
        expected: "11月、November、XI、one hundred eleven、百十一、じゅういち、11111g"
    },
    {
        input: "12、eighteen、XII、十二、じゅうに",
        expected: "12、eighteen、XII、十二、じゅうに"
    },
    {
        input: "hundred X 10",
        expected: "one hundred eleven XI 11"
    },
    {
        input: "October one hundred tenth",
        expected: "November one hundred eleventh"
    },
    {
        input: "one million と 一億",
        expected: "one million one hundred eleven thousand one hundred eleven と 一億千百十一万千百十一"
    },
    {
        input: "100万本とFFX",
        expected: "111万1111本とFFXI"
    },
    {
        input: "電話番号はぜろいちにぜろです。金額はひゃく円です。",
        expected: "電話番号はいちいちにいちです。金額はひゃくじゅういち円です。"
    },
    {
        input: "値はtenです。",
        expected: "値はelevenです。"
    },
    {
        input: "値はhundred個です。",
        expected: "値はone hundred eleven個です。"
    },
    {
        input: "目標はone million個です。",
        expected: "目標はone million one hundred eleven thousand one hundred eleven個です。"
    },
    {
        input: "順位はtenthです。",
        expected: "順位はeleventhです。"
    },
    {
        input: "進捗はhundredthまでです。",
        expected: "進捗はone hundred eleventhまでです。"
    },
    {
        input: "今回の目標はone million個の0を処理し、進捗をhundredthまで記録することです。",
        expected: "今回の目標はone million one hundred eleven thousand one hundred eleven個の1を処理し、進捗をone hundred eleventhまで記録することです。"
    },
    {
        input: "ten\n\nten\nhundred\nthousand\nmillion\ncentillion\n\n\ntenth\nhundredth\nmillionth",
        expected: "eleven\n\neleven\none hundred eleven\none thousand one hundred eleven\none million one hundred eleven thousand one hundred eleven\none centillion one hundred eleven novemnonagintillion one hundred eleven octononagintillion one hundred eleven septennonagintillion one hundred eleven sexnonagintillion one hundred eleven quinnonagintillion one hundred eleven quattuornonagintillion one hundred eleven tresnonagintillion one hundred eleven duononagintillion one hundred eleven unnonagintillion one hundred eleven nonagintillion one hundred eleven novemoctogintillion one hundred eleven octooctogintillion one hundred eleven septemoctogintillion one hundred eleven sexoctogintillion one hundred eleven quinoctogintillion one hundred eleven quattuoroctogintillion one hundred eleven tresoctogintillion one hundred eleven duooctogintillion one hundred eleven unoctogintillion one hundred eleven octogintillion one hundred eleven novemseptuagintillion one hundred eleven octoseptuagintillion one hundred eleven septenseptuagintillion one hundred eleven sesseptuagintillion one hundred eleven quinseptuagintillion one hundred eleven quattuorseptuagintillion one hundred eleven treseptuagintillion one hundred eleven duoseptuagintillion one hundred eleven unseptuagintillion one hundred eleven septuagintillion one hundred eleven novemsexagintillion one hundred eleven octosexagintillion one hundred eleven septensexagintillion one hundred eleven sessexagintillion one hundred eleven quinsexagintillion one hundred eleven quattuorsexagintillion one hundred eleven tresexagintillion one hundred eleven duosexagintillion one hundred eleven unsexagintillion one hundred eleven sexagintillion one hundred eleven novemquinquagintillion one hundred eleven octoquinquagintillion one hundred eleven septenquinquagintillion one hundred eleven sesquinquagintillion one hundred eleven quinquinquagintillion one hundred eleven quattuorquinquagintillion one hundred eleven tresquinquagintillion one hundred eleven duoquinquagintillion one hundred eleven unquinquagintillion one hundred eleven quinquagintillion one hundred eleven novemquadragintillion one hundred eleven octoquadragintillion one hundred eleven septenquadragintillion one hundred eleven sesquadragintillion one hundred eleven quinquadragintillion one hundred eleven quattuorquadragintillion one hundred eleven tresquadragintillion one hundred eleven duoquadragintillion one hundred eleven unquadragintillion one hundred eleven quadragintillion one hundred eleven novemtrigintillion one hundred eleven octotrigintillion one hundred eleven septentrigintillion one hundred eleven sestrigintillion one hundred eleven quintrigintillion one hundred eleven quattuortrigintillion one hundred eleven trestrigintillion one hundred eleven duotrigintillion one hundred eleven untrigintillion one hundred eleven trigintillion one hundred eleven novemvigintillion one hundred eleven octovigintillion one hundred eleven septemvigintillion one hundred eleven sesvigintillion one hundred eleven quinvigintillion one hundred eleven quattuorvigintillion one hundred eleven tresvigintillion one hundred eleven duovigintillion one hundred eleven unvigintillion one hundred eleven vigintillion one hundred eleven novemdecillion one hundred eleven octodecillion one hundred eleven septendecillion one hundred eleven sexdecillion one hundred eleven quindecillion one hundred eleven quattuordecillion one hundred eleven tredecillion one hundred eleven duodecillion one hundred eleven undecillion one hundred eleven decillion one hundred eleven nonillion one hundred eleven octillion one hundred eleven septillion one hundred eleven sextillion one hundred eleven quintillion one hundred eleven quadrillion one hundred eleven trillion one hundred eleven billion one hundred eleven million one hundred eleven thousand one hundred eleven\n\n\neleventh\none hundred eleventh\none million one hundred eleven thousand one hundred eleventh"
    },
    {
        input: "content millionaire hundredths attendant",
        expected: "content millionaire hundredths attendant"
    }
];

function runFinalNotationSystemTests() {
    return finalNotationSystemTests.map((test) => {
        const result = convertText(test.input, { includeDebugData: true });

        return {
            ...test,
            output: result.output,
            pass: result.output === test.expected,
            result
        };
    });
}

function runFinalMixedTextTests() {
    return finalMixedTextTests.map((test) => {
        const result = convertText(test.input, { includeDebugData: true });

        return {
            ...test,
            output: result.output,
            pass: result.output === test.expected
                && result.invariants.rangesMatch
                && result.invariants.nonOverlapping,
            result
        };
    });
}

const japaneseLargeUnitOrderValidCases = [
    "一載",
    "十載",
    "百載",
    "千載",
    "一載一億",
    "一載十億",
    "一載一正",
    "一兆一億",
    "一億一万"
];

const japaneseLargeUnitOrderInvalidCases = [
    "一億載",
    "一万億",
    "一億兆",
    "一兆京",
    "一正載",
    "一載極",
    "載億",
    "載載"
];

function parseJapaneseKanjiSourceForTest(source) {
    return parseJapaneseKanjiToken(createToken(0, source.length, source, "japaneseKanji", 1, {
        requiresSyntaxValidation: true
    }));
}

function runJapaneseLargeUnitOrderTests() {
    const validResults = japaneseLargeUnitOrderValidCases.map((input) => {
        const parsed = parseJapaneseKanjiSourceForTest(input);
        const converted = convertText(input);

        return {
            input,
            expectedValid: true,
            output: converted.output,
            pass: parsed.valid === true && converted.output !== input,
            parsed
        };
    });
    const invalidResults = japaneseLargeUnitOrderInvalidCases.map((input) => {
        const parsed = parseJapaneseKanjiSourceForTest(input);
        const converted = convertText(input);

        return {
            input,
            expectedValid: false,
            output: converted.output,
            pass: parsed.valid === false && converted.output === input,
            parsed
        };
    });
    const noDetectionCases = ["記載", "掲載", "連載", "転載", "満載", "積載", "搭載", "所在", "東京", "正常", "正しい", "極端", "究極", "万", "億", "兆", "載", "無量大数"];
    const noDetectionResults = noDetectionCases.map((input) => {
        const tokens = detectAllNotationCandidates(input).filter((token) => token.type === "japaneseKanji");

        return {
            input,
            expectedValid: false,
            output: convertText(input).output,
            pass: tokens.length === 0 && convertText(input).output === input,
            tokens
        };
    });

    return [...validResults, ...invalidResults, ...noDetectionResults];
}

function runFinalDocxXmlTests() {
    const tests = [
        {
            name: "same-run",
            input: "<w:p><w:r><w:t>10 October X 百 10kg</w:t></w:r></w:p>",
            expected: "<w:p><w:r><w:t>11 November XI 百十一 11111g</w:t></w:r></w:p>"
        },
        {
            name: "split-October",
            input: "<w:p><w:r><w:t>Oct</w:t></w:r><w:r><w:t>ober</w:t></w:r></w:p>",
            expected: "<w:p><w:r><w:t>Nov</w:t></w:r><w:r><w:t>ober</w:t></w:r></w:p>"
        },
        {
            name: "split-english-cardinal",
            input: "<w:p><w:r><w:t>one </w:t></w:r><w:r><w:t>hundred</w:t></w:r></w:p>",
            expected: "<w:p><w:r><w:t>one </w:t></w:r><w:r><w:t>one hundred eleven</w:t></w:r></w:p>"
        },
        {
            name: "split-japanese-kanji",
            input: "<w:p><w:r><w:t>一</w:t></w:r><w:r><w:t>億</w:t></w:r></w:p>",
            expected: "<w:p><w:r><w:t>一</w:t></w:r><w:r><w:t>億</w:t></w:r></w:p>"
        }
    ];

    return tests.map((test) => {
        const result = replaceWordTextNodes(test.input);

        return {
            ...test,
            output: result.xml,
            pass: result.xml === test.expected,
            result
        };
    });
}

function runFinalRegressionTests() {
    const suites = {
        detection: runNotationDetectionTests(),
        parsing: runNotationParsingTests(),
        parsingEdge: runNotationParsingEdgeTests(),
        transformFormat: runNotationTransformFormatTests(),
        transformEdge: runNotationTransformEdgeTests(),
        integration: runNotationIntegrationTests(),
        notationSystems: runFinalNotationSystemTests(),
        mixedText: runFinalMixedTextTests(),
        japaneseLargeUnitOrder: runJapaneseLargeUnitOrderTests(),
        docxXml: runFinalDocxXmlTests()
    };
    const flat = Object.entries(suites).flatMap(([suiteName, results]) => (
        results.map((result) => ({ suiteName, ...result }))
    ));

    return {
        suites,
        total: flat.length,
        passed: flat.filter((result) => result.pass).length,
        failed: flat.filter((result) => !result.pass).length,
        failures: flat.filter((result) => !result.pass)
    };
}

const MAX_DOCX_TEXT_NODE_OUTPUT_LENGTH = 100000;
const MAX_DOCX_XML_OUTPUT_LENGTH = 2000000;
const docxDiagnostics = {
    enabled: false,
    logs: []
};

function setDocxDiagnosticsEnabled(enabled) {
    docxDiagnostics.enabled = Boolean(enabled);
    docxDiagnostics.logs = [];
}

function createDocxStageLogger() {
    const startedAt = performance.now();
    const logs = [];

    return {
        mark(stage, details = {}) {
            const entry = {
                stage,
                elapsedMs: Math.round((performance.now() - startedAt) * 10) / 10,
                ...details
            };

            logs.push(entry);
            docxDiagnostics.logs.push(entry);

            if (docxDiagnostics.enabled) {
                console.debug("[DOCX]", entry);
            }

            return entry;
        },
        getLogs() {
            return logs;
        }
    };
}

function markDocxUiStage(stage, details = {}) {
    const entry = {
        stage,
        elapsedMs: null,
        ...details
    };

    docxDiagnostics.logs.push(entry);

    if (docxDiagnostics.enabled) {
        console.debug("[DOCX]", entry);
    }
}

globalThis.notationDetection = {
    detectArabic,
    detectRoman,
    detectRomanSuffix,
    detectEnglishCardinal,
    detectEnglishOrdinal,
    detectEnglishMonth,
    detectJapaneseMonth,
    detectJapaneseMixedNumber,
    detectJapaneseKanji,
    detectJapaneseDaiji,
    detectJapaneseHiraganaDigitSequence,
    detectJapaneseHiragana,
    detectSI,
    detectAllNotationCandidates,
    parseArabicToken,
    parseRomanToken,
    parseRomanSuffixToken,
    parseEnglishCardinalToken,
    parseEnglishOrdinalToken,
    parseEnglishMonthToken,
    parseJapaneseMonthToken,
    parseJapaneseMixedNumberToken,
    parseJapaneseKanjiToken,
    parseJapaneseDaijiToken,
    parseJapaneseHiraganaDigitSequenceToken,
    parseJapaneseHiraganaToken,
    parseSIToken,
    parseNotationToken,
    parseAllNotationCandidates,
    transformDecimalString,
    transformGroupedInteger,
    transformMappedValue,
    transformSIValue,
    transformParsedToken,
    formatArabic,
    formatRoman,
    formatRomanSuffix,
    formatEnglishCardinal,
    formatEnglishOrdinal,
    formatEnglishMonth,
    formatJapaneseMonth,
    formatJapaneseMixedNumber,
    formatJapaneseKanji,
    formatJapaneseDaiji,
    formatJapaneseHiraganaDigitSequence,
    formatJapaneseHiragana,
    formatSI,
    formatTransformedToken,
    transformAndFormatToken,
    transformAndFormatFirstCandidate,
    convertText,
    explainConversion,
    applyReplacementsFromEnd,
    buildConversionStatistics,
    buildStatusMessage,
    createEditedFileName,
    convertTextFile,
    convertDocxFile,
    docxDiagnostics,
    setDocxDiagnosticsEnabled,
    replaceWordTextNodes,
    mergeConversionResults,
    resolveCandidateOverlaps,
    runNotationDetectionTests,
    runNotationParsingTests,
    runNotationParsingEdgeTests,
    runNotationTransformFormatTests,
    runNotationTransformEdgeTests,
    runNotationIntegrationTests,
    runFinalNotationSystemTests,
    runFinalMixedTextTests,
    runJapaneseLargeUnitOrderTests,
    runFinalDocxXmlTests,
    runFinalRegressionTests
};

const allowedExtensions = [".txt", ".docx"];
const pageTitles = {
    initial: '"0"から"1"を作る機械',
    processed: '"1"から"1"を作る機械'
};

let acceptedFiles = [];
let isProcessing = false;

const defaultDropStatusText = "クリックして選択することもできます";
const emptyInputMessage = "変換する文章がありません";
const minLoadingDurationMs = 600;

function updatePageTitle(state) {
    const titleText = pageTitles[state];

    document.title = titleText;
    siteHeading.textContent = titleText;
}

function isAllowedFile(file) {
    return allowedExtensions.some((extension) => file.name.toLowerCase().endsWith(extension));
}

function updateGenerateButton() {
    generateButton.disabled = isProcessing || (acceptedFiles.length === 0 && inputText.value.length === 0);
}

function handleFiles(files) {
    if (isProcessing) {
        return;
    }

    acceptedFiles = Array.from(files).filter(isAllowedFile);

    if (acceptedFiles.length === 0) {
        dropStatus.textContent = ".txt または .docx ファイルを選択してください";
        updateGenerateButton();
        return;
    }

    dropStatus.textContent = `${acceptedFiles.length}件のファイルを受け付けました`;
    updateGenerateButton();
}

function resetFileInputState(nextStatus = defaultDropStatusText) {
    acceptedFiles = [];
    fileInput.value = "";
    dropArea.classList.remove("is-dragover");
    dropStatus.textContent = nextStatus;
    updateGenerateButton();
}

function setControlsDisabled(disabled) {
    inputText.disabled = disabled;
    fileInput.disabled = disabled;
    generateButton.disabled = disabled || (acceptedFiles.length === 0 && inputText.value.length === 0);

    if (mainContent) {
        mainContent.setAttribute("aria-busy", disabled ? "true" : "false");
    }
}

function wait(milliseconds) {
    return new Promise((resolve) => {
        setTimeout(resolve, milliseconds);
    });
}

function startProgress() {
    const startedAt = performance.now();
    let isActive = true;

    progressArea.hidden = false;
    if (progressDialog.showModal && !progressDialog.open) {
        progressDialog.showModal();
    } else if (!progressDialog.open) {
        progressDialog.setAttribute("open", "");
    }
    progressBar.style.width = "0%";
    progressLabel.textContent = "処理中 0%";

    const timerId = setInterval(() => {
        if (!isActive) {
            return;
        }

        const elapsed = performance.now() - startedAt;
        const percent = Math.min(90, Math.round((elapsed / minLoadingDurationMs) * 90));

        progressBar.style.width = `${percent}%`;
        progressLabel.textContent = `処理中 ${percent}%`;
    }, 100);

    return {
        startedAt,
        finish() {
            isActive = false;
            clearInterval(timerId);
            progressBar.style.width = "100%";
            progressLabel.textContent = "処理完了 100%";
        }
    };
}

function closeProgress() {
    progressArea.hidden = true;

    if (progressDialog.open) {
        progressDialog.close();
    } else {
        progressDialog.removeAttribute("open");
    }
}

async function runWithLoading(task) {
    const progress = startProgress();
    const processingStartedAt = performance.now();
    let isFinished = false;

    try {
        const result = await task();
        const processingTimeMs = performance.now() - processingStartedAt;
        const elapsed = performance.now() - progress.startedAt;
        const remaining = Math.max(0, minLoadingDurationMs - elapsed);

        if (remaining > 0) {
            await wait(remaining);
        }

        progress.finish();
        isFinished = true;
        return {
            ...result,
            processingTimeMs
        };
    } finally {
        if (!isFinished) {
            progress.finish();
        }

        closeProgress();
        markDocxUiStage("loading-end");
    }
}

function createEditedFileName(originalName) {
    return `edited_${originalName}`;
}

function downloadFile(blob, fileName) {
    markDocxUiStage("download-start", {
        fileName,
        blobSize: blob?.size || 0
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");

    try {
        anchor.href = url;
        anchor.download = createEditedFileName(fileName);
        document.body.append(anchor);
        anchor.click();
        anchor.remove();
    } finally {
        setTimeout(() => {
            URL.revokeObjectURL(url);
            markDocxUiStage("object-url-revoked", { fileName });
        }, 0);
    }
}

function askDownload() {
    return new Promise((resolve) => {
        if (!downloadDialog.showModal) {
            markDocxUiStage("download-confirm-dialog-fallback");
            const choice = confirm("変換したファイルをダウンロードしますか？");
            markDocxUiStage("download-choice-complete", { shouldDownload: choice });
            resolve(choice);
            return;
        }

        let settled = false;

        const cleanup = () => {
            confirmDownloadButton.removeEventListener("click", confirmHandler);
            cancelDownloadButton.removeEventListener("click", cancelHandler);
            downloadDialog.removeEventListener("close", closeHandler);
            downloadDialog.removeEventListener("cancel", cancelEventHandler);
        };
        const closeDialog = (shouldDownload) => {
            if (settled) {
                return;
            }

            settled = true;
            cleanup();
            if (downloadDialog.open) {
                downloadDialog.close();
            }
            markDocxUiStage("download-choice-complete", { shouldDownload });
            resolve(shouldDownload);
        };
        const confirmHandler = () => closeDialog(true);
        const cancelHandler = () => closeDialog(false);
        const closeHandler = () => closeDialog(false);
        const cancelEventHandler = (event) => {
            event.preventDefault();
            closeDialog(false);
        };

        confirmDownloadButton.addEventListener("click", confirmHandler);
        cancelDownloadButton.addEventListener("click", cancelHandler);
        downloadDialog.addEventListener("close", closeHandler);
        downloadDialog.addEventListener("cancel", cancelEventHandler);
        markDocxUiStage("download-confirm-dialog-show");
        downloadDialog.showModal();
    });
}

function buildStatusMessage(result) {
    if (!result || !result.success) {
        return "変換に失敗しました";
    }

    if (result.partialSuccess || result.failedCount > 0) {
        return "一部の表記を元のまま残して変換が完了しました";
    }

    if (result.transformedCount === 0) {
        return "変換対象は見つかりませんでした";
    }

    return "変換が完了しました";
}

function buildStatisticsMessage(result) {
    return `検出：${result.detectedCount}件 / 変換：${result.transformedCount}件 / 変化なし：${result.unchangedCount}件 / 失敗：${result.failedCount}件 / 生成した1：${result.replacedZeroCount}個`;
}

function showConversionSummary(result) {
    dropStatus.textContent = `${buildStatusMessage(result)} ${buildStatisticsMessage(result)}`;
}

function createEmptyConversionResult(input = "") {
    return {
        success: false,
        partialSuccess: false,
        input,
        output: "",
        detectedCount: 0,
        transformedCount: 0,
        unchangedCount: 0,
        failedCount: 0,
        replacedZeroCount: 0,
        tokens: [],
        transformations: [],
        errors: [emptyInputMessage]
    };
}

function mergeConversionResults(results, input = "") {
    const safeResults = results.filter(Boolean);
    const detectedCount = safeResults.reduce((sum, result) => sum + (result.detectedCount || 0), 0);
    const transformedCount = safeResults.reduce((sum, result) => sum + (result.transformedCount || 0), 0);
    const unchangedCount = safeResults.reduce((sum, result) => sum + (result.unchangedCount || 0), 0);
    const failedCount = safeResults.reduce((sum, result) => sum + (result.failedCount || 0), 0);
    const replacedZeroCount = safeResults.reduce((sum, result) => sum + (result.replacedZeroCount || 0), 0);
    const errors = safeResults.flatMap((result) => result.errors || []);

    return {
        success: safeResults.every((result) => result.success !== false),
        partialSuccess: safeResults.some((result) => result.partialSuccess) || failedCount > 0,
        input,
        output: safeResults.map((result) => result.output || "").join(""),
        detectedCount,
        transformedCount,
        unchangedCount,
        failedCount,
        replacedZeroCount,
        tokens: safeResults.flatMap((result) => result.tokens || []),
        transformations: safeResults.flatMap((result) => result.transformations || []),
        errors
    };
}

function assertHasConvertibleText(text) {
    if (!text || !text.trim()) {
        throw new Error(emptyInputMessage);
    }
}

async function convertTextFile(file) {
    const text = await file.text();
    assertHasConvertibleText(text);
    const result = convertText(text);

    return {
        fileName: file.name,
        blob: new Blob([result.output], { type: file.type || "text/plain" }),
        result
    };
}

async function streamToBytes(stream) {
    const response = new Response(stream);
    return new Uint8Array(await response.arrayBuffer());
}

async function decompressRawDeflate(bytes) {
    if (!("DecompressionStream" in window)) {
        throw new Error("このブラウザでは .docx の変換に必要な API が使えません");
    }

    const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("deflate-raw"));
    return streamToBytes(stream);
}

function readUInt16(bytes, offset) {
    return bytes[offset] | (bytes[offset + 1] << 8);
}

function readUInt32(bytes, offset) {
    return (bytes[offset] | (bytes[offset + 1] << 8) | (bytes[offset + 2] << 16) | (bytes[offset + 3] << 24)) >>> 0;
}

function writeUInt16(bytes, offset, value) {
    bytes[offset] = value & 255;
    bytes[offset + 1] = (value >>> 8) & 255;
}

function writeUInt32(bytes, offset, value) {
    bytes[offset] = value & 255;
    bytes[offset + 1] = (value >>> 8) & 255;
    bytes[offset + 2] = (value >>> 16) & 255;
    bytes[offset + 3] = (value >>> 24) & 255;
}

const crcTable = (() => {
    const table = new Uint32Array(256);

    for (let i = 0; i < 256; i++) {
        let value = i;

        for (let bit = 0; bit < 8; bit++) {
            value = value & 1 ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
        }

        table[i] = value >>> 0;
    }

    return table;
})();

function crc32(bytes) {
    let crc = 0xffffffff;

    for (const byte of bytes) {
        crc = crcTable[(crc ^ byte) & 255] ^ (crc >>> 8);
    }

    return (crc ^ 0xffffffff) >>> 0;
}

function findEndOfCentralDirectory(bytes) {
    for (let offset = bytes.length - 22; offset >= Math.max(0, bytes.length - 66000); offset--) {
        if (readUInt32(bytes, offset) === 0x06054b50) {
            return offset;
        }
    }

    throw new Error(".docx ファイルの構造を読み取れませんでした");
}

function parseZipEntries(bytes) {
    const decoder = new TextDecoder();
    const endOffset = findEndOfCentralDirectory(bytes);
    const entryCount = readUInt16(bytes, endOffset + 10);
    let centralOffset = readUInt32(bytes, endOffset + 16);
    const entries = [];

    for (let i = 0; i < entryCount; i++) {
        if (readUInt32(bytes, centralOffset) !== 0x02014b50) {
            throw new Error(".docx ファイルの一覧情報を読み取れませんでした");
        }

        const flag = readUInt16(bytes, centralOffset + 8);
        const method = readUInt16(bytes, centralOffset + 10);
        const crc = readUInt32(bytes, centralOffset + 16);
        const compressedSize = readUInt32(bytes, centralOffset + 20);
        const uncompressedSize = readUInt32(bytes, centralOffset + 24);
        const nameLength = readUInt16(bytes, centralOffset + 28);
        const extraLength = readUInt16(bytes, centralOffset + 30);
        const commentLength = readUInt16(bytes, centralOffset + 32);
        const localOffset = readUInt32(bytes, centralOffset + 42);
        const nameBytes = bytes.slice(centralOffset + 46, centralOffset + 46 + nameLength);
        const name = decoder.decode(nameBytes);
        const localNameLength = readUInt16(bytes, localOffset + 26);
        const localExtraLength = readUInt16(bytes, localOffset + 28);
        const dataOffset = localOffset + 30 + localNameLength + localExtraLength;

        entries.push({
            name,
            nameBytes,
            flag,
            method,
            crc,
            compressedSize,
            uncompressedSize,
            compressedData: bytes.slice(dataOffset, dataOffset + compressedSize)
        });

        centralOffset += 46 + nameLength + extraLength + commentLength;
    }

    return entries;
}

async function getEntryData(entry) {
    if (entry.method === 0) {
        return entry.compressedData;
    }

    if (entry.method === 8) {
        return decompressRawDeflate(entry.compressedData);
    }

    throw new Error(`未対応の圧縮形式です: ${entry.name}`);
}

function isWordTextPart(entryName) {
    return /^word\/(document|header\d+|footer\d+|footnotes|endnotes|comments)\.xml$/.test(entryName);
}

function decodeXmlText(text) {
    return text
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, "\"")
        .replace(/&apos;/g, "'")
        .replace(/&amp;/g, "&");
}

function encodeXmlText(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

function replaceWordTextNodes(xml, logger = null, partName = "word/document.xml") {
    const partResults = [];
    let textNodeCount = 0;
    let extractedText = "";
    let convertTextCallCount = 0;
    let largestExpansion = {
        beforeLength: 0,
        afterLength: 0,
        sourcePreview: ""
    };

    logger?.mark("text-node-collection-start", {
        partName,
        originalXmlLength: xml.length
    });

    const convertedXml = xml.replace(/(<w:t\b[^>]*>)([\s\S]*?)(<\/w:t>)/g, (match, openTag, text, closeTag) => {
        const decodedText = decodeXmlText(text);
        textNodeCount++;
        extractedText += decodedText;

        if (!decodedText.trim()) {
            return match;
        }

        const result = convertText(decodedText);
        convertTextCallCount++;
        partResults.push(result);

        if (result.output.length > largestExpansion.afterLength) {
            largestExpansion = {
                beforeLength: decodedText.length,
                afterLength: result.output.length,
                sourcePreview: decodedText.slice(0, 100)
            };
        }

        if (result.output.length > MAX_DOCX_TEXT_NODE_OUTPUT_LENGTH) {
            logger?.mark("text-node-output-large", {
                partName,
                beforeLength: decodedText.length,
                afterLength: result.output.length,
                sourcePreview: decodedText.slice(0, 100),
                typeStatistics: result.statistics?.byType || {}
            });
        }

        return `${openTag}${encodeXmlText(result.output)}${closeTag}`;
    });

    logger?.mark("text-node-conversion-complete", {
        partName,
        textNodeCount,
        convertTextCallCount,
        originalXmlLength: xml.length,
        convertedXmlLength: convertedXml.length,
        largestExpansion
    });

    if (convertedXml.length > MAX_DOCX_XML_OUTPUT_LENGTH) {
        logger?.mark("xml-output-large", {
            partName,
            originalXmlLength: xml.length,
            convertedXmlLength: convertedXml.length
        });
    }

    return {
        xml: convertedXml,
        result: mergeConversionResults(partResults, extractedText),
        textNodeCount,
        convertTextCallCount,
        originalXmlLength: xml.length,
        convertedXmlLength: convertedXml.length
    };
}

async function prepareDocxEntry(entry, logger = null) {
    const shouldReplaceText = isWordTextPart(entry.name);

    if (!shouldReplaceText) {
        return {
            nameBytes: entry.nameBytes,
            flag: entry.flag,
            method: entry.method,
            crc: entry.crc,
            compressedData: entry.compressedData,
            compressedSize: entry.compressedSize,
            uncompressedSize: entry.uncompressedSize,
            result: null,
            textNodeCount: 0
        };
    }

    const decoder = new TextDecoder();
    const encoder = new TextEncoder();
    logger?.mark("entry-data-read-start", {
        partName: entry.name,
        compressedSize: entry.compressedSize,
        uncompressedSize: entry.uncompressedSize
    });
    const originalData = await getEntryData(entry);
    logger?.mark("entry-data-read-complete", {
        partName: entry.name,
        byteLength: originalData.length
    });
    const replacement = replaceWordTextNodes(decoder.decode(originalData), logger, entry.name);
    logger?.mark("xml-serialization-complete", {
        partName: entry.name,
        originalXmlLength: replacement.originalXmlLength,
        serializedXmlLength: replacement.convertedXmlLength
    });
    const convertedData = encoder.encode(replacement.xml);
    logger?.mark("zip-entry-write-complete", {
        partName: entry.name,
        byteLength: convertedData.length
    });

    return {
        nameBytes: entry.nameBytes,
        flag: entry.flag,
        method: 0,
        crc: crc32(convertedData),
        compressedData: convertedData,
        compressedSize: convertedData.length,
        uncompressedSize: convertedData.length,
        result: replacement.result,
        textNodeCount: replacement.textNodeCount,
        convertTextCallCount: replacement.convertTextCallCount
    };
}

function buildZip(entries) {
    const localParts = [];
    const centralParts = [];
    let offset = 0;

    for (const entry of entries) {
        const localHeader = new Uint8Array(30 + entry.nameBytes.length);

        writeUInt32(localHeader, 0, 0x04034b50);
        writeUInt16(localHeader, 4, 20);
        writeUInt16(localHeader, 6, entry.flag & ~8);
        writeUInt16(localHeader, 8, entry.method);
        writeUInt32(localHeader, 14, entry.crc);
        writeUInt32(localHeader, 18, entry.compressedSize);
        writeUInt32(localHeader, 22, entry.uncompressedSize);
        writeUInt16(localHeader, 26, entry.nameBytes.length);
        localHeader.set(entry.nameBytes, 30);
        localParts.push(localHeader, entry.compressedData);

        const centralHeader = new Uint8Array(46 + entry.nameBytes.length);

        writeUInt32(centralHeader, 0, 0x02014b50);
        writeUInt16(centralHeader, 4, 20);
        writeUInt16(centralHeader, 6, 20);
        writeUInt16(centralHeader, 8, entry.flag & ~8);
        writeUInt16(centralHeader, 10, entry.method);
        writeUInt32(centralHeader, 16, entry.crc);
        writeUInt32(centralHeader, 20, entry.compressedSize);
        writeUInt32(centralHeader, 24, entry.uncompressedSize);
        writeUInt16(centralHeader, 28, entry.nameBytes.length);
        writeUInt32(centralHeader, 42, offset);
        centralHeader.set(entry.nameBytes, 46);
        centralParts.push(centralHeader);

        offset += localHeader.length + entry.compressedData.length;
    }

    const centralSize = centralParts.reduce((sum, part) => sum + part.length, 0);
    const endHeader = new Uint8Array(22);

    writeUInt32(endHeader, 0, 0x06054b50);
    writeUInt16(endHeader, 8, entries.length);
    writeUInt16(endHeader, 10, entries.length);
    writeUInt32(endHeader, 12, centralSize);
    writeUInt32(endHeader, 16, offset);

    return new Blob([...localParts, ...centralParts, endHeader], {
        type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    });
}

async function convertDocxFile(file) {
    const logger = createDocxStageLogger();
    logger.mark("file-read-start", {
        fileName: file.name,
        fileSize: file.size || 0
    });
    const bytes = new Uint8Array(await file.arrayBuffer());
    logger.mark("array-buffer-complete", {
        byteLength: bytes.length
    });
    logger.mark("zip-read-start");
    const entries = parseZipEntries(bytes);
    logger.mark("zip-read-complete", {
        entryCount: entries.length
    });
    const convertedEntries = [];
    const partResults = [];
    let textNodeCount = 0;
    let convertTextCallCount = 0;

    for (const entry of entries) {
        const convertedEntry = await prepareDocxEntry(entry, logger);
        convertedEntries.push(convertedEntry);

        if (convertedEntry.result) {
            partResults.push(convertedEntry.result);
            textNodeCount += convertedEntry.textNodeCount;
            convertTextCallCount += convertedEntry.convertTextCallCount || 0;
        }
    }

    if (textNodeCount === 0 || partResults.every((result) => !result.input.trim())) {
        logger.mark("docx-empty-text");
        throw new Error("DOCXに変換する文章がありません");
    }

    logger.mark("docx-merge-results-complete", {
        textNodeCount,
        convertTextCallCount
    });
    logger.mark("docx-blob-generate-start", {
        entryCount: convertedEntries.length
    });
    const blob = buildZip(convertedEntries);
    logger.mark("docx-blob-generate-complete", {
        blobSize: blob.size || 0
    });

    return {
        fileName: file.name,
        blob,
        result: {
            ...mergeConversionResults(partResults),
            docxDiagnostics: logger.getLogs()
        }
    };
}

async function convertFile(file) {
    if (file.name.toLowerCase().endsWith(".txt")) {
        return convertTextFile(file);
    }

    if (file.name.toLowerCase().endsWith(".docx")) {
        return convertDocxFile(file);
    }

    throw new Error(`${file.name} は対応していないファイルです`);
}

async function convertAcceptedFiles() {
    const convertedFiles = [];

    for (const file of acceptedFiles) {
        convertedFiles.push(await convertFile(file));
    }

    return {
        convertedFiles,
        result: mergeConversionResults(convertedFiles.map((file) => file.result))
    };
}

inputText.addEventListener("input", updateGenerateButton);

["dragenter", "dragover"].forEach((eventName) => {
    dropArea.addEventListener(eventName, (event) => {
        event.preventDefault();
        dropArea.classList.add("is-dragover");
    });
});

["dragleave", "drop"].forEach((eventName) => {
    dropArea.addEventListener(eventName, (event) => {
        event.preventDefault();
        dropArea.classList.remove("is-dragover");
    });
});

dropArea.addEventListener("drop", (event) => {
    if (isProcessing) {
        return;
    }

    handleFiles(event.dataTransfer.files);
});

fileInput.addEventListener("change", (event) => {
    if (isProcessing) {
        return;
    }

    handleFiles(event.target.files);
});

generateButton.addEventListener("click", async () => {
    if (isProcessing) {
        return;
    }

    isProcessing = true;
    setControlsDisabled(true);

    try {
        const hasManualInput = inputText.value.trim().length > 0;
        const hasFiles = acceptedFiles.length > 0;

        if (!hasManualInput && !hasFiles) {
            throw new Error(emptyInputMessage);
        }

        const result = await runWithLoading(async () => {
            const results = [];
            let convertedFiles = [];
            let manualResult = null;

            if (hasManualInput) {
                manualResult = convertText(inputText.value);
                results.push(manualResult);
            }

            if (hasFiles) {
                const fileConversion = await convertAcceptedFiles();
                convertedFiles = fileConversion.convertedFiles;
                results.push(fileConversion.result);
            }

            return {
                convertedFiles,
                manualResult,
                conversionResult: mergeConversionResults(results, inputText.value)
            };
        });

        const conversionResult = {
            ...result.conversionResult,
            processingTimeMs: result.processingTimeMs
        };
        globalThis.notationDetection.lastUiConversionResult = conversionResult;

        outputText.value = hasManualInput
            ? result.manualResult.output
            : buildStatusMessage(conversionResult);
        outputText.hidden = false;
        showConversionSummary(conversionResult);
        updatePageTitle("processed");
        specificationIndex.textContent = specificationIndex.dataset.originalText.replaceAll("0", "1");
        specificationDescription.textContent = specificationDescription.dataset.originalText.replaceAll("0", "1");
        specification.classList.add("is-processed");

        if (result.convertedFiles.length > 0 && conversionResult.transformedCount > 0) {
            markDocxUiStage("download-confirm-before-await", {
                fileCount: result.convertedFiles.length
            });
            const shouldDownload = await askDownload();

            if (shouldDownload) {
                result.convertedFiles.forEach((file) => {
                    downloadFile(file.blob, file.fileName);
                });
            }
        }

        if (hasFiles) {
            markDocxUiStage("file-input-reset-start");
            resetFileInputState(dropStatus.textContent);
            markDocxUiStage("file-input-reset-complete");
        }
    } catch (error) {
        const failedResult = createEmptyConversionResult(inputText.value);
        failedResult.errors = [error.message];
        globalThis.notationDetection.lastUiConversionResult = failedResult;
        outputText.value = error.message;
        outputText.hidden = false;
        dropStatus.textContent = `${buildStatusMessage(failedResult)} ${error.message}`;
        resetFileInputState(dropStatus.textContent);
    } finally {
        isProcessing = false;
        setControlsDisabled(false);
        updateGenerateButton();
    }
});
