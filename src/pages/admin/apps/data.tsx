import { FaDiscord, FaTelegram } from "react-icons/fa6";

  export const apps = [
    {
      name: 'Telegram',
      logo: <FaTelegram className="text-white"/>,
      connected: true,
      color: 'bg-blue-500',
      desc: 'Run Your App on Telegram',
    },
    {
      name: "Discord",
      logo: <FaDiscord className="text-white"/>,
      connected: false,
      color: 'bg-indigo-500',
      desc: 'Run Your App on Discord',
    },

    
  ]