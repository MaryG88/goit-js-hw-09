import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */let e={email:"",message:""};const a=document.querySelector(".feedback-form"),l=a.elements.email,m=a.elements.message,s="feedback-form-state";function o(){localStorage.setItem(s,JSON.stringify(e))}a.addEventListener("input",t=>{e[t.target.name]=t.target.value,o()});function r(){const t=localStorage.getItem(s);t&&(e=JSON.parse(t),l.value=e.email,m.value=e.message)}r();a.addEventListener("submit",t=>{if(t.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log("Form data:",e),localStorage.removeItem(s),e={email:"",message:""},a.reset()});
//# sourceMappingURL=2-form.js.map
