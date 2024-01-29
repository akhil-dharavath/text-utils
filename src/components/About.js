import React from 'react'

export default function About(props) {
  let myStyle={
    color:props.mode==='light'?'black':'white',
    backgroundColor:props.mode==='light'?'white':'gray'
  }
    
  return (
    <div className='container my-3' style={myStyle}>
      <h1>About TextUtils</h1>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className={`accordion-button collapsed  `}style={myStyle}type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>Accordion Item #1</strong>
      </button>
    </h2>
    <div id="collapseOne" className={`accordion-collapse collapse   `} style={myStyle}aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className={`accordion-button collapsed"   `}style={myStyle}type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Accordion Item #2</strong>
      </button>
    </h2>
    <div id="collapseTwo" className={`accordion-collapse collapse   `}style={myStyle}aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className={`accordion-button collapsed   `}style={myStyle}type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Accordion Item #3</strong>
      </button>
    </h2>
    <div id="collapseThree" className={`accordion-collapse collapse   `}style={myStyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
