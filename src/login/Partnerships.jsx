import './Partnerships.css'

function Partnership() {
    return(
<section className="get-in-touch">
   <h1 className="title">Contacte-nos</h1>
   <form className="contact-form row">
      <div className="form-field col-lg-6">
         <input id="name" className="input-text js-input" type="text" required />
         <label className="label" htmlFor="name">Nome</label>
      </div>
      <div className="form-field col-lg-6 ">
         <input id="email" className="input-text js-input" type="email" required />
         <label className="label" htmlFor="email">E-mail</label>
      </div>
      <div className="form-field col-lg-6 ">
         <input id="company" className="input-text js-input" type="text" />
         <label className="label" htmlFor="company">Nome da Empresa*</label>
      </div>
       <div className="form-field col-lg-6 ">
         <input id="phone" className="input-text js-input" type="text" required />
         <label className="label" htmlFor="phone">Número de telemóvel</label>
      </div>
      <div className="form-field ">
         <input id="message" className="input-text js-input" type="textarea"  required />
         <label className="label" htmlFor="message">Mensagem</label>
      </div>
     <p> * - opcional</p>
      <div className="form-field col-lg-12">
         <button type='submit' className="submit">Enviar</button>
      </div>
   </form>
</section>
    )
}

export default Partnership