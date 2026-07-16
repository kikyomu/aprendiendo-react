


const myPromise = new Promise<number>((resolve, reject) => {
    //Tarea asíncrona que queremos que suceda
    setTimeout(() => {
        //! Yo quiero mi dinero
        resolve(100);
        // reject('Mi amigo no volvió');
    }, 2000); // 2 segundos
})


myPromise.then((myMoney) => {
    console.log(`Tengo mi dinero ${myMoney}`);
})
    .catch(reason => {
        console.warn(reason);
    })
    .finally(() => {
        console.log('Pues a seguir con mi vida');
    });