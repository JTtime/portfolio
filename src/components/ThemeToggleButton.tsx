import { IconButton, useTheme, Tooltip } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useColorMode } from './ThemeProvider';
import { motion } from 'framer-motion';

export default function ThemeToggleButton() {
  const theme = useTheme();
  const { toggleColorMode } = useColorMode();

  return (
    <Tooltip title={`Switch to ${theme.palette.mode === 'light' ? 'dark' : 'light'} mode`}>
      <motion.div
        style={{
          position: 'fixed',
          top: 20,
          right: 20,
          zIndex: 1000,
          background: theme.palette.background.paper,
          borderRadius: '50%',
          boxShadow: theme.shadows[4],
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <IconButton onClick={toggleColorMode} size="large" color="primary">
          {theme.palette.mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </motion.div>
    </Tooltip>
  );
}
