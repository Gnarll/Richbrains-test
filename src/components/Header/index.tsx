import { useBreakpoints } from "../../hooks/useWindowSize"
import "./header.css"

export const Header = () => {
  const sm = useBreakpoints("sm")
  return (
    <div className={sm ? "header-wrapper-mobile" : "header-wrapper-desktop"}>
      <p className="header-title">Find your course</p>
    </div>
  )
}
