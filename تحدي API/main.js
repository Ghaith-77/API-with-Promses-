// طريقة fetch

function users() {
    return new Promise((resolve, reject) => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
            })
            .then(users => {
                for (user of users) {
                    document.getElementById("ul-users").innerHTML += `
                    <li onclick = postsfunc(${user.id});clickfun(this) >
                        <h2>${user.name}</h2>
                        <p>${user.email}</p>
                    </li>
          `
                }
                resolve()
            }
            )
    })
}
users()
    .then(() => {
        postsfunc(1)
    })
function clickfun(el) {
    // ____________click system here
    let elSEs = document.getElementsByClassName("selected")
    for (els of elSEs) {
        els.classList.remove("selected")
    }
    el.classList.add("selected")
}
function postsfunc(userid) {
    // ______________________posts here
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userid}`)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
        })
        .then(posts => {
            document.getElementById("ul-posts").innerHTML = ``

            for (post of posts) {
                document.getElementById("ul-posts").innerHTML += `
                    <li>
                        <h3 class="h3hover">${post.title}</h3>
                        <p>${post.body}</p>
                    </li>
                    `
            }
        }
        )
}
    // function postsfunc__clickfun(userid, el) {
    //     // ____________click system here
    //     el.classList.remove("selected")
    //     el.classList.add("selected")
    //     // ______________________posts here
    //     request.open("GET", `https://jsonplaceholder.typicode.com/posts?userId=${userid}`)
    //     request.responseType = "json"
    //     request.send()
    //     request.onload = () => {
    //         if (request.status >= 200 && request.status <= 300) {
    //             let posts = request.response
    //             document.getElementById("ul-posts").innerHTML = ``

    //             for (post of posts) {
    //                 document.getElementById("ul-posts").innerHTML += `
    //                 <li>
    //                     <h3 class="h3hover">${post.title}</h3>
    //                     <p>${post.body}</p>
    //                 </li>
    //                 `
    //             }

    //         }
    //         else {
    //             alert("error")
    //         }

    //     }
    // }
// طريقة http requst
// let request = new XMLHttpRequest()
// request.open("GET", "https://jsonplaceholder.typicode.com/users")
// request.responseType = "json"
// request.send()
// request.onload = () => {
    // if (request.status >= 200 && request.status <= 300) {
    //     let users = request.response

    //     for (user of users) {
    //          document.getElementById("ul-users").innerHTML += `
    //             <li onclick = postsfunc__clickfun(${user.id},this) >
    //                 <h2>${user.name}</h2>
    //                 <p>${user.email}</p>
    //             </li>
    //         `
    //     }

    // }
    // else {
    //     alert("Error")
    // }
// }