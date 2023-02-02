for (let i = 1; i <= 100; i++) {

	const multi3 = i % 3;
    const multi5 = i % 5;
    const multi15 = i % 15;

if (multi3 === 0){
    console.log('Buzz')

}else console.log(i)

if (multi5 === 0){
    console.log('Fizz')
    
}else console.log(i)


if(multi15 === 0){
    console.log('BuzzFizz')

}else console.log(i)
}