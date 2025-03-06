import type { FC } from "react"
import type {TMatchComponent} from "./types";
import type {TMatchStatus} from "@/shared/types/comon.ts";
import classNames from "classnames";
import teamImage from "@/shared/assets/images/content/team.png"
import "./Match.pcss"

const Match: FC<TMatchComponent> = (props) => {
  const {
    match
  }= props

  const score = `${match.awayScore} : ${match.homeScore}`
  const classStatus: Record<TMatchStatus, string> = {
    Finished: "is-finished",
    Ongoing: "is-ongoing",
    Scheduled: "is-scheduled",
  }

  const textStatus: Record<TMatchStatus, string> = {
    Finished: "Finished",
    Ongoing: "Live",
    Scheduled: "Match preparing",
  }
  return (
    <article className="match">
      <div className="match__team">
        <img
          className="match__team-image"
          src={teamImage}
          width="45" height="45"
          loading="lazy"
        />
        <div className="match__team-name label">{match.awayTeam.name}</div>
      </div>
      <div className="match__center">
        <div className="match__score label label--big">{score}</div>
        <div className={classNames("match__status label--small", classStatus[match.status])}>
          {textStatus[match.status]}
        </div>
      </div>
      <div className="match__team is-opposition">
        <img
          className="match__team-image"
          src={teamImage}
          width="45" height="45"
          loading="lazy"
        />
        <div className="match__team-name label">{match.homeTeam.name}</div>
      </div>
    </article>
  )
}

export default Match