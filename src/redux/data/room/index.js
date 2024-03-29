import smallMeeting from "./images/images.jpg";
import mediumMeeting from "./images/meeting-room.jpg";
import largeMeeting from "./images/meeting-room1.jpg";
export const AllMeetingRooms = [
  {
    id: "1",
    name: "meeting room 1",
    slug: "meeting-room-1",
    office: "Old Office",
    floor: "7th",
    location: "Beside Prayer Place, 1st from right side",
    monitor: false,
    projector: true,
    capacity: 10,
    type: "meeting",
    description:
      "This meeting room for client meeting. Have facilities with internet connection wired/wireless, Projector and AC",
    booked: true,
    bookedByUser: [
      {
        bookingId: 1,
        userId: 15,
        startTime: "10.30",
        endTime: "11.20",
        date: "2019-11-21"
      },
      {
        bookingId: 2,
        userId: 2,
        startTime: "10.30",
        endTime: "11.20",
        date: "2019-11-22"
      }
    ],
    image: [{ url: mediumMeeting }]
  },
  {
    id: "5",
    name: "Big Meeting room 5",
    slug: "meeting-room-5",
    office: "Old Office",
    floor: "8th",
    location: "Left side of Entrance",
    monitor: true,
    projector: false,
    capacity: 20,
    type: "big-meeting",
    description:
      "This meeting room for big meeting. Have facilities with internet connection wired/wireless, 42 inch Monitor and AC",
    booked: false,
    bookedByUser: [
      {
        bookingId: 1,
        userId: 15,
        startTime: "10.30",
        endTime: "11.20",
        date: "2019-11-21"
      },
      {
        bookingId: 2,
        userId: 2,
        startTime: "10.30",
        endTime: "11.20",
        date: "2019-11-22"
      }
    ],
    image: [{ url: largeMeeting }]
  },
  {
    id: "6",
    name: "meeting room 6",
    slug: "meeting-room-6",
    office: "New Office",
    floor: "7th",
    location: "Beside Accounts Room",
    monitor: true,
    projector: false,
    capacity: 5,
    type: "small-meeting",
    description:
      "This meeting room for small meeting. Have facilities with internet connection wired/wireless, 42 inch Monitor and AC",
    booked: false,
    bookedByUser: [
      {
        bookingId: 1,
        userId: 15,
        startTime: "10.30",
        endTime: "11.20",
        date: "2019-11-21"
      },
      {
        bookingId: 2,
        userId: 2,
        startTime: "10.30",
        endTime: "11.20",
        date: "2019-11-22"
      }
    ],
    image: [{ url: smallMeeting }]
  },
  {
    id: "2",
    name: "meeting room 2",
    slug: "meeting-room-2",
    office: "Old Office",
    floor: "7th",
    location: "Beside Prayer Place, 2nd from right side",
    monitor: true,
    projector: false,
    capacity: 10,
    type: "meeting",
    description:
      "This meeting room for client meeting. Have facilities with internet connection wired/wireless, 42 inch Monitor and AC",
    booked: false,
    bookedByUser: [
      {
        bookingId: 1,
        userId: 15,
        startTime: "10.30",
        endTime: "11.20",
        date: "2019-11-21"
      },
      {
        bookingId: 2,
        userId: 2,
        startTime: "10.30",
        endTime: "11.20",
        date: "2019-11-22"
      }
    ],
    image: [{ url: mediumMeeting }]
  },
  {
    id: "3",
    name: "meeting room 3",
    slug: "meeting-room-3",
    office: "Old Office",
    floor: "7th",
    location: "Beside Prayer Place, 3rd from right side",
    monitor: true,
    projector: false,
    capacity: 10,
    type: "meeting",
    description:
      "This meeting room for client meeting. Have facilities with internet connection wired/wireless, 42 inch Monitor and AC",
    booked: true,
    bookedByUser: [
      {
        bookingId: 1,
        userId: 15,
        startTime: "10.30",
        endTime: "11.20",
        date: "2019-11-21"
      },
      {
        bookingId: 2,
        userId: 2,
        startTime: "10.30",
        endTime: "11.20",
        date: "2019-11-22"
      }
    ],
    image: [{ url: mediumMeeting }]
  },
  {
    id: "4",
    name: "meeting room 4",
    slug: "meeting-room-4",
    office: "Old Office",
    floor: "7th",
    location: "Beside Accounts Room",
    monitor: true,
    projector: false,
    capacity: 5,
    type: "small-meeting",
    description:
      "This meeting room for small meeting. Have facilities with internet connection wired/wireless, 42 inch Monitor and AC",
    booked: true,
    bookedByUser: [
      {
        bookingId: 1,
        userId: 15,
        startTime: "10.30",
        endTime: "11.20",
        date: "2019-11-21"
      },
      {
        bookingId: 2,
        userId: 2,
        startTime: "10.30",
        endTime: "11.20",
        date: "2019-11-22"
      }
    ],
    image: [{ url: smallMeeting }]
  },
  {
    id: "7",
    name: "meeting room 7",
    slug: "meeting-room-7",
    office: "New Office",
    floor: "7th",
    location: "Beside Accounts Room",
    monitor: true,
    projector: false,
    capacity: 5,
    type: "small-meeting",
    description:
      "This meeting room for small meeting. Have facilities with internet connection wired/wireless, 42 inch Monitor and AC",
    booked: false,
    bookedByUser: [
      {
        bookingId: 1,
        userId: 15,
        startTime: "10.30",
        endTime: "11.20",
        date: "2019-11-21"
      },
      {
        bookingId: 2,
        userId: 2,
        startTime: "10.30",
        endTime: "11.20",
        date: "2019-11-22"
      }
    ],
    image: [{ url: smallMeeting }]
  }
];
