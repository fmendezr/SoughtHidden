import hellHeaven from "./images/hell-heaven.png";
import whiteNoise from "./images/whiteNoise.png";
import supes from "./images/supes.jpeg";
import characters from "./characters";

maps = [
    {id: "levelOne", name: "Supes", image: supes, characters: characters.slice(0,3)},
    {id: "levelTwo", name: "White Noise", image: whiteNoise, characters: characters.slice(3, 6)},
    {id: "levelThree", name: "Hell & Heaven", image: hellHeaven, characters: characters.slice(6)},
]

export default maps;