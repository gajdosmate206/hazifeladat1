import Fooldal from "./Fooldal"

function Konyvkereso() {
const konyvcimek = ["Metro 2033", "Egri Csillagok", "Pál utcai fiúk", "Meinkampf", "Légy jó mindhalálig"]
  return (
    <>
    <div>
        <h2>Könyv kereső</h2>
        <Fooldal kereses={konyvcimek} />
    </div>
    </>
  )
}

export default Konyvkereso
