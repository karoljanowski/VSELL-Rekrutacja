import { motion, AnimatePresence } from 'motion/react'
import avatar from '../assets/card/avatar.png'
import verifiedIcon from '../assets/card/verificationIcon.png'
import menuIcon from '../assets/card/menuIcon.png'
import starIcon from '../assets/card/starIcon.png'

interface UserData {
    name: string
    description: string
    avatar: string
    points: number
    verified: boolean
}

interface UserCardProps {
    isReversed: boolean
    userData?: UserData
}

const DEFAULT_USER_DATA: UserData = {
    name: 'Anna Effective',
    description: 'Double your income with me!',
    avatar: avatar,
    points: 4881,
    verified: true
};

const UserCardComponent = ({isReversed, userData = DEFAULT_USER_DATA}: UserCardProps) => {
    return (
        <AnimatePresence mode='wait'>
            <motion.div 
                key={isReversed ? 'reversed' : 'normal'}
                className='bg-white rounded-lg px-4 py-3 shadow-md flex items-center gap-4'
                style={{
                    flexDirection: isReversed ? 'row-reverse' : 'row'
                }}
            >
                <AnimatedComponent>
                    <Avatar avatar={userData.avatar} points={userData.points} isReversed={isReversed} />
                </AnimatedComponent>
                <AnimatedComponent className='self-start'>
                    <Description name={userData.name} description={userData.description} verified={userData.verified} />
                </AnimatedComponent>
                <AnimatedComponent>
                    <MenuButton />
                </AnimatedComponent>
            </motion.div>
        </AnimatePresence>
    )
}

interface AnimatedComponentProps {
    children: React.ReactNode
    className?: string
}

const AnimatedComponent = ({children, className}: AnimatedComponentProps) => {
    return (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={className}
        >
            {children}
        </motion.div>
    )
}

interface AvatarProps {
    avatar: string
    points: number
    isReversed: boolean
}

const Avatar = ({avatar, points, isReversed}: AvatarProps) => {
    return (
        <div className='w-16 h-16 relative'>
            <img src={avatar} alt='avatar' className='w-full h-full object-cover rounded-full' />
            <div className={`absolute bottom-0 flex items-center ${isReversed ? 'left-0 flex-row-reverse -translate-x-8' : 'right-0 flex-row translate-x-8'}`}>
                <img src={starIcon} alt='points' className='w-6 h-6 border-2 border-white rounded-full' />
                <span className='text-xs font-bold bg-gradient-to-r from-[#688DD1] to-[#8CE8E0] bg-clip-text text-transparent translate-y-1.5'>{points}</span>
            </div>
        </div>
    )
}

interface DescriptionProps {
    name: string
    description: string
    verified: boolean
}

const Description = ({name, description, verified}: DescriptionProps) => {
    return (
        <div className='flex flex-col min-w-64 gap-px'>
            <div className="flex items-center gap-1">
                <p className='text-lg font-bold leading-tight'>{name}</p>
                {verified && <img src={verifiedIcon} className='w-5 h-5' alt='user verified' />}
            </div>
            <p className='leading-tight'>{description}</p>
        </div>
    )
}

const MenuButton = () => {
    return (
        <button onClick={() => {}} className='w-8 h-8'>
            <img src={menuIcon} className='w-full h-full' />
        </button>
    )
}

export default UserCardComponent;