const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "70px",
        alignItems: "center",
        justifyContent: "center",
        background: "#000000",
      }}
    >
      <span
        style={{
          color: "#ffffff",
          fontWeight: "700",
          fontSize: "25px",
          padding: "8px 20px",
        }}
      >
        MasMedi App
      </span>
    </div>
  );
};

export default Navbar;