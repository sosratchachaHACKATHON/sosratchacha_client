import React, { useEffect } from 'react'
import styles from './AbandonBoard.module.css'

export default function AbandonBoard({boardType, content, id, locationName, type, url, lat, lng}) {

  let temp = content.split(' ');
  let title = '';

  for (let i = 0; i < 4; i++) {
    title += temp[i] + ' ';
  }

  if(boardType == 'throw') {
    title += '강아지 유기 의심 정황'
  } 
  else {
    title += '강아지 실종 의심 정황'
  }

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
        <h3 style={{color: '#666'}}>{title}</h3>
        <h3 style={{color: '#666'}}>{locationName}</h3>
    </div>
    </div>
  )
}
