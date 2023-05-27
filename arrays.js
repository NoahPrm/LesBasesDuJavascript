// Définis l'array
let array = []

// Filtre l'array en donnat un nombre
array.filter(value => type of value === "number")

// Range dans l'odre décroissant les valeurs
array.sort((a, b) => a - b)

// Range dans l'odre croissant les valeurs
array.sort((a, b) => b - a)

// Sépare les valeurs qui ont un espace ["test joli", "javascript python"] => ["test", "joli", "javascript", "python"]
array.split(" ")

// Fusionne les valeurs qui ont un espace ["discord.gg/clarty", "meilleur", "bot", "discord"] => discord.gg/clarty meilleur bot discord
array.join(" ")

// Si inclus la valeure ["discord.gg/clarty", "bot", "incroyable"] => True || ["frostie", "incroyable"] => False
array.includes("bot")

// Recherche une valeure ["discord.gg/clarty", "frostie", "AutoMessage"] => "frostie"
array.find("frostie")

// Rajoute une valeure dans l'array ["frostie", "clarty"] => ["frostie", "clarty", "AutoMessage"]
array.push("AutoMessage")

// Met un "style" à l'array ["frostie", "clarty", "automessage"] => ["[frostie]", "[clarty]", "[automessage]"]
array.map(value => `[${value}]`)

// Le nombre de valeur dans l'array ["test", "test2"] => 2
array.length

// Fait une boucle pour chaque valeurs
array.forEach(async value => {
  
  console.log(value)
}
