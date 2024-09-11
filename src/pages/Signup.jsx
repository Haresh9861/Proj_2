import SignupCard from "@/components/ui/SignupCard"

import backgroundImage from '../assets/image-2.jpg'; // Adjust the path if necessary




export const Signup =()=>{
    
    return <div className="min-h-screen grid grid-cols-2">
  
    <div className="flex justify-center items-center bg-gray-100">
      <SignupCard/>
    </div>

   
    <div className="relative w-full h-full">
<img
  src={backgroundImage}
  alt="Background"
  className="absolute inset-0 w-full h-full object-cover"
/>
</div>
  </div>
}