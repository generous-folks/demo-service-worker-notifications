self.addEventListener('install', function(event) {
    console.log("---- installed ----")
  });

  self.addEventListener("fetch", (event) => {
    if(event.request.url.includes("/users")) {
      console.log("---- fetch ----", event)
    }
    
})