import React, { useContext, useEffect, useState } from 'react'
import img from '../../assets/Combined Shape.svg'
import VacationCard from '../VacationCard/VacationCard'
import Form from '../form/VacationForm'
import { EditContext, ThemeContext } from '../../App'
import { Sun, Moon } from "lucide-react";

function Home() {
    const [data,setData]=useState([])
    const [submit,setSubmit] = useState(0);
    const {edit } = useContext(EditContext)
    const {theme,setTheme} =useContext(ThemeContext)
    const handlesubmit=(e)=>{
setSubmit(e)
    }
    const handleForm=(e)=>{ 
       
        const newArr = data.map(item=>item.id===edit? { ...item, ...e } : item)
        setData(newArr)
        localStorage.setItem('vacations', JSON.stringify(newArr))
    }
    const handleDelete = (e)=>{
       let confirm='Bu vakansiya o`chirilsinmi'
        if(window.confirm(confirm)){
            const newArr = data.filter(item=>item.id!==e)
            setData(newArr)
            localStorage.setItem('vacations', JSON.stringify(newArr))
        }  
        
        
    }
    

    useEffect(() => {
localStorage.getItem('vacations')
        && setData(JSON.parse(localStorage.getItem('vacations')))
    },[submit])
  return (
    <div className={`pb-4 ${theme=='light'?"bg-[#EFFAFA]" :'bg-gray-800 text-white'}`}>
        <header>
            <div className='w-full h-20' >
                <img src={img} alt="" className='w-full h-20 object-cover'/>
            </div>
            <div className='flex justify-end gap-4 p-4'>
                <button onClick={()=>setTheme(theme=='light'?'dark':'light')}>
                    {theme=='light'?<Moon size={24} />:<Sun size={24} />}
                </button>
            </div>
        </header>
        <div className='my-4'>
            <Form submit={handlesubmit} forma={handleForm} ></Form>
        </div>
        <main className='container mx-auto'>
        {
            data.length > 0 && data.map((item, index) => (
                <div key={index} className='my-4'>
                    <VacationCard  data={item} id={handleDelete}  />
                </div>
            ))
        }
        </main>
    </div>
  )
}

export default Home