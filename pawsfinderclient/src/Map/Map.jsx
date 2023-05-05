import React, { useEffect } from "react";
const { kakao } = window;

const markerdata = [
    {
      title: "항공우주 박물관",
      lat: 37.59976007223912,
      lng: 126.86548397026337,
    },
    {
      title: "과학관",
      lat: 37.6015765832226956,
      lng: 126.86528488337555,
    },
    {
      title: "첨단보육센터",
      lat: 37.59802901833839,
      lng: 126.86523742257961,
    },
  ];

export default function Map() {
  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(37.59901975210991, 126.86516719830612),
      level: 3,
    };

    //map
    const map = new kakao.maps.Map(container, options);
    
    markerdata.forEach((el) => {
      // 마커를 생성합니다
      new kakao.maps.Marker({
        //마커가 표시 될 지도
        map: map,
        //마커가 표시 될 위치
        position: new kakao.maps.LatLng(el.lat, el.lng),
        //마커에 hover시 나타날 title
        title: el.title,
      });
    });
  };

  return <div id="map" style={{ width: "400px", height: "700px", margin: 'auto' }}></div>;
}