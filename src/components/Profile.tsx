import  {assets} from '../assets/assets'

import { useTheme } from "./ThemeContext"

const Profile = () => {
  const {isDarkMode}=useTheme()
  return (
   
    <div className={`${isDarkMode ? "bg-gray-800 text-white" : "bg-amber-50 text-black"} min-h-screen overflow-y-hidden flex justify-center items-center`}>
  <div className='flex flex-col items-center text-center'>
    <div className='h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-60 lg:w-60 overflow-hidden rounded-full shadow-lg'>
      <img className='h-full w-full object-cover' src={assets.profile} alt="Profile" />
    </div>

    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold pt-6">
      Hi, I'm Prasoon PR
    </h1>
    <h1 className="text-md sm:text-lg md:text-xl font-normal pt-2">
      A MERN Stack Developer
    </h1>
    <div className='flex flex-wrap gap-6 pt-8'>
      <button className='py-2 px-6 sm:px-10 cursor-pointer bg-black hover:bg-gray-600 text-white font-semibold rounded-md shadow-lg transition-all'>
        Connect Me
      </button>
      <button className='py-2 px-6 sm:px-10 cursor-pointer bg-black hover:bg-gray-600 text-white font-semibold rounded-md shadow-lg transition-all'>
        Download CV
      </button>
    </div>
  </div>
</div>

  )
}

export default Profile
