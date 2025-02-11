import { Box } from "@mui/material";
import "./Home.css";
import "@fontsource/dancing-script";

export default function Home() {
  return (
    <div className="top-container">
      <Box className="text-container animate__slideInLeft">
        <h1 className="intro">Developer</h1>
        <h2 className="intro-addition">with designer&apos;s eyes</h2>
      </Box>
    </div>
  );
}
