import frutas from "@/assets/category-frutas.jpg";
import verduras from "@/assets/category-verduras.jpg";
import legumes from "@/assets/category-legumes.jpg";
import temperos from "@/assets/category-temperos.jpg";
import banana from "@/assets/fruit-banana.jpg";
import manga from "@/assets/fruit-manga.jpg";
import uva from "@/assets/fruit-uva.jpg";
import melancia from "@/assets/fruit-melancia.jpg";
import laranja from "@/assets/fruit-laranja.jpg";
import mamao from "@/assets/fruit-mamao.jpg";
import abacate from "@/assets/fruit-abacate.jpg";
import abacaxi from "@/assets/fruit-abacaxi.jpg";
import alface from "@/assets/veg-alface.jpg";
import couve from "@/assets/veg-couve.jpg";
import rucula from "@/assets/veg-rucula.jpg";
import espinafre from "@/assets/veg-espinafre.jpg";
import agriao from "@/assets/veg-agriao.jpg";
import acelga from "@/assets/veg-acelga.jpg";

export const phone = "11 99666-3529";
export const address = "R. Fábio Lopes dos Santos Luz, 189 - Vila Andrade, São Paulo - SP, 05724-005";
export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
export const directionsLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
export const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
export const whatsapp = (message = "Olá! Vim pelo site e gostaria de fazer um pedido.") =>
  `https://wa.me/5511996663529?text=${encodeURIComponent(message)}`;
export const instagram = "https://www.instagram.com/freshfruti/";

export const categories = [
  { slug: "frutas", title: "Frutas", image: frutas, note: "Da estação, cheias de sabor.", items: [
    { name: "Banana", detail: "Prática e versátil, para o café da manhã ou receitas.", image: banana },
    { name: "Manga", detail: "Doce e suculenta, deliciosa ao natural.", image: manga },
    { name: "Uva", detail: "Perfeita para beliscar ou levar na lancheira.", image: uva },
    { name: "Melancia", detail: "Refrescante para os dias quentes.", image: melancia },
    { name: "Laranja", detail: "Boa para sucos ou para comer em gomos.", image: laranja },
    { name: "Mamão", detail: "Macio e saboroso para começar o dia.", image: mamao },
    { name: "Abacate", detail: "Cremoso, para vitaminas e preparos salgados.", image: abacate },
    { name: "Abacaxi", detail: "Tropical e aromático, ótimo para sobremesas.", image: abacaxi },
  ] },
  { slug: "verduras", title: "Verduras", image: verduras, note: "Folhas para deixar tudo mais fresco.", items: [
    { name: "Alface", detail: "Folhas leves para saladas do dia a dia.", image: alface },
    { name: "Couve", detail: "Vai bem refogada, em caldos ou sucos.", image: couve },
    { name: "Rúcula", detail: "Sabor marcante para saladas e sanduíches.", image: rucula },
    { name: "Espinafre", detail: "Uma opção para refogados e recheios.", image: espinafre },
    { name: "Agrião", detail: "Folhas de sabor intenso para saladas.", image: agriao },
    { name: "Acelga", detail: "Crocante, ideal para saladas e refogados.", image: acelga },
  ] },
  { slug: "legumes", title: "Legumes", image: legumes, note: "Cor e sabor para cada receita.", items: [
    { name: "Cenoura", detail: "Crocante, para saladas, sopas e assados." },
    { name: "Abobrinha", detail: "Leve, fica ótima grelhada ou refogada." },
    { name: "Tomate", detail: "Para saladas, molhos e muitos pratos." },
    { name: "Beterraba", detail: "Colorida, gostosa crua, cozida ou assada." },
    { name: "Pepino", detail: "Refrescante e crocante para saladas." },
    { name: "Berinjela", detail: "Versátil para assar, grelhar ou rechear." },
  ] },
  { slug: "temperos", title: "Temperos", image: temperos, note: "Aquele toque fresco no prato.", items: [
    { name: "Manjericão", detail: "Aromático para molhos, massas e saladas." },
    { name: "Alecrim", detail: "Perfuma legumes e preparos assados." },
    { name: "Salsinha", detail: "Um toque verde para finalizar receitas." },
    { name: "Cebolinha", detail: "Frescor suave para pratos do dia a dia." },
    { name: "Coentro", detail: "Sabor marcante para receitas especiais." },
    { name: "Hortelã", detail: "Refrescante em bebidas, saladas e molhos." },
  ] },
] as const;
