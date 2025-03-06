import type { FC } from "react"
import type {TLoading} from "./types";
import classNames from "classnames";
import "./Loading.pcss"

const Loading: FC<TLoading> = (props) => {
  const {
    className,
  } = props

  return (
    <div className={classNames(className, "loading")}>
      <div className="loading__body label label--big">
        Loading...
      </div>
    </div>
  )
}

export default Loading