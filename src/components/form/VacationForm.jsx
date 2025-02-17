import React, { useContext, useEffect, useState } from 'react'
import { EditContext, ThemeContext } from '../../App'

function VacationForm({submit,forma}) {
  const {edit,setEdit } = useContext(EditContext)
  const {theme} = useContext(ThemeContext)
  const [form,setForm] = useState({
    id:Date.now(),
    logo: '',
    company: '',
    isNew: false,
    isFeatured: false,
    lavozim:'',
    skills:[],
    time:'',
    job:'',
    country:'',
  })
  
  useEffect(() => {
    
    
    if (edit) {
      let newArr = (JSON.parse(localStorage.getItem('vacations')) || []).find(item => item.id === edit);
      if (newArr) setForm(newArr);
    }
  }, [edit]);
const handleEdit=()=>{

  
  forma(form)
  submit(Date.now())
    setForm({
      id:Date.now(),
      logo: '',
      company: '',
      isNew: false,
      isFeatured: false,
      lavozim:'',
      skills:[],
      time:'',
      job:'',
      country:'',

    })
    setEdit(null)

}
  const skills =['Fullstack','Senior','HTML','CSS','Java','React']
 
  const handleSkillChange = (e) => {
    setForm({...form, skills:[...form.skills,e]})
  }
  const handleSave=()=>{

    let vacations=[]
    if(localStorage.getItem('vacations')){
      vacations = JSON.parse(localStorage.getItem('vacations'))
    }
    vacations.push(form)
    localStorage.setItem('vacations',JSON.stringify(vacations))
    submit(Date.now())
    setForm({
      id:Date.now(),
      logo: '',
      company: '',
      isNew: false,
      isFeatured: false,
      lavozim:'',
      skills:[],
      time:'',
      job:'',
      country:'',

    })
  }

  
  return (
    <div className={`container mx-auto w-[400px] font-medium p-4  border-gray-400 border-[1.5px] rounded-md ${theme=='light'?"bg-white" :'bg-gray-800 text-white'}`}>
       <form className={`${theme=='light'?"bg-white" :'bg-gray-800 text-white'}`}>
       <h1 className='text-xl text-center'>Vakansiya ma'lumotlarini kiriting</h1>
        <section className='flex flex-col gap-2 my-4'>
            <label>Logotip URL </label>
            <input value={form.logo} onChange={(e)=>{setForm({...form, logo:e.target.value})}} className={` p-1.5 border-[1.5px] border-gray-400 rounded-md ${theme=='light'?"bg-white" :'bg-gray-800 text-white'}`}  type="text"  required />
        </section>
        <section className='flex flex-col gap-2 my-4'>
            <label>Kompaniya nomi </label>
            <input value={form.company} onChange={(e)=>{setForm({...form,company:e.target.value})}} className={` p-1.5 border-[1.5px] border-gray-400 rounded-md ${theme=='light'?"bg-white" :'bg-gray-800 text-white'}`}  type="text"  required />
        </section>
        <section className='flex justify-start  gap-2 my-4'>
            <div className='flex justify-center items-center gap-2'>
            <input checked={form.isNew} onChange={(e)=>{setForm({...form,isNew:e.target.checked})}} type="checkbox" className='bg-white mt-0.5 w-5 h-5' />
            <label>Yangi </label>
            </div>
            <div className='flex justify-center items-center gap-2'>
            <input checked={form.isFeatured} onChange={(e)=>{setForm({...form,isFeatured:e.target.checked})}} type="checkbox" className='bg-white mt-0.5 w-5 h-5' />
            <label className='font-medium'>Featured </label>
            </div>
            
        </section>
        <section className='flex flex-col gap-2 my-4'>
            <label>Lavozim </label>
            <input value={form.lavozim} onChange={(e)=>{setForm({...form,lavozim:e.target.value})}} className={` p-1.5 border-[1.5px] border-gray-400 rounded-md ${theme=='light'?"bg-white" :'bg-gray-800 text-white'}`}  type="text"  required />
        </section>
        <section className='flex justify-between gap-2 my-4'>
        <section className='flex flex-col gap-2 my-4'>
            <label>Vaqt </label>
            <select value={form.time} onChange={(e)=>{setForm({...form,time:e.target.value})}} className='border-[1.5px] border-gray-300 p-2 rounded-md w-25' >
              <option>Tanlang</option>
              <option>1d ago</option>
              <option>2d ago</option>
              <option>1w ago</option>
            </select>
        </section>
        <section className='flex flex-col gap-2 my-4'>
            <label>Ish turi </label>
            <select value={form.job} onChange={(e)=>{setForm({...form,job:e.target.value})}} className='border-[1.5px] border-gray-300 p-2 rounded-md w-25' >
              <option>Tanlang</option>
              <option>Part Time</option>
              <option>Full Time</option>
              <option>Contract</option>
            </select>
        </section>
        <section className='flex flex-col gap-2 my-4'>
            <label>Joylashuv </label>
            <select value={form.country} onChange={(e)=>{setForm({...form,country:e.target.value})}} className='border-[1.5px] border-gray-300 p-2 rounded-md w-25' >
              <option>Tanlang</option>
              <option>Worldwide</option>
              <option>USA only</option>
              <option>UK only</option>
            </select>
        </section>
        </section>
        <section className='flex flex-col gap-2 my-4'>
            <label>Ko'nikmalar </label>
            <div className='flex flex-wrap justify-start gap-4 '>
            {skills.map((item,index)=>(
              <div key={index} className='flex justify-start items-center gap-2 w-25'>
              <input onChange={()=>{handleSkillChange(item)}} type="checkbox" className='bg-white mt-0.5 w-5 h-5' />
              <label>{item}</label>
            </div>
            ))}
            </div>
        </section>
        <section className='flex justify-center gap-2 my-4'>
            <button type='reset' onClick={()=>{edit?handleEdit():handleSave()}} className={`${theme=='light'?"bg-gray-800 text-white" :'bg-white text-gray-800'} p-2 rounded-md w-full mt-2`}>{edit?"O'zgartirsh":"Saqlash"}</button>
        </section>
       </form>
    </div>
  )
}

export default VacationForm