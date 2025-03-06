import type {FC} from "react"
import type {TMatchList} from "./types";
import classNames from "classnames";
import Match from "./ui/Match";
import "./MatchList.pcss"

const MatchList: FC<TMatchList> = (props) => {
  const {
    matches,
    className
  } = props

  return (
    <div className={classNames(className, "match-list")}>
      {matches.map((match) => (
        <Match key={match.time} match={match}/>
      ))}
    </div>
  )
}

export default MatchList