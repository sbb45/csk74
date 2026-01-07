export interface Project {
    id: number;
    title: string;
    slug: string;
    image: string;
    image2: string;

    date?: string;
    location?: string;
    area?: number;
    floors?: number | string;
    type?: string;

    tech?: string;
    foundation?: string;

    shortDesc?: string;
    description?: string;

    gallery?: string[];
    gallery2?: string[];
}
export const projects: Project[] = [
    // 1) Баня Чурилово
    {
        id: 1,
        title: "Каркасная баня «Чурилово»",
        slug: "banya-churilovo",
        image: "/portfolio/01/webp/main.webp",
        image2: "/portfolio/01/jpg/main.png",

        date: "2025",
        location: "Чурилово",
        area: 69,
        floors: "1,5",
        type: "баня под ключ",

        tech: "Каркасная технология",
        foundation: "Свайно-винтовой фундамент (24 шт.)",

        shortDesc: "Баня-комплекс 69 м² с большой террасой, вторым светом и панорамными окнами.",
        description:
            "Проект «Чурилово» — полноценный комплекс для отдыха: большая терраса перед центральным фасадом, второй этаж и эффектный второй свет. " +
            "Внутри — чёткое зонирование: просторная комната отдыха с панорамными окнами, банный блок со вместительной сауной, отдельной раздевалкой " +
            "и помывочной с душевой. Габарит 10×6,1; комнат — 2.",

        gallery: [
            "/portfolio/01/webp/01.webp",
            "/portfolio/01/webp/02.webp",
            "/portfolio/01/webp/03.webp",
            "/portfolio/01/webp/04.webp",
            "/portfolio/01/webp/05.webp",
            "/portfolio/01/webp/06.webp",
            "/portfolio/01/webp/07.webp",
            "/portfolio/01/webp/08.webp",
            "/portfolio/01/webp/09.webp",
            "/portfolio/01/webp/10.webp",
            "/portfolio/01/webp/11.webp",
            "/portfolio/01/webp/12.webp",
        ],
        gallery2: [
            "/portfolio/01/jpg/01.jpg",
            "/portfolio/01/jpg/02.jpeg",
            "/portfolio/01/jpg/03.jpg",
            "/portfolio/01/jpg/04.jpg",
            "/portfolio/01/jpg/05.jpg",
            "/portfolio/01/jpg/06.jpg",
            "/portfolio/01/jpg/07.jpeg",
            "/portfolio/01/jpg/08.jpeg",
            "/portfolio/01/jpg/09.png",
            "/portfolio/01/jpg/10.jpg",
            "/portfolio/01/jpg/11.png",
            "/portfolio/01/jpg/12.png",
        ],
    },

    // 2) Дом Ключи
    {
        id: 2,
        title: "Каркасный дом «Ключи»",
        slug: "dom-klyuchi",
        image: "/portfolio/02/webp/main.webp",
        image2: "/portfolio/02/jpg/main.png",

        date: "2024",
        location: "Ключи",
        area: 93.5,
        floors: 1,
        type: "дом под ключ",

        tech: "Каркасная технология",
        foundation: "Свайно-винтовой фундамент (32 шт.)",

        shortDesc: "Одноэтажный дом 93,5 м² с двускатной кровлей и двумя террасами — удобно для семьи 4–5 человек.",
        description:
            "Проект «Ключи» — лаконичный прямоугольный дом с окнами по всем фасадам, двускатной кровлей и двумя небольшими террасами. " +
            "Внутри — продуманная планировка: просторная кухня-гостиная, две спальни, общий холл, санузел, прихожая и техническое помещение. " +
            "Габарит 11×8,5; комнат — 3. Технический блок позволяет предусмотреть котельную для круглогодичного проживания.",

        gallery: [
            "/portfolio/02/webp/01.webp",
            "/portfolio/02/webp/02.webp",
            "/portfolio/02/webp/03.webp",
            "/portfolio/02/webp/04.webp",
            "/portfolio/02/webp/05.webp",
            "/portfolio/02/webp/06.webp",
            "/portfolio/02/webp/07.webp",
            "/portfolio/02/webp/08.webp",
            "/portfolio/02/webp/09.webp",
            "/portfolio/02/webp/10.webp",
            "/portfolio/02/webp/11.webp",
            "/portfolio/02/webp/12.webp",
        ],
        gallery2: [
            "/portfolio/02/jpg/01.jpg",
            "/portfolio/02/jpg/02.jpg",
            "/portfolio/02/jpg/03.jpg",
            "/portfolio/02/jpg/04.jpg",
            "/portfolio/02/jpg/05.jpg",
            "/portfolio/02/jpg/06.png",
            "/portfolio/02/jpg/07.jpg",
            "/portfolio/02/jpg/08.jpg",
            "/portfolio/02/jpg/09.png",
            "/portfolio/02/jpg/10.jpg",
            "/portfolio/02/jpg/11.png",
            "/portfolio/02/jpg/12.jpg",
        ],
    },

    // 3) Дом Лесная сказка
    {
        id: 3,
        title: "Каркасный дом «Лесная сказка»",
        slug: "dom-lesnaya-skazka",
        image: "/portfolio/03/webp/main.webp",
        image2: "/portfolio/03/jpg/main.png",

        date: "2023",
        location: "Лесная сказка",
        area: 84,
        floors: 1,
        type: "дом под ключ",

        tech: "Каркасная технология",
        foundation: "Свайно-винтовой фундамент (30 шт.)",

        shortDesc: "Уютный одноэтажный дом 84 м² в стиле шале: панорамные окна и просторная терраса.",
        description:
            "«Лесная сказка» — стильный одноэтажный дом с панорамными окнами и террасой, подчеркнутой балками и деревянным ограждением (мотивы шале). " +
            "Планировка с чётким зонированием: в центре кухня-гостиная с выходом на террасу, две спальни, совмещённый санузел, " +
            "вместительный холл с местом под шкаф/гардероб. Габарит 12×7; комнат — 3. Проект рассчитан на сезонное проживание, " +
            "при этом предусмотрена возможность обустройства котельной в техническом помещении.",

        gallery: [
            "/portfolio/03/webp/01.webp",
            "/portfolio/03/webp/02.webp",
            "/portfolio/03/webp/03.webp",
            "/portfolio/03/webp/04.webp",
            "/portfolio/03/webp/05.webp",
            "/portfolio/03/webp/06.webp",
            "/portfolio/03/webp/07.webp",
            "/portfolio/03/webp/08.webp",
            "/portfolio/03/webp/09.webp",
            "/portfolio/03/webp/10.webp",
            "/portfolio/03/webp/11.webp",
            "/portfolio/03/webp/12.webp",
        ],
        gallery2: [
            "/portfolio/03/jpg/01.jpg",
            "/portfolio/03/jpg/02.png",
            "/portfolio/03/jpg/03.png",
            "/portfolio/03/jpg/04.png",
            "/portfolio/03/jpg/05.jpg",
            "/portfolio/03/jpg/06.jpg",
            "/portfolio/03/jpg/07.png",
            "/portfolio/03/jpg/08.png",
            "/portfolio/03/jpg/09.jpg",
            "/portfolio/03/jpg/10.png",
            "/portfolio/03/jpg/11.png",
            "/portfolio/03/jpg/12.png",
        ],
    },

    // 4) Дом Саргазы (в документе написано "Саргпзы")
    {
        id: 4,
        title: "Каркасный дом «Саргазы»",
        slug: "dom-sargazy",
        image: "/portfolio/04/webp/main.webp",
        image2: "/portfolio/04/jpg/main.png",

        date: "2024",
        location: "Саргазы",
        area: 148.6,
        floors: 1,
        type: "дом под ключ",

        tech: "Каркасная технология",
        foundation: "Свайно-винтовой фундамент (45 шт.)",

        shortDesc: "Большой одноэтажный дом 148,6 м²: панорамные окна, выход на террасу, мастер-спальня и кабинет.",
        description:
            "Проект «Саргазы» — большой одноэтажный дом в простой прямоугольной форме с панорамными окнами и двускатной кровлей. " +
            "Входная группа — открытая терраса, на входе предусмотрен тамбур. Центр дома занимает просторная кухня-гостиная со стеклянными дверьми " +
            "на террасу. Спальная зона включает две детские, мастер-спальню с гардеробной и собственным санузлом, а также кабинет. " +
            "Всего комнат — 5; габарит 15×10. Планировка даёт каждому своё личное пространство без ощущения тесноты.",

        gallery: [
            "/portfolio/04/webp/01.webp",
            "/portfolio/04/webp/02.webp",
            "/portfolio/04/webp/03.webp",
            "/portfolio/04/webp/04.webp",
            "/portfolio/04/webp/05.webp",
            "/portfolio/04/webp/06.webp",
            "/portfolio/04/webp/07.webp",
            "/portfolio/04/webp/08.webp",
            "/portfolio/04/webp/09.webp",
            "/portfolio/04/webp/10.webp",
            "/portfolio/04/webp/11.webp",
            "/portfolio/04/webp/12.webp",
        ],
        gallery2: [
            "/portfolio/04/jpg/01.jpeg",
            "/portfolio/04/jpg/02.png",
            "/portfolio/04/jpg/03.png",
            "/portfolio/04/jpg/04.jpg",
            "/portfolio/04/jpg/05.png",
            "/portfolio/04/jpg/06.png",
            "/portfolio/04/jpg/07.jpg",
            "/portfolio/04/jpg/08.jpg",
            "/portfolio/04/jpg/09.png",
            "/portfolio/04/jpg/10.png",
            "/portfolio/04/jpg/11.jpeg",
            "/portfolio/04/jpg/12.jpg",
        ],
    },

    // 5) Баня Северный
    {
        id: 5,
        title: "Каркасная баня «Северный»",
        slug: "banya-severnyy",
        image: "/portfolio/05/webp/main.webp",
        image2: "/portfolio/05/jpg/main.jpg",

        date: "2023",
        location: "Северный",
        area: 77,
        floors: 1,
        type: "баня под ключ",

        tech: "Каркасная технология",
        foundation: "Свайно-винтовой фундамент (22 шт.)",

        shortDesc: "Баня-комплекс 77 м² с огромной террасой и панорамными окнами — для отдыха всей семьёй и с гостями.",
        description:
            "«Северный» — баня, задуманная как полноценный комплекс для отдыха. Главный акцент — огромная терраса перед центральным фасадом. " +
            "Внутри: тамбур для хранения, большая комната отдыха с панорамными окнами и спальня. " +
            "Банный блок включает вместительную сауну и помывочную с душевой. Габарит 11×7; комнат — 2.",

        gallery: [
            "/portfolio/05/webp/01.webp",
            "/portfolio/05/webp/02.webp",
            "/portfolio/05/webp/03.webp",
            "/portfolio/05/webp/04.webp",
            "/portfolio/05/webp/05.webp",
            "/portfolio/05/webp/06.webp",
            "/portfolio/05/webp/07.webp",
            "/portfolio/05/webp/08.webp",
            "/portfolio/05/webp/09.webp",
            "/portfolio/05/webp/10.webp",
            "/portfolio/05/webp/11.webp",
            "/portfolio/05/webp/12.webp",
        ],
        gallery2: [
            "/portfolio/05/jpg/01.png",
            "/portfolio/05/jpg/02.png",
            "/portfolio/05/jpg/03.jpg",
            "/portfolio/05/jpg/04.png",
            "/portfolio/05/jpg/05.jpg",
            "/portfolio/05/jpg/06.jpg",
            "/portfolio/05/jpg/07.jpg",
            "/portfolio/05/jpg/08.jpg",
            "/portfolio/05/jpg/09.png",
            "/portfolio/05/jpg/10.jpg",
            "/portfolio/05/jpg/11.png",
            "/portfolio/05/jpg/12.jpg",
        ],
    },

    // 6) Дом Чурилово 1
    {
        id: 6,
        title: "Каркасный дом «Чурилово 1»",
        slug: "dom-churilovo-1",
        image: "/portfolio/06/webp/main.webp",
        image2: "/portfolio/06/jpg/main.jpg",

        date: "2025",
        location: "Чурилово",
        area: 128.3,
        floors: 2,
        type: "дом под ключ",

        tech: "Каркасная технология",
        foundation: "Свайно-винтовой фундамент (24 шт.)",

        shortDesc: "Двухэтажный дом 128,3 м² с террасой: продуманная планировка для большой семьи и отдельные техпомещения.",
        description:
            "Двухэтажный дом «Чурилово 1» — спокойная классика со светлым экстерьером и гармонией с природным ландшафтом. " +
            "На первом этаже — просторная кухня-гостиная с выходом на террасу, а также жилая комната под кабинет/игровую. " +
            "Предусмотрены прачечная, санузел и котельная. На мансарде — две детские и мастер-спальня. " +
            "Габарит 9×8,2; комнат — 4. Проект подходит для постоянного или сезонного проживания.",

        gallery: [
            "/portfolio/06/webp/01.webp",
            "/portfolio/06/webp/02.webp",
            "/portfolio/06/webp/03.webp",
            "/portfolio/06/webp/04.webp",
            "/portfolio/06/webp/05.webp",
            "/portfolio/06/webp/06.webp",
            "/portfolio/06/webp/07.webp",
            "/portfolio/06/webp/08.webp",
            "/portfolio/06/webp/09.webp",
            "/portfolio/06/webp/10.webp",
            "/portfolio/06/webp/11.webp",
            "/portfolio/06/webp/12.webp",
        ],
        gallery2: [
            "/portfolio/06/jpg/01.jpg",
            "/portfolio/06/jpg/02.jpg",
            "/portfolio/06/jpg/03.jpg",
            "/portfolio/06/jpg/04.jpg",
            "/portfolio/06/jpg/05.jpg",
            "/portfolio/06/jpg/06.png",
            "/portfolio/06/jpg/07.jpg",
            "/portfolio/06/jpg/08.jpg",
            "/portfolio/06/jpg/09.png",
            "/portfolio/06/jpg/10.jpg",
            "/portfolio/06/jpg/11.jpg",
            "/portfolio/06/jpg/12.png",
        ],
    },
];
