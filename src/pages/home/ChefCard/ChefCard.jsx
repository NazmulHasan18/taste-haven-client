/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import { BiBowlHot } from "react-icons/bi";

const ChefCard = ({ chef }) => {
   const { id, name, image, experience, foodItems, likes, chefPosition } = chef;
   console.log(chef);
   return (
      <Card
         className="mb-5 border-danger "
         style={{ width: "18rem", height: "32rem" }}
         bg={`${id % 2 ? "warning" : "danger"}`}
      >
         <Card.Img variant="top" src={image} style={{ height: "19rem" }} />
         <Card.Body className={`${id % 2 ? "text-black" : "text-white"}`}>
            <Card.Title>
               <h3>{name}</h3>
            </Card.Title>
            <Card.Text className="mb-1">
               <span className="fw-semibold">Experience :</span> {experience}
            </Card.Text>
            <Card.Text className="mb-1">
               <span className="fw-semibold">Position :</span> {chefPosition}
            </Card.Text>
            <div className="d-flex justify-content-between">
               <Card.Text className="mb-1">
                  <span className="fw-semibold">Recipes :</span> {foodItems.length}
               </Card.Text>
               <Card.Text className="mb-1">
                  <span className="fw-semibold">
                     <FaHeart className={`${id % 2 ? "text-danger" : "text-warning"}`}></FaHeart>
                  </span>{" "}
                  {likes}
               </Card.Text>
            </div>
            <Button variant={`${id % 2 ? "danger" : "warning"}`} className="mt-3">
               View Recipes <BiBowlHot></BiBowlHot>
            </Button>
         </Card.Body>
      </Card>
   );
};

export default ChefCard;
