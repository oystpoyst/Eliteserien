import { useQuery } from "@apollo/client";
import { Card, Group, Loader, Stack } from "@mantine/core";
import dayjs from "dayjs";
import React, { useEffect, useMemo, useState } from "react";
import useViewport from "../hooks/useViewport";
import { GET_MATCHES } from "../queries";
import { Match } from "../types";

type MatchCardProps = {
  match: Match;
};

const MatchCard = ({ match }: MatchCardProps) => {
  const { isMobile } = useViewport();

  return (
    <Card p='lg' radius='md' withBorder>
      <Group grow>
        <Group position='left' style={{ padding: "0px 10px" }}>
          {match.participants[0].participant.images.length > 0 && (
            <img
              width='30px'
              height='auto'
              src={match.participants[0].participant.images[0].url}
              alt={match.participants[0].participant.name}
            />
          )}
          {!isMobile && (
            <p style={{ textAlign: "center" }}>
              {match.participants[0].participant.name}
            </p>
          )}
        </Group>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {(() => {
            switch (match.status) {
              case "FINISHED":
                return (
                  <Group
                    style={{
                      width: "100px",
                      justifyContent: "center",
                      borderRadius: "20px",
                      color: "white",
                      backgroundColor: "#15243c",
                    }}
                  >
                    <p>{match.participants[0].results[1].value}</p>
                    <p>|</p>
                    <p>{match.participants[1].results[1].value}</p>
                  </Group>
                );
              case "NOT_STARTED":
                return (
                  <Group position='center'>
                    <p>{dayjs(match.startDate).format("DD.MM.YY")}</p>
                    <b>{dayjs(match.startDate).format("HH:mm")}</b>
                  </Group>
                );
              default:
                return <></>;
            }
          })()}
        </div>
        <Group position='right' style={{ padding: "0px 10px" }}>
          {!isMobile && (
            <p style={{ textAlign: "center" }}>
              {match.participants[1].participant.name}
            </p>
          )}
          {match.participants[1].participant.images.length > 0 && (
            <img
              width='30px'
              height='auto'
              src={match.participants[1].participant.images[0].url}
              alt={match.participants[1].participant.name}
            />
          )}
        </Group>
      </Group>
    </Card>
  );
};

type TeamMatchesProps = {
  participantId: string;
  startDate: string;
  endDate: string;
};

const TeamMatches = ({
  participantId,
  startDate,
  endDate,
}: TeamMatchesProps) => {
  const { loading, error, data } = useQuery(GET_MATCHES, {
    variables: {
      participantId,
      fromDate: dayjs(startDate).format("YYYY-MM-DD"),
      toDate: dayjs(endDate).format("YYYY-MM-DD"),
    },
  });

  const sortedData = useMemo(() => {
    if (data) {
      const result = data.eventsByParticipantAndDateRange as Match[];
      return [...result].sort((a: Match, b: Match) =>
        dayjs(a.startDate).isBefore(dayjs(b.startDate)) ? 1 : -1
      );
    }
    return [];
  }, [data]);

  if (loading) return <Loader />;
  if (error) return `Error! ${error}`;

  return (
    <Stack>
      {sortedData.map((match: Match) => {
        return <MatchCard key={match.id} match={match} />;
      })}
    </Stack>
  );
};

export default TeamMatches;
