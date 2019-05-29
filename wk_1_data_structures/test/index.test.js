var index = require('../index')

test('Check its all working', function() {
  // Arrange
  var invoiceStructure = {
    Invoices: [
      1,
      2,
      3
    ]
  }

  var expected = [1,2,3]

  // Act
  var actual = index.getInvoices(invoiceStructure)

  // Assert
  expect(actual).toEqual(expected)
})