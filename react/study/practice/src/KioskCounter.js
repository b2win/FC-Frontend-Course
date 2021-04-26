import React, { useState } from "react";

function KioskCounter() {
  const [up, setUp] = useState(1);
  const [down, setDown] = useState(0);

  return (
    <div>
      {up + down}
      <button onClick={() => setUp(up + 1)}>+</button>
      <button onClick={() => setDown(down - 1)}>-</button>
    </div>
  );
}

export default KioskCounter;
