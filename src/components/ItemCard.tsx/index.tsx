import "./item-card.css"
import { IItemCard } from "./mockItemCards"
import EducationIcon from "../../assets/icon_education_type_2.png"
import CalendarIcon from "../../assets/calendar_icon.png"
import CloseIcon from "../../assets/icon-close.png"
import { useState } from "react"

export const ItemCard = ({ item }: { item: IItemCard }) => {
  const [isMoreInfoPressed, setIsMoreInfoPressed] = useState(false)
  return (
    <div className={isMoreInfoPressed ? "item green-bg " : "item"}>
      {isMoreInfoPressed ? (
        <div>
          <img
            className="close-icon"
            onClick={() => {
              setIsMoreInfoPressed(false)
            }}
            src={CloseIcon}
            alt="close icon"
          />
          <div className="description">
            MSc Data Analytics and Information Systems Management
          </div>
          <div className="white">
            <p>Duration</p>
            <p>Minimum: {item.minMonthsDuration}</p>
            <p>Maximum: {item.maxMonthsDuration}</p>
          </div>
          <div className="white">
            <p>Start Dates</p>
            {item.startDates}
          </div>
          <p className="price">{item.price}</p>
        </div>
      ) : (
        <>
          <div className="green-line"></div>
          <div className="logo-wrapper">
            <img className="logo" src={item.logo} alt="logo" />
          </div>
          <p className="business-and-management">BUSINESS & MANAGEMENT</p>
          <p className="master-of-business">
            Master of Business Administration (CMI)
          </p>
          <div className="row">
            <img src={EducationIcon} alt="education icon" />
            <p>Postgraduate</p>
          </div>
          <div className="row">
            <img src={CalendarIcon} alt="calendar logo" />
            <p>{item.startDates}</p>
          </div>
        </>
      )}
      <button
        className={
          isMoreInfoPressed
            ? "more-info-btn more-info-pressed-btn"
            : "more-info-btn"
        }
        onClick={() => setIsMoreInfoPressed((state) => !state)}
      >
        MORE INFO
      </button>
    </div>
  )
}
