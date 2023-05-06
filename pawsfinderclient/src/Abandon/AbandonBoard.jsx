import React, { useEffect } from 'react'
import styles from './AbandonBoard.module.css'

export default function AbandonBoard({content, id, locationName, type, url, lat, lng}) {

  return (
    <div className={styles.board_wrapper}>
    <div style={{textAlign: 'center'}}>
        <img 
        width="200px"
        height="200px"
        src={url}
        className={styles.board_img}
        /> 
        {/* <FavoriteBorderIcon /> */}
    </div>
    <div>
        <h3>제목: {content}</h3>
        <h3>위치 : {locationName}</h3>
    </div>
    </div>
  )
}
