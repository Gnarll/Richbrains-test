import IconEducation from "../../assets/icon_education_type.png"
import { useBreakpoints } from "../../hooks/useWindowSize"
import { ISidebarSection, mockSidebarItems } from "./mockSidebarItems"
import "./sidebar.css"
import { useState } from "react"
import { SidebarItem } from "./SidebarItem"

export const Sidebar = () => {
  const sm = useBreakpoints("sm")
  const [pickedSection, setPickedSection] = useState<null | ISidebarSection>(
    null
  )
  const pickSection = (section: ISidebarSection) => {
    setPickedSection(section)
  }
  return (
    <>
      {!sm && (
        <>
          <div className="sidebar">
            <div className="sidebar-careers">
              <img src={IconEducation} alt="icon education" />
              <p className="sidebar-careers-text">CAREERS</p>
            </div>
            <div className="line" />
            {mockSidebarItems.map((item) => {
              return (
                <SidebarItem
                  item={item}
                  pickedSection={pickedSection}
                  pickSection={pickSection}
                />
              )
            })}
            <div className="line" />
            <button className="sidebar-button">SHOW ALL PROGRAMMES</button>
          </div>
        </>
      )}
    </>
  )
}
