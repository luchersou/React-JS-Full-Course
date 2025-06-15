import UserGreeting from './UserGreeting.jsx'

function App() {
  
    return(
        <>
            <UserGreeting isLoggedIn={true} username="Lucas"/>
            <UserGreeting isLoggedIn={true}/>
        </>
    );
}

export default App