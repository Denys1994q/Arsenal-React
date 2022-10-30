import redShirt from "../../imgs/shirt.webp";
import redShirtSmall1 from "../../imgs/red-shirt-small1.jpg";
import redShirtSmall2 from "../../imgs/red-shirt-small2.jpg";

import shirtYellow from "../../imgs/shirt-yellow.png";
import yellowShirtSmall1 from "../../imgs/yellow-shirt-small1.jpg";
import yellowShirtSmall2 from "../../imgs/yellow-shirt-small2.jpg";

import shirtBlack from "../../imgs/shirt-black.webp";
import blackShirtSmall1 from "../../imgs/black-shirt-small1.jpg";
import blackShirtSmall2 from "../../imgs/black-shirt-small2.jpg";

import shirtPink from "../../imgs/shirt-pink.webp";
import pinkShirtSmall1 from "../../imgs/pink-shirt-small1.jpg";
import pinkShirtSmall2 from "../../imgs/pink-shirt-small2.jpg";

export const shirts = [
    {
        color: "red",
        name: "Arsenal 22/23 Home Shirt",
        img: redShirt,
        smallImgs: [redShirt, redShirtSmall1, redShirtSmall2],
        sizes: ["xs", "s", "m", "l", "xl", "2xl"],
        chosenSize: "xs",
        price: 100,
    },
    {
        color: "yellow",
        name: "Arsenal 22/23 Second Shirt",
        img: shirtYellow,
        smallImgs: [shirtYellow, yellowShirtSmall1, yellowShirtSmall2],
        sizes: ["xs", "s", "m", "l", "xl"],
        chosenSize: "xs",
        price: 90,
    },
    {
        color: "black",
        name: "Arsenal 22/23 Away Shirt",
        img: shirtBlack,
        smallImgs: [shirtBlack, blackShirtSmall1, blackShirtSmall2],
        sizes: ["s", "m", "l", "xl", "2xl"],
        chosenSize: "xs",
        price: 110,
    },
    {
        color: "pink",
        name: "Arsenal 22/23 Third Shirt",
        img: shirtPink,
        smallImgs: [shirtPink, pinkShirtSmall1, pinkShirtSmall2],
        sizes: ["xs", "m", "l", "xl", "2xl"],
        chosenSize: "xs",
        price: 120,
    },
];
