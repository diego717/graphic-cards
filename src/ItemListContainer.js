import Flex from "./Flex";
import Card from "./Card";
import imgGraphic1660 from "./img/1660.jpg";
import imgGraphic2070 from "./img/2070.jpeg";
import imgGraphic3090 from "./img/3090.jpg";

const Productos = [
	{
		id: 1,
		nombre: "Gtx1660",
		img: "img/1660.jpg",
		precio: 170,
		descripcion: "",
	},
	{
		id: 2,
		nombre: "Gtx2070",
		img: "./img/2070.jpeg",
		precio: 320,
		descripcion: "",
	},
	{
		id: 3,
		nombre: "Gtx3090",
		img: "./img/3090.jpg",
		precio: 980,
		descripcion: "",
	},
];

const [item1, item2, item3] = Productos;
//console.log(id1);



function ItemListContainer() {
    return(
        <Flex>
        <Card nombre={item1.nombre} precio={item1.precio} img={imgGraphic1660} />
        <Card nombre={item2.nombre} precio={item2.precio} img={imgGraphic2070} />
        <Card nombre={item3.nombre} precio={item3.precio} img={imgGraphic3090} />
        </Flex>
        );
}

export default ItemListContainer;