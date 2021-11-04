import React from 'react'


const Pdfs = ( {Pdf, Pdfs, text} ) => {
    return ( 
        <div className="" style={{ marginBottom: '15px', backgroundColor: 'white'}}>
            <div className="row">
                <div className="col-md-2">
                        <img className="img-responsive" src={Pdf} alt="" style={Pdfs} />
                    
                </div>
                <div className="col-md-5" style={{ position: 'relative', right: '5rem', top: '10px', alignContent: 'left', alignItems: 'left', textAlign: 'left' }}>
                    <small style={{ width: 'fit content', height: 'fit content'}}> {text} </small>

                </div>
                
            </div>
        </div>
     );
}
 
export default Pdfs;