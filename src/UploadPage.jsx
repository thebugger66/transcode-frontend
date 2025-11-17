// import React, { useState } from 'react'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'

// const UploadPage = () => {
//   const [file, setFile] = useState(null)
//   const [uploading, setUploading] = useState(false)
//   const [progress, setProgress] = useState(0)
//   const navigate = useNavigate()

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0])
//   }

//   const handleUpload = async () => {
//     if (!file) return alert("Please select a video file first!")

//     const formData = new FormData()
//     formData.append('video', file)

//     try {
//       setUploading(true)
//       const res = await axios.post('http://localhost:2000/api/upload', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//         onUploadProgress: (p) => {
//           setProgress(Math.round((p.loaded * 100) / p.total))
//         }
//       })

//       const videoId = res.data.videoId
//       navigate(`/player/${videoId}`) // redirect to player
//     } catch (err) {
//       console.error(err)
//       alert('Upload failed!')
//     } finally {
//       setUploading(false)
//     }
//   }

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>🎬 Upload Your Video</h1>
//       <input type="file" accept="video/*" onChange={handleFileChange} />
//       <br /><br />
//       <button onClick={handleUpload} disabled={uploading}>
//         {uploading ? `Uploading... ${progress}%` : 'Upload'}
//       </button>

      

//       {uploading && (
//         <div style={{ marginTop: "20px" }}>
//           <progress value={progress} max="100"></progress>
//           <p>{progress}% uploaded</p>
//         </div>
//       )}
//     </div>
//   )
// }

// export default UploadPage


import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const UploadPage = () => {
  const [file, setFile] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const navigate = useNavigate()

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleUpload = async () => {
    if (!file) return alert("Please select a video file first!")

    const formData = new FormData()
    formData.append("video", file)

    try {
      setUploading(true)
      const res = await axios.post("http://localhost:2000/api/uploads", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (p) => {
          setProgress(Math.round((p.loaded * 100) / p.total))
        },
      })

      const videoID = res.data.videoID  
      navigate(`/player/${videoID}`)
    } catch (err) {
      console.error(err)
      alert("Upload failed!")
    } finally {
      setUploading(false)
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1f1c2c, #928dab)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontFamily: "Poppins, sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          borderRadius: "16px",
          padding: "40px",
          width: "90%",
          maxWidth: "450px",
          textAlign: "center",
          boxShadow: "0 0 20px rgba(0,0,0,0.3)",
          transition: "transform 0.3s ease",
        }}
      >
        <h1 style={{ marginBottom: "20px", fontSize: "1.8rem" }}>🎬 Upload Your Video</h1>

        <div
          style={{
            border: "2px dashed rgba(255,255,255,0.5)",
            borderRadius: "12px",
            padding: "30px",
            marginBottom: "25px",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onClick={() => document.getElementById("fileInput").click()}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#4caf50")}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)")}
        >
          <input
            id="fileInput"
            type="file"
            accept="video/*"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          <p style={{ fontSize: "1rem", opacity: 0.8 }}>
            {file ? `📁 Selected: ${file.name}` : "Click here or drag a file to upload"}
          </p>
        </div>

        <button
          onClick={handleUpload}
          disabled={uploading}
          style={{
            backgroundColor: uploading ? "#777" : "#4caf50",
            border: "none",
            padding: "12px 30px",
            color: "#fff",
            borderRadius: "8px",
            fontSize: "1rem",
            fontWeight: "600",
            cursor: uploading ? "not-allowed" : "pointer",
            transition: "background 0.3s ease",
            width: "100%",
          }}
          onMouseOver={(e) => {
            if (!uploading) e.target.style.backgroundColor = "#43a047"
          }}
          onMouseOut={(e) => {
            if (!uploading) e.target.style.backgroundColor = "#4caf50"
          }}
        >
          {uploading ? `Uploading... ${progress}%` : "🚀 Upload Video"}
        </button>

        {uploading && (
          <div style={{ marginTop: "25px", width: "100%" }}>
            <progress
              value={progress}
              max="100"
              style={{
                width: "100%",
                height: "10px",
                borderRadius: "10px",
                overflow: "hidden",
                backgroundColor: "#ddd",
              }}
            ></progress>
            <p style={{ marginTop: "10px", fontSize: "0.9rem" }}>{progress}% uploaded</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default UploadPage
