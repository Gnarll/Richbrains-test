import uuid from 'react-uuid';

export interface ISidebarSection {
  title: string,
  id: string
}

export interface  ISidebarItem {
    title: string, 
    sections: ISidebarSection[]
}

export const mockSidebarItems: ISidebarItem[] = [
    {
      title: "Business & Management",
      sections: [

        {
          title: "Market Research Executive",
          id: uuid()
        },
        {
          title: "Child Psychologist",
          id: uuid()
        },
        {
          title: "Guidance Counsellor",
          id: uuid()
        },
        {
          title: "Behaviour Analyst",
          id: uuid()
        },
        {
          title: "Recreational Therapist",
          id: uuid()
        },
      ],
    },
    {
      title: "Computing & IT",
      sections: [
        {
          title: "Market Research Executive",
          id: uuid()
        },
        {
          title: "Child Psychologist",
          id: uuid()
        },
        {
          title: "Guidance Counsellor"
          ,id: uuid()
        }, 
        {
          title: "Behaviour Analyst",
          id: uuid()
        },
        {
          title: "Recreational Therapist",
          id: uuid()
        },
      ],
    },
    {
      title: "Fashion & Media",
      sections: [
        {
          title: "Market Research Executive",
          id: uuid()
        },
        {
          title: "Child Psychologist",
          id: uuid()
        },
        {
          title: "Guidance Counsellor",
          id: uuid()
        },
        {
          title: "Behaviour Analyst",
          id: uuid()
        },
        {
          title: "Recreational Therapist",
          id: uuid()
        },
      ],
    },
    {
      title: "Finance & Accounting",
      sections: [
        {
          title: "Market Research Executive",
          id: uuid()
        },
        {
          title: "Child Psychologist",
          id: uuid()
        },
        {
          title: "Guidance Counsellor",
          id: uuid()
        },
        {
          title: "Behaviour Analyst",
          id: uuid()
        },
        {
          title: "Recreational Therapist",
          id: uuid()
        },
      ],
    },
    {
      title: "Law & Criminology",
      sections: [
        {
          title: "Market Research Executive",
          id: uuid()
        },
        {
          title: "Child Psychologist",
          id: uuid()
        },
        {
          title: "Guidance Counsellor",
          id: uuid()
        },
        {
          title: "Behaviour Analyst",
          id: uuid()
        },
        {
          title: "Recreational Therapist",
          id: uuid()
        },
      ],
    },
    {
      title: "Marketing & Communications",
      sections: [
        {
          title: "Market Research Executive",
          id: uuid()
        },
        {
          title: "Child Psychologist",
          id: uuid()
        },
        {
          title: "Guidance Counsellor",
          id: uuid()
        },
        {
          title: "Behaviour Analyst",
          id: uuid()
        },
        {
          title: "Recreational Therapist",
          id: uuid()
        },
      ],
    },
    {
      title: "Psychology & Social Sciences",
      sections: [
        {
          title: "Market Research Executive",
          id: uuid()
        },
        {
          title: "Child Psychologist",
          id: uuid()
        },
        {
          title: "Guidance Counsellor",
          id: uuid()
        },
        {
          title: "Behaviour Analyst",
          id: uuid()
        },
        {
          title: "Recreational Therapist",
          id: uuid()
        },
      ],
    },
  ]