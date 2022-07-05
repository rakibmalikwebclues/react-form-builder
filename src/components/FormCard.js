import { useState} from 'react'
import { Link } from 'react-router-dom'

import { getDateFromMillis } from '../utils'
import { deleteForm } from "../db"

import RenderPlainForm from "../components/RenderPlainForm"

function FormCard({ form, onDelete, ...rest }){
    const [preview, setPreview] = useState(false)
    const [loading, setLoading] = useState(false)

    return (
        <div className="card">
            <h2 className="title mb-1">
                <span>{form.title}</span>
                <span className="card-date">{getDateFromMillis(form.createdAt)}</span>
            </h2>
            <a href={`${window.location.origin}/fill/${form.id}?sequenceKey=${rest.sequenceKey}`} rel="noreferrer" className="link mb-1" target="_blank">{`${window.location.origin}/fill/${form.id}`}</a>
           
        </div>
    )
}

export default FormCard