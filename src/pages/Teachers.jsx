import React, { useEffect, useState } from 'react'
import UserCard from '../components/UserCard'
import axios from 'axios'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

function Users() {
	const navigate = useNavigate()
	const [users, setUsers] = useState([])
	useEffect(() => {
		axios("http://localhost:3000/users").then(res => { setUsers(res.data) })
	}, [])
	return (
		<div className='overflow-hidden'>
			<div className="p-5 flex items-center justify-between">
				<h2 className="text-[25px] font-bold "><Teachers></h2>
				<Button onClick={() => navigate("add")} size='large ' type='primary'>Add </Teachers></Button>
			</div>
			<div className='p-5 flex items-center justify-between flex-wrap gap-[25px]'>
				{users.map(item => <UserCard key={item.id} item={item} />)}
			</div>
		</div>

	)
}

export default Users