import { useState } from "react";

function LikeButton(){
    const[likes, seLikes] = useState(0);

    const handleLike =() =>{
        seLikes(likes + 1);
    }
    return(
        <div>
            <p className=" mb-3  text-lg"> ❤️ likes: {likes}</p>

            <button className="bg-black text-white p-2 rounded-xl" onClick={handleLike}> "Like ❤️"</button>
        </div>
    );
}
export default LikeButton;