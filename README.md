# Les bases du JavaScript
Ici, vous retrouverez les bases du JavaScript.

## 1. Types
### Aide : fichier types.js
Un **object**, c'est une/plusieurs valeurs entre des accolades. Il est souvent utilisé dans les fichers "config.json" pour le token du bot. Ex : {token: "12345678"}. Pour récuperer le token, il suffira juste d'écrire : object.token.

**Les strings** sont des texts entre guillemets. Ex :  "123"

**Les numbers**, pas besoins d'un bac +6 en Anglais, sont les nombres.

**Un array** est un tableau. Cela se représente par des crochets ([]). Ex : ["123", 45, test]. Pour accéder à la valeur "123", il faudra simplement écrire juste après les crochets : [0]. Idem pour les autres : [1]/[2]. Un autre exemple : pour accéder, imaginons, à l'object {text} suivant : ["123", 45, {text: "test"}] il faudra écrire ceci : ["123", 45, {text: "test"}][2].text ! 

**Un bigint**, c'est un chiffre, et une lettre. Ex : 123a. Discord.js utilise ceci pour les permissions.

**/\*function\*/** c'est une fonction. Ex : f = function() {
    console.log("test").
}

**Un boolean**, c'est soit True, soit False.

**Un undefined** c'est undefined, c'est à dire : quelque chose d'indéfini.

**null** = null, c'est rien.

Si l'on ne sait pas quelle est le type d'un variable, on peut faire ceci : variable= text.text;
console.log(typeof variable)
Ceci vas écrire dans la console le type de la variable demandée.

## 2. Variables
### Aide : fichier variables.js
const test1 = "test1";

let test2 = "test2";

var test3 = "test3";

La différence entre **let** et **var**, aucune. Par contre, entre **const** et **let**/**var**, il y en a une, **const** ne peut pas être modifié. Ex : test2 = "fin du test2". Si je console.log avant **test2** et apres **test2**, il vas écrire dans la console "test2" conntrairement à **const** qui ne peut pas faire ça. Pour import discord.js, il est obligé d'utiliser **const**.

## 3. Syntaxes
### Aide : fichier syntaxes.js
**if** est une condition, on peut la mettre en négatif/undefined/...

**else** = sinon

**return** permet de stop le code. Il est impossible de mettre des accolades avec un return

**for** = une boucle

**try catch** = Le code après le try vas s'effectuer mais s'il y a une erreur, ce qui a après le catch vas s'effectuer

**module.exports** = exporte le code
