let innerItem =  document.getElementById('inner-item')
let skills = document.getElementsByName('skills')

let checkedSkills = []
;[...skills].forEach(skill =>{
    skill.addEventListener('change', function(e){
        if(e.target.checked){
            checkedSkills.push(e.target.value)
            showOutPuts(innerItem, checkedSkills)
        }else{
            let index = checkedSkills.indexOf(e.target.value)
            checkedSkills.splice(index, 1)
            showOutPuts(innerItem, checkedSkills)
        }
    })
})
function showOutPuts(inner, skills) {
    let result = ''
    skills.forEach((skill, index) =>{
        result += `(${index + 1}) ${skill} `
    })
    inner.innerHTML = result
}

// Disable Right Click Button
document.addEventListener('contextmenu', (e) => e.preventDefault())