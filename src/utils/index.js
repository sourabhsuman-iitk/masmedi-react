import axios from "axios";
import { apiEndpoint } from "../constants";

export const handleApiRequest = async ({file, setMessageObject}) => {
    const formData = new FormData();
    formData.append("uid", "26");
    formData.append("file", file);

    try {
      const res = await axios.post(apiEndpoint, formData);
      setMessageObject({
        visible: true,
        message: JSON.stringify(res.data.ResponseMsg),
      });
    } catch (err) {
      console.error(err.message);
      setMessageObject({
        visible: true,
        message: "Error uploading file",
      });
    }
  };