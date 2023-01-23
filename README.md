# Pokemon Compendium Planning

## Components

    -Main
        Main.js
            -State:
            -[pokemon, setPokemon]
            -[types, setTypes]
            -[selectedType, setSelectedType]
            -[query, setQuery]
            -useEffect
                -calls pokemon API and sets the _INITIAL_ pokemon state
                -calls the types API and get the types
        Main.css
    -Controls
        -Select.js
            - dropdown
                - handleTypeChange
        -Query.js
            - search bar
                - handleButtonClick
    -PokeCard.js
        - mapping through pokemon
        - rendering images

## Plan

1. Get Main component loading and showing the first 10 pokemon
2. Get the select dropdown displaying the different types
3. Added search bar
4. Got images loading on page
5. Add hp to attributes on pokeCard
