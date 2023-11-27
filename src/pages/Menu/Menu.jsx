import React, {useState} from 'react';
import MenuHeader from '../../components/MenuHeader/MenuHeader';
import Beverages from '../../components/Beverages/Beverages';
import './Menu.css';
const Menu = () => {
  const [items, setItems]=useState([
    {
      id: 1,
      title: "B-52",
      ingrs: "Coffee liqueur, irish cream, liqueur, triple sec.",
      category: "shot"
    },
    {
      id: 2,
      title: "Hurricane shot",
      ingrs: "Scotch whiskey, London dry gin, Green mint liqueur.",
      category: "shot"
    },
    {
      id: 3,
      title: "Hiroshima",
      ingrs: "Sambuca classic, absinthe, Irish cream,grenadine.",
      category: "shot"
    },
    {
      id: 4,
      title: "Jose Cuervo Silver",
      ingrs: "Jose Cuervo Silver tequila. ",
      category: "shot"
    },
    {
      id: 5,
      title: "Clouds",
      ingrs: "Sambuca classic, silver tequila, absinthe, blue curacao, Irish cream.",
      category: "shot"
    },
    {
      id: 6,
      title: "Jose Cuervo Gold",
      ingrs: "Jose Cuervo Gold tequila. ",
      category: "shot"
    },
    {
      id: 7,
      title: "Mojito",
      ingrs: "White rum, Sugar syrup, Soda, Lime, Mint.",
      category: "coctail"
    },
    {
      id: 8,
      title: "Norton Street",
      ingrs: "Woodford Reserve Rye Whiskey, Red Vermouth, Honey syrup, Lemon juice, Pistachois.",
      category: "coctail"
    },
    {
      id: 9,
      title: "Negroni",
      ingrs: "London Dry Gin, Red vermouth, Red bitter.",
      category: "coctail"
    },
    {
      id: 10,
      title: "Blood Diamond",
      ingrs: "Cognac Hennessy, Benedictine, Chinar,Fernet Branca.",
      category: "coctail"
    },
    {
      id: 11,
      title: "Margarita",
      ingrs: "Silver tequila, Triple sec Fruko, Schulz, Sugar syrup, Lime juice.",
      category: "coctail"
    },
    {
      id: 12,
      title: "Old Fashion",
      ingrs: "Bourbon, Anqostura, Cane Sugar cubes, Cocktail cherry red.",
      category: "coctail"
    },
  ])
  const[hookahs,setHookahs]=useState([
    {
      id: 1,
      title: "Lady Killer (Adalya)",
      ingrs: "Melon, Blackberry, Raspberry, Mango, Mint, Berries"
    },
    {
      id: 2,
      title: "Hawai (Adalya)",
      ingrs: "Pineapple, Mango, Mint"
    },
    {
      id: 3,
      title: "Summer Fun (Balli)",
      ingrs: "Strawberry, Raspberry, Mint, Blueberry"
    }
  ])
  return (
    <div className="menu-main">
      <MenuHeader text={"Menu:"}/>
      <div className="menu-body">
        <Beverages 
        beverages={items.filter(item=>item.category==="shot")} 
        title="Shots:"
        styles="sub-menu-title left"/>   
        <Beverages 
        beverages={items.filter(item=>item.category==="coctail")} 
        title="Coctails:"
        styles="sub-menu-title right"/>   
      </div>
    </div>
  );
};

export default Menu;
