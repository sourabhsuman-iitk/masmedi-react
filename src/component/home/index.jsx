// import { useState } from "react";
import DropContainer from "../drop-container";
import Navbar from "../navbar";

const Home = () => {
  // const [messageObject, setMessageObject] = useState({
  //   visible: false,
  //   message: "",
  // });
  // const [file, setFile] = useState();
  // const handleOnChange = (e) => {
  //   setFile(e.target.files[0]);
  // };
  // const handleSubmitFile = useCallback(() => {
  //   handleApiRequest({ file, setMessageObject });
  // }, [file]);

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
      <Navbar />
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {/* <span
          style={{
            fontSize: "18px",
            fontWeight: "500",
            padding: "10px 50px",
          }}
        >
          .pdf, .doc, .docx, .rtf, .ppt, .pptx, .txt, .jpeg, .jpg, .png
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
        )} */}
        <DropContainer />
      </div>
      {/* <Dropzone /> */}
    </div>
  );
};

export default Home;
