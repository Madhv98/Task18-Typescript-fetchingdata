import React, { useEffect, useState } from 'react';
import { IUsers } from './type'; 
import './infoList.css'
const InfoList: React.FC = () => {
  const [users, setUsers] = useState<IUsers[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data: IUsers[] = await response.json();

        setUsers([...data]);
        console.log(data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);


  return (
    <div>
      <h1>User Lists</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <p> Name: {user.name} </p>
            <p> Usename: {user.username} </p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            
            <p>
              Address: {user.address.street}, {user.address.suite}, {user.address.city},{user.address.zipcode}
            </p>
          </li>

        ))}
      </ul>
    </div>
  );
};

export default InfoList;
