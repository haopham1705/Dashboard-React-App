import React, {createContext, useEffect, useState} from 'react'

const PhotoContext = createContext();

const Photos_URL = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
const PhotoProvider = ({children}) => {
    const [photos, setPhotos] = useState([]);
    // fetch Api
    const fetchPhotos = async(url) => {
        // fetch('', option).then(res => res.json).then(data => setPhotos(data)).catch(err => console.log(err));
        try{
          const resApi = await fetch(url);
          const data = await resApi.json;
          console.log(`data response: ${data}`)
          setPhotos(data);
        }catch(err){
          console.log(err);
        }
    }
    useEffect(() => {
      const photosUrl = Photos_URL;
        fetchPhotos(photosUrl);
    },[])

  return (
    <PhotoContext.Provider value={photos}> {children} </PhotoContext.Provider>
  )
}

export  {PhotoContext, PhotoProvider}