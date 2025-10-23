// hooks/use-toast.js
import { useContext } from 'react'
import { ToastContext } from '../Components/Toaster'


export const useToaster = () => {
const ctx = useContext(ToastContext)
if (!ctx) throw new Error('useToaster must be used within a ToasterProvider')
return ctx
}