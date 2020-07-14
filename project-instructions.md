The application consists of two major screens:

Login Screen where the user enters their name and is logged into the chat rooms
Chat room screen consists of various components that manage the chat rooms

The component directory structure:

The App component is the parent component which loads all the other child components:

1. EnterChat: Works as the login component which takes the user name as the input.
2. MessageList: Loads all the messages for each of the chat rooms.
3. RoomDetails: Holds all the chat room information, like the chat room names and is loaded on the left 
   side panel of the chat screen.
4. RoomList: loads the chat rooms as list items.

The services directory structure:

1. MessageAPI: fetches the messages and uses roomID as the parameter.
2. RoomDetailsAPI: fetches the users and rooms based on the roomID.
3. RoomsAPI: Get the list of all the available chat rooms.

The app component also has the input for users to add more messages to the chat room
     
Functionality:

1.The app lets the user login via the EnterChat Component.
2. On the Chat screen the user can switch between the chat rooms by clicking on that particular
chat room. 
3. The rooms will switch, showing the current list of users in the chat room.
4. The user can enter chat messages that will be saved and shown in the chat room message list
with the user's name and their message.