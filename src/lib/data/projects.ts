export interface Project {
    id: number;
    title: string;
    slug: string;
    image: string;

    date?: string;
    location?: string;
    area?: number;
    floors?: number;

    tech?: string;
    foundation?: string;

    shortDesc?: string;
    description?: string;

    gallery?: string[];
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Дом в Боровом1",
        slug: "dom-v-borovom",
        image: "/portfolio/borovoe/img.png",

        date: "2024",
        location: "Челябинск",
        area: 120,
        floors: 2,

        tech: "Каркасная технология",
        foundation: "Свайно-винтовой фундамент",

        shortDesc: "Уютный каркасный дом с продуманной планировкой и большими окнами.",
        description:
            "Этот дом был полностью спроектирован и построен для семьи из четырёх человек. \
            Продумали конструктив, коммуникации и сделали тёплый фасад с вентилируемым зазором. \
            Дом предназначен для круглогодичного проживания и включает утепление по канадскому стандарту.",

        gallery: [
            "/portfolio/borovoe/img.png",
            "/portfolio/borovoe/img.png",
            "/portfolio/borovoe/img.png"
        ]
    },

    {
        id: 2,
        title: "Каркасный дом в Сосновке",
        slug: "dom-v-sosnovke",
        image: "/portfolio/sosnovka/main.jpg",

        date: "2023",
        location: "Сосновка",
        area: 96,

        tech: "Каркасный дом под ключ",
        foundation: "Ленточный фундамент",

        shortDesc: "Компактный дом для круглогодичного проживания.",
        description:
            "Дом выполнен в строгом минималистичном стиле с акцентом на энергоэффективность. \
В проекте предусмотрено большое кухонное пространство и утеплённая кровля.",

        gallery: [
            "/portfolio/sosnovka/1.jpg",
            "/portfolio/sosnovka/2.jpg"
        ]
    }
];
