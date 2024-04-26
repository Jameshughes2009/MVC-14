const blogLogout = async () => {
    const reponse = await fetch('/api/users/logout', {
        method: 'POST',
        headers: {'Content-Type': 'application.json'},
    });
    if (reponse.ok) {
        document.location.replace('/');
    } else {
        alert("ERROR Failed to Logout")
    }
};

const logoutButton = document.querySelector('#blog-logout');
if (logoutButton){
    logoutButton.addEventListener('click', blogLogout)
}