import React from 'react'
import {Card,Row,Col} from 'react-bootstrap'
import { data } from '../../data'
function Cards() {
     let tab=[]

  return (
    <div> 
        <Row xs={1} md={4} className="g-4">
        {data.map((el)=> {
                        tab.push(Number(el.address.geo.lat)+Number(el.address.geo.lng)) 
                        console.log(tab)
                        if (el.email.includes("@") && el.email.substr(-4) !== ".net"){
                            return (
                                <Col>
                        <Card>
                                <Card.Img variant="top" height= '50%' src="https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg" />
                                <Card.Body>
                                <Card.Title>{el.name}</Card.Title>
                                <div className='card-text'>
                                <div>{el.id}</div>
                                <div>{el.username}</div>
                                {/* */}
                                <div>{el.email.includes("@") && el.email.substr(-4) !== ".net" ? el.email: ""}</div>
                                <div>{el.address.street}</div>
                                <div>{el.address.suite}</div>
                                <div>{el.address.city}</div>
                                {tab.reduce((prev,el)=>prev+el)}
                                </div>
                                
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Last updated mins ago</small>
                                </Card.Footer>
                            </Card>
                            </Col>)
                        }
            
        }
        )
        }  
        </Row>
           
    </div>
  )
}

export default Cards