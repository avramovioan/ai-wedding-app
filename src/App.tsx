import { useEffect, useState } from "react";
import { Router, useLocation } from "react-router-dom";
import BaseView from "./Components/BaseView";
import Main from "./Components/Main";
import { getUserGroup } from "./Services/userService";

export default function App() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const guestId = queryParams.get("guestId");

  const [validUUID, setValidUUID] = useState(false);

  useEffect(() => {
    async function checkUUID() {
      if (guestId === null) return;
      try {
        //const response = await axios.get(`/api/users?uuid=${uuid}`);
        const users = await getUserGroup(guestId);
        setValidUUID(users.length !== 0);
      } catch (error) {
        setValidUUID(false);
      }
    }
    checkUUID();
  }, [guestId]);

  return <>{validUUID ? <Main /> : <BaseView />}</>;
}
