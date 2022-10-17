import React, {Component} from "react";
import {Form,Button,Image,Container,Row,Col,Breadcrumb,Carousel, Dropdown, Forms, InputGroup, Images, Figure, ListGroup, Modal} from "react-bootstrap";
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      show: false
    }
    this.handleHide = this.handleHide.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }
  handleShow(pv){
    this.setState({show:true});
    pv.preventDefault();
  }
  handleHide(pv){
    this.setState({show:false});
    pv.preventDefault();
  }
  render(){
    return(
      <div>
          <Row style={{backgroundColor:"black"}}>
            <Col>
            <Dropdown>
              <Dropdown.Toggle variant="primary" >
                Pilih Bahasa
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">English</Dropdown.Item>
                <Dropdown.Item href="#">Bahasa Indonesia</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            </Col>
            <Col xs={6}></Col>
            <Col  lg="1" style={{color:"white"}}>
            <center>
            <img width={32} height={32}  src="https://png.pngtree.com/svg/20161113/ef1b24279e.png" alt="Alan Saputra" />
            <p>Alan Saputra</p>
            </center>
            </Col>
            <br/><br/>
           </Row>
           <Container>
            <Row>
              <Col md={4}></Col>

              <Col lg={{ span: 2, offset: 6 }}>
              <Breadcrumb>
                  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                  <Breadcrumb.Item href="#">
                  Berita
                  </Breadcrumb.Item>
                  <Breadcrumb.Item active>Bola</Breadcrumb.Item>
              </Breadcrumb>
              </Col>
            </Row>
            <Container>
            <Carousel>
               <Carousel.Item>
                 <img className="d-block w-100"
                 src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"
                 alt="First slide"/>
                 <Carousel.Caption>
                 <h3>Ingin Mau Jadi Tim Terbaik Dunia</h3>
                 </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                 <img className="d-block w-100"
                 src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
                 alt="Second slide"/>
                 <Carousel.Caption>
                 <h3>Ingin Mau Jadi Tim Terbaik Dunia</h3>
                 </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                 <img className="d-block w-100"
                 src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
                 alt="Third slide"/>
                 <Carousel.Caption>
                 <h3>Ingin Mau Jadi Tim Terbaik Dunia</h3>
                 </Carousel.Caption>
               </Carousel.Item>
            </Carousel>
            </Container>
            <br/><br/>

           </Container>
           <Container fluid>
           <Row>
             <Col>
             <ListGroup as="ul">
                 <ListGroup.Item as="li" active>Liga 1 Indonesia</ListGroup.Item>
                 <ListGroup.Item as="li">Liga Primere Inggris</ListGroup.Item>
                 <ListGroup.Item as="li">Serie A</ListGroup.Item>
                 <ListGroup.Item as="li">Ligue 1</ListGroup.Item>\
                 <ListGroup.Item as="li">Bundesliga</ListGroup.Item>
              </ListGroup>
             </Col>
             <Col  xs={4}>2 of 3</Col>
             <Col >
                <center>
                  <Image width={75} height={75} src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg"roundedCircle></Image>
                  <h3>Silahkan Login</h3>
                </center>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" />
                  </Form.Group>

                  <Form.Group >
                    <Form.Check type="checkbox"  label="Kami Setuju" />
                  </Form.Group>
                  <Button variant="primary" type="submit" onClick={this.handleShow}>Submit</Button>

                </Form>

             </Col>
           </Row>
           </Container>


           <Modal show={this.state.show} onHide={this.handleHide}>
             <Modal.Header >
             <Modal.Title>Login</Modal.Title>
             </Modal.Header>
             <Modal.Body>Anda Berhasil Login</Modal.Body>
             <Modal.Footer>
             <Button variant="secondary" onClick={this.handleHide}>
             Close
             </Button>
             <Button variant="primary" onClick={this.handleHide}>
             Save Username & Password
             </Button>
             </Modal.Footer>
             </Modal>

      </div>


    );
  }
}

export default App;
