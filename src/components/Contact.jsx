import React, { useState } from 'react'

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "cfaa159b-8ff1-4249-8100-501682378430");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id='contact' className='py-[5rem] flex flex-col gap-8 lg:gap-[5rem]'>
      <h1 className='heading firacode text-4xl '>./Contact Me....</h1>
      <form className='grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 items-center px-[5%]' onSubmit={onSubmit}>
        {/* left */}
        <div className='flex flex-col  gap-5 lg:justify-between h-full'>
          <input className='p-2 px-[20px] firacode border-none  rounded-md text-textcolor h-[7vh] bg-primary' type="name" name="name" required placeholder='Your Name' />
          <input className='p-2 px-[20px] firacode border-none  rounded-md text-textcolor h-[7vh] bg-primary' type="number"  name="email" required placeholder='Your Phone Number' />
          <input className='p-2 px-[20px] firacode border-none  rounded-md text-textcolor h-[7vh] bg-primary' type="email" placeholder='Your Email'/>
          <select className='p-2 px-[20px] firacode border-none  rounded-md text-textcolor h-[7vh] bg-primary' name='select' required>
            <option className='bg-textcolor text-background' value=''>My Services</option>
            <option className='bg-textcolor text-background' value="frontend">Frontend</option>
            <option className='bg-textcolor text-background' value="backend">Backend</option>
            <option className='bg-textcolor text-background' value="fullstack">FullStack</option>
          </select>
        </div>
        {/* right */}
        <div className='flex flex-col gap-8 items-center'>
          <textarea className='w-full p-5 px-[20px] rounded-md bg-primary' rows={10} cols={50} placeholder='Your Message' name="message" required></textarea>
          <button className='w-[50%]  bg-textcolor text-background transition-all duration-700 hover:bg-purple-600 hover:text-textcolor h-[4vh] rounded-sm'>Submit</button>
        </div>
      </form>
      {result}
    </div>
  )
}

export default Contact
