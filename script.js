


var KeyEnum = {
    KEY_SPACE: 32,
    KEY_LEFT: 37,
    KEY_UP: 38,
    KEY_RIGHT: 39,
    KEY_DOWN: 40
};

// Objet qui représente un chien
// Un chien est caractérisé par sa position dans la grille
function Wardog(position) {

    // Tableau d'entier correspond à la position du chien dans la grille
    // x = position[0] -- y = position[1]
    this.position = position;    

    // Retourne la position en X du chien dans la grille
    this.getX = function() {
        return this.position[0];
    };

    // Retourne la position en Y du chien dans la grille
    this.getY = function() {
        return this.position[1];
    };

    // Fait avancer le chien d'une case en fonction de la direction
    // passée en paramêtre
    this.move = function(direction) {
        switch(direction) {
            case KeyEnum.KEY_DOWN:
                this.position[1] ++;
                break;
            case KeyEnum.KEY_UP:
                this.position [1] --;
                break;
            case KeyEnum.KEY_LEFT:
                this.position [0] --;
                break;
            case KeyEnum.KEY_RIGHT:
                this.position [0] ++;
                break;
            default : 
                ;
        }
    };

}

// Définition de l'objet grille
function Grid(x, y) {

    // Déclaration de constantes associées aux couleurs des cases
    // de la grille
    var EnumGColor = {
        G_WHITE: 0,
        G_BLACK: 1
    };


    // Méthode d'initialisation de la grille. Pour l'instant toutes les cases 
    // sont initialisées à blanc
    this.init = function(x, y) {

        this.grille = new Array(x);
        
        for(var i=0 ; i<x ; i++) {

            this.grille[i] = new Array(y);
            
            for(var j=0 ; j<this.grille[i].length ; j++) {
                this.grille[i][j] = EnumGColor.G_WHITE;
            }
        }
    }

  

    // Méthode de dessin de la grille en créant un tableau html
    this.draw = function() { 

        var html = "<table>";

        for(var j=0 ; j<this.grille[j].length ; ++j) {
        
            html += "<tr>";
        
            for(var i=0 ; i<this.grille.length ; ++i) {
                if(this.grille[i][j] == EnumGColor.G_WHITEG) {
                    html += "<td class=\"\">";
                }
                else if(this.grille[i][j] == EnumGColor.G_BLACK) {
                    html += "<td class=\"\">";
                }
                else html += "<td>";
                if(i == this.dog.getX() && j == this.dog.getY()) {
                    html += "<img src='./chien.png' width=98 height=98 />";
                }
                html += "</td>";
            }
        
            html += "</tr>";
        }
        html += "</html>";
        $(document.body).html(html);
    };

    // Méthode de déplacement du chien grâce à la direction passée en paramêtre.
    // Pour l'instant aucune vérif sur la validation (case noir, fin de la grille ...)
    // n'a été implémentée.
    this.moveDog = function(direction) {
        // Si case suivante pas case noir ni hors case dog.setPosition(...);
        this.dog.move(direction);
        this.draw();
    };

    // Initialisation de la grille
    this.init(x, y);
    // Création du chien de la partie
    this.dog = new Wardog([3,4]);  

}


// Création de la partie
$(function(){
    var maGrille = new Grid(10,5);
    maGrille.draw();
    $(document).keydown(function(event) {
        switch(event.which) {
            case KeyEnum.KEY_DOWN:
                maGrille.moveDog(KeyEnum.KEY_DOWN);
                break;
            case KeyEnum.KEY_LEFT:
                maGrille.moveDog(KeyEnum.KEY_LEFT);
                break;
            case KeyEnum.KEY_RIGHT:
                maGrille.moveDog(KeyEnum.KEY_RIGHT);
                break;
            case KeyEnum.KEY_UP:
                maGrille.moveDog(KeyEnum.KEY_UP);
                break;
        }
    });
});