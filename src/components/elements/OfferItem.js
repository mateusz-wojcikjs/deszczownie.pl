import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { StyledOfferItem } from "./OfferItem.styles";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../button/Button";

const OfferItem = ({ img }) => {
  return (
    <StyledOfferItem>
      <a href="/oferta">
        <div className="img-container">
          <StaticImage
            src={"../../assets/images/d3.png"}
            alt="Test"
            quality={60}
            placeholder="blurred"
            height={300}
          />
        </div>
        <div className="offer-item-container">
          <div className="offer-item-header">
            <h5>Skuteczne nawadanianie roślin</h5>
          </div>
          <div className="offer-item-text">
            <p>
              Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
              Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
              Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
            </p>
          </div>
          <Button page={"/oferta"}>
            Zobacz produkt <BsArrowRight />
          </Button>
        </div>
      </a>
    </StyledOfferItem>
  );
};

export default OfferItem;
