export type TMatchTeam = {
  name: string;
  place: number;
  players: {kills: number; username: string}[]
  points: number;
  total_kills: number;
}


export type TMatchStatus = "Finished" | "Ongoing" | "Scheduled"

export type TMatch = {
    awayScore: number;
    awayTeam: TMatchTeam;
    homeScore: number;
    homeTeam: TMatchTeam;
    status: TMatchStatus;
    time: string;
    title: string;
}

