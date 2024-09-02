const animals = [
    {
        "name": "Lion",
        "species": "Panthera leo",
        "habitat": "Savannah",
        "diet": "Carnivore",
        "lifespan": 12
    },
    {
        "name": "Elephant",
        "species": "Loxodonta africana",
        "habitat": "Grasslands",
        "diet": "Herbivore",
        "lifespan": 60,
        "foodRequerment": {
            "food": "2",
            "water": "4"
        }
    },
    {
        "name": "Penguin",
        "species": "Aptenodytes forsteri",
        "habitat": "Antarctica",
        "diet": "Carnivore",
        "lifespan": 20
    },
    {
        "name": "Kangaroo",
        "species": "Macropus rufus",
        "habitat": "Australian Outback",
        "diet": "Herbivore",
        "lifespan": 23
    },
    {
        "name": "Giraffe",
        "species": "Giraffa camelopardalis",
        "habitat": "Savannah",
        "diet": "Herbivore",
        "lifespan": 25
    },
    {
        "name": "Panda",
        "species": "Ailuropoda melanoleuca",
        "habitat": "Temperate Forests",
        "diet": "Herbivore",
        "lifespan": 20
    },
    {
        "name": "Dolphin",
        "species": "Delphinus delphis",
        "habitat": "Oceans",
        "diet": "Carnivore",
        "lifespan": 40
    },
    {
        "name": "Tiger",
        "species": "Panthera tigris",
        "habitat": "Rainforests",
        "diet": "Carnivore",
        "lifespan": 15
    },
    {
        "name": "Koala",
        "species": "Phascolarctos cinereus",
        "habitat": "Eucalyptus Forests",
        "diet": "Herbivore",
        "lifespan": 18
    },
    {
        "name": "Polar Bear",
        "species": "Ursus maritimus",
        "habitat": "Arctic",
        "diet": "Carnivore",
        "lifespan": 25
    }
]

function useAnimal(animals){
    return (
        animals.name,
        () => console.log(animals.lifespan)
    )
}

export default animals;
export {useAnimal};