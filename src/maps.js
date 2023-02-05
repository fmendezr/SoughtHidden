import hellHeaven from "./images/hell-heaven.jpeg";
import whiteNoise from "./images/white-noise.jpeg";
import supes from "./images/supes.jpeg";
import characters from "./characters";

const maps = [
    {id: "supes", name: "Supes", image: supes, characters: characters.slice(0,3)},
    {id: "whiteNoise", name: "White Noise", image: whiteNoise, characters: characters.slice(6)},
    {id: "hell&Heaven", name: "Hell & Heaven", image: hellHeaven, characters: characters.slice(3, 6)},
]

export default maps;