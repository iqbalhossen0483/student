document.getElementById('add').addEventListener('click', function () {
    //get all input feild
    let profile = document.getElementById('profile');
    let name = document.getElementById('name');
    let roll = document.getElementById('roll');
    let id = document.getElementById('id');
    let department = document.getElementById('department');
    let address = document.getElementById('address');

    //create all element
    let parentDiv = document.createElement('div');
    parentDiv.classList.add('student');
    //student header
    let childDiv1 = document.createElement('div');
    childDiv1.classList.add('header');
    let img = document.createElement('img');
    img.src = profile.value;
    let h4 = document.createElement('h4');
    h4.innerText = name.value.toUpperCase();

    childDiv1.appendChild(img);
    childDiv1.appendChild(h4);
    //student body
    class Student {
        roll;
        id;
        department;
        address;
        constructor(roll, id, department, address) {
            this.roll = roll;
            this.id = id;
            this.department = department;
            this.address = address;
        }
    };
    let childDiv2 = document.createElement('div');
    childDiv2.classList.add('details');
    childDiv2.innerText = `Roll: ${roll.value}
    ID: ${id.value}
    Department: ${department.value}
    Address: ${address.value}`;

    //add student
    parentDiv.appendChild(childDiv1);
    parentDiv.appendChild(childDiv2);

    if (profile.value != '' && name.value != '' && roll.value != '' && id.value != '' && department.value != '' && address.value != '') {
        let container = document.getElementById('student-details');
        container.appendChild(parentDiv);
    }

    //clear all feild
    profile.value = '';
    name.value = '';
    roll.value = '';
    id.value = '';
    department.value = '';
    address.value = '';
});