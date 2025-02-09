if (document.getElementById('form')) {
    document.getElementById('form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Generate random ID
        const fo = Math.random().toString(36).substr(2, 9);
        
        // Get form values
        let form = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            confirmpassword: document.getElementById('confirmpassword')?.value || "",
            phone: document.getElementById('phone').value,
            age: document.getElementById('age')?.value || "",
        }

        let formdata = {
            name: name,
            email: email,
            password: password,
            confirmpassword: form.confirmpassword,
            phone: phone,
            age: form.age
        }


        // Get existing tasks or initialize empty array
        const existingTasks = JSON.parse(localStorage.getItem('formdata') || '[]');
        
        // Add new task
        existingTasks.push(form);
        
        // Save back to localStorage
        localStorage.setItem('formdata', JSON.stringify(formdata));
        console.log("Form data saved",formdata)
        
        // Reset form and show confirmation
        this.reset();
        alert('Task added successfully!');
    });
}
