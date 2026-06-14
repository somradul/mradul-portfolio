export type GalleryItem = {
    id: number;
    title: string;
    type: "image" | "video";
    src: string;
    aspect: "square" | "portrait" | "landscape";
    span?: "normal" | "wide" | "tall";
};

export const galleryItems: GalleryItem[] = [
    {
        id: 1,
        title: "Amba 0373",
        type: "image",
        src: "/gallery/Amba_0373.JPG",
        aspect: "landscape",
    },
    {
        id: 2,
        title: "Amba 806",
        type: "image",
        src: "/gallery/Amba_806.JPG",
        aspect: "portrait",
        span: "tall",
    },
    {
        id: 3,
        title: "Img 20240319 Wa0012",
        type: "image",
        src: "/gallery/IMG-20240319-WA0012.jpg",
        aspect: "landscape",
    },
    {
        id: 4,
        title: "Img 20240319 Wa0088",
        type: "image",
        src: "/gallery/IMG-20240319-WA0088.jpg",
        aspect: "portrait",
    },
    {
        id: 5,
        title: "Img 20240502 Wa0032",
        type: "image",
        src: "/gallery/IMG-20240502-WA0032.jpg",
        aspect: "portrait",
        span: "tall",
    },
    {
        id: 6,
        title: "Img 20240520 Wa0013",
        type: "image",
        src: "/gallery/IMG-20240520-WA0013.jpg",
        aspect: "landscape",
        span: "wide",
    },
    {
        id: 7,
        title: "Img 20250122 Wa0004",
        type: "image",
        src: "/gallery/IMG-20250122-WA0004.jpg",
        aspect: "square",
    },
    {
        id: 8,
        title: "Img 20250131 Wa0031",
        type: "image",
        src: "/gallery/IMG-20250131-WA0031.jpg",
        aspect: "portrait",
    },
    {
        id: 9,
        title: "Img 20250607 Wa0029",
        type: "image",
        src: "/gallery/IMG-20250607-WA0029.jpg",
        aspect: "portrait",
        span: "tall",
    },
    {
        id: 10,
        title: "Img 20251103 Wa0007",
        type: "image",
        src: "/gallery/IMG-20251103-WA0007.jpg",
        aspect: "portrait",
        span: "tall",
    },
    {
        id: 11,
        title: "Img 20260419 Wa0087",
        type: "image",
        src: "/gallery/IMG-20260419-WA0087.jpg",
        aspect: "portrait",
        span: "tall",
    },
    {
        id: 12,
        title: "Img 20240316 192845 315",
        type: "image",
        src: "/gallery/IMG_20240316_192845_315.jpg",
        aspect: "portrait",
    },
    {
        id: 13,
        title: "Img 20250208 141411",
        type: "image",
        src: "/gallery/IMG_20250208_141411.jpg",
        aspect: "portrait",
    },
    {
        id: 14,
        title: "Vid 20250607 Wa0055",
        type: "video",
        src: "/gallery/VID-20250607-WA0055.mp4",
        aspect: "portrait",
    },
];
