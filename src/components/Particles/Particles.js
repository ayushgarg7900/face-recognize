import Particles from 'react-particles-js';
import React , { Component } from 'react';
 

 
class App extends Component{
  
    render(){
        return (
            <Particles 
                params={{
                    particles: {
                        shape: {
                            type: 'images',
                            images: [
                                {src: 'path/to/first/image.svg', height: 20, width: 20},
                                {src: 'path/to/second/image.jpg', height: 20, width: 20},
                            ]
                        }
                    }
                }} />
        );
    };
 
}
export default Particles;