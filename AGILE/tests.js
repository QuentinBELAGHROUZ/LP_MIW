/*QUnit.test("Test nbOccurences toto", function(assert){
  assert.equal(nbOccurences("toto", "to"), 2);
});

QUnit.test("Test nbOccurences non trouvé", function(assert){
  assert.ok(nbOccurences("toto", "aa")== 0);
});

QUnit.test("Test nbOccurences chaine vide", function(assert){
  assert.ok(nbOccurences("toto", "")== 0);
});*/

QUnit.test("Test AVG", function(assert){
  assert.ok(computeAverage([1, 2, 3])== 2);
});
