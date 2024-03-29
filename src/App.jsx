import { observer } from "mobx-react-lite";
import NewPlayer from "./components/NewPlayer";
import PlayersList from "./components/PlayersList";
import PlayersListGame from "./components/PlayersListGame";
import Word from "./components/Word";
import SpeedSlider from "./components/SpeedSlider";
import { PlayersStore } from "./mobX/PlayersStore";
import { useMemo } from "react";
import "./styles/App.css";
import Reset from "./components/Reset";
import WinnerText from "./components/WinnerText";

const App = observer(() => {
  // const [playersStore, setPlayersStore] = useState(new PlayersStore());
  // const playersStore = new PlayersStore();
  const playersStore = useMemo(() => new PlayersStore(), []);
  
  return !playersStore.gameStarted ? (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "start", padding: "4rem" }}>
      <div className="container-third">
        <NewPlayer PlayersStore={playersStore} />
      </div>
      <div className="container-two-thirds">
        <PlayersList PlayersStore={playersStore} />
      </div>
    </div>
  ) : (
    <>
      <Reset PlayersStore={playersStore}/>
      <PlayersListGame PlayersStore={playersStore} />
      <Word PlayersStore={playersStore} />
      <SpeedSlider PlayersStore={playersStore} />
      <WinnerText PlayersStore={playersStore}/>
    </>
  );
});

export default App;
