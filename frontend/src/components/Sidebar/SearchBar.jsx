import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useConversation from "../../zustand/useConversation";
import useGetConversation from "../../hooks/useGetConversation";

const SearchBar = () => {
  const [search,setSearch] = useState('');
  const {setSelectedConversation} = useConversation();
  const {conversations} = useGetConversation();
  const handleSubmit = (e) =>{
    e.preventDefault();

    const conversation  = conversations.find((c)=> c.fullname.toLowerCase().includes(search.toLowerCase()))

    if(conversation)
    setSelectedConversation(conversation);
  }

  return (
    <form onSubmit={handleSubmit} className="m-4 flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="w-full text-white input rounded-full bg-gray-800"
        value = {search}
        onChange={(e)=>{setSearch(e.target.value)}}
      />
      <button className=" btn btn-md btn-circle btn-accent">
        <FaSearch className="w-4 h-4 outline-none"/>
        </button>
    </form>
  );
};

export default SearchBar;
