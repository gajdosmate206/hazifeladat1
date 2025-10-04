import { useState } from "react";

function Kereso({ kereses }) {
const [szuro, setSzuro] = useState("");
const szurtKereses = szuro.kereses(keres => keres.toLowerCase().includes(filter.toLowerCase()));
  return (
    <>
     <input
        type="text"
        placeholder="Keresés..."
        value={kereses}
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
