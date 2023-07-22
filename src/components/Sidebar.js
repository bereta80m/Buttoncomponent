import React from 'react'

const MyMenu = [
  {name:"Colors",route:"/",id:1,active:false},
  {name:"Typography",route:"/",id:2,active:false},
  {name:"Spaces",route:"/",id:3,active:false},
  {name:"Buttons",route:"/",id:4,active:false},
  {name:"Inputs",route:"/",id:5,active:true},
  {name:"Grid",route:"/",id:6,active:false},
]
function Sidebar() {
  //Devchallenges

  return (
    <div className='grid col-span-1 fixed  h-full  lg:w-52 w-16 bg-[#fafbfd] '>
      <div className='Logo flex w-full justify-center text-lg p-4 font-bold '>
        <p><font className="text-[#f7542e] ">Dev</font >challenges.io</p>
      </div>

      <ul className='flex flex-col pl-14 p-4 w-full gap-5'>
        {MyMenu.map((item)=>{
          return(
            <li key={item.id} className={`text-xl  font-semibold ${item.active ? 'text-black ':'text-gray-400 '}`}>
            {item.name}
          </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar
