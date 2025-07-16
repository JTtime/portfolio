import { Typography, Box, Grid, Card, CardContent, CardActions, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';

const projects = [
  {
    title: "Agentic AI UI Platform",
    description: "Frontend for orchestrating autonomous AI agents. Built using React + Material UI. Handles agent workflows, logs, and UI orchestration.",
    stack: ["React", "MUI", "Python", "LLMs"],
    github: "https://github.com/JTtime/practice/tree/main/agent-demo",
  },
  {
    title: "EduFund Onboarding System",
    description: "Web + Mobile experience for student onboarding. Managed full stack in solo mode including dashboard, auth, and API integration.",
    stack: ["React", "Next.js", "React Native", "Node.js"],
    github: "https://github.com/JTtime/edufund-app",
  },
  {
    title: "3D Product Viewer",
    description: "Custom React + Three.js 3D viewer with Firebase integration. Allows real-time editing and sharing of 3D models.",
    stack: ["React", "Three.js", "Firebase"],
    github: "https://github.com/JTtime/Product_3D",
  },
  {
    title: "XFlix - Video Platform",
    description: "Full-fledged video streaming platform with RESTful API. Implements modern UI, search, filtering, and user upload features.",
    stack: ["React", "Express", "MongoDB", "Material UI"],
    github: "https://github.com/JTtime/xflix", // Replace or comment if needed
  },
];

export default function Projects() {
  return (
    <Box id="projects" sx={{ p: 6 }}>
      <Typography variant="h4" sx={{ mb: 5 }} component={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        🚀 Featured Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, idx) => (
          <Grid size={{xs: 12, md: 6}} key={project.title}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <Card elevation={6}>
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 1 }}>{project.title}</Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>{project.description}</Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {project.stack.map((tech) => (
                      <Chip label={tech} key={tech} variant="outlined" />
                    ))}
                  </Box>
                </CardContent>
                <CardActions>
                  <Button size="small" href={project.github} target="_blank" startIcon={<GitHubIcon />}>
                    View Code
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
