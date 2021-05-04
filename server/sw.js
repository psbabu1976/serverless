self.addEventListener("install", e=> console.log(e));
self.addEventListener("push", e=>{
  console.log(e)
  self.registration.showNotification(e.data.text(), {});
})
