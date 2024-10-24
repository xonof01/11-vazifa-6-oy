import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AddUsers, SingleUsers, Teachers, Users } from '../pages'

function CustomRoutes() {
	const routesList = [
		{
			id: 1,
			path: "/",
			element: <Users/>
		},
		{
			id: 2,
			path: "/add",
			element: <AddUsers/>
		},
		{
			id: 3,
			path: "/:id",
			element: <SingleUsers/>
		},
		{
			id: 4,
			path: "/edit/:editId",
			element: <AddUsers/>
		},
		{
			id: 5,
			path: "/teachers",
			element: <Teachers/>
		}
	]
	return (
		<Routes>{routesList.map(item => <Route key={item.id} path={item.path} element={item.element}/>)}</Routes>
	)
}

export default CustomRoutes