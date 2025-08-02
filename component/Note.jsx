import { useState } from "react";

const Note = () => {
  const isOpen = JSON.parse(localStorage.getItem("isOpen") || "false");
  const [open, setOpen] = useState(isOpen);
  
  const handleToggle = () => {
    setOpen((prev) => {
        const newState = !prev;
        localStorage.setItem("isOpen", JSON.stringify(newState));
        return newState;
      });
  };

  return (
    <div style={styles.container} onClick={handleToggle}>
        <h2 style={{fontSize: "45px", color:"white"}}> I love you!</h2>
      {!open ? (
        <img
          src="crumpled3.webp"
          alt="Crumpled Paper"
          style={styles.image}
        />
      ) : (
        <div style={styles.openedContainer}>
          <img
            src="opened2.webp"
            alt="Opened Paper"
            style={styles.openedImage}
          />
          <div style={styles.messageOverlay}>
          <p style={styles.messageText}>
            My Love,<br /><br />

            You’ve been a steady, encouraging force in my life. You always believe in me and in my dreams, even when I doubt myself. I remember feeling unsure about getting into my internship, and you were right there—pushing me forward, giving me the space to grow, and supporting me every step of the way. That kind of love and belief is rare, and it means more to me than I can ever express.<br /><br />

            But it’s more than that. You are beautiful, inside and out. I admire your drive, your hardworking spirit, and the way you go after what you want. I even love your sass, because it’s part of what makes you so uniquely you. Beneath all that strength, you have the sweetest and kindest heart.<br /><br />

            A beautiful, hardworking, and kind woman is exactly what I’ve always envisioned for my future wife, and you are all of that and so much more.<br /><br />

            I love you—not just for who you are, but for how you light up my world. You inspire me to be better, and I hope this is only the beginning of everything we’ll share together.<br /><br />

            Always,<br />
            Yours truly.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    width: "200px",
    cursor: "pointer",
    position: "relative",
    margin: "2rem auto",
  },
  image: {
    width: "100%",
    transition: "transform 0.4s ease",
  },
  openedContainer: {
    position: "relative",
  },
  openedImage: {
    width: "100%",
  },
  messageOverlay: {
    maxHeight: "250px",
    position: "absolute",
    fontSize: "1.1em", 
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    textAlign: "center",
    color: "#3b2f2f",
    fontWeight: "bold",
    overflowY: "auto", 
  
  },
  messageText: {
    margin: 0,
    fontSize: "1rem",
  },
};

export default Note;
