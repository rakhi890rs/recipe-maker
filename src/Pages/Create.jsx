import React from 'react'

const Create = () => {
  const {register,handleSubmit}=useForm();
  return (
      <form>
        <input {...register("tittle")}
        type="text"
        placeholder='Recipe-tittle' />
      </form>
    
  )
}

export default Create