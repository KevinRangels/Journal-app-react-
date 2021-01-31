import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar/>
            <div className="notes__content">
                {/* <form> */}
                    <input
                      type="text"
                      placeholder="Some awesome title"
                      className="notes__title-input"
                      autoComplete="off"
                    />
                    <textarea
                      placeholder="What happened input"
                      className="notes__textarea"
                    ></textarea>
                    <div className="notes__image">
                        <img
                          src="https://ih1.redbubble.net/image.937839891.0711/flat,750x1000,075,f.jpg"
                          alt="imagen"
                        />
                    </div>
                {/* </form> */}
            </div>
        </div>
    )
}
