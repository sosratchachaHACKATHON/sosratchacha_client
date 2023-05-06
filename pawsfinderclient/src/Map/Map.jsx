import React, { useEffect } from "react";
const { kakao } = window;

const markerdata = [
    {
      title: "항공대 전자관",
      lat: 37.600718,
      lng: 126.864457      ,
    },
    {
      title: "항공대 과학관",
      lat: 37.6015765832226956,
      lng: 126.86528488337555,
    },
    {
      title: "항공대 강의동",
      lat: 37.599979,
      lng: 126.866827,
    },
    {
      title: "항공대 학생회관",
      lat: 37.600012,
      lng: 126.864733,
    },
  ];

export default function Map() {
  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(37.60001975210991, 126.86556719830612),
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