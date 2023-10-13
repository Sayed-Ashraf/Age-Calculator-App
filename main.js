let day = document.getElementsByName('day')[0]
let month = document.getElementsByName('month')[0]
let year = document.getElementsByName('year')[0]

let dash_day = document.getElementById('dash-day')
let dash_month = document.getElementById('dash-month')
let dash_year = document.getElementById('dash-year')

let btn = document.getElementsByClassName('calc')[0]

let labelDay = document.getElementById('label-day')
let labelMonth = document.getElementById('label-month')
let labelYear = document.getElementById('label-year')

let wMsgDay = document.getElementById('wmsgday')  
let wMsgMonth = document.getElementById('wmsgmonth')  
let wMsgYear = document.getElementById('wmsgyear')  

window.onload =  () => {
    day.focus();
    day.oninput = () => {
        if(day.value.length === 2){
                day.blur();
                month.focus();
            }
}

    month.oninput = () => {
    if(month.value.length === 2){
        month.blur();
        year.focus();
    }
}
    year.oninput = () => {
    if(year.value.length === 4){
        year.blur()
    }
}
}



btn.onclick = function () {
    if(day.value.length == ""){
        wMsgDay.innerHTML = "This field is required"
        wMsgDay.style.display = "inline"
        day.style.cssText = 'border: 1px solid rgba(255, 0, 0, 0.768)'
        labelDay.style.cssText = 'color: rgba(255, 0, 0, 0.768);'
        setTimeout(()=>{
            day.style.cssText = 'border: 1px solid #f0f0f0;'
            labelDay.style.cssText = 'color: hsl(0, 1%, 44%);'
            wMsgDay.style.display = "none"
        }, 3000)
    }
    if(month.value.length == ""){
        wMsgMonth.innerHTML = "This field is required"
        wMsgMonth.style.display = "inline"
        month.style.cssText = 'border: 1px solid rgba(255, 0, 0, 0.768)'
        labelMonth.style.cssText = 'color: red;'
        setTimeout(()=>{
            month.style.cssText = 'border: 1px solid #f0f0f0;'
            labelMonth.style.cssText = 'color: hsl(0, 1%, 44%);'
            wMsgMonth.style.display = "none"
        }, 3000)
    }
    if(year.value.length == ""){
        wMsgYear.innerHTML = "This field is required"
        wMsgYear.style.display = "inline"
        year.style.cssText = 'border: 1px solid rgba(255, 0, 0, 0.768)'
        labelYear.style.cssText = 'color: red;'
        setTimeout(()=>{
            year.style.cssText = 'border: 1px solid #f0f0f0;'
            labelYear.style.cssText = 'color: hsl(0, 1%, 44%);'
            wMsgYear.style.display = "none"
        }, 3000)
    }
    if(day.value > 31){
        wMsgDay.style.display = "inline"
        day.value = ""
        day.focus
        day.style.cssText = 'border: 1px solid rgba(255, 0, 0, 0.768)'
        labelDay.style.cssText = 'color: red;'
        setTimeout(()=>{
            day.style.cssText = 'border: 1px solid #f0f0f0;'
            labelDay.style.cssText = 'color: hsl(0, 1%, 44%);'
            wMsgDay.style.display = "none"
        }, 3000)
    }
    if(month.value > 12){
        wMsgMonth.style.display = "inline"
        month.value = ""
        month.focus
        month.style.cssText = 'border: 1px solid rgba(255, 0, 0, 0.768)'
        labelMonth.style.cssText = 'color: red;'
        setTimeout(()=>{
            month.style.cssText = 'border: 1px solid #f0f0f0;'
            labelMonth.style.cssText = 'color: hsl(0, 1%, 44%);'
            wMsgMonth.style.display = "none"
        }, 3000)
    }
    if(year.value > 2023 || year.value < 1950){
        wMsgYear.style.display = "inline"
        year.value = ""
        year.focus
        year.style.cssText = 'border: 1px solid rgba(255, 0, 0, 0.768)'
        labelYear.style.cssText = 'color: red;'
        setTimeout(()=>{
            year.style.cssText = 'border: 1px solid #f0f0f0;'
            labelYear.style.cssText = 'color: hsl(0, 1%, 44%);'
            wMsgYear.style.display = "none"
        }, 3000)
        
    }
    
    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let date = new Date()
    let ageDay = date.getDate()
    let agemonth = 1 + date.getMonth()
    let ageYears = date.getFullYear()

    if(day.value > 0 && day.value < 31 && month.value > 0 && month.value <= 12 && year.value < 2023 && year.value > 1950){
        if (day.value > ageDay){
            ageDay = ageDay + months[agemonth - 1]
            agemonth = agemonth  - 1
        }
        if(month.value > agemonth){
            agemonth = agemonth + 12
            ageYears = ageYears - 1
        }
        
        const d = ageDay - day.value
        const m = agemonth - month.value
        const y = ageYears - year.value
        
        dash_day.textContent = d
        dash_month.textContent = m
        dash_year.textContent = y
        
    }
}
