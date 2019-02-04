import React from 'react';
import './ImageLinkForm.css';
const ImageLinkForm = ({onInputChange,onButtonSubmit}) =>{
    return(
        <div> 
        <p className='f3' >
            {'this magic will return faces in your pict.'}

        </p>
        <div className='center'>
            <div className=' form center pa5 br3 shadow-5'>
             <input className='f4 pa2 w-70 centre' type ='tex'   onChange={onInputChange}/>
             <button  className =' w -30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onButtonSubmit}>Detect</button>
            </div>       
        </div>
    
        
        </div>
    );
}
export default ImageLinkForm;