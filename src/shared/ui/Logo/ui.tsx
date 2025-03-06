import type { TLogo } from "./types"
import type { FC } from "react"
import classNames from "classnames"
import logo from "@/shared/assets/images/logo.png"

const Logo: FC<TLogo> = (props) => {
  const {
    className
  } = props;

  return (
    <a className={classNames(className, "logo")} href="/" aria-label="go to home page">
      <img
        className="logo__image"
        title="to home page"
        src={logo}
        alt="match tracker logo"
        width="257" height="32" loading="lazy"
      />
    </a>
  )
}

export default Logo