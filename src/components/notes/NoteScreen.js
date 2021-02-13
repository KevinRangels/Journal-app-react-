import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote, startDeleting } from '../../actions/notes'
import { useForm } from '../../hooks/useForm'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

    const { active:note } = useSelector(state => state.notes)
    const [formValues, handleInputChange, reset] = useForm(note)
    const {body, title, id} = formValues
    const dispatch = useDispatch()


    const activeId = useRef(note.id)

    useEffect(() => {
      if (note.id !== activeId.current) {
        reset(note)
        activeId.current = note.id
      }
    }, [note, reset])

    useEffect(() => {
      dispatch( activeNote(formValues.id, {...formValues}) )
    }, [formValues, dispatch])

    const handleDeleteNote = () => {
      dispatch( startDeleting(id) )
    }
    

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
                      name="title"
                      value={title}
                      onChange={handleInputChange}
                    />
                    <textarea
                      placeholder="What happened input"
                      className="notes__textarea"
                      value={body}
                      name="body"
                      onChange={handleInputChange}
                    ></textarea>
                    {
                      (note.url) &&
                      (
                        <div className="notes__image">
                          <img
                            src={note.url}
                            alt="imagen"
                          />
                        </div>
                      )
                    }
                {/* </form> */}
            </div>
            <button
              className="btn btn-danger"
              onClick={handleDeleteNote}
            >
              Delete
            </button>
        </div>
    )
}
