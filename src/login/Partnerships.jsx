import './Partnerships.css'

function Partnership() {
    return(
<section className="get-in-touch">
   <h1 className="title">Get in touch</h1>
   <form className="contact-form row">
      <div className="form-field col-lg-6">
         <input id="name" className="input-text js-input" type="text" required />
         <label className="label" for="name">Name</label>
      </div>
      <div className="form-field col-lg-6 ">
         <input id="email" className="input-text js-input" type="email" required />
         <label className="label" for="email">E-mail</label>
      </div>
      <div className="form-field col-lg-6 ">
         <input id="company" className="input-text js-input" type="text" required />
         <label className="label" for="company">Company Name</label>
      </div>
       <div className="form-field col-lg-6 ">
         <input id="phone" className="input-text js-input" type="text" required />
         <label className="label" for="phone">Contact Number</label>
      </div>
      <div className="form-field ">
         <input id="message" className="input-text js-input" type="textarea"  required />
         <label className="label" for="message">Message</label>
      </div>
      <div className="form-field col-lg-12">
         <button className="submit">Submit</button>
      </div>
   </form>
</section>

    )
}

export default Partnership