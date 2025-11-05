import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div>
      <div id="parent">
        <Card img='https://plus.unsplash.com/premium_photo-1722848601360-53b9c3b606c5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9rZW1vbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600' h1='GooBat' />
        <Card img='https://images.unsplash.com/photo-1609372332255-611485350f25?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9rZW1vbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600' h1='pikachu' />
        <Card img='https://images.unsplash.com/photo-1640271443625-3276ed8f62b5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600' h1='Chalizad' />

      </div>
    </div>
  )
}

export default App
