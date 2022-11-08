import { useEffect, useState } from "react";
import eliteserienLogo from "./assets/eliteserien_logo.png";
import "./App.css";
import { useQuery } from "@apollo/client";
import TournamentTable from "./components/TournamentTable";
import { Loader } from "@mantine/core";
import { GET_TEAMS } from "./queries";
import { Team, Tournament } from "./types";

const tournamentStageId = "4e50ba57-d5fe-4370-b2f8-e357ebeb4c83";

function App() {
  const { loading, error, data } = useQuery(GET_TEAMS, {
    variables: { tournamentStageId },
    pollInterval: 3000,
  });
  const [tournament, setTournament] = useState<Tournament>();

  useEffect(() => {
    if (data) {
      setTournament(data.tournamentStage);
    }
  }, [data]);

  if (loading) return <Loader />;
  if (error) return `Error! ${error}`;

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <img
        src={eliteserienLogo}
        width='300px'
        alt='Eliteserien logo'
        style={{ padding: "20px 0px 50px 0px" }}
      />
      {tournament && (
        <TournamentTable
          startDate={tournament.startDate}
          endDate={tournament.endDate}
          teams={tournament.standings[0].participants}
        />
      )}
    </div>
  );
}

export default App;
