import React from 'react'
import Layout from '../components/layout/layout'

const users = [
  { id: 1, username: 'johndoe', firstName: 'John', lastName: 'Doe' },
  { id: 2, username: 'janedoe', firstName: 'Jane', lastName: 'Doe' },
  { id: 3, username: 'marysmith', firstName: 'Mary', lastName: 'Smith' },
];

const Landing = () => {
  return (
   <Layout>
    <div className="flex flex-col gap-6 p-6 max-w-md mx-auto border border-red-700">
      {users.map((user) => (
        <div key={user.id} className="bg-[#F7FAFC] p-5 rounded-lg shadow-md">
          <div className="text-xl font-bold">{user.username}</div>
          <div className="text-gray-500">
            {user.firstName} {user.lastName}
          </div>
          <div className="flex gap-4 mt-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Follow
            </button>
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
              View Profile
            </button>
          </div>
        </div>
      ))}
    </div>
   </Layout>
  )
}

export default Landing
