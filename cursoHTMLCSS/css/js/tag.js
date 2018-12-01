const colors = {
    p: '#388ec',
    div: '1565c0',
    span: 'e53935'
}
document.querySelectorAll('.tag').forEach(box=>{
    const tagname = box.tagName.toLocaleLowerCase()
    box.style.borderColor = '#616161'

    if(!box.classList.contains('nolabel')){
        const label = document.createElement('label')
        label.style.backgroundColor = '#616161'
        label.innerHTML = tagname
        box.insertBefore(label,box.childNodes[0])
    }
})