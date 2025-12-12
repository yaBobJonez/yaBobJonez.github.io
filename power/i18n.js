const translations = {
    en: {
        subtitle: "Hol' up",
        title: "IDK",
        nextTransition: "Fetching data…",
        updatedDt: "Please wait a bit",
        lastUpdate: date => `Last update: ${new Date(date).toLocaleString()}`,
        off: {
            subtitles: ["Oh no", "Ah crap", "Damn it", "Welp", "Hecc", "Whyyy"],
            titles: ["No svitlo :(", "Power be gone", "Lights off!", "Darkness falls…", "I can't see", "Absolute blackness"],
            nextTransition: m => `Power returns in ${Math.floor(m / 60)} hour(s) ${m % 60} minute(s).`
        },
        on: {
            subtitles: ["Yay", "Oh cool", "Awesome", "Hooray", "Ooh nice", "Yippee"],
            titles: ["Let there be light!", "Potuzhno", "Bright AF", "Yes power :D", "Lights on!", "Dawn breaks…"],
            nextTransition: m => `Next outage in ${Math.floor(m / 60)} hour(s) ${m % 60} minute(s).`
        },
        emergency: "Emergency shutdowns D:\nNobody knows when power returns.",
        unavailable: "No schedule available yet."
    },
    uk: {
        subtitle: "Чека́ц",
        title: "Хтозна",
        nextTransition: "Отримуємо дані…",
        updatedDt: "Трішки почекай-ка",
        lastUpdate: date => `Востаннє оновлено: ${new Date(date).toLocaleString()}`,
        off: {
            subtitles: ["Ой жах", "Та ну", "Блек", "Мда", "От халепа", "Ну чомууу"],
            titles: ["No світло :(", "Хто вкрав Свєту?", "Бігом спатб", "Настали темні часи…", "Ніц нє вїджу", "Повна пітьма"],
            nextTransition: m => `Світло повертається через ${Math.floor(m / 60)} год ${m % 60} хв.`
        },
        on: {
            subtitles: ["Та-да", "О, клас", "Чудово", "Ура", "Ooh nice", "Юхууу"],
            titles: ["Нехай буде світло!", "Незламно.", "ІЗДОС як сліпить", "Електрохарчування :D", "Прокидаємосб діти!", "Прийшов світанок…"],
            nextTransition: m => `Наступне відключення через ${Math.floor(m / 60)} год ${m % 60} хв.`
        },
        emergency: "Екстрені відключення D:\nНевідомо, коли повернуть світло.",
        unavailable: "Наразі графіки недоступні."
    },
    ru: {
        subtitle: "Погодь",
        title: "ИДК",
        nextTransition: "Получаем данные…",
        updatedDt: "Падажжи немнога",
        lastUpdate: date => `Последнее обновление: ${new Date(date).toLocaleString()}`,
        off: {
            subtitles: ["О нет", "А блэк", "Ну нафиг", "Мда", "Капец", "Ну пачимууу"],
            titles: ["No свет :(", "Кто украл Свету?", "Идм спатб уже", "Наступает тьма…", "Ваще не видно", "Тотальный мрак"],
            nextTransition: m => `Свет возвращается через ${Math.floor(m / 60)} ч. ${m % 60} мин.`
        },
        on: {
            subtitles: ["Та-да", "О, круто", "Отлично", "Ура", "Ooh nice", "Юхууу"],
            titles: ["Да будет свет!", "Потужно.", "Капец ярко", "Свитыло тут :D", "Пора вставатб детм!", "Рассвет…"],
            nextTransition: m => `Следующее отключение через ${Math.floor(m / 60)} ч. ${m % 60} мин.`
        },
        emergency: "Экстренные отключения D:\nНеизвестно, когда вернут свет.",
        unavailable: "Пока графики недоступны."
    },
}

export default function() {
    const availableLanguages = Object.keys(translations);
    const userLanguages = navigator.languages || [navigator.language];
    for (const lang of userLanguages) {
        const code = lang.slice(0, 2);
        if (availableLanguages.includes(code))
            return translations[code];
    }
    return translations["en"];
}
