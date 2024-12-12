import { useState } from 'react'
import Button from './components/Button'
import UserCardComponent from './components/UserCard'

function App() {
    const [isReversed, setIsReversed] = useState<boolean>(false)

    return (
        <div className='flex justify-center items-center min-h-screen p-4 bg-neutral-300'>
            <div className="flex flex-col items-center gap-10">
                <UserCardComponent isReversed={isReversed} />
                <Button onClick={() => setIsReversed(!isReversed)} text='Reverse card' />
            </div>
        </div>
    )
}   

export default App