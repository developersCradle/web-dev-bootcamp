# Section 25: The Missing Piece: DOM Events
 
 The Missing Piece: DOM Events

# What I Learned

# Section 27: 

# What I Learned

- Call stack consist method what have been called
- [Call stack emultor](http://latentflip.com/loupe/?code=ZnVuY3Rpb24gbXVsdGlwbHkoeCx5KSB7CiAgICByZXR1cm4geCAqIHk7Cn0KCmZ1bmN0aW9uIHNxdWFyZSh4KSB7CiAgICByZXR1cm4gbXVsdGlwbHkoeCx4KTsKfQoKZnVuY3Rpb24gaXNSaWdodFRyaWFuZ2xlKGEsYixjKXsKICAgIHJldHVybiBzcXVhcmUoYSkgKyBzcXVhcmUoYikgPT09IHNxdWFyZShjKTsKfQoKaXNSaWdodFRyaWFuZ2xlKDMsNCw1KQ%3D%3D!!!)
- JS is **single threded**
    - Can run one codeline at the time
    - Browser does this threaading
    - Browser keeps track of time
- <img src="webApi.PNG" alt="alt text" width="800"/>
    - Browsers implements webAPI which js then calls
- [webAPIS single thread](http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coIlNlbmRpbmcgcmVxdWVzdCB0byBzZXJ2ZXIhIikKc2V0VGltZW91dChmdW5jdGlvbigpIHsKICAgIGNvbnNvbGUubG9nKCJIZXJlIGlzIHlvdXIgZGF0YSBmcm9tIHRoZSBzZXJ2ZXIuLi4iKQp9LCAzMDAwKQpjb25zb2xlLmxvZygiSSBBTSBBVCBUSEUgRU5EIE9GIFRIRSBGSUxFISIp!!!)

- This pattern is common to pass in callback what to do next after previous have been finished
```
const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay)
}

```

- Another common is pass successful or fail callback to callbacks, this is why **promises** were made
- <img src="CallbackHell.PNG" alt="alt text" width="800"/>
- This is common problem in JS
    - Promises tries to address this problem
- `promises` are new, not support in **IE**
    - Promise is promise something good or bad
- Callback and promise version
```

// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}
// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

```

- <img src="returningPromise.PNG" alt="alt text" width="600"/>

- Promises does not return callback, promise object
    - Promise can have three statuses **resolved**, **pending**, **rejected**

- <img src="promise.PNG" alt="alt text" width="600"/>

- We can attach callbacks to promise if it was `successful` or `rejected`
    - `.then` Gets ran when promise returns **resolved**
    - `.catch` Gets ran when promise returns **rejected**
```

fakeRequestPromise('yelp.com/api/coffee/page3')
.then(() => {
    console.log("IT WORKED!!!!!! (page3)")
    })
.catch(() => {
    console.log("OH NO, ERROR!!! (page3)")
    })

```

- One aspect of using promises is following manner
- Consept of chaining promises(**promise chaining**) needs one things
    - `return fakeRequestPromise('yelp.com/api/coffee/page2')` **return** promises inside `.then` callback
    - We can use one catch in the end for covering all cases

```

/ THE CLEANEST OPTION WITH THEN/CATCH
// RETURN A PROMISE FROM .THEN() CALLBACK SO WE CAN CHAIN!
fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data) => {
        console.log("IT WORKED!!!!!! (page1)")
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    })
    .then((data) => {
        console.log("IT WORKED!!!!!! (page2)")
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then((data) => {
        console.log("IT WORKED!!!!!! (page3)")
        console.log(data)
    })
    .catch((err) => {
        console.log("OH NO, A REQUEST FAILED!!!")
        console.log(err)
    })

```

- Promise can be resolved or rejected with values `data` inside `.then`

- Creating basic promise, parameters can be called whatever, but they represent `resolve` of this promise and `rejection` of this promise

```

    new Promise(resolve, reject) => {

    }

```
- Making our own Promise object


-  call `resolve()` when you want to turn your **Promise** object **resolve** status
-  call `reject()` when you want to turn your **Promise** object **reject** status

```

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => { 
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve('YOUR FAKE DATA HERE'); // CALL RESOLVE
            }
            reject('Request Error!'); //CALL REJECT
        }, 1000)
    })
}

fakeRequest('/dogs/1') // USING OUR PROMISE
    .then((data) => {
        console.log("DONE WITH REQUEST!")
        console.log('data is:', data)
    })
    .catch((err) => {
        console.log("OH NO!", err)
    })

```
- Upper code where using our own made `promise` with fakeRequest and defining what to do with the behaviour