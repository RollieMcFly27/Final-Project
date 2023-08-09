const print = () => {
    const resume = document.querySelector('#collecting')
    const myWindow = window.open('', '#collecting', 'height=400,width=600')
    
    myWindow.document.write(collecting.innerHTML)
    myWindow.document.close()
    myWindow.focus()
    myWindow.print()
    
  }
  
  const printBtn = document.querySelector('#print')
  
  printBtn.addEventListener('click', print)