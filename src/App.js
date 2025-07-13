import {useState } from 'react';
import './App.css'

function App() {

const formField=[
  {
    label: "First Name",
    name:'first_name',
    type:'text',
    maxlength:19
  },{
    label:"Last Name",
    name:'last_name',
    type:'text',
    maxlength:19
  },{
    label:"Email",
    name:'email',
    type:'text',
    maxlength:50
  },{
    label:'Phone Number',
    name:'phone',
    type:'text',
    maxlength:10
  },{
    label:'Guess the cost in $',
    name:'cost',
    type:'number',
    min:0,
    max:100,
  },{
    label : 'Secret Pin',
    name: 'secret_pin',
    type:'text',
    maxlength:19
  }
]

const obj={
  'first_name':'',
  'last_name':'',
  'email':'',
  'phone':'',
  'cost':'',
  'secret_pin':''
}

const [real, setReal] = useState('')
const [masked, setMasked] = useState('')
const [formData, setFormData] = useState(obj);

function handleInput(e) {
      
      let input = e.target.value;

      if(e.target.name === 'first_name'){
        setFormData({...formData, 'first_name': input});
      }
      else if(e.target.name === 'last_name'){
        setFormData({...formData, 'last_name': input});
      }
      else if(e.target.name === 'email'){
        setFormData({...formData, 'email': input});
      }
      else  if(e.target.name === 'phone'){
        input = input.replace(/\D/g, '');
        setFormData({...formData, 'phone': input});
      }
      else  if(e.target.name === 'cost'){
        setFormData({...formData, 'cost': input});
      }
       else if(e.target.name === 'secret_pin'){      
 

      // Allow only digits
      input = input.replace(/\D/g, '');

      let realCard = real + input

      // Format display as ####-####-####-####
      const display = realCard
        .split('')
        .map(() => '#')
        .join('')
        .match(/.{1,4}/g)
        ?.join('-') || '';

     
      setMasked(display)

      setReal(realCard)

      setFormData({...formData, 'secret_pin':realCard})
      }
    }

    function handleDelete(e) {
      if (e.key === 'Backspace' && e.target.name === 'secret_pin') {
        let realCard = real.slice(0, -1);
        setReal(realCard)
      }
    }

    const handleSubmit =(e)=>{
      e.preventDefault();
      alert('Data is printed in the console')
      console.log(formData);
      setReal('')
      setMasked('')
      setFormData({...obj})
    }




  return (
    <div className="App">
      <div className="row" bis_skin_checked="1">
        <div className="col-md-12 col-lg-12 col-sm-12 text-center" bis_skin_checked="1">
          <h1 className="static-page-title">Spidr Assessment</h1>
          <p>Pretend Spidr Design is unveiling a new, exciting air fryer. We’re adding a landing page to our single-page website so our magnificent cooking appliance can help sell itself. The marketing team has already put together a landing page showcasing its awesome capabilities, and we need to develop a custom application to embed as an interest form at the bottom of the page. </p>
        </div>
      </div>
      <div className="row" bis_skin_checked="1">
        <div className='col-lg-6 col-md-6'>
              <img 
              // src="https://spidr.design/storage/images/vFzvuk8E7OETBV142O0KEQRW7FCBBOFAfZ3ncAgb.jpeg" 
              src='https://assets.epicurious.com/photos/5988aa39976224773f2dd611/16:9/w_2240,c_limit/how-to-use-philips-airfryer-hero-080217.jpg'
              className="img-responsive" alt="Office Manager / Administrative Assistant" />
        </div>
        <div className='col-lg-6 col-md-6'>
              <div className='form-field'>
                <h4><em>Enter your details</em></h4>
                <form id='form' onSubmit={handleSubmit}>
                  <ul className='form-list'>

                 {
                   formField.map((item,key)=>
                    <li key={'key-'+key} id={'key-'+key}>
                      <label className='form-label'>{item?.label}</label>
                      <input 
                      className='input-style'
                      maxLength={item?.maxlength}
                      onChange={handleInput}  onKeyDown={handleDelete} htmlfor="form" style={{}} value={item?.name === 'secret_pin' ? masked : formData[item?.name]} autoComplete='off' id={item.name} name={item.name} min={item?.min} max={item?.max} type={item.type} />
                   </li>
                  )
                }        
                </ul>
                <button type='submit' className="btn btn-primary" >Submit</button>
                </form>

              </div>

        </div>


      </div>

    </div>
  );
}

export default App;
