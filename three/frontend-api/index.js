url = "https://reqres.in/api/users?page=1"
fetch(url)
.then(res => res.json())
.then(result => {
	console.log(result)
	output = "";
	for(let i = 0; i < result['data'].length; i++){
		output += `<tr>`
		output += `<td>${result['data'][i]['id']}</td>`
		output += `<td>${result['data'][i]['first_name']}</td>`
		output += `<td>${result['data'][i]['email']}</td>`
		output += `<td><img src="${result['data'][i]['avatar']}"/></td>`
		output += `</tr>`
	}
	document.getElementById("records").innerHTML = output;
})
