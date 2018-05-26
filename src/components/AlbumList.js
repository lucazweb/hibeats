import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AlbumList = ({ lista }) => (

  lista.length !== 0 ?
  (<ul className="result-list result-list--album">
    {
       lista.map(item => (
         <Link to={`/album/${item.id}`}>
           <li key={item.id}>

             {
            item.images.length > 0 && <div className="img img-track" style={{ backgroundImage: `url(${item.images[0].url})` }} alt="" />
          }

             <div className="item-info">
               <h3>{item.name}</h3>

               <p>
                 {
              item.artists.length > 3 ? 'Various artists' :
              (<span>
                {
                  item.artists.map((artist, index) => (
                    <span>{ artist.name }, </span>
                    ))
                }
               </span>)
            }
               </p>
             </div>
           </li>
         </Link>
      ))
    }

  </ul>) : <h2 className="search-feedback"> Try search your favorite Album.. </h2>
);

AlbumList.PropTypes = {
  lista: PropTypes.array,
};

export default AlbumList;
