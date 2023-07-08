import React from 'react';
import '../css/About.css';
import {useNavigate} from 'react-router-dom'

function About() {

  const navigate = useNavigate();
  const navigateToMenu = () => {
    navigate('/menu');
  };

  return (
    <>
      <div className='main1-div'>
        <div className='img-div1'>
          <img className="img" src="https://img.freepik.com/free-photo/massaman-curry-frying-pan-with-spices-cement-floor_1150-20777.jpg?w=1060&t=st=1688794810~exp=1688795410~hmac=d46dd8d0cda3419e11a7dca735f3d7859174ef0b384f0cec31608d31d68221d6" alt="food" />
          <img className="img" src="https://img.freepik.com/free-photo/top-view-tasty-pakistani-dish_23-2148825124.jpg?w=1060&t=st=1688794668~exp=1688795268~hmac=d2f1ef2899f6c2b1acb03fb81b0db6c1dbde9231d50b30b90bd4715eacac0497    " alt="food" />
        </div>
        <div className="about-content">
          <h2>About Star'vin Restaurant</h2>
          <p>
            Star'vin Restaurant is a renowned eatery located in the heart of Kerala, India. We take pride in serving delicious and authentic Indian cuisine that satisfies your taste buds. Our team of experienced chefs prepares each dish with utmost care, using fresh and high-quality ingredients.
          </p>
          <p>
            At Star'vin, we believe in providing a delightful dining experience to our customers. Our cozy and welcoming ambiance creates the perfect setting for enjoying a scrumptious meal with family and friends. Whether you're craving traditional Indian biryanis, flavorful curries, or mouthwatering tandoori delicacies, we have a wide range of options to satisfy every palate.
          </p>
          <p>
            We strive to deliver exceptional service and ensure that every customer leaves our restaurant with a memorable dining experience. Visit Star'vin Restaurant and indulge in the rich flavors of Indian cuisine in a warm and inviting atmosphere.
          </p>
        </div>
        <button className="menu-button" onClick={navigateToMenu}>View Menu</button>
        
      </div>
      
    </>
  );
}

export default About;
