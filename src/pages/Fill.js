import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { getForm } from "../db"

import RenderReactiveForm from '../components/RenderReactiveForm'

import { expired } from '../utils'
import { useLocation } from 'react-router-dom'

function Fill(){
    const { id } = useParams()
    
    const [form, setForm] = useState(null)
    const [msg, setMsg] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(true)

    const sequenceKey = new URLSearchParams(useLocation().search).get('sequenceKey');

    useEffect(() => {
        if(!localStorage.getItem('gfc-user')) return
        const fetchData = async () => {
            try{
                let frm = await getForm(id,sequenceKey)
                setForm(frm)
                setLoading(false)
            }catch(e){
                setLoading(false)
                setMsg(e.message)
            }
        }
        fetchData()
    }, [id,sequenceKey])

    return (
        <div>
            <h1 className="heading">{form ? form.title : "Fill in the form"}</h1>
            {
                loading ? <p className="text-center mt-1"><span className="spinner"></span></p>
                : msg ? <h3 className="msg mt-1">{msg}</h3>
                : submitted ? <h3 className="msg mt-1">{form ? (form.endMessage || "Thank you for submitting the form") : "Unknown state"}</h3>
                : form ? expired() ? <h3 className="msg mt-1">This form has been expired</h3>
                : <RenderReactiveForm model={form} onSubmitted={() => setSubmitted(true)} />
                : <h3 className="msg mt-1">Form not found</h3> 
            }
        </div>
    )
}

export default Fill