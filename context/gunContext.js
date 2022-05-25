// import { createContext, useState, useReducer} from "react";
// import Gun from "gun";

// const gun = Gun(['https://coinhawk-marketcap-node.herokuapp.com/'])

// export const GunContext = createContext()

// const initalState = {messages:[]}

// const reducer = (state, action) => {
//     try {
//         if(action.type == 'clear') return { messages:[]}
//         if(action.type == 'add') {
//             return { messages: [...state.messages, action.data]}
//         }
//     } catch (error) {
//         console.error(error)
//     }
// }

// export const GunProvider = ({ children}) => {

//     const [state, dispatch] = useReducer(reducer, initalState)

//     const getMessages = (_name) => {
//         const messagesRef = gun.get(_name)

//         messagesRef.map().once(message => {
//             dispatch({
//                 type: 'add',
//                 data: {
//                     sender: message.sender,
//                     content: message.content,
//                     avatar: message.avatar,
//                     createdAt: message.createdAt,
//                     messageId: message.messageId,
//                     isBullish: message.isBullish,
//                 }
//             })
//         })
//     }
//     return (
//         <GunContext.Provider
//         value={{
//             gun,
//             getMessages,
//             state            
//         }}
//         >
//             {children}
//         </GunContext.Provider>
//     )
// }