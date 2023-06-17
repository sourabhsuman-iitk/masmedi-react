import { useCallback, useState } from "react";
import axios from "axios";
const apiEndpoint =
  "https://dev.masmedi.com/masmedi_dev/admin1/apiv1.0/postlab-test-prescription.php";
const Home = () => {
  const [messageObject, setMessageObject] = useState({
    visible: false,
    message: "",
  });
  const [file, setFile] = useState();
  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleSubmitFile = async () => {
    console.log(file);
    const formData = new FormData();
    formData.append("uid", "26");
    formData.append("file", file);
    console.log(formData);
      try {
        const res = await axios.post(apiEndpoint, formData);
        const data = await res.json();
        setMessageObject({
          visible: true,
          message: JSON.stringify(data),
        });
      } catch (err) {
        console.error(err.message);
        setMessageObject({
          visible: true,
          message: "Error uploading file",
        });
      }
  };
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        background: "#efefef",
        height: "100vh",
        width: "100vw",
        flexDirection: "column",
      }}
    >
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
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <span
          style={{
            fontSize: "15px",
            fontWeight: "500",
            padding: "10px 50px",
          }}
        >
          Upload a file
        </span>
        <input type="file" onChange={handleOnChange} />
        <button onClick={handleSubmitFile}>Submit File</button>
        {messageObject.visible && (
          <div
            style={{
              display: "flex",
              color: "#000",
            }}
          >
            {messageObject.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
