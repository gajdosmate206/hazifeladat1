import Kereso from "./Kereso";

function Filmkereso() {
const filmnevek = ["Venom", "Star wars", "Nagyfiúk 2", "Másnaposok", "Fák jú, Tanár úr!"];
  return (
    <>
     <div>
      <h2>Film kereső</h2>
      <Search kereses={filmnevek} />
    </div>
    </>
  )
}

export default Filmkereso
