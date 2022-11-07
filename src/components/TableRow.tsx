import { Modal } from "@mantine/core";
import { useState } from "react";
import useViewport from "../hooks/useViewport";
import { BodyCell, Row } from "../styles/table";
import { Team } from "../types";

type TableRowProps = {
  team: Team;
  handleOpen: (participantId: string) => void;
};

const TableRow = ({ team, handleOpen }: TableRowProps) => {
  const { isMobile } = useViewport();

  return (
    <>
      <Row
        onClick={() => {
          handleOpen(team.participant.id);
        }}
      >
        <BodyCell
          style={{
            textAlign: "center",
            fontSize: "20px",
            fontWeight: 500,
          }}
        >
          {team.rank}
        </BodyCell>
        <BodyCell>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              style={{ paddingRight: "20px" }}
              width='25px'
              height='auto'
              src={team.participant.images[0].url}
              alt={team.participant.name}
            />
            {team.participant.name}
          </div>
        </BodyCell>
        {isMobile ? null : (
          <>
            <BodyCell>{team.data[4].value}</BodyCell>
            <BodyCell>{team.data[9].value}</BodyCell>
            <BodyCell>{team.data[13].value}</BodyCell>
            <BodyCell>{team.data[5].value}</BodyCell>
            <BodyCell>{team.data[3].value}</BodyCell>
            <BodyCell>{team.data[10].value}</BodyCell>
          </>
        )}
        <BodyCell>{team.data[0].value}</BodyCell>
      </Row>
    </>
  );
};

export default TableRow;
