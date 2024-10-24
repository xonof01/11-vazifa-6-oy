import { UploadOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import axios from 'axios'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function AddUsers() {
	const navigate = useNavigate()
	const [img, setImg] = useState("")
	const [name, setName] = useState("")
	const [surname, setSurname] = useState("")
	const [age, setAge] = useState("")
	const [study, setStudy] = useState("")

	function handleSubmit(e) {
		e.preventDefault()
		const data = {img, name, surname, age, study}
		axios.post("http://localhost:3000/users", data).then(res => {
			toast.success("success")
			setTimeout(() => {
				navigate(-1)
			}, 1000)
		})
	}

	return (
		<form onSubmit={handleSubmit} className='p-5'>
			<Toaster position="top-center" reverseOrder={false}/>
			<div className="flex items-center justify-between">
				<h2 className="font-bold text-[22px]">Add Students</h2>
				<Button htmlType='submit' size='large' type='primary'>Save</Button>
			</div>
			<div className="flex justify-between mt-5">
				<div className="w-[49%] border-[2px] border-slate-500 rounded-[15px] p-2">
					<label className="fle flex-col">
						<span className="text-[18px]">Name</span>
						<Input className='mt-1' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Name' size='large' />
					</label>
					<label className="fle flex-col">
						<span className="text-[18px]">Surname</span>
						<Input className='mt-1' value={surname} onChange={(e) => setSurname(e.target.value)} placeholder='Enter Surname' size='large' />
					</label>
					<label className="fle flex-col">
						<span className="text-[18px]">Age</span>
						<Input className='mt-1' value={age} onChange={(e) => setAge(e.target.value)} placeholder='Enter Age' type='number' size='large' />
					</label>
					<label className="fle flex-col">
						<span className="text-[18px]">Study</span>
						<Input className='mt-1' value={study} onChange={(e) => setStudy(e.target.value)} placeholder='Enter Study' size='large' />
					</label>
				</div>
				<div className="w-[49%] border-[2px] border-slate-500 rounded-[15px] p-2">
					<label className="cursor-pointer w-full h-full inline-block">
						<Input onChange={(e) => setImg(URL.createObjectURL(e.target.files[0]))} type='file' className='hidden'/>
						{img ? <img src={img} alt="img" className="w-[300px] object-contain h-[305px]" width={300} height={305} /> 
						: <div className='flex items-center space-x-5 justify-center mt-[100px]'>
								<span className="text-[20px]">Choose img</span> <UploadOutlined className='scale-[1.5]'/>
							</div>}
					</label>
				</div>
			</div>
		</form>
	)
}

export default AddUsers