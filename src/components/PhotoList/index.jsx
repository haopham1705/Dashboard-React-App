import React, {useContext, useState, useEffect} from 'react'
import themeContext from '../../context/ThemeContext';
import photoContext from '../../context/PhotoContext';

function PhotoList() {
    // useContext
    const theme = useContext(themeContext)
    const photoCT = useContext(photoContext)

    const themeValue = theme.theme;

  return (
    <div id="photos-list-container" style={{backgroundColor: `${themeValue == 'light' ? '#fff' : '#000'}`}}>
        <ul id="photos-list">
            {
                photoCT.photos.map((url, id) => {
                    <li>
                        <h3 style={{color: `${themeValue == light ? '#000' : '#fff'}`}}>{id}</h3>
                        <img src={url} alt={`photo images ${id}`} />
                    </li>
                })
            }
        </ul>
        <button id="photos-list-btn" onClick={photoCT.fetchPhotos}>Load Images</button>
    </div>
  )
}

export default PhotoList;