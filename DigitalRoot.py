
def digital_root(n):
     #Tant que la taille de la liste de mot n'est pa egale à 1 on boucle dessus en ajoutant chaque membre à chaque membre , quand la taille de la liste des nombre est égale à 1 , on va return le résultat .
    storage = str(n)
    base = 0
    while len(storage) != 1:
        for number in storage:
            base += int(number)
        storage = str(base)  
        base = 0
    return int(storage)  # on retourne un entier


#Test
result=digital_root(942)
print(result)

#Première version 
# def digital_root(n):
   
#     storage=str(n)
#     base=0
#     while len(storage)!=1:
#         for number in storage:
#             base+=int(number)
#         storage=base
#         base=0
#     return storage

# Le bug provenait de ca : 
# mon erreur vient de cette ligne :

# storage = base
# À ce moment-là, je remplaces storage (une chaîne) par base (un entier).
# Du coup, au tour suivant de la boucle, tu fais len(storage)... sur un int → erreur.

#  Correction simple :
# Il faut reconvertir base en chaîne de caractères juste après la somme, pour que len(storage) continue de fonctionner :


# Amelioration 
def DigitalRoot(n):
    while n > 9:
        n = sum(int(element) for element in str(n))  # Calculer la somme des chiffres
    return n

#sum additionne des suites de données , des istes etc 
