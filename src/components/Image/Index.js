import React from 'react';
import * as C from './styles';
import img1 from  '../../assets/LOGOLAPISCO.png';


function Images() {
    return(
        <C.Images>
            <C.Logo_img class="img" src={img1}/>
        </C.Images>
    )
}

export default Images;