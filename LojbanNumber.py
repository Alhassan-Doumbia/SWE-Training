def convert_lojban(lojban):
    trans_db = {
        "pa": "1",
        "re": "2",
        "ci": "3",
        "vo": "4",
        "mu": "5",
        "xa": "6",
        "ze": "7",
        "bi": "8",
        "so": "9",
        "no": "0",
    }
    # Découpage en blocs de 2 lettres
    if(len(lojban)>14):
        return None
    else : 

        muted_lojban = [lojban[i:i+2] for i in range(0, len(lojban), 2)]

        result = []
        for element in muted_lojban:
            if element in trans_db:
                result.append(trans_db[element])
            else:
                pass 
        value=int("".join(result))
        return value 


