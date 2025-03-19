self.addEventListener('notificationclick',event=>{
    const notification = event.notification
    const action = event.action
    if(action === 'close'){
        notification.close()
    }
    else{
    clients.openWindow('pages/page.html')
        notification.close()
}

})