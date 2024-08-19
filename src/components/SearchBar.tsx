'use client';
import { useState } from 'react';

const SearchBar = () => {
  const [value, setValue] = useState<string>('');
  const [filteredValues, setFilteredValues] = useState<any>();

  const fetchData = async (value: string) => {
    const response = await fetch('https://api.escuelajs.co/api/v1/users');

    
    const data = await response.json();

    const results = data.filter((user: any) => {
      return (
        value &&
        user &&
        user.name &&
        user.name.toLowerCase().includes(value.toLowerCase())
      );
    });
    setFilteredValues(results);
  };

  const filterResults = (value: string) => {
    fetchData(value);
    setValue(value);
  };

  return (
    <div className='flex flex-col justify-center items-center h-dvh relative'>
      <h1 className='text-2xl'>SearchBar</h1>
      <input
        id='search-bar'
        value={value}
        onChange={(e) => filterResults(e.target.value)}
        type='text'
        className='border border-base-200'
      />
      <div>
        {filteredValues?.map((user: any, index: number) => (
          <p key={index}>{user.name}</p>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
