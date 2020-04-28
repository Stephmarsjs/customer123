const result = Collection.lookupIn('customer123', [
    couchbase.LookupInSpec.get('addressess.delivery.country'),
]);
const country = result.content[0]; // 'United States'

// Check existence of sub-document path 

// const result = collection.LookupIn('customer123', [
//     couchbase.LookupInSpec.exists('purchases.pending[-1]')
// ]);
// console.log('Path exists? ', result.content[0]);