export const users = [
  {
    id: 1,
    username: "festus",
    firstName: "Festus",
    lastName: "Ali",
    email: "festusali@gmail.com",
    isAdmin: true,
    twoots: [
      {
        id: 1,
        content: "First twoot by Festus.",
        date: "12/01/2021",
        favorites: [
          {id: 1, user: "festus1", date: "13/01/2021"},
          {id: 2, user: "festus_1", date: "15/01/2021"},
          {id: 3, user: "festus_11", date: "14/01/2021"},
          {id: 4, user: "festus11", date: "12/01/2021"}
        ]
      },
      {
        id: 2,
        content: "Second twoot by Festus.",
        date: "13/01/2021",
        favorites: [
          {id: 2, user: "festus", date: "12/01/2021"}
        ]
      },
      {
        id: 3,
        content: "Third twoot by Festus.",
        date: "14/01/2021",
        favorites: [
          {id: 5, user: "festus_1", date: "14/01/2021"},
          {id: 7, user: "festus1", date: "14/01/2021"}
        ]
      },
      {
        id: 4,
        content: "Fourth twoot by Festus.",
        date: "15/01/2021",
        favorites: [
          {id: 3, user: "festus1", date: "14/01/2021"},
          {id: 9, user: "festus", date: "14/01/2021"}
        ]
      }
    ]
  },
  {
    id: 2,
    username: "michael",
    firstName: "Michael",
    lastName: "Justmike",
    email: "",
    isAdmin: false,
    twoots: []
  },
  {
    id: 3,
    username: "cheche",
    firstName: "Chineche",
    lastName: "Rem",
    email: "",
    isAdmin: false,
    twoots: []
  },
  {
    id: 4,
    username: "chinonso",
    firstName: "Chinonso",
    lastName: "Nonso",
    email: "",
    isAdmin: false,
    twoots: []
  }
]