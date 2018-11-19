QUnit.test( "test execution correcte (classique)", function( assert ) {
  assert.equal( calculCumulMaximal([7.1, 0, 10, 0.2, 5],3), 17.1);
});

QUnit.test( "test execution correcte (avec max en fin de tableau)", function( assert ) {
    assert.equal( calculCumulMaximal([7.1, 0, 10, 0.2, 5],2), 10.2);
});

//pas reussi à implémenter la fonctionnalité
QUnit.test( "test execution correcte (avec valeur inconnue", function( assert ) {
    assert.equal( calculCumulMaximal([7.1, 9999, 10, 0.2, 5],3), 15.2);
});

//pareil...
QUnit.test( "test tableau qu'avec valeurs inconnues", function( assert ) {
    assert.equal( calculCumulMaximal([9999, 9999, 9999],2), 0);
});

QUnit.test( "test tableau vide", function( assert ) {
    assert.equal( calculCumulMaximal([],3), 'tableau vide');
});

QUnit.test( "test  taille tableau < nombre de jours", function( assert ) {
    assert.equal( calculCumulMaximal([7.1, 0, 10],4), 'nombre de jours > tableau');
});

QUnit.test( "erreur type valeur tableau", function( assert ) {
    assert.equal( calculCumulMaximal([7.1, 'test', 4.2, 10],4), 'erreur type valeur tableau');
});