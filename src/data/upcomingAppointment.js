import syringe_icon from '../assets/syringe_icon.png'
import eye_icon from '../assets/eye_icon.png'
import heart_icon from '../assets/heart_icon.png'
import doctor_icon from '../assets/doctor_icon.png'

export const upcomingAppointments = [
    {
        day: "On Thursday",
        schedule: [
            {
                label: "Health checkup complete",
                icon: syringe_icon,
                timing: "11:00 AM"
            },
            {
                label: "Ophthalmologist",
                icon: eye_icon,
                timing: "14:00 PM"
            }
        ]
    },
    {
        day: "On Saturday",
        schedule: [
            {
                label: "Cardiologist",
                icon: heart_icon,
                timing: "12:00 AM"
            },
            {
                label: "Neurologist",
                icon: doctor_icon,
                timing: "16:00 PM"
            }
        ]
    }
]