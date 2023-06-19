import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { handleApiRequest } from "../../utils";

const DropContainer = () => {
  const [messageObject, setMessageObject] = useState({
    visible: false,
    message: "",
  });
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const files = acceptedFiles.map((file) => (
    <span key={file.path}>{file.path}</span>
  ));
  const handleSubmitFile = useCallback(() => {
    handleApiRequest({ file: acceptedFiles[0], setMessageObject });
  }, [acceptedFiles]);
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        {...getRootProps({ className: "dropzone" })}
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "40px 80px",
          border: "2px dotted ",
        }}
      >
        <input {...getInputProps()} />
        <p>Drag and drop a file here, or click to select a file</p>
      </div>
      <aside
        style={{
          fontSize: "15px",
          padding: "10px",
        }}
      >
        {acceptedFiles[0] && (
          <div>
            <h4 style={{ padding: "5px", margin: 0 }}>Files</h4>
            <span>{files}</span>
          </div>
        )}
      </aside>
      <button
        style={{
          padding: "10px 20px",
          fontSize: "15px",
          color: '#fff',
          cursor: "pointer",
          border: 'none',
          background: '#000'
        }}
        onClick={handleSubmitFile}
      >
        Submit File
      </button>
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
    </section>
  );
};

export default DropContainer;
