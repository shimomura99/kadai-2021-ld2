setTimeout(
    () => {
        console.log("Hello!")
        setTimeout(
            () => {console.log("bye")}, 
            2000
        )
    
    }, 
    3000
)