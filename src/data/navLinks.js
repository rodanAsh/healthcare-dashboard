import { AiFillAppstore } from "react-icons/ai";
import { RiArrowUpDownFill } from "react-icons/ri";
import { BiSolidCalendar } from "react-icons/bi";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";

export const navLinks = [
    {
        category: "General",
        links: [
            {
                icon: AiFillAppstore,
                title: "Dashboard",
            },
            {
                icon: RiArrowUpDownFill,
                title: "History"
            },
            {
                icon: BiSolidCalendar,
                title: "Calendar"
            },
            {
                icon: BsFillPlusSquareFill,
                title: "Appointments"
            },
            {
                icon: BsGraphUpArrow,
                title: "Statistics"
            }
        ]
    },
    {
        category: "Tools",
        links: [
            {
                icon: IoChatbubbleEllipsesSharp,
                title: "Chat"
            },
            {
                icon: IoCall,
                title: "Support"
            }
        ]
    },
    {
        category: "",
        links: [
            {
                icon: IoSettingsSharp,
                title: "Settings"
            }
        ]
    }
]