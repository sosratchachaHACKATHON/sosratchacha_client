import React from 'react'

export default function MyChatting({content, createdAt}) {
  
  let time = createdAt;
  let getTime = time.slice(11, 16);


  return (
    <div>
      <div style={{backgroundColor: 'yellow', 
      display: 'inline-block',
      position: 'relative',
      borderRadius: '20px',
      padding: '2px 10px 2px 10px'}}>
        <p style={{margin: '8px 0', fontWeight: '580'}}>{content}</p> 
      </div>  
      <div>
        <p style={{margin: '8px 0', fontWeight: '650'}}>{getTime}</p>
      </div>
    </div>
  )
}
