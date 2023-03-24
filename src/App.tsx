import { useEffect, useState } from "react";
import { Router, useLocation } from "react-router-dom";
import BaseView from "./Components/BaseView";
import Main from "./Components/Main";

export default function App() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const uuid = queryParams.get("guestsId");

  const [validUUID, setValidUUID] = useState(false);

  useEffect(() => {
    function checkUUID() {
      if (uuid === null) return;
      try {
        //const response = await axios.get(`/api/users?uuid=${uuid}`);
        setValidUUID(true);
      } catch (error) {
        setValidUUID(false);
      }
    }
    checkUUID();
  }, [uuid]);

  return <>{validUUID ? <Main /> : <BaseView />}</>;
}
