import { motion } from "framer-motion"

const TransitionPage = ({ children }) => {
    return (
        // <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} >
        <motion.div
            initial={{ width: 0 }} animate={{ width: '100%' }} exit={{ x: window.innerWidth, transition: { duration: .1 } }}
        >
            {children}
        </motion.div>
    )
}

export default TransitionPage