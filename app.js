function changeTextP(id, text) {
    let paragraphe = document.getElementById(id);
    paragraphe.innerText = text
}

changeTextP('p1', "texte du premier paragraphe");
changeTextP('p2', "texte du second paragraphe");
changeTextP('p3', "texte du troisième paragraphe");
changeTextP('p4', "texte du quatrième paragraphe");
changeTextP('p5', "texte du cinquième paragraphe");