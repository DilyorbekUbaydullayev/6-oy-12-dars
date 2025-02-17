import React, { useContext } from 'react'
import { EditContext, ThemeContext } from '../../App'
function VacationCard({data,id,editId}) {
    const {edit,setEdit} = useContext(EditContext)
    const {theme} = useContext(ThemeContext)
  
  return (
    <div className={`${theme=='light'?"bg-white" :'bg-gray-800 text-white'} p-4 rounded-md shadow-md flex justify-between`}>
        <div className='flex justify-center items-center gap-6'>
            <div>
                <img className='w-25 h-25 rounded-full object-cover' src={data.logo?data.logo:'#'} alt="" />
            </div>
            <div>
            <div className='flex justify-start gap-3 '>
                <p className='font-medium text-[#5CA5A5]'>{data.company}</p>
                <p className='bg-[#5CA5A5] text-white font-medium px-3 pb-0.5 rounded-xl'>{data.isNew?'New':''}</p>
                <p className='bg-[#2B3939] text-white font-medium px-3 pb-0.5 rounded-xl'>{data.isFeatured?'Featured':''}</p>
            </div>
            <div className='text-xl font-medium my-4'>
                <h1>{data.lavozim} </h1>
            </div>
            <div className='flex justify-start gap-3 text-sm text-gray-400'>
                <p>{data.time}</p>
            
            
                <p>{data.job}</p>
            
            
                <p>{data.country}</p>
            </div>
            </div>
        </div>
        <div>
        <div className='flex justify-center items-center gap-4 font-medium text-sm mt-13'>
            {data?.skills?.map((skill,index)=>(
                <p key={index} className='bg-[#EFFAFA] text-[#5CA5A5] py-0.5 px-3 pb-1 rounded-md'>
                    {skill}
                </p>
            ))}
        </div>
        <div className='mt-2 flex justify-end gap-2'>
       <button onClick={()=>setEdit(data.id)} >edit</button>
       <button onClick={()=>id(data.id)}>delete</button>
        </div>
        </div>
    </div>
  )
}

export default VacationCard