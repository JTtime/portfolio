import { Parallax } from 'react-parallax';
import { motion } from 'framer-motion';
import { Typography, Button, useTheme } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';


export default function Header() {
    const theme = useTheme();
    const element = document.getElementById('projects');
    const top = element?.offsetTop;
    return (
        <Parallax bgImage="https://source.unsplash.com/1600x900/?ai,technology" strength={300}>
            <div style={{ height: '100vh', color: theme.palette.text.primary, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }} component={motion.div}
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                    Jeevraj Taralkar
                </Typography>
                <Typography variant="h5" component={motion.div}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                    MERN Engineer • AI Agent Builder • Frontend Storyteller
                </Typography>
                {/* <Button variant="contained" color="secondary" sx={{ mt:4 }} component={motion.div}
                whileHover={{ scale:1.05 }} onClick={() => scrollTo({ top, behavior: 'smooth' })}>
          See My Work
        </Button> */}
                <ScrollLink to="projects" smooth={true} duration={600}>
                    <Button variant="contained" color="secondary" sx={{ mt: 4 }}>
                        See My Work
                    </Button>
                </ScrollLink>

            </div>
        </Parallax>
    );
}
