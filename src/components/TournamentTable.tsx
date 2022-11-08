import { Modal } from "@mantine/core";
import React, { useEffect, useState } from "react";
import useViewport from "../hooks/useViewport";
import { HeaderCell } from "../styles/table";
import { Team } from "../types";
import TableRow from "./TableRow";
import TeamMatches from "./TeamMatches";

const TableHeader = () => {
  const { isMobile } = useViewport();

  return (
    <tr>
      <HeaderCell></HeaderCell>
      <HeaderCell>Lag</HeaderCell>
      {isMobile ? null : (
        <>
          <HeaderCell>Spilt</HeaderCell>
          <HeaderCell>Seier</HeaderCell>
          <HeaderCell>Uavgjort</HeaderCell>
          <HeaderCell>Tap</HeaderCell>
          <HeaderCell>Mål for</HeaderCell>
          <HeaderCell>Mål mot</HeaderCell>
        </>
      )}
      <HeaderCell>Poeng</HeaderCell>
    </tr>
  );
};

type TempTableProps = {
  teams: Team[];
  startDate: string;
  endDate: string;
};

const TournamentTable = ({ teams, startDate, endDate }: TempTableProps) => {
  const { isMobile } = useViewport();
  const [activeParticipantId, setActiveParticipantId] = useState<
    string | undefined
  >(undefined);

  return (
    <>
      <table style={{ borderSpacing: "0", width: "90%", maxWidth: "1000px" }}>
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          {teams.map((team: Team) => (
            <TableRow
              key={team.rank}
              team={team}
              handleOpen={(participantId) =>
                setActiveParticipantId(participantId)
              }
            />
          ))}
        </tbody>
      </table>
      <Modal
        opened={!!activeParticipantId}
        overflow='inside'
        onClose={() => setActiveParticipantId(undefined)}
        size={isMobile ? "95%" : "70%"}
        title='Kamper'
        styles={{
          title: {
            fontSize: "30px",
            fontWeight: 500,
          },
        }}
      >
        {activeParticipantId && (
          <TeamMatches
            startDate={startDate}
            endDate={endDate}
            participantId={activeParticipantId}
          />
        )}
      </Modal>
    </>
  );
};

export default TournamentTable;
