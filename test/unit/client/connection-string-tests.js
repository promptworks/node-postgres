require(__dirname + '/test-helper');

test("using connection string in client constructor", function() {
  var client = new Client("postgres://brian:pw@boom:381/lala");
  test("parses user", function() {
    assert.equal(client.user,'brian');
  });
  test("parses password", function() {
    assert.equal(client.password, 'pw');
  });
  test("parses host", function() {
    assert.equal(client.host, 'boom');
  });
  test('parses port', function() {
    assert.equal(client.port, 381);
  });
  test('parses database', function() {
    assert.equal(client.database, 'lala');
  });
});

test("using connection string and a config object in client constructor", function() {
  var client = new Client("postgres://brian:pw@boom:381/lala", {database: 'other_database', ssl: true});

  test("retains parameters that aren't overridden", function() {
    test("parses user", function() {
      assert.equal(client.user,'brian');
    });
    test("parses password", function() {
      assert.equal(client.password, 'pw');
    });
    test("parses host", function() {
      assert.equal(client.host, 'boom');
    });
    test('parses port', function() {
      assert.equal(client.port, 381);
    });
  });

  test("overrides connection string parameters with ones from the config object", function() {
    test('parses database', function() {
      assert.equal(client.database, 'other_database');
    });
    test('parses database', function() {
      assert.equal(client.ssl, true);
    });
  });

});


