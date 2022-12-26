import { ISidebarItem, ISidebarSection } from "./mockSidebarItems"
import { ReactComponent as IconArrowDown } from "../../assets/arrow-down.svg"
import { ReactComponent as IconArrowRight } from "../../assets/arrow-right.svg"
import React, { useState } from "react"
import { SidebarSection } from "./SidebarSection"
import "./sidebar.css"

interface SidebarItemProps {
  item: ISidebarItem
  pickedSection: ISidebarSection | null
  pickSection: (section: ISidebarSection) => void
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  item,
  pickedSection,
  pickSection,
}) => {
  const [isChoosen, setIsChoosen] = useState(false)
  const chooseSidebarItemHandler = () => {
    setIsChoosen((state) => !state)
  }
  return (
    <>
      <div className="sidebar-item" onClick={chooseSidebarItemHandler}>
        <div
          className={
            isChoosen ? "sidebar-item-title green" : "sidebar-item-title"
          }
        >
          {item.title}
        </div>
        <div className="sidebar-item-icon">
          {isChoosen ? <IconArrowDown /> : <IconArrowRight stroke="white" />}
        </div>
      </div>
      {isChoosen &&
        item.sections.map((section) => {
          return (
            <SidebarSection
              section={section}
              pickedSection={pickedSection}
              pickSection={pickSection}
            />
          )
        })}
    </>
  )
}
