

import React, { useContext } from 'react'

const UserContextComp = () => {

    const userContext = useContext()

  return (
    <userContext.Provider value="Braj" >

    </userContext.Provider>
  )
}

export default UserContextComp