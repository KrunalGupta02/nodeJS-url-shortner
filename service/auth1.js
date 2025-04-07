const sessionIdToUserMap = new Map();

function setUser(id, user) {
    sessionIdToUserMap.set(id, user);
}

function getUser(id) {
    return sessionIdToUserMap.get(id);
}

export { setUser, getUser };
    
// This code is a simple in-memory session management system that maps user IDs to user objects. It provides two functions: setUser to store a user object associated with a session ID, and getUser to retrieve the user object using the session ID. This can be useful for managing user sessions in a web application without relying on a database or external storage. However, it's important to note that this approach is not persistent and will lose data when the server restarts.
    
// In a production environment, you would typically use a more robust session management solution, such as a database or a dedicated session store (e.g., Redis) to handle user sessions and ensure data persistence.