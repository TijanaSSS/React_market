import React from 'react';

function Dugme({text,action,proizvod,style}){
    return(
        <button type='button' onClick={() => action(proizvod.id)}
                className={style} style={{marginRight:'20px'}}>{text}
        </button>
    )

}

export default Dugme;