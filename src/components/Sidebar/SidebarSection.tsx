import React from "react"
import { ISidebarSection } from "./mockSidebarItems"

interface SidebarSectionProps {
  section: ISidebarSection
  pickedSection: ISidebarSection | null
  pickSection: (section: ISidebarSection) => void
}

export const SidebarSection: React.FC<SidebarSectionProps> = ({
  section,
  pickedSection,
  pickSection,
}) => {
  return (
    <div
      onClick={() => pickSection(section)}
      className={
        pickedSection?.id === section.id ? "section picked-section" : "section "
      }
    >
      {section.title}
    </div>
  )
}
