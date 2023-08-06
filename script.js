const text= document.querySelector('.sec_text');

            const textload=() =>{

                setTimeout(()=>{
                    text.textContent='MERNSTACK Developer.'
                },0);
                setTimeout(()=>{
                    text.textContent='Python Developer.'
                },5000);
                setTimeout(()=>{
                    text.textContent='Django Developer.'
                },10000);
                setTimeout(()=>{
                    text.textContent='Web Designer.'
                },15000);

            }

            textload();
            setInterval(textload,20000);

            var skill_btn = document.getElementById("skill_btn")
            var edu_btn = document.getElementById("edu_btn")
            var exp_btn = document.getElementById("exp_btn")
            var tool_btn = document.getElementById("tool_btn")
    
            var skill_cont = document.getElementById("skill_cont")
            var edu_cont = document.getElementById("edu_cont")
            var exp_cont = document.getElementById("exp_cont")
            var tool_cont = document.getElementById("tool_cont")
    
            function openskill() {
    
                skill_btn.classList.add("active_link")
                edu_btn.classList.remove("active_link")
                exp_btn.classList.remove("active_link")
                tool_btn.classList.remove("active_link")
    
                skill_cont.classList.add("active_tab")
                edu_cont.classList.remove("active_tab")
                exp_cont.classList.remove("active_tab")
                tool_cont.classList.remove("active_tab")
    
            }
            function openedu() {
    
                edu_btn.classList.add("active_link")
                skill_btn.classList.remove("active_link")
                exp_btn.classList.remove("active_link")
                tool_btn.classList.remove("active_link")
    
                skill_cont.classList.remove("active_tab")
                edu_cont.classList.add("active_tab")
                exp_cont.classList.remove("active_tab")
                tool_cont.classList.remove("active_tab")
    
            }
            function openexp() {
    
                exp_btn.classList.add("active_link")
                skill_btn.classList.remove("active_link")
                edu_btn.classList.remove("active_link")
                tool_btn.classList.remove("active_link")
    
                skill_cont.classList.remove("active_tab")
                edu_cont.classList.remove("active_tab")
                exp_cont.classList.add("active_tab")
                tool_cont.classList.remove("active_tab")
    
            }
            function opentool() {
    
                tool_btn.classList.add("active_link")
                exp_btn.classList.remove("active_link")
                skill_btn.classList.remove("active_link")
                edu_btn.classList.remove("active_link")
    
                skill_cont.classList.remove("active_tab")
                edu_cont.classList.remove("active_tab")
                exp_cont.classList.remove("active_tab")
                tool_cont.classList.add("active_tab")
    
            }





 

