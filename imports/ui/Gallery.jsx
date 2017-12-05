import React, { Component } from 'react';
import { Row, Col, Card, CardTitle } from 'react-materialize';

export default class Gallery extends Component {
  getImages(){
    return [
      { _id: 1, imgPath: 'https://wallpaperscraft.com/image/triangle_light_blurred_88541_1920x1080.jpg', title:'Title Here'},
      { _id: 2, imgPath: 'https://wallpaperscraft.com/image/mountains_sky_bali_sunrise_kintamani_indonesia_95497_1920x1080.jpg', title:'Title Here'},
      { _id: 3, imgPath: 'https://wallpaperscraft.com/image/space_sky_stars_79233_1920x1080.jpg', title:'Title Here'},
      { _id: 4, imgPath: 'http://walldiskpaper.com/wp-content/uploads/2015/11/Digital-Astronaut-1920x1080-Wallpaper-Background.jpg', title:'Title Here 2'},
      { _id: 5, imgPath: 'https://images2.alphacoders.com/564/thumb-1920-564835.jpg', title:'Title Here'},
      { _id: 6, imgPath: 'http://eskipaper.com/images/steam-wallpapers-2.jpg', title:'Ooh nice Title'},
      { _id: 7, imgPath: 'https://wallpaperscraft.com/image/triangle_light_blurred_88541_1920x1080.jpg', title:'Title Here'},
      { _id: 8, imgPath: 'https://wallpaperscraft.com/image/mountains_sky_bali_sunrise_kintamani_indonesia_95497_1920x1080.jpg', title:'Title Here'},
      { _id: 9, imgPath: 'https://wallpaperscraft.com/image/space_sky_stars_79233_1920x1080.jpg', title:'Title Here'},
      { _id: 10, imgPath: 'http://walldiskpaper.com/wp-content/uploads/2015/11/Digital-Astronaut-1920x1080-Wallpaper-Background.jpg', title:'Title Here 2'},
      { _id: 11, imgPath: 'https://images2.alphacoders.com/564/thumb-1920-564835.jpg', title:'Title Here'},
      { _id: 12, imgPath: 'http://eskipaper.com/images/steam-wallpapers-2.jpg', title:'Ooh nice Title'},
    ]
  }
      
  renderImageCards() {
      return this.getImages().map((image) => 
      <Col s={12} m={6} l={3}>
       <a href={image.imgPath}>
        <Card 
          key={image._id} 
          className='reveal'
	        header={<CardTitle key={image._id} image={image.imgPath}></CardTitle>}
	        actions={[<a href={image.imgPath}>{image.title}</a>, <a href={image.imgPath}>#Tag1</a>, <a href="http://www.google.com">#Google</a>]}>
          Stats Stats Stats
        </Card>
        </a>
     </Col>
      );
      }
  
  render(){
    return(
      <Row>
        {this.renderImageCards()}
      </Row>
    );
  }
}