import { Box, Typography, Button, TextField, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const subject = encodeURIComponent("Portfolio Contact from YC Founder");
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\nMessage:\n${data.get('message')}`
    );
    window.location.href = `mailto:jeevraj.vjti@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <Box id="contact" sx={{ py: 10, px: 4, maxWidth: '600px', mx: 'auto' }}>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <Typography variant="h4" gutterBottom>
          📬 Get in Touch
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Feel free to reach out via LinkedIn or the form below. Always open to collaborating on exciting ideas!
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField name="name" label="Your Name" variant="outlined" required />
            <TextField name="email" label="Your Email" type="email" variant="outlined" required />
            <TextField name="message" label="Message" multiline rows={4} variant="outlined" required />
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                startIcon={<SendIcon />}
              >
                Send Message
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<LinkedInIcon />}
                href="https://www.linkedin.com/in/jeevraj-taralkar-69103829/"
                target="_blank"
              >
                LinkedIn
              </Button>
            </Stack>
          </Stack>
        </form>
      </motion.div>
    </Box>
  );
}
