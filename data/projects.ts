export type Project = {
    id: number;
    number: string;
    title: string;
    supervisor: string;
    supervisorUrl: string;
    institution: string;
    description: string;
    tags: string[];
    color: string;
};

export const projects: Project[] = [
    {
        id: 1,
        number: "01",
        title: "Gig Economy Analysis",
        supervisor: "Under Prof. Dr. Raj Kumar",
        supervisorUrl: "https://sscbs.du.ac.in/portfolio/raj-kumar-ma/",
        institution: "University of Delhi",
        description:
            "Investigated challenges in India's gig economy by auditing algorithmic management systems. Audited 8 dark patterns in algorithmic management, grievance redressal, and income opacity. Examined income mystification risks where penalties reach up to ₹1,200 per incident for medium-skill workers.",
        tags: ["Gig Economy", "Labor Economics", "AI Policy", "Algorithmic Management"],
        color: "#FF6B4A",
    },
    {
        id: 2,
        number: "02",
        title: "NTPC Fundamental Analysis",
        supervisor: "Under Prof. CA CS Madhu Totla",
        supervisorUrl: "https://sscbs.du.ac.in/portfolio/ca-madhu-totla-maheshwari/",
        institution: "University of Delhi",
        description:
            "Assessed renewable transition, market dominance, and financial attractiveness of NTPC. Evaluated the 60GW renewable pivot aligning with India's 2032 energy goals. Linked operating performance trends to cash flows supporting expansion and sustained shareholder returns.",
        tags: ["Financial Analysis", "Renewable Energy", "NTPC", "Fundamental Analysis"],
        color: "#0A7E8C",
    },
];
