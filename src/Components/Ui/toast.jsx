// toast.jsx
import React, { useEffect } from 'react'


const iconFor = (type) => {
switch (type) {
case 'success':
return (
<svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" aria-hidden>
<path d="M6 10l2 2 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
</svg>
)
case 'error':
return (
<svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" aria-hidden>
<path d="M6 6l8 8M14 6l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
</svg>
)
case 'warning':
return (
<svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" aria-hidden>
<path d="M10 4v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
<path d="M10 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
</svg>
)
default:
return (
<svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" aria-hidden>
<circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
</svg>
)
}
}


const colorFor = (type) => {
switch (type) {
case 'success':
return 'bg-green-50 border-green-200 text-green-800'
case 'error':
return 'bg-red-50 border-red-200 text-red-800'
case 'warning':
return 'bg-yellow-50 border-yellow-200 text-yellow-800'
default:
return 'bg-slate-50 border-slate-200 text-slate-900'
}
}


const Toast = ({ toast, onDismiss }) => {
const { id, title, description, type, duration } = toast


useEffect(() => {
if (!duration || duration <= 0) return
const timer = setTimeout(() => onDismiss(id), duration)
return () => clearTimeout(timer)
}, [id, duration, onDismiss])


return (
<div
role="status"
className={`pointer-events-auto w-full transform transition-all duration-200 ease-out ${colorFor(type)} border rounded-lg shadow-md ring-1 ring-black/5 p-3`}
>
<div className="flex gap-3">
<div className="flex items-start">{iconFor(type)}</div>
<div className="flex-1 min-w-0">
{title && <div className="text-sm font-semibold">{title}</div>}
{description && <div className="text-xs mt-0.5">{description}</div>}
</div>
<div className="flex-shrink-0 self-start">
<button onClick={onDismiss} aria-label="Dismiss" className="inline-flex p-1 rounded-md hover:bg-white/20">
<svg className="w-4 h-4" viewBox="0 0 20 20" fill="none" aria-hidden>
<path d="M6 6l8 8M14 6l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
</svg>
</button>
</div>
</div>
</div>
)
}


export default Toast