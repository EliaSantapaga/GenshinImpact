import AppLayout from "../layout/AppLayout";
import blackBackground from "../assets/other/BlackBackground.png";
import LocationSidebar from "../components/LocationSidebar";
import CharacterSlider from "../components/CharacterSlider";
import CharacterInfo from "../components/CharacterInfo";

function Characters() {

  return (
    <>
      <img
        src={blackBackground}
        alt="Black background"
        className="black-background"
      />
      <AppLayout>
        <div className="row">
          <div className="col-3">
            <LocationSidebar />
          </div>
          <div className="col-9">
            <CharacterInfo />
          </div>
        </div>
        <CharacterSlider />
      </AppLayout>
    </>
  );
}

export default Characters;
