import React from 'react'
import '../css/Contact.css'
function Contact() {
    return (
        <form>
          <h3>Lets Connect :)</h3>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required></input>
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Name</label>
    <input type="text" class="form-control" id="exampleInputName1" placeholder="Name" required></input>
  </div>
  <div class="form-group">
  <label for="exampleFormControlTextarea2">Small textarea</label>
  <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="3"></textarea>
</div>
  <button type="submit" class="btn" id='contactSubmit'>Submit</button>
</form>
    )
}

export default Contact;
