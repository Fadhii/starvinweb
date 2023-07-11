import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../css/Menu.css";
import { FaSearch } from "react-icons/fa";



const Menu = () => {
  const menu = [
    {
      id: 1,
      title: "Chicken Biriyani",
      image:
        "https://media.istockphoto.com/id/501150349/photo/chicken-biryani-11.jpg?s=612x612&w=0&k=20&c=w6mDnUx8MnH3rnP9bR0VfWRwrODcbTz-6U07o3Zrs4o=",
      price: "Rs.120",
    },
    {
      id: 2,
      title: "Beef Biriyani",
      image:
        "https://10minutesrecipe.com/wp-content/uploads/2022/01/Beef-Biryani-Recipe-1.jpg",
      price: "Rs.180",
    },
    {
      id: 3,
      title: "Paneer Tikka",
      image:
        "https://www.curiouscuisiniere.com/wp-content/uploads/2021/10/paneer-tikka-horizontal.1.jpg",
      price: "Rs.150",
    },
    {
      id: 4,
      title: "Butter Chicken",
      image:
        "https://masalaandchai.com/wp-content/uploads/2022/03/Butter-Chicken-360x360.jpg",
      price: "Rs.200",
    },
    {
      id: 5,
      title: "Tandoori Naan",
      image:
        "https://cf0316.s3.amazonaws.com/cookificom/dishes/12967/43b1ed.jpg",
      price: "Rs.30",
    },
    {
      id: 6,
      title: "Kerala Sadya",
      image:
        "https://www.livelaw.in/h-upload/2023/04/26/1600x960_470011-onam-sadya.jpg",
      price: "Rs.250",
    },
    {
      id: 7,
      title: "Al Fahm",
      image: "https://i.ytimg.com/vi/CK_GDa8Rj-Y/maxresdefault.jpg",
      price: "Rs.190",
    },
    {
      id: 8,
      title: "Tandoori Chicken",
      image:
        "https://falasteenifoodie.com/wp-content/uploads/2023/03/DSC08605-scaled.jpg",
      price: "Rs.170",
    },
    {
      id: 9,
      title: "Chicken Fried Rice",
      image:
        "https://www.allchickenrecipes.com/wp-content/uploads/2018/11/Chicken-Fried-Rice.jpg",
      price: "Rs.140",
    },
    {
      id: 10,
      title: "Ghee Rice",
      image:
        "https://www.ruchikrandhap.com/wp-content/uploads/2018/07/Ghee-Rice2-1.jpg",
      price: "Rs.110",
    },
    {
      id: 11,
      title: "Porotta with Beef Curry",
      image:
        "https://img.onmanorama.com/content/dam/mm/en/travel/eatouts/images/2019/7/24/beef-porotta.jpg",
      price: "Rs.200",
    },
    {
      id: 12,
      title: "Chicken Kuzhi Manthi",
      image:
        "https://img.onmanorama.com/content/dam/mm/en/lifestyle/health/images/2023/5/3/kuzhi-manthi.jpg",
      price: "Rs.150",
    },
  ];

  const [index, setIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 6 : 0));
  };

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex < menu.length - 6 ? prevIndex + 6 : prevIndex
    );
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const [cart, setCart] = useState([]);

  const calculateTotalPrice = () => {
    let total = 0;
    for (const item of cart) {
      const price = parseFloat(item.price.substring(3)); // Remove "Rs." and convert to number
      total += price;
    }
    return total;
  };

  const filteredMenu = menu.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bdy">
      <div style={{ margin: "50px" }}>
        <Container>
        <div className="search-bar">
  <input
    type="text"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    placeholder="Search by title"/>
    <FaSearch className="search-icon" />
  
  
</div>

          <Row>
            {filteredMenu.slice(index, index + 6).map((e) => (
              <Col key={e.id}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    style={{ height: "150px" }}
                    src={e.image}
                  />
                  <Card.Body>
                    <Card.Title>{e.title}</Card.Title>
                    <Card.Text>{e.price}</Card.Text>
                    <Button variant="danger" onClick={() => addToCart(e)}>
                      Order
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="carousel-buttons">
            <Button
              variant="secondary"
              onClick={handlePrev}
              disabled={index === 0}
            >
              Prev
            </Button>
            <Button
              variant="secondary"
              onClick={handleNext}
              disabled={index >= filteredMenu.length - 6}
            >
              Next
            </Button>
          </div>

          <h2>Cart:</h2>
          <div className="cart">
            <ul>
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  {item.title}: {item.price}
                </li>
              ))}
            </ul>
            <div className="total-price">
              Total Price: Rs. {calculateTotalPrice()}
            </div>
            <Button variant="danger">Checkout</Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Menu;