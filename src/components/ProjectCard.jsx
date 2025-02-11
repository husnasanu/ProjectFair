import React, { useState } from 'react'
import { Card ,Modal } from 'react-bootstrap'
import serverUrl  from '../services/serverUrl'
const ProjectCard = ({displayData}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Card onClick={handleShow}  className='shadow btn'>
      <Card.Img height={'200px'} variant="top"  src= {`${serverUrl}/uploads/${displayData?.projectImg}`} />
      <Card.Body>
        <Card.Title>{displayData?.title}</Card.Title>
      </Card.Body>
    </Card>
    <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
             <img className='img-fluid 'src={`${serverUrl}/uploads/${displayData?.projectImg}`} alt="" />
            </div>
            <div className="col-lg-6">
              <h3>{displayData?.title}</h3>
            <h6><span className='fw-bolder'>Languages Used : </span> <span className='text-danger'> {displayData?.languages} </span></h6>
              <p style={{textAlign:'justify'}}><span className='fw-bolder'> project Overview :</span> {displayData?.overview} </p>
            </div>
          </div>
           <div className="float-start">
            <a className='btn btn-secondary' href= {displayData?.github} target='_blank'> <i className="fa-brands fa-github"></i> </a>
            <a className='btn btn-secondary ms-2' href= {displayData?.website} target='_blank'> <i className="fa-solid fa-link"></i> </a>
           </div>
        </Modal.Body>
        
      </Modal>
    </>
    )
}

export default ProjectCard