

export default function TextInput({label,type='text',value,onChange,placeholder,className='form-control my-1'}) {
  return (
    <div className="input-group">
       
        <input className={className} type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  )
}
