import React from 'react'

export default function Meme(){
    return(
        <main>
            <input 
            type="text"
            placeholder='Top text'
            className='meme_input_top'
            />

            <input 
            type="text"
            placeholder='Bottom text'
            className='meme_input_bottom'
            />
            <button className='meme_input_button'>
                Get a new image
            </button>

            <div className='meme_img'>

            </div>
        </main>
    )
}