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
        title: "SSCBS Lawrence Law Forum Keynote Session",
        type: "image",
        src: "/lawrence 1.jpg",
        aspect: "landscape",
        span: "wide",
    },
    {
        id: 2,
        title: "Campus Fest Organizing Committee",
        type: "image",
        src: "/lawrence 2.jpg",
        aspect: "portrait",
        span: "tall",
    },
    {
        id: 3,
        title: "Strategic Discussion Session",
        type: "image",
        src: "/lawrence 3.JPG",
        aspect: "square",
        span: "normal",
    },
    {
        id: 4,
        title: "Professional Portrait",
        type: "image",
        src: "/profile.jpg",
        aspect: "portrait",
        span: "normal",
    },
    {
        id: 5,
        title: "Example Project Presentation Video",
        type: "video",
        src: "/gallery/presentation.mp4", // User can replace this MP4 file in public/gallery/
        aspect: "landscape",
        span: "wide",
    },
    {
        id: 6,
        title: "Example Field Research Walkthrough",
        type: "video",
        src: "/gallery/field-research.mp4", // User can replace this MP4 file in public/gallery/
        aspect: "portrait",
        span: "normal",
    }
];
