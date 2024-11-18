import React from "react";

const Body = () => {
  return (
    <main style={styles.body}>
      <div style={styles.card}>
        <img src={"/avatar.png"} alt="Ivan Oliinyk" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Ivan Oliinyk</h2>
          <p style={styles.position}>UI/UX Designer</p>
        </div>
      </div>
	  
	  <div style={styles.card}>
        <img src={"/Oleksa.png"} alt="Oleksii Mahinskyi" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Oleksii Mahinskyi</h2>
          <p style={styles.position}>Business analyst</p>
        </div>
      </div>

<div style={styles.card}>
        <img src={"/Denys.png"} alt="Denys Losiev" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Denys Losiev</h2>
          <p style={styles.position}>Backend developerr</p>
        </div>
      </div>

	<div style={styles.card}>
        <img src={"/bohdan.png"} alt="Bohdan Lukavetskyi" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Bohdan Lukavetskyi</h2>
          <p style={styles.position}>QA Engineer</p>
        </div>
      </div>
    </main>
  );
};

const styles = {
  body: {
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    width: "150px",
    padding: "1em",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    margin: "1em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  photo: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  textContainer: {
    marginTop: "0.5em",
  },
  name: {
    fontSize: "1em",
    fontWeight: "bold",
    color: "#333",
    margin: "0",
  },
  position: {
    fontSize: "0.9em",
    color: "#6a0dad", // Same purple color as header
    margin: "0.5em 0 0 0",
  },
};

export default Body;
