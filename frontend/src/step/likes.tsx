import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type LikesProps = {likesNumber: number, liked: boolean, onLiked: () => void }

const Likes = ({likesNumber, liked, onLiked}: LikesProps) => {

    return <div>
       <button onClick={onLiked}>
           {liked ? 'liked' : 'like' }
       </button>
        {/*{liked ? <FontAwesomeIcon icon="fa-light fa-heart" /> : <FontAwesomeIcon icon='fa-solid fa=heart'/>}*/}
        <p>{likesNumber}</p>
    </div>
}

export default Likes;
