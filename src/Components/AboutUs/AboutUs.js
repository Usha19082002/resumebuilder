import React from 'react'
import {Whatsapp,Facebook,Envelope, Instagram} from 'react-bootstrap-icons'
import {Row, Col} from 'antd'

function AboutUs() {
    return (
        <div className='mt-5 '>
            
            
            <div className='mt-5 px-3 '>
                <Row gutter ={[16,16]}>
                    <Col md={{span:8,offset:8}}>
                        <h3 className='px-4' style={{wordSpacing:"5px", letterSpacing:"1px"}}>
                            Share with your friends.
                        </h3>
                        <div style= {{display:'flex',background:'#faf8f8',}}>
                            <div className='ms-5  p-2'> 
                                <Whatsapp style = {{ fontSize:"25px", color:"green" }}/>
                            </div>
                            <div  className='p-2 ms-4' > 
                                <Facebook style = {{ fontSize:"25px", color:"blue" }}/>
                            </div>
                            <div  className='p-2 ms-4' > 
                                <Envelope  style = {{ fontSize:"25px", color:"red" }}/>
                            </div>
                            <div  className='p-2 ms-4' > 
                                <Instagram  style = {{ fontSize:"25px", color:"#c50d66" }}/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default AboutUs
