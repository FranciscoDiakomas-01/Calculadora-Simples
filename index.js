window.onload = function () {
        let btns = document.querySelectorAll('button')
        btns.forEach((btn) => {
                btn.addEventListener('click', (e) => {
                        let res = document.querySelector('.res')
                        if (btn.classList.contains('number') || btn.classList.contains('sinal')) {
                                const mathError = document.getElementsByClassName("mathError")[0]
                                mathError.textContent = "" 
                                res.textContent += e.target.textContent
                                const igualbtn = document.querySelector('.igual')
                                igualbtn.addEventListener('click', () => {
                                                try {
                                                        res.textContent = eval(res.textContent)
                                        
                                                }
                                                catch (error) {
                                                        res.textContent = ""
                                                        const mathError = document.getElementsByClassName("mathError")[0]
                                                        mathError.textContent = "Erro Matématico"
                                                }
                                                
                                        })
                        } else if (e.target.textContent == 'Del') {
                                res.textContent = ''
                        }
                })
        })
}