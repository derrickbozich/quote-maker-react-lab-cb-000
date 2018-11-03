export function addQuote(quote){
  return {
    type: 'ADD_QUOTE',
    quote: quote
  }
}

export function removeQuote(quote){
  return {
    type: 'REMOVE_QUOTE',
    quoteId: quote
  }
}
