import React, { useEffect } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AbandonBody from '../AbandonBody/AbandonBody';
import { useParams } from 'react-router-dom';

export default function AbandonBoard({content, id, locationName, type, url, lat, lng}) {

  useEffect(() => {

  }, [])

  

  return (
    <div>
    <div style={{textAlign: 'center'}}>
        <img 
        width="200px"
        height="200px"
        src={url}
        /> 
        {/* <FavoriteBorderIcon /> */}
    </div>
    <div>
        <div>제목: {content}</div>
        <div>위치 : {locationName}</div>
    </div>
    </div>
  )
}
