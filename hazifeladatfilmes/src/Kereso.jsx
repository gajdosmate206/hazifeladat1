import React, { useState, useEffect } from "react";

function Kereso({ kereses }) {
const [szuro, setSzuro] = useState("");
const [szurtKereses, setSzurtKereses] = useState(kereses);
useEffect (() => {
    setSzurtKereses(
        kereses.filter(item => item.toLowerCase().includes(szuro.toLowerCase())
        )
    );
}, [szuro, kereses]);
  return (
    <>
     <input
        type="text"
        placeholder="Keresés..."
        value={szuro}
        onChange={(e) => setSzuro(e.target.value)}
      />

      <ul>
        {szurtKereses.map((keres, i) => (
          <li key={i}>{keres}</li>
        ))}
      </ul>
    </>
  )
}

export default Kereso
