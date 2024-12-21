import React from 'react'
import SearchBar from './SearchBar'
import Conversations from './Conversations'
import Logout from './Logout'

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col ">
        <SearchBar/>
        <div className="divider px-3"></div>
        <Conversations/>
        <div className="flex-grow"></div>
        <Logout/>
        
    </div>
  )
}

export default Sidebar

//==============================================================================================================================================================================
// import React from 'react'
// import SearchBar from './SearchBar'
// import Conversations from './Conversations'

// const Sidebar = () => {
//   return (
//     <div>
//         <SearchBar/>
//         <div className="divider px-3"></div>
//         <Conversations/>
//     </div>
//   )
// }

// export default Sidebar