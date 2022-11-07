import { gql } from "@apollo/client";

export const GET_TEAMS = gql`
  query table($tournamentStageId: ID!) {
    tournamentStage(id: $tournamentStageId) {
      name
      startDate
      endDate
      standings(type: LEAGUE_TABLE) {
        participants {
          participant {
            id
            name
            images {
              url
            }
          }
          rank
          data {
            code
            value
          }
        }
      }
    }
  }
`;

export const GET_MATCHES = gql`
  query teamMatches(
    $participantId: ID!
    $fromDate: LocalDate!
    $toDate: LocalDate!
  ) {
    eventsByParticipantAndDateRange(
      participantId: $participantId
      fromDate: $fromDate
      toDate: $toDate
    ) {
      id
      startDate
      status
      tournamentStage {
        name
      }
      participants {
        results {
          resultType
          value
        }
        participant {
          name
          images {
            url
          }
        }
      }
    }
  }
`;
