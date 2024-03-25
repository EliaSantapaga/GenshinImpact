/* eslint-disable react/no-unescaped-entities */
import pyro from "../assets/Elements/Pyro.png";
import amber from "../assets/Characters/Amber.png";
import vaBefore from "../assets/Other/VA-before.jpg";

function CharacterInfo() {
  return (
    <div className="character-slide row">
      <div className="info-div col-5 pt-5">
        <img
          src={pyro}
          alt="Pyro Logo"
          className="element-logo opacity-25 position-absolute"
        />
        <div className="align-items-center">
          <h1 className="character-name noto-serif text-white">AMBER</h1>

          <div className="va-info-row row mb-4">
            <div className="col-9 va-info d-flex p-0">
              <div className="col-2 d-flex align-items-center">
                <img src={vaBefore} alt="VA before" />
              </div>
              <div className="col-10 d-flex align-items-center">
                <p className="va-name fs-3 m-0">VA: Manaka Iwami</p>
              </div>
            </div>

            <div className="col-3 center-flex">
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round" />
              </label>
            </div>
          </div>

          <div className="infobox ps-3 py-2 d-flex">
            <div className="infobox-inside">
              <p className="info-text text-white p-0 m-0">
                Una ragazza vivace e diretta, nonché la Vigilante dei Cavalieri
                di Favonius.
                <br />
                Grazie alle sue grandi abilità nell'uso dell'aliante, è tre
                volte campionessa di volo a vela di Mondstadt.
                <br />
                Stella nascente dei Cavalieri di Favonius, Amber è sempre pronta
                per qualsiasi missione, facile o difficile che sia.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-7 d-flex justify-content-end">
        <img src={amber} alt="Amber" className="character-fullart" />
      </div>
    </div>
  );
}

export default CharacterInfo;
