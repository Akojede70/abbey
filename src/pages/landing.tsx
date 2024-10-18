import React from 'react'
import Layout from '../components/layout/layout'
import Button from '../components/button/button';

const users = [
  { id: 1, username: 'johndoe', firstName: 'John', lastName: 'Doe' },
  { id: 2, username: 'janedoe', firstName: 'Jane', lastName: 'Doe' },
  { id: 3, username: 'marysmith', firstName: 'Mary', lastName: 'Smith' },
];

const Landing = () => {
  return (
   <Layout>
    <div className="flex flex-col gap-6 p-5 max-w-sm mx-auto">
      {users.map((user) => (
        <div key={user.id} className="bg-[#F7FAFC] p-5 rounded-lg shadow-md">
          <div className="text-xl font-bold">@{user.username}</div>
          <div className="text-primaryLightGray">
            {user.firstName} {user.lastName}
          </div>
          <div className="flex gap-4 mt-4">
           
            <Button label='Follow'></Button>
      
            <Button label='View Profile'  ></Button>
          </div>
        </div>
      ))}
    </div>
   </Layout>
  )
}

export default Landing
