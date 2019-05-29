// Data structures in JS
// Testing with Jest

// JSON

// var invoiceData = require('./data.json')

// // console.log(invoiceData['Invoices'][0]['Contact']['Name'])

// var firstInvoice = getInvoices(invoiceData)[0]
// var contactName = getContactName(firstInvoice)
// // console.log(contactName)

// var lineItemSummary = getLineItems(firstInvoice)
//   .map(function(invoiceLineItem) {
//     var qty = invoiceLineItem['Quantity']
//     var desc = invoiceLineItem['Description']
//     var price = invoiceLineItem['UnitAmount']

//     return Math.round(qty) + 'x ' + desc + ' @ $' + Math.round(price)
//   })

// for(var i = 0; i < lineItemSummary.length; i++) {
//   var item = lineItemSummary[i]
//   console.log(item)
// }

// console.log('----')
// // These are the same ---/\ ---\/

// lineItemSummary.forEach(function(item) {
//   console.log(item)
// })


function getInvoices(invoiceStructure) {
  return invoiceStructure['Invoices']
}

function getLineItems(invoice) {
  return invoice['LineItems']
}

function getContactName(invoice) {
  return invoice['Contact']['Name']
}

module.exports = {
  getInvoices: getInvoices,
}
