import React from 'react';
import './variableDef.css';



export default function variableDef(){
    return ( 
            <div>
                <p> Variable Definition in Python</p>

            <div class = "grid-container">
            <div id = "col1" align = "left">
            <p>Variables can be changed in the same code.</p>
            <p>In Python, variables aren't assigned a specific value but the values hold set positions.</p>
            <p>The variables point to the values and those pointers can change.</p>
            
            </div>
            <div>
            <iframe src="https://trinket.io/embed/python/52d50534b8" width="500" height="500" align = "right" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen
            title="print"></iframe>   
            </div>
            </div>
            </div>   
    );
}