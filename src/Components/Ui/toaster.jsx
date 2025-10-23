// toaster.jsx
import React, { createContext, useCallback, useState } from 'react'
import Toast from './toast'


const DEFAULT_DURATION = 4000


export const ToastContext = createContext(null)


let idCounter = 0
const genId = () => ++idCounter


export const ToasterProvider = ({ children }) => {
const [toasts, setToasts] = useState([])


const showToast = useCallback(({ title = '', description = '', type = 'info', duration = DEFAULT_DURATION }) => {
const id = genId()
setToasts((t) => [{ id, title, description, type, duration }, ...t])
return id
}, [])


const dismissToast = useCallback((id) => {
setToasts((t) => t.filter((x) => x.id !== id))
}, [])


return (
<ToastContext.Provider value={{ showToast, dismissToast }}>
{children}
<ToasterContainer toasts={toasts} onDismiss={dismissToast} />
</ToastContext.Provider>
)
}


const ToasterContainer = ({ toasts, onDismiss }) => {
return (
<div aria-live="polite" className="fixed inset-0 flex pointer-events-none items-end px-4 py-6 sm:items-start sm:justify-end">
<div className="w-full flex flex-col items-center space-y-2 sm:items-end max-w-xs">
{toasts.map((t) => (
<Toast key={t.id} toast={t} onDismiss={() => onDismiss(t.id)} />
))}
</div>
</div>
)
}


export default ToasterProvider