import React from 'react'
import './Pdfs.css'

const Pdfs = ( {Pdf, Pdfs, text} ) => {
    return ( 
        <div className="div" style={{ marginBottom: '15px', backgroundColor: '#F1FAEE'}}>
            <div className="row">
                <div className="col-md-2">
                        <img className="img-responsive" src={Pdf} alt="" style={Pdfs} />
                    
                </div>
                <div className="col-md-5" style={{ position: 'relative', right: '5rem', top: '10px', alignContent: 'left', alignItems: 'left', textAlign: 'left' }}>
                    <small className="div" style={{ width: 'fit content', height: 'fit content'}}> {text} </small>

                </div>
                
            </div>
        </div>
     );
}
 
export default Pdfs;