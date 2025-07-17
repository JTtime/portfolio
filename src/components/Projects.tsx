import { Typography, Box, Grid, Card, CardContent, CardActions, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';

// const projects = [
//   {
//     title: "Agentic AI UI Platform",
//     description: "Frontend for orchestrating autonomous AI agents. Built using React + Material UI. Handles agent workflows, logs, and UI orchestration.",
//     stack: ["React", "MUI", "Python", "LLMs"],
//     github: "https://github.com/JTtime/practice/tree/main/agent-demo",
//   },
//   {
//     title: "EduFund Onboarding System",
//     description: "Web + Mobile experience for student onboarding. Managed full stack in solo mode including dashboard, auth, and API integration.",
//     stack: ["React", "Next.js", "React Native", "Node.js"],
//     github: "https://github.com/JTtime/edufund-app",
//   },
//   {
//     title: "3D Product Viewer",
//     description: "Custom React + Three.js 3D viewer with Firebase integration. Allows real-time editing and sharing of 3D models.",
//     stack: ["React", "Three.js", "Firebase"],
//     github: "https://github.com/JTtime/Product_3D",
//   },
//   {
//     title: "XFlix - Video Platform",
//     description: "Full-fledged video streaming platform with RESTful API. Implements modern UI, search, filtering, and user upload features.",
//     stack: ["React", "Express", "MongoDB", "Material UI"],
//     github: "https://github.com/JTtime/xflix", // Replace or comment if needed
//   },
// ];

const projects = [
    {
        title: "Agentic AI UI Platform",
        description: "Frontend for orchestrating autonomous AI agents. Built using React + Material UI. Handles agent workflows, logs, and UI orchestration.",
        stack: ["React", "MUI", "Python", "LLMs"],
        github: "https://github.com/JTtime/practice/tree/main/agent-demo",
    },
    {
        title: "EduFund Web & Mobile App",
        description: "I contributed to the core frontend web-app and mobile-app onboarding workflows. Built using React Native, Next.JS, and custom design system.",
        stack: ["React", "React Native", "Next.js"],
        live: "https://app.edufund.in/",
        playstore: "https://educationfund.app.link/edufundapp",
        appstore: "https://educationfund.app.link/edufundapp",
        image: "/screenshots/edufund.png"
    },
    {
        title: "AI Patent Drafting Co-pilot for lawyers (Enterprise App)",
        description: "Enterprise app built for a client. I led the front-end experience and UI orchestration using React + Redux. Video demo available.",
        stack: ["React", "Redux", "Recoil", "Python"],
        demo: "https://www.findability.ai/en/agentic-ai-platform",
        image: "/screenshots/patentdrafting.png",
    },
    {
        title: "3D T-shirt Designer",
        description: "A frontend visualizer I built for a manufacturing client. Screenshots available — fully designed and developed solo.",
        stack: ["React", "Three.js", "Firebase", "Open Source"],
        image: "/screenshots/product3d.png",
        live: "https://product-3-d.vercel.app/",
        github: "https://github.com/JTtime/Product_3D"
    }
];


export default function Projects() {
    return (
        <Box id="projects" sx={{ p: 6 }}>
            <Typography variant="h4" sx={{ mb: 5 }} component={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                🚀 Featured Projects
            </Typography>
            {/* <Grid size={{ xs: 12, md: 6 }} key={project.title}></Grid> */}
            <Grid container spacing={4}>
                {projects.map((project, idx) => (
                    <Grid size={{ xs: 12, md: 6 }} key={project.title}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            style={{ height: '100%' }}
                        >
                            <Card elevation={6} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography variant="h6" sx={{ mb: 1 }}>{project.title}</Typography>
                                    <Typography variant="body2" sx={{ mb: 2 }}>{project.description}</Typography>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                        {project.stack.map((tech) => (
                                            <Chip label={tech} key={tech} variant="outlined" />
                                        ))}
                                    </Box>
                                </CardContent>

                                {project.image ? (
                                    <Box sx={{ p: 1 }}>
                                        <Box
                                            component="img"
                                            src={project.image}
                                            alt={project.title}
                                            sx={{
                                                width: '100%',
                                                height: 440,
                                                objectFit: 'cover',
                                                borderRadius: 2,
                                            }}
                                        />
                                    </Box>
                                ) : (
                                    <Box sx={{ p: 1, height: 180, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#f5f5f5', borderRadius: 2 }}>
                                        <Typography variant="body2" color="textSecondary">No preview available</Typography>
                                    </Box>
                                )}

                                <CardActions sx={{ p: 2 }}>
                                    {project.github && (
                                        <Button size="small" href={project.github} target="_blank" startIcon={<GitHubIcon />}>
                                            View Code
                                        </Button>
                                    )}
                                    {project.live && (
                                        <Button size="small" href={project.live} target="_blank">
                                            Web App
                                        </Button>
                                    )}
                                    {project.playstore && (
                                        <Button size="small" href={project.playstore} target="_blank">
                                            Play Store
                                        </Button>
                                    )}
                                    {project.appstore && (
                                        <Button size="small" href={project.appstore} target="_blank">
                                            App Store
                                        </Button>
                                    )}
                                    {project.demo && (
                                        <Button size="small" href={project.demo} target="_blank">
                                            Watch Demo
                                        </Button>
                                    )}
                                </CardActions>
                            </Card>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>

        </Box>
    );
}
