# Les bases du JavaScript
Ici, vous retrouverez les bases du JavaScript.

## 1. Types
Un **object**, c'est une/plusieurs valeurs entre des accolades. Il est souvent utilisé dans les fichers "config.json" pour le token du bot. Ex : {token: "12345678"}. Pour récuperer le token, il suffira juste d'écrire : object.token.
**Les strings** sont des texts entre guillemets. Ex :  "123"
**Les numbers**, pas besoins d'un bac +6 en Anglais, sont les nombres.
**Un array** est un tableau. Cela se représente par des crochets ([]). Ex : ["123", 45, test]. Pour accéder à la valeur "123", il faudra simplement écrire juste après les crochets : [0]. Idem pour les autres : [1]/[2]. Un autre exemple : pour accéder, imaginons, à l'object {text} suivant : ["123", 45, {text: "test"}] il faudra écrire ceci : ["123", 45, {text: "test"}][2].text ! 
**Un bigint**, c'est un chiffre, et une lettre. Ex : 123a. Discord.js utilise ceci pour les permissions.
**/\*function\*/** c'est une fonction. Ex : f = function() {
    console.log("test").
}
