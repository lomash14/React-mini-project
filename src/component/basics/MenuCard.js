import React from 'react'

const MenuCard = ({ menuData }) => {
    console.log(menuData)
  return (
    <>

<section className="main-card--cointainer">

    {
        menuData.map((currElem)=>{
            return(
                <>

                <div className="card-container" key={currElem.id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number">
                      <div className="card-number card-circle subtle">
                      {currElem.id}
                      </div>
                      </span>
        
                      <span className="card-author subtile" style={{color:'red'}}>
                      </span>
                      <h2 className="card-title">{currElem.name}</h2>
                      <span className="card-description suble">
                      {currElem.description}
                      </span>
                      <div className="card-read">
                      {currElem.price}
                      </div>
                   <img src={currElem.image} alt="Images" className="card-media" />
                   <span className="card-tag subtile">Order Now</span>
                  </div> 
                </div>
              </div>


              </>
            )
        })
    }

</section>

     
    </>
  )
}

export default MenuCard