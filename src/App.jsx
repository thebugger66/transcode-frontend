import React from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import UploadPage from "./UploadPage";
import VideoPlayer from "./VideoPlayer";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Upload Page (First Screen) */}
        <Route path="/" element={<UploadPage />} />

        {/* Player Page */}
        <Route path="/player/:videoID" element={<VideoPlayerWrapper />} />
      </Routes>
    </Router>
  );
};

// Extract videoID and style the player page
const VideoPlayerWrapper = () => {
  const { videoID  } = useParams();

  return (
    <div
      style={{
        minHeight: "100vh", 
        background: "linear-gradient(135deg, #1f1c2c, #928dab)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "20px",
          textShadow: "0px 0px 10px rgba(0,0,0,0.5)",
        }}
      >
        🎥 Your Transcoded Video
      </h1>

      <div
        style={{
          width: "90%",
          maxWidth: "900px",
          background: "#0f0f0f",
          borderRadius: "12px",
          boxShadow: "0 0 25px rgba(0, 0, 0, 0.4)",
          overflow: "hidden",
        }}
      >
        {/* Video player component */}
        <VideoPlayer videoID={videoID} />
      </div>

      <button
        onClick={() => (window.location.href = "/")}
        style={{
          marginTop: "30px",
          backgroundColor: "#4caf50",
          border: "none",
          padding: "12px 24px",
          color: "#fff",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#4caf50")}
      >
        ⬅ Upload Another Video
      </button>
    </div>
  );
};

export default App;
