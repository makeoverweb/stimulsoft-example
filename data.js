function transform(data) {
  let result;
  if (data.length === 2) {
    result = {
        root: data[1].map(o => {
            const r = {}
            data[0].forEach((t, i) => {
                Object.assign(r, { [t]: o[i] })
            })
            return r
        }),
    }
  }
  return result
}

export const data =transform([
    [
      "N",
      "ДатаДанных",
      "idПроект",
      "idОбъект",
      "РПО",
      "ПЕ",
      "БюджетИК",
      "Проект",
      "Объект",
      "План",
      "ОсвоениеПлан",
      "ПФизикаФакт",
      "ПДнейОтклонения",
      "ПФизикаСтатус",
      "ПОсвоениеФакт",
      "ПОсвоениеПроцент",
      "КФизикаФакт",
      "КДнейОтклонения",
      "КФизикаСтатус",
      "КФизикаСтатусЦифр",
      "КОсвоениеФакт",
      "КОсвоениеПроцент",
      "Цель",
      "ОбъектСтатус",
      "ГиперСсылка",
      "ДанныеТрудящиеся",
      "ДанныеМеханимзы"
    ],
    [
      [
        1,
        "26.04.2021",
        30,
        293,
        "АО \"СУЭК-Кузбасс\"",
        "Шахта \"Сычевская\"",
        "80 000",
        "Вскрытие и отработка запасов участка Сычевский",
        "Строительство моста через реку Мереть",
        28,
        41373139,
        12.8,
        62,
        "Срыв сроков",
        3270828,
        7.91,
        32.78,
        31,
        "Срыв сроков",
        1,
        8450803,
        20.43,
        100,
        "Срыв Сроков",
        "/projects/30/objects/293#reports",
        0,
        0
      ],
      [
        2,
        "26.04.2021",
        28,
        157,
        "ООО \"СУЭК-Хакасия\"",
        "ООО \"Восточно-Бейский разрез\"",
        "308 510",
        "Увеличение мощности разреза \"Восточно-Бейский\" с 3,5 до 5 млн. тонн и стр-во ОФ производительностью 750 тонн/час с выходом на проектную мощность в 4 кв 2021 г",
        "Внешнее электроснабжение для ОФ \"Восточно - Бейского разреза\"",
        91,
        308510300.13,
        26.5,
        116,
        "Срыв сроков",
        261803000,
        84.86,
        26.48,
        116,
        "Срыв сроков",
        1,
        263653614,
        85.46,
        100,
        "Срыв Сроков",
        "/projects/28/objects/157#reports",
        0,
        0
      ],
      [
        3,
        "26.04.2021",
        51,
        211,
        "АО \"СУЭК-Красноярск\"",
        "АО \"Разрез Березовский\"",
        "254 000",
        "Поддержание производственной мощности Разреза Березовский",
        "Здание станции очистки производственных стоков",
        73,
        243999944.47,
        54.92,
        150,
        "Срыв сроков",
        23142363.19,
        9.48,
        55.31,
        150,
        "Срыв сроков",
        1,
        103518539.35,
        42.43,
        100,
        "Срыв Сроков",
        "/projects/51/objects/211#reports",
        0,
        0
      ],
      [
        4,
        "26.04.2021",
        37,
        145,
        "ООО \"Тугнуйская обогатительная фабрика\"",
        "ООО \"Тугнуйская обогатительная фабрика\"",
        "2 682 000",
        "Увеличение мощности разреза Тугнуйский и разреза Никольский с 13,0 до 15,0 млн. тонн в год со строительством модуля обогащения угля класса 0-25 мм Тугнуйской ОФ производительностью 1000 тонн в час с 2020 года",
        "Увеличение производительности Тугнуйской обогатительной фабрики до 2000 т/ч",
        99,
        2682000357,
        96.42,
        43,
        "Срыв сроков",
        1564372064,
        58.33,
        96.13,
        43,
        "Срыв сроков",
        1,
        2101975504.07,
        78.37,
        100,
        "Срыв Сроков",
        "/projects/37/objects/145#reports",
        0,
        0
      ],
      [
        5,
        "26.04.2021",
        34,
        172,
        "АО \"Разрез Тугнуйский\"",
        "АО \"Разрез Тугнуйский\"",
        "56 287",
        "Техническое перевооружение схемы водоотведения АО \"Разрез Тугнуйский\". Внедрение современного технологического комплекса для очистки карьерных вод",
        "Мероприятия по использованию очищенной воды после МБОС",
        99,
        56287354,
        108.08,
        0,
        "В графике",
        37949010,
        67.42,
        93.08,
        25,
        "Срыв сроков",
        1,
        50902418,
        90.43,
        100,
        "В графике",
        "/projects/34/objects/172#reports",
        28,
        4
      ],
      [
        6,
        "26.04.2021",
        49,
        208,
        "АО \"СУЭК-Красноярск\"",
        "филиал АО «СУЭК-Красноярск» «Бородинское ПТУ»",
        "92 340",
        "Поддержание производственной мощности филиала АО \"СУЭК-Красноярск\" \"Бородинское ПТУ\"",
        "Строительство бани-мойки для локомотивных бригад",
        52,
        86800231.3,
        26.58,
        66,
        "Срыв сроков",
        5034461,
        5.8,
        21.48,
        81,
        "Срыв сроков",
        1,
        4784933,
        5.51,
        100,
        "Срыв Сроков",
        "/projects/49/objects/208#reports",
        0,
        0
      ],
      [
        7,
        "26.04.2021",
        35,
        147,
        "АО \"Разрез Тугнуйский\"",
        "АО \"Разрез Тугнуйский\"",
        "1 684 000",
        "Проект разработки Никольского каменноугольного месторождения с производственной мощностью 15 млн. тонн угля в год",
        "Внешнее электроснабжение участка Никольский",
        81,
        1684000000,
        72.79,
        36,
        "Есть отставания",
        999626000,
        59.36,
        70.52,
        35,
        "Есть отставания",
        2,
        1097822870,
        65.19,
        100,
        "Есть отставания",
        "/projects/35/objects/147#reports",
        0,
        0
      ],
      [
        8,
        "26.04.2021",
        27,
        158,
        "АО \"Ургалуголь\"",
        "Разрез \"Буреинский\"",
        "746 200",
        "Мероприятия по повышению эффективности БВР",
        "Строительство склада ВВ разреза Буреинский",
        80,
        377238866,
        56.12,
        152,
        "Есть отставания",
        168067507.29,
        44.55,
        56.04,
        152,
        "Есть отставания",
        2,
        210796901.19,
        55.88,
        100,
        "Есть отставания",
        "/projects/27/objects/158#reports",
        0,
        0
      ],
      [
        9,
        "26.04.2021",
        61,
        242,
        "АО \"СУЭК-Кузбасс\"",
        "Шахта им. В.Д.Ялевского",
        "81 052",
        "Объединение шахт им. В.Д. Ялевского и Котинская",
        "Реконструкция очистных сооружений хозяйственно-бытовых сточных вод.Шахта имени В.Д. Ялевского АО \"СУЭК-Кузбасс\"",
        64,
        81052173,
        96.64,
        133,
        "Есть отставания",
        5533668,
        6.83,
        96.56,
        133,
        "Есть отставания",
        2,
        65734711.25,
        81.1,
        100,
        "Есть отставания",
        "/projects/61/objects/242#reports",
        0,
        0
      ],
      [
        10,
        "26.04.2021",
        23,
        164,
        "АО \"Ургалуголь\"",
        "Шахта \"Северный Ургал\"",
        "1 807 000",
        "Очистные сооружения водоотлива шахты \"Северная\"",
        "Очистные сооружения водоотлива шахты Северная",
        48,
        791469590,
        5.54,
        139,
        "Есть отставания",
        22643230,
        2.86,
        4.29,
        139,
        "Есть отставания",
        2,
        22643230,
        2.86,
        100,
        "Есть отставания",
        "/projects/23/objects/164#reports",
        0,
        0
      ],
      [
        11,
        "26.04.2021",
        30,
        284,
        "АО \"СУЭК-Кузбасс\"",
        "Шахта \"Сычевская\"",
        "337 000",
        "Вскрытие и отработка запасов участка Сычевский",
        "Строительство технологической автодороги",
        82,
        134988626,
        31.57,
        100,
        "Есть отставания",
        8203293.9,
        6.08,
        31.4,
        100,
        "Есть отставания",
        2,
        15424717.9,
        11.43,
        100,
        "Есть отставания",
        "/projects/30/objects/284#reports",
        0,
        0
      ],
      [
        12,
        "26.04.2021",
        34,
        146,
        "АО \"Разрез Тугнуйский\"",
        "АО \"Разрез Тугнуйский\"",
        "303 000",
        "Техническое перевооружение схемы водоотведения АО \"Разрез Тугнуйский\". Внедрение современного технологического комплекса для очистки карьерных вод",
        "Техническое перевооружение системы водоотведения АО \"Разрез Тугнуйский\"",
        95,
        303000000,
        99.96,
        0,
        "В графике",
        296161000,
        97.74,
        99.96,
        43,
        "Есть отставания",
        2,
        299167503,
        98.74,
        100,
        "В графике",
        "/projects/34/objects/146#reports",
        0,
        0
      ],
      [
        13,
        "26.04.2021",
        43,
        190,
        "ООО \"СУЭК-Хакасия\"",
        "Разрез \"Черногорский\"",
        "43 500",
        "Единый диспетчерский центр ООО \"СУЭК-Хакасия\"",
        "Реконструкция здания банка под административно-бытовой комплекс, расположенный по адресу: РХ, г. Черногорск, ул. Советская, д.42",
        94,
        42432953.71,
        73.89,
        15,
        "Есть отставания",
        11141145.91,
        26.26,
        73.88,
        15,
        "Есть отставания",
        2,
        22148084.41,
        52.2,
        100,
        "Есть отставания",
        "/projects/43/objects/190#reports",
        0,
        0
      ],
      [
        14,
        "26.04.2021",
        48,
        206,
        "АО \"СУЭК-Красноярск\"",
        "Разрез Бородинский имени М.И. Щадова",
        "11 000",
        "Поддержание производственной мощности филиала АО \"СУЭК-Красноярск\" \"Разрез Бородинский\"",
        "Приточно-вытяжная вентиляция в производственных помещениях горного цеха УРГО",
        98,
        11000000,
        94.01,
        12,
        "Есть отставания",
        6095689,
        55.42,
        95.86,
        7,
        "Есть отставания",
        2,
        6088149,
        55.35,
        100,
        "Есть отставания",
        "/projects/48/objects/206#reports",
        0,
        0
      ],
      [
        15,
        "26.04.2021",
        25,
        161,
        "АО \"Ургалуголь\"",
        "ООО \"Разрез Правобережный\"",
        "1 019 900",
        "Увеличение проектной мощности АО  \"Ургалуголь\" разрез \"Правобережный\" до 6 млн. тонн",
        "Строительство ремонтного бокса разреза Правобережный",
        80,
        767634734.9,
        86.11,
        140,
        "Есть отставания",
        471376402,
        61.41,
        79.54,
        152,
        "Есть отставания",
        2,
        609546492,
        79.41,
        100,
        "Есть отставания",
        "/projects/25/objects/161#reports",
        0,
        0
      ],
      [
        16,
        "26.04.2021",
        30,
        155,
        "АО \"СУЭК-Кузбасс\"",
        "Шахта \"Сычевская\"",
        "350781",
        "Вскрытие и отработка запасов участка Сычевский",
        "Строительство  очистных сооружений",
        95,
        350780563.09,
        98.51,
        12,
        "Есть отставания",
        282680730,
        80.59,
        98.51,
        12,
        "Есть отставания",
        2,
        344115661.48,
        98.1,
        100,
        "Есть отставания",
        "/projects/30/objects/155#reports",
        0,
        0
      ],
      [
        17,
        "26.04.2021",
        24,
        183,
        "АО \"Ургалуголь\"",
        "ООО \"Разрез Правобережный\"",
        "386 000",
        "Строительство участка \"Правобережный\" производственной мощностью 3,0 млн. т. угля в год",
        "Строительство склада МТС разреза \"Правобережный\"",
        79,
        347800000.31,
        80.22,
        64,
        "Есть отставания",
        205417575.62,
        59.06,
        79.79,
        64,
        "Есть отставания",
        2,
        271238897.49,
        77.99,
        100,
        "Есть отставания",
        "/projects/24/objects/183#reports",
        0,
        0
      ],
      [
        18,
        "26.04.2021",
        45,
        193,
        "ООО \"СУЭК-Хакасия\"",
        "ОФ Черногорская",
        "114 000",
        "Поддержание проектной мощности Черногорской ОФ",
        "Реконструкция комплекса приема, подготовки и транспортировки рядового угля с подземной частью галереи поз. 24",
        69,
        52684743.91,
        44.63,
        427,
        "Есть отставания",
        18276656.98,
        34.69,
        44.62,
        427,
        "Есть отставания",
        2,
        27808586.98,
        52.78,
        100,
        "Есть отставания",
        "/projects/45/objects/193#reports",
        0,
        0
      ],
      [
        19,
        "26.04.2021",
        22,
        143,
        "АО \"Ургалуголь\"",
        "Шахта \"Северный Ургал\"",
        "633753",
        "Разработка участка Северо-Западный АО \"Ургалуголь\" \"Шахта Северная",
        "Промплощадка северного вспомогательного ствола",
        72,
        633752629.17,
        41.79,
        284,
        "Есть отставания",
        161704700,
        25.52,
        41.53,
        284,
        "Есть отставания",
        2,
        172363580,
        27.2,
        100,
        "Есть отставания",
        "/projects/22/objects/143#reports",
        0,
        0
      ],
      [
        20,
        "26.04.2021",
        44,
        191,
        "ООО \"СУЭК-Хакасия\"",
        "ООО \"Разрез Черногорский\"",
        "251 000",
        "Поддержание производственной мощности разреза Черногорский",
        "Реконструкция склада горюче-смазочных материалов (ГСМ)",
        65,
        202433905,
        26.83,
        432,
        "Есть отставания",
        35175003,
        17.38,
        26.83,
        432,
        "Есть отставания",
        2,
        35174792,
        17.38,
        100,
        "Есть отставания",
        "/projects/44/objects/191#reports",
        0,
        0
      ],
      [
        21,
        "26.04.2021",
        30,
        154,
        "АО \"СУЭК-Кузбасс\"",
        "Шахта \"Сычевская\"",
        "345 465",
        "Вскрытие и отработка запасов участка Сычевский",
        "Надшахтное здание НКС. Галерея. Отвалообразователь",
        91,
        345465225.3,
        95.95,
        0,
        "В графике",
        266072777,
        77.02,
        96.12,
        0,
        "В графике",
        3,
        345458890.25,
        100,
        100,
        "В графике",
        "/projects/30/objects/154#reports",
        0,
        0
      ],
      [
        22,
        "26.04.2021",
        60,
        241,
        "АО \"СУЭК-Кузбасс\"",
        "Шахта им. В.Д.Ялевского",
        "273 361",
        "Поддержание проектной мощности шахты им В.Д. Ялевского",
        "Техническое перевооружение в части устройства модульного теплоэнергетического комплекса МВНУ 02*6 \"ПЕ ш. им. В.Д. Ялевского АО \"СУЭК-Кузбасс\"",
        62,
        273361174,
        97.91,
        0,
        "В графике",
        92500000,
        33.84,
        97.91,
        0,
        "В графике",
        3,
        229643959.11,
        84.01,
        100,
        "В графике",
        "/projects/60/objects/241#reports",
        0,
        0
      ],
      [
        23,
        "26.04.2021",
        30,
        227,
        "АО \"СУЭК-Кузбасс\"",
        "Шахта 7 Ноября-Новая",
        "36 000",
        "Вскрытие и отработка запасов участка Сычевский",
        "Строительство тамбур -шлюза дизелевозов",
        86,
        20182881,
        93.84,
        0,
        "В графике",
        0,
        0,
        93.81,
        0,
        "В графике",
        3,
        16002078,
        79.29,
        100,
        "В графике",
        "/projects/30/objects/227#reports",
        0,
        0
      ],
      [
        24,
        "26.04.2021",
        33,
        149,
        "АО \"СУЭК-Кузбасс\"",
        "Шахта \"Талдинская-Западная-1\"",
        "545 000",
        "Строительство АБК №3 шахты Талдинская-Западная-1",
        "АБК №3 шахты Талдинская-Западная-1",
        97,
        528257053,
        100.05,
        0,
        "В графике",
        528257053,
        100,
        100.01,
        0,
        "В графике",
        3,
        528257264,
        100,
        100,
        "В графике",
        "/projects/33/objects/149#reports",
        2,
        0
      ],
      [
        25,
        "26.04.2021",
        30,
        224,
        "АО \"СУЭК-Кузбасс\"",
        "Шахта 7 Ноября-Новая",
        "70 000",
        "Вскрытие и отработка запасов участка Сычевский",
        "Строительство ДЭПО",
        78,
        62253201,
        100,
        0,
        "В графике",
        60399291,
        97.02,
        100,
        0,
        "В графике",
        3,
        60399291,
        97.02,
        100,
        "В графике",
        "/projects/30/objects/224#reports",
        0,
        0
      ],
      [
        26,
        "26.04.2021",
        56,
        228,
        "АО \"СУЭК-Кузбасс\"",
        "Шахта \"Комсомолец\"",
        "807 000",
        "Реконструкция НФС шахты Комсомолец",
        "Монтаж очистных сооружений шахтных вод объединенного водоотлива",
        67,
        554986966.02,
        97.02,
        0,
        "В графике",
        542953463.52,
        97.83,
        97.02,
        0,
        "В графике",
        3,
        535409992.64,
        96.47,
        100,
        "В графике",
        "/projects/56/objects/228#reports",
        0,
        0
      ],
      [
        27,
        "26.04.2021",
        34,
        148,
        "АО \"Разрез Тугнуйский\"",
        "АО \"Разрез Тугнуйский\"",
        "378 000",
        "Техническое перевооружение схемы водоотведения АО \"Разрез Тугнуйский\". Внедрение современного технологического комплекса для очистки карьерных вод",
        "Техническое перевооружение системы водоотведения разреза Никольский",
        61,
        377999830,
        71.9,
        0,
        "В графике",
        77837910,
        20.59,
        70.33,
        0,
        "В графике",
        3,
        214542178,
        56.76,
        100,
        "В графике",
        "/projects/34/objects/148#reports",
        0,
        0
      ],
      [
        28,
        "26.04.2021",
        45,
        195,
        "ООО \"СУЭК-Хакасия\"",
        "ОФ Черногорская",
        "24 000",
        "Поддержание проектной мощности Черногорской ОФ",
        "Реконструкция здания химической лаборатории",
        93,
        18761106,
        100,
        0,
        "В графике",
        9553069,
        50.92,
        99.94,
        0,
        "В графике",
        3,
        9552769,
        50.92,
        100,
        "В графике",
        "/projects/45/objects/195#reports",
        0,
        0
      ],
      [
        29,
        "26.04.2021",
        30,
        223,
        "АО \"СУЭК-Кузбасс\"",
        "Шахта 7 Ноября-Новая",
        "35 776",
        "Вскрытие и отработка запасов участка Сычевский",
        "Строительство производственно- противопожарной насосной станции на участке \"Сычевский\"",
        95,
        35776169.99,
        100,
        0,
        "В графике",
        34744285.79,
        97.12,
        100,
        0,
        "В графике",
        3,
        35776169.99,
        100,
        100,
        "В графике",
        "/projects/30/objects/223#reports",
        0,
        0
      ],
      [
        30,
        "26.04.2021",
        54,
        215,
        "ООО \"Приморскуголь\"",
        "РУ \"Новошахтинское\"",
        "55 907",
        "Поддержание проектной мощности РУ «Новошахтинское» ООО \"Приморскуголь\"",
        "Топливораздаточный пункт РУ «Новошахтинское» ООО «Приморскуголь»",
        88,
        53856887.17,
        86.48,
        0,
        "В графике",
        17437888.17,
        32.38,
        86.55,
        0,
        "В графике",
        3,
        46811994.85,
        86.92,
        100,
        "В графике",
        "/projects/54/objects/215#reports",
        0,
        0
      ],
      [
        31,
        "26.04.2021",
        30,
        225,
        "АО \"СУЭК-Кузбасс\"",
        "Шахта 7 Ноября-Новая",
        "24 000",
        "Вскрытие и отработка запасов участка Сычевский",
        "Строительство автомобильных весов СКАТ-100",
        95,
        20637202.32,
        98.02,
        0,
        "В графике",
        13937791.01,
        67.54,
        98.02,
        0,
        "В графике",
        3,
        20228577.32,
        98.02,
        100,
        "В графике",
        "/projects/30/objects/225#reports",
        0,
        0
      ],
      [
        32,
        "26.04.2021",
        59,
        238,
        "АО \"СУЭК-Кузбасс\"",
        "Шахта им. А.Д.Рубана",
        "677 833",
        "Реконструкция складского хозяйства АО \"СУЭК\" (шахта им. А.Д.Рубана)",
        "Строительство базы МТС",
        100,
        677833332,
        100,
        0,
        "Введен в эксплуатацию",
        677833332,
        100,
        100,
        0,
        "Введен в эксплуатацию",
        4,
        677833332,
        100,
        100,
        "В графике",
        "/projects/59/objects/238#reports",
        0,
        0
      ],
      [
        33,
        "26.04.2021",
        57,
        229,
        "АО \"СУЭК-Кузбасс\"",
        "Шахта \"Талдинская-Западная-1\"",
        "180805",
        "Поддержание проектной мощности шахты Талдинская-Западная-1 на уровне 4 млн.т.год",
        "Строительство вентиляционной установки с тремя вентиляторами ВЦ-15 на ВПП пл.66\" ПЕ ш. «Талдинская-Западная-1» АО \"СУЭК-Кузбасс\"",
        100,
        180804545.7,
        100,
        0,
        "Введен в эксплуатацию",
        3890320,
        2.15,
        100,
        0,
        "Введен в эксплуатацию",
        4,
        180804545.7,
        100,
        100,
        "В графике",
        "/projects/57/objects/229#reports",
        0,
        0
      ],
      [
        34,
        "26.04.2021",
        46,
        199,
        "ООО \"Тугнуйская обогатительная фабрика\"",
        "ООО \"Тугнуйская обогатительная фабрика\"",
        "4 200",
        "Поддержание проектной мощности ОФ Тугнуйская",
        "Установка автовесов",
        0,
        4200000,
        0,
        0,
        "Работы не начаты",
        0,
        0,
        0,
        0,
        "Работы не начаты",
        6,
        0,
        0,
        100,
        "Работы не ведутся",
        "/projects/46/objects/199#reports",
        0,
        0
      ],
      [
        35,
        "26.04.2021",
        69,
        281,
        "АО \"Ургалуголь\"",
        "ОФ «Чегдомын»",
        "71000",
        "Увеличение проектной мощности ОФ Чегдомын до 9 млн.тн.",
        "Удлинение железнодорожных путей обогатительной фабрики «Чегдомын»",
        0,
        70082889,
        0,
        0,
        "Работы не начаты",
        0,
        0,
        0,
        0,
        "Работы не начаты",
        6,
        0,
        0,
        100,
        "Работы не ведутся",
        "/projects/69/objects/281#reports",
        0,
        0
      ],
      [
        36,
        "26.04.2021",
        35,
        280,
        "АО \"Разрез Тугнуйский\"",
        "АО \"Разрез Тугнуйский\"",
        "86476",
        "Проект разработки Никольского каменноугольного месторождения с производственной мощностью 15 млн. тонн угля в год",
        "Блок технического обслуживания",
        0,
        86319058.54,
        0.04,
        0,
        "В графике",
        0,
        0,
        0,
        0,
        "Работы не начаты",
        6,
        0,
        0,
        100,
        "В графике",
        "/projects/35/objects/280#reports",
        1,
        1
      ],
      [
        37,
        "26.04.2021",
        46,
        196,
        "ООО \"Тугнуйская обогатительная фабрика\"",
        "ООО \"Тугнуйская обогатительная фабрика\"",
        "8 425",
        "Поддержание проектной мощности ОФ Тугнуйская",
        "Устройство подпорных стен галереи выдачи кека (поз.78), бункера породы модуля 0-25 (поз. 80), бункера породы модуля 0-200 мм (поз. 23)",
        0,
        8424814,
        0,
        0,
        "Работы не начаты",
        0,
        0,
        0,
        0,
        "Работы не начаты",
        6,
        0,
        0,
        100,
        "Работы не ведутся",
        "/projects/46/objects/196#reports",
        0,
        0
      ],
      [
        38,
        "26.04.2021",
        25,
        160,
        "АО \"Ургалуголь\"",
        "ООО \"Разрез Правобережный\"",
        "254900",
        "Увеличение проектной мощности АО  \"Ургалуголь\" разрез \"Правобережный\" до 6 млн. тонн",
        "Вахтовый поселок разреза Правобережный",
        4,
        254900208,
        0,
        12,
        "Работы не начаты",
        0,
        0,
        0,
        12,
        "Работы не начаты",
        6,
        0,
        0,
        100,
        "Работы не ведутся",
        "/projects/25/objects/160#reports",
        0,
        0
      ],
      [
        39,
        "26.04.2021",
        46,
        197,
        "ООО \"Тугнуйская обогатительная фабрика\"",
        "ООО \"Тугнуйская обогатительная фабрика\"",
        "1 250",
        "Поддержание проектной мощности ОФ Тугнуйская",
        "Установка пожарной сигнализации в складах ТМЦ",
        0,
        1250000,
        0,
        0,
        "Работы не начаты",
        0,
        0,
        0,
        0,
        "Работы не начаты",
        6,
        0,
        0,
        100,
        "Работы не ведутся",
        "/projects/46/objects/197#reports",
        0,
        0
      ],
      [
        40,
        "26.04.2021",
        71,
        283,
        "АО \"СУЭК-Красноярск\"",
        "Разрез Бородинский имени М.И. Щадова",
        "813000",
        "Строительство очистных сооружений",
        "Очистные сооружения разреза Бородинский",
        0,
        723727000,
        0,
        0,
        "Работы не начаты",
        0,
        0,
        0,
        0,
        "Работы не начаты",
        6,
        0,
        0,
        100,
        "Работы не ведутся",
        "/projects/71/objects/283#reports",
        0,
        0
      ],
      [
        41,
        "26.04.2021",
        70,
        282,
        "АО \"СУЭК-Кузбасс\"",
        "Шахта им А.Д.Рубана",
        "127 700",
        "Вскрытие и отработка уч.Благодатного",
        "Строительство шламовых накопителей",
        0,
        127700174,
        0,
        0,
        "Работы не начаты",
        0,
        0,
        0,
        0,
        "Работы не начаты",
        6,
        0,
        0,
        100,
        "Работы не ведутся",
        "/projects/70/objects/282#reports",
        0,
        0
      ],
      [
        42,
        "26.04.2021",
        35,
        175,
        "АО \"Разрез Тугнуйский\"",
        "АО \"Разрез Тугнуйский\"",
        "35 000",
        "Проект разработки Никольского каменноугольного месторождения с производственной мощностью 15 млн. тонн угля в год",
        "Подъездная автодорога и внешнее электроснабжение участка \"Никольский\" Никольского каменноугольного месторождения",
        0,
        35000000,
        0,
        0,
        "Работы не начаты",
        0,
        0,
        0,
        0,
        "Работы не начаты",
        6,
        0,
        0,
        100,
        "Работы не ведутся",
        "/projects/35/objects/175#reports",
        0,
        0
      ]
    ]
  ])