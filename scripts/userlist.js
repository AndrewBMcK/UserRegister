// function that uses the array of users
function displayUsers(userArray) {

    for(var i = 0; i < userArray.length;  i++) {
        let user = userArray[i];
        tr=`
        <tr>
            <td>${user.inputEmail}</td>
            <td>${user.inputFirstname}</td>
            <td>${user.inputLastname}</td>
            <td>${user.inputAge}</td>
            <td>${user.inputGrade101}</td>
            <td>${user.inputGrade102}</td>
            <td>${user.inputGrade103}</td>
        </tr>
        `;
        $("#usersTable").append(tr);    
    }
}

function init() {
    let users = readUsers(); // getting from the store manager js page
    console.log(users);
    displayUsers(users); // call back the displayUsers function
}