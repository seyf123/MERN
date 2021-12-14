import React from 'react'
import User from '../User/User'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'



const UserList = ({userList,loading}) => {
    return (
        <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
            {loading? <Segment>
    <Dimmer active>
      <Loader />
    </Dimmer>

    <Image src='/images/wireframe/short-paragraph.png' />
  </Segment>:userList.map(el=><User el={el} />)}
        </div>
    )
}

export default UserList
