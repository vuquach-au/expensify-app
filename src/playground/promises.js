const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Steven',
        //     age: 38
        // });
        reject ('Some thing went wrong');
    }, 5000)
});

console.log('before');

promise.then((data) => {
    console.log('1', data);
}).catch((error) => {
    console.log(error);
});



console.log('after');