import { useBreakpoints } from "../../hooks/useWindowSize"
import { ReactComponent as IconArrowDown } from "../../assets/arrow-down.svg"
import { ReactComponent as IconArrowRight } from "../../assets/arrow-right.svg"
import IconEducation from "../../assets/icon_education_type.png"
import { useState } from "react"

export const MobileDropList = () => {
  const sm = useBreakpoints("sm")
  const [isDropListOpened, setIsDropListOpened] = useState(false)
  return (
    <div
      onClick={() => {
        setIsDropListOpened((state) => !state)
      }}
      className="select"
    >
      <img src={IconEducation} alt="icon education" />
      <p>CHOOSE YOUR CAREER</p>
      {isDropListOpened ? <IconArrowDown /> : <IconArrowRight />}
    </div>
  )
}
