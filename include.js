const friends = ['balam', 'salam', 'kalam', 'malam'];
friends.unshift('jalal');

// TRUE FALSE -----INCLUDES
console.log(friends.includes('salam'))
console.log(friends.includes('jalal'))

if(friends.includes('kalam')){
    console.log('Tonight will be party')
}
else{
    console.log('Tonight, we will not eat.')
}