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
    if (guestId === null) return;
    getUserGroup(guestId)
      .then((val) => {
        setValidUUID(val.length !== 0);
      })
      .catch(() => setValidUUID(false));
  }, [guestId]);

  return <>{validUUID ? <Main /> : <BaseView />}</>;
}
